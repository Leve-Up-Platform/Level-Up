// ============================================
// src/pages/Curriculum/Curriculum.jsx
//
// متصل بـ Firestore — بيجيب كورس حقيقي
// ومتصل بـ Auth — بيعرف مين المستخدم
// ============================================

import { useState, useEffect, useMemo } from "react";
import { useAuth }              from "../../context/AuthContext";
import { getCourseById, getUserCourseProgress, markLessonComplete }
  from "../../services/coursesService";

import CourseSidebar       from "./components/CourseSidebar";
import VideoPlayer         from "./components/VideoPlayer";
import LessonInfo          from "./components/LessonInfo";
import LessonMetadataPanel from "./components/LessonMetadataPanel";

// ✅ غيّر الـ ID ده بالـ ID الحقيقي من Firestore Console// السطر ده في Curriculum.jsx
const COURSE_ID = "YJVxux5gGUExBKf7Tpi0"; // ← حطيناه!

export default function Curriculum() {
  const { user } = useAuth(); // المستخدم الحالي

  // ── State ──────────────────────────────────────────────
  const [course, setCourse]             = useState(null);
  const [completedLessons, setCompleted] = useState([]); // ["lesson-1", "lesson-2"]
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState(null);

  // ── جيب الكورس وتقدم المستخدم من Firestore ───────────
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // جيب الكورس
        const courseData = await getCourseById(COURSE_ID);
        if (!courseData) {
          setError("الكورس مش موجود");
          return;
        }
        setCourse(courseData);

        // جيب تقدم المستخدم
        if (user) {
          const progress = await getUserCourseProgress(user.uid, COURSE_ID);
          setCompleted(progress.completedLessons || []);
        }

        // حدد أول درس يظهر (أول درس غير مكتمل)
        const allLessons = courseData.modules?.flatMap((m) => m.lessons) || [];
        const firstIncomplete = allLessons.find(
          (l) => !completedLessons.includes(l.id)
        );
        setSelectedLessonId(firstIncomplete?.id || allLessons[0]?.id);

      } catch (err) {
        setError("حصلت مشكلة في تحميل الكورس");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  // ── كل الـ lessons في قايمة واحدة ──────────────────────
  const allLessons = useMemo(
    () => course?.modules?.flatMap((m) => m.lessons) || [],
    [course]
  );

  // ── الدرس الحالي ────────────────────────────────────────
  const currentLesson = useMemo(
    () => allLessons.find((l) => l.id === selectedLessonId) || null,
    [allLessons, selectedLessonId]
  );

  // ── الـ Progress بالـ % ─────────────────────────────────
  const courseProgress = useMemo(() => {
    if (!allLessons.length) return 0;
    return Math.round((completedLessons.length / allLessons.length) * 100);
  }, [completedLessons, allLessons]);

  // ── الـ modules مع حالة كل lesson ──────────────────────
  const modulesWithStatus = useMemo(() => {
    if (!course?.modules) return [];
    return course.modules.map((mod) => ({
      ...mod,
      lessons: mod.lessons.map((lesson, index) => {
        const isCompleted = completedLessons.includes(lesson.id);
        const prevCompleted = index === 0 || completedLessons.includes(mod.lessons[index - 1]?.id);
        return {
          ...lesson,
          status: isCompleted ? "completed" : prevCompleted ? "active" : "locked",
        };
      }),
    }));
  }, [course, completedLessons]);

  // ── لما يضغط على Lesson ────────────────────────────────
  const handleSelectLesson = (lessonId) => {
    const lesson = allLessons.find((l) => l.id === lessonId);
    // مسموح تضغط على completed أو active بس مش locked
    const status = completedLessons.includes(lessonId)
      ? "completed"
      : lessonId === selectedLessonId
      ? "active"
      : "locked";
    if (status === "locked") return;
    setSelectedLessonId(lessonId);
  };

  // ── Mark as Complete ────────────────────────────────────
  const handleMarkComplete = async () => {
    if (!currentLesson || completedLessons.includes(currentLesson.id)) return;

    // حدّث الـ UI فوراً (Optimistic Update)
    setCompleted((prev) => [...prev, currentLesson.id]);

    // احفظ في Firestore
    if (user) {
      await markLessonComplete(user.uid, COURSE_ID, currentLesson.id);
    }

    // روح للدرس الجاي أوتوماتيك
    const currentIndex = allLessons.findIndex((l) => l.id === selectedLessonId);
    const nextLesson   = allLessons[currentIndex + 1];
    if (nextLesson) setSelectedLessonId(nextLesson.id);
  };

  // ── Previous Lesson ─────────────────────────────────────
  const handlePreviousLesson = () => {
    const currentIndex = allLessons.findIndex((l) => l.id === selectedLessonId);
    const prevLesson   = allLessons[currentIndex - 1];
    if (prevLesson) setSelectedLessonId(prevLesson.id);
  };

  // ── Loading State ───────────────────────────────────────
  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-on-surface-variant text-sm">جاري تحميل الكورس...</p>
        </div>
      </div>
    );
  }

  // ── Error State ─────────────────────────────────────────
  if (error) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <p className="text-red-400 text-lg font-bold mb-2">❌ {error}</p>
          <p className="text-on-surface-variant text-sm">
            تأكد إن الـ Course ID صح في الكود
          </p>
        </div>
      </div>
    );
  }

  if (!currentLesson) return null;

  // ── Main UI ─────────────────────────────────────────────
  return (
    <div className="flex gap-6 items-start">

      {/* Sidebar */}
      <CourseSidebar
        course={{ title: course.title, progress: courseProgress }}
        modules={modulesWithStatus}
        selectedLessonId={selectedLessonId}
        onSelectLesson={handleSelectLesson}
      />

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* ✅ فيديو يوتيوب حقيقي */}
        <VideoPlayer youtubeId={currentLesson.youtubeId} />
        <LessonInfo
          lesson={currentLesson}
          onPreviousLesson={handlePreviousLesson}
          onMarkComplete={handleMarkComplete}
        />
      </div>

      {/* Metadata Panel */}
      <LessonMetadataPanel
        metadata={currentLesson.metadata}
        resources={currentLesson.resources || []}
      />

    </div>
  );
}
