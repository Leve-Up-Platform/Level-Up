import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import MainLayout from "./components/navigation/MainRoutes";
import Login from "./pages/Login/Login";
import LandingPage from "./pages/Landing/LandingPage";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* صفحة اللوجن لوحدها بدون Sidebar */}
          <Route path="/login" element={<Login />} />

          {/* باقي الصفحات فيها Layout */}
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
