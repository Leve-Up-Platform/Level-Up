import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import MainLayout from "./components/navigation/MainRoutes";
import Login from "./pages/Login/Login";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* صفحة اللوجن لوحدها بدون Sidebar */}
          <Route path="/" element={<Login />} />

          {/* باقي الصفحات فيها Layout */}
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;
