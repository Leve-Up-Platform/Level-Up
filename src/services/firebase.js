// ============================================
// src/services/firebase.js
//
// ده الملف اللي بيشغل Firebase في مشروعك
// بدل الـ firebaseConfig بالقيم اللي نسختها من الـ Console
// ============================================

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ⚠️ غيّر القيم دي بالقيم بتاعتك من Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyBb0UQ6vWmErV0lH-GPbizCqx47zAhPWZ4",
    authDomain: "level-up-2d256.firebaseapp.com",
    projectId: "level-up-2d256",
    storageBucket: "level-up-2d256.firebasestorage.app",
    messagingSenderId: "158923036173",
    appId: "1:158923036173:web:e064b250a09b4962132744",
    measurementId: "G-XT1Z3PG9T1"
};
// تشغيل Firebase
const app = initializeApp(firebaseConfig);

// الخدمات اللي هنستخدمها في المشروع كله
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;