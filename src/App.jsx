import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

import Dashboard from "./pages/Dashboard/Dashboard";
import Roadmap from "./pages/Roadmap/Roadmap";
import Curriculum from "./pages/Curriculum/Curriculum";
import CareerHub from "./pages/CareerHub/CareerHub";
import Profile from "./pages/Profile/Profile";
import Leaderboard from "./pages/Leaderboard/Leaderboard";

function App() {
  const [currentTab, setCurrentTab] = useState("dashboard");

  // دالة ذكية بتحدد إيه اللي هيتعرض في نص الشاشة بناءً على الزرار المضغوط
  const renderPage = () => {
    switch (currentTab) {
      case "dashboard":
        return <Dashboard />;
      case "roadmap":
        return <Roadmap />;
      case "curriculum":
        return <Curriculum />;
      case "career":
        return <CareerHub />;
      case "profile":
        return <Profile />;
      case "leaderboard":
        return <Leaderboard />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-on-surface flex transition-colors duration-200">
        <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />

        <div className="flex-1 flex flex-col pl-64">
          <Navbar />

          {/* هنا السحر كله! النتيجة بتتغير ديناميكياً بدون ما نغير الـ Layout */}
          <main className="p-8 pt-24 min-h-[calc(100vh-80px)]">
            {renderPage()}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
