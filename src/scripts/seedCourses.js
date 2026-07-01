// ============================================
// src/scripts/seedCourses.js
//
// بيرفع الكورسات على Firestore أوتوماتيك
// شغّله مرة واحدة بس من زرار مؤقت
// ============================================

import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const coursesData = [
    {
        title: "Frontend Development",
        description: "Master modern web development from scratch to professional level.",
        thumbnail: "https://i.ytimg.com/vi/qz0aGYrrlhU/maxresdefault.jpg",
        modules: [
            {
                id: "module-1",
                title: "Module 1: HTML Fundamentals",
                lessons: [
                    {
                        id: "lesson-1",
                        title: "Introduction to HTML",
                        youtubeId: "qz0aGYrrlhU",
                        duration: "12:00",
                        description: "Learn the basics of HTML structure and semantic elements. We'll cover headings, paragraphs, links, images, and the overall document structure.",
                        keyTakeaway: "HTML is the skeleton of every webpage. Master it and you master the foundation of the web.",
                        metadata: {
                            estimatedTime: "12 Minutes",
                            prerequisites: "None",
                            difficulty: "Beginner",
                        },
                        resources: [
                            { id: "r1", label: "HTML Cheat Sheet.pdf", type: "pdf", href: "#" },
                            { id: "r2", label: "MDN HTML Docs", type: "link", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                        ],
                    },
                    {
                        id: "lesson-2",
                        title: "CSS Fundamentals",
                        youtubeId: "1Rs2ND1ryYc",
                        duration: "20:00",
                        description: "Style your web pages with CSS. Learn selectors, properties, the box model, and how browsers render styles.",
                        keyTakeaway: "CSS transforms plain HTML into beautiful, responsive designs.",
                        metadata: {
                            estimatedTime: "20 Minutes",
                            prerequisites: "Introduction to HTML",
                            difficulty: "Beginner",
                        },
                        resources: [
                            { id: "r1", label: "CSS Cheat Sheet.pdf", type: "pdf", href: "#" },
                        ],
                    },
                    {
                        id: "lesson-3",
                        title: "Responsive Design with Flexbox",
                        youtubeId: "fYq5PXgSsbE",
                        duration: "15:00",
                        description: "Learn how to build responsive layouts using CSS Flexbox. Make your websites look great on any screen size.",
                        keyTakeaway: "Flexbox makes complex layouts simple. One line of CSS can change everything.",
                        metadata: {
                            estimatedTime: "15 Minutes",
                            prerequisites: "CSS Fundamentals",
                            difficulty: "Beginner",
                        },
                        resources: [],
                    },
                ],
            },
            {
                id: "module-2",
                title: "Module 2: JavaScript Essentials",
                lessons: [
                    {
                        id: "lesson-4",
                        title: "JavaScript Basics",
                        youtubeId: "W6NZfCO5SIk",
                        duration: "48:00",
                        description: "Core JavaScript concepts including variables, data types, functions, loops, and DOM manipulation.",
                        keyTakeaway: "JavaScript brings your web pages to life. Without it, the web would just be static documents.",
                        metadata: {
                            estimatedTime: "48 Minutes",
                            prerequisites: "HTML & CSS",
                            difficulty: "Intermediate",
                        },
                        resources: [
                            { id: "r1", label: "JS Cheat Sheet.pdf", type: "pdf", href: "#" },
                            { id: "r2", label: "MDN JavaScript Docs", type: "link", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                        ],
                    },
                    {
                        id: "lesson-5",
                        title: "ES6+ Modern JavaScript",
                        youtubeId: "nZ1DMMsyVVI",
                        duration: "30:00",
                        description: "Level up with modern JavaScript features: arrow functions, destructuring, spread operator, async/await, and modules.",
                        keyTakeaway: "Modern JS makes your code cleaner, shorter, and easier to read.",
                        metadata: {
                            estimatedTime: "30 Minutes",
                            prerequisites: "JavaScript Basics",
                            difficulty: "Intermediate",
                        },
                        resources: [],
                    },
                ],
            },
            {
                id: "module-3",
                title: "Module 3: React Framework",
                lessons: [
                    {
                        id: "lesson-6",
                        title: "React Introduction",
                        youtubeId: "Ke90Tje7VS0",
                        duration: "35:00",
                        description: "Get started with React. Learn about components, JSX, props, and state management with useState.",
                        keyTakeaway: "React changes how you think about UIs — from pages to components.",
                        metadata: {
                            estimatedTime: "35 Minutes",
                            prerequisites: "ES6+ JavaScript",
                            difficulty: "Intermediate",
                        },
                        resources: [
                            { id: "r1", label: "React Docs", type: "link", href: "https://react.dev" },
                        ],
                    },
                    {
                        id: "lesson-7",
                        title: "React Hooks Deep Dive",
                        youtubeId: "TNhaISOUy6Q",
                        duration: "25:00",
                        description: "Master React Hooks: useState, useEffect, useContext, useMemo, and useRef with real-world examples.",
                        keyTakeaway: "Hooks are the superpower of React — they let you use state and side effects anywhere.",
                        metadata: {
                            estimatedTime: "25 Minutes",
                            prerequisites: "React Introduction",
                            difficulty: "Advanced",
                        },
                        resources: [],
                    },
                ],
            },
        ],
    },
];

// ── الدالة الرئيسية ──────────────────────────────────────
export const seedCourses = async () => {
    try {
        console.log("🚀 بدأنا رفع الكورسات...");

        for (const course of coursesData) {
            const docRef = await addDoc(collection(db, "courses"), course);
            console.log(`✅ اتضاف الكورس: ${course.title}`);
            console.log(`📋 الـ Course ID: ${docRef.id}`);
            console.log(`👆 انسخ الـ ID ده وحطه في Curriculum.jsx`);
        }

        console.log("🎉 خلصنا! الكورسات اترفعت على Firestore");
    } catch (error) {
        console.error("❌ حصلت مشكلة:", error);
    }
};