import CourseSidebar from "./components/CourseSidebar";
import VideoPlayer from "./components/VideoPlayer";
import LessonInfo from "./components/LessonInfo";
import LessonMetadataPanel from "./components/LessonMetadataPanel";
import {
  course,
  modules,
  currentLesson,
  lessonMetadata,
  resources,
  learnerProgress,
} from "./curriculumData";

export default function Curriculum() {
  // TODO: لما الباك إند يجهز، الفنكشن دي تبعت request للـ API
  // عشان ترجع الطالب للدرس اللي قبل كده (مثلاً عبر lesson.previousLessonId)
  const handlePreviousLesson = () => {
    console.log("TODO: navigate to previous lesson");
  };

  // TODO: لما الباك إند يجهز، الفنكشن دي تبعت PATCH/POST request
  // عشان تسجل إن الطالب خلص الدرس الحالي (lesson.id) وتحدث تقدمه
  const handleMarkComplete = () => {
    console.log("TODO: mark lesson as complete via API");
  };

  return (
    <div className="flex gap-6 items-start">
      {/* العمود الشمال: قائمة الكورس والـ Modules */}
      <CourseSidebar course={course} modules={modules} />

      {/* العمود النص: الفيديو + معلومات الدرس */}
      <div className="flex-1 min-w-0">
        <VideoPlayer src={currentLesson.videoSrc} poster={currentLesson.videoPoster} />
        <LessonInfo
          lesson={currentLesson}
          onPreviousLesson={handlePreviousLesson}
          onMarkComplete={handleMarkComplete}
        />
      </div>

      {/* العمود اليمين: الميتاداتا والموارد وكارت الـ XP */}
      <LessonMetadataPanel
        metadata={lessonMetadata}
        resources={resources}
        learnerProgress={learnerProgress}
      />
    </div>
  );
}