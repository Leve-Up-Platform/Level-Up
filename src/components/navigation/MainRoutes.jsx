import { Routes, Navigate, Route } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";

// Pages
import Dashboard from "../../pages/Dashboard/Dashboard";
import Roadmap from "../../pages/Roadmap/Roadmap";
import Curriculum from "../../pages/Curriculum/Curriculum";
import CareerHub from "../../pages/CareerHub/CareerHub";
import Profile from "../../pages/Profile/Profile";
import Leaderboard from "../../pages/Leaderboard/Leaderboard";

const MainRoutes = () => {
  return (
    <div
      className="min-h-screen bg-background text-on-surface 
                    flex transition-colors duration-200"
    >
      <Sidebar />
      <div className="flex-1 flex flex-col pl-64">
        <Navbar />
        <main className="p-8 pt-24 min-h-[calc(100vh-80px)]">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/career" element={<CareerHub />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default MainRoutes;
