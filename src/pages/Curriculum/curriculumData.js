// ============================================
// curriculumData.js
// كل الـ Data بتاعة صفحة الـ Curriculum هنا
// (Static دلوقتي، هيتم ربطها بـ API بعدين)
// ============================================

export const course = {
    title: "Data Structures",
    progress: 65, // نسبة التقدم في الكورس بالكامل
};

export const modules = [
    {
        id: "module-1",
        title: "Module 1: Fundamentals",
        defaultOpen: true,
        lessons: [
            {
                id: "lesson-1",
                title: "Introduction to Memory",
                duration: "12:00",
                status: "completed", // completed | active | locked
            },
            {
                id: "lesson-2",
                title: "Array Structures",
                duration: "24:00",
                status: "active",
            },
            {
                id: "lesson-3",
                title: "Linked Lists Basics",
                duration: "18:00",
                status: "locked",
            },
        ],
    },
    {
        id: "module-2",
        title: "Module 2: Linear Types",
        defaultOpen: false,
        lessons: [
            {
                id: "lesson-4",
                title: "Stacks & Queues",
                duration: "20:00",
                status: "locked",
            },
            {
                id: "lesson-5",
                title: "Doubly Linked Lists",
                duration: "16:00",
                status: "locked",
            },
        ],
    },
    {
        id: "module-3",
        title: "Module 3: Non-Linear",
        defaultOpen: false,
        lessons: [
            {
                id: "lesson-6",
                title: "Trees & Binary Trees",
                duration: "28:00",
                status: "locked",
            },
            {
                id: "lesson-7",
                title: "Graphs Introduction",
                duration: "22:00",
                status: "locked",
            },
        ],
    },
];

// بيانات الدرس الحالي المعروض في النص
export const currentLesson = {
    status: "In Progress",
    moduleInfo: "Lesson 2 • Module 1",
    title: "Array Structures & Continuous Memory Allocation",
    // الوصف بقى array من بارجرافات بدل نص واحد طويل
    // (في الصورة فيه بارجراف قبل الـ Key Takeaway وبارجراف بعده)
    descriptionParagraphs: [
        "Arrays are the most fundamental data structure in computing. In this lesson, we explore how they occupy continuous memory blocks and why this allows for O(1) access time.",
        "We will dive into the mathematical relationship between the base address, offset, and element size. Beyond simple indexing, we'll examine dynamic arrays and how memory management systems handle resizing.",
    ],
    keyTakeaway:
        "The efficiency of an array comes from its simplicity. Because it's a fixed-size block of contiguous memory, the computer knows exactly where every element is without searching.",
    videoSrc: "/videos/array-structures-lesson.mp4",
    // صورة الغلاف (poster) اللي بتبان خلف زرار الـ play قبل ما الفيديو يتشغل
    videoPoster: "/videos/array-structures-poster.jpg",
};

// كارت الـ Metadata في أقصى الشمال (الوقت، المتطلبات، الصعوبة)
export const lessonMetadata = {
    estimatedTime: "24 Minutes",
    prerequisites: "CS101: Intro",
    difficulty: "Intermediate",
};

// روابط الموارد (PDF, أدوات، كود...)
export const resources = [
    {
        id: "resource-1",
        label: "Memory_Map.pdf",
        type: "pdf",
        href: "/resources/memory-map.pdf",
    },
    {
        id: "resource-2",
        label: "Visualization Tool",
        type: "link",
        href: "https://example.com/visualization-tool",
    },
    {
        id: "resource-3",
        label: "Starter Code",
        type: "code",
        href: "/resources/starter-code.zip",
    },
];

// كارت الـ XP / Level اللي تحت الـ Resources
export const learnerProgress = {
    level: 12,
    levelLabel: "EXPERTISE",
    // نسبة اكتمال الدائرة (0-100) - شكلها متعلقة بمستوى الخبرة الحالي
    progressPercent: 72,
    pathName: "Data Architect Path",
    xpToNextLevel: 450,
    nextLevel: 13,
};