// ============================================
// src/services/coursesService.js
//
// كل العمليات بتاعة الكورسات مع Firestore هنا
// أي صفحة محتاجة كورسات تـ import من هنا
// ============================================

import {
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "./firebase";

// ── 1. جيب كل الكورسات ─────────────────────────────────
// بتستخدمه في صفحة اختيار الكورس
export const getAllCourses = async () => {
  try {
    const snapshot = await getDocs(collection(db, "courses"));
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("❌ Error fetching courses:", error);
    return [];
  }
};

// ── 2. جيب كورس واحد بالـ ID ───────────────────────────
// بتستخدمه في صفحة الـ Curriculum
export const getCourseById = async (courseId) => {
  try {
    const docRef  = doc(db, "courses", courseId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  } catch (error) {
    console.error("❌ Error fetching course:", error);
    return null;
  }
};

// ── 3. جيب التقدم بتاع المستخدم في كورس معين ──────────
// progress بيتحفظ في users/{userId}/progress/{courseId}
export const getUserCourseProgress = async (userId, courseId) => {
  try {
    const docRef  = doc(db, "users", userId, "progress", courseId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data(); // { completedLessons: ["lesson-1", "lesson-2"] }
    }
    return { completedLessons: [] }; // مفيش progress → ابدأ من الصفر
  } catch (error) {
    console.error("❌ Error fetching progress:", error);
    return { completedLessons: [] };
  }
};

// ── 4. احفظ درس اتخلص ──────────────────────────────────
// بيضيف الـ lessonId لـ completedLessons
export const markLessonComplete = async (userId, courseId, lessonId) => {
  try {
    const progressRef = doc(db, "users", userId, "progress", courseId);

    await updateDoc(progressRef, {
      completedLessons: arrayUnion(lessonId), // بيضيف من غير تكرار
      lastUpdated: new Date(),
    }).catch(async () => {
      // لو الـ document مش موجود → اعمله من الأول
      const { setDoc } = await import("firebase/firestore");
      await setDoc(progressRef, {
        completedLessons: [lessonId],
        courseId,
        lastUpdated: new Date(),
      });
    });

    console.log("✅ Lesson marked complete:", lessonId);
  } catch (error) {
    console.error("❌ Error marking lesson complete:", error);
  }
};
