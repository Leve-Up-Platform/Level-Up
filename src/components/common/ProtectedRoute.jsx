// ============================================
// src/components/common/ProtectedRoute.jsx
//
// بيحمي الصفحات اللي محتاجة لوجن
// لو مش داخل → يرجعه لصفحة اللوجن أوتوماتيك
// ============================================

import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  // مش داخل → ابعته لصفحة اللوجن
  if (!user) return <Navigate to="/login" replace />;

  // داخل → اعرض الصفحة المطلوبة
  return children;
};

export default ProtectedRoute;
