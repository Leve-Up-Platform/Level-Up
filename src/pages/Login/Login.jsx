// src/pages/Login/Login.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { login, loginWithGoogle, user } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  // ✅ لو المستخدم داخل فعلاً → مرحبش بيه على Login روحه Dashboard
  // ده بيحل مشكلة إن بعد الـ Google Redirect يروح Dashboard أوتوماتيك
  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  // ── لوجن بـ Email ──────────────────────────────────
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      // navigate هيحصل أوتوماتيك من الـ useEffect فوق
    } catch (err) {
      if (
        err.code === "auth/invalid-credential" ||
        err.code === "auth/wrong-password"
      ) {
        setError("الإيميل أو كلمة المرور غلط");
      } else if (err.code === "auth/user-not-found") {
        setError("مفيش حساب بالإيميل ده");
      } else {
        setError("حصلت مشكلة، حاول تاني");
      }
    } finally {
      setLoading(false);
    }
  };

  // ── لوجن بـ Google ─────────────────────────────────
  // مش محتاج navigate هنا لأن loginWithGoogle بيعمل Redirect
  // وبعد ما يرجع → الـ useEffect فوق هيشوف إن user موجود ويروح Dashboard
  const handleGoogleLogin = async () => {
    setError("");
    try {
      await loginWithGoogle();
      // ✅ دلوقتي popup بترجع result فوراً
      // والـ useEffect في Login هيشوف user وينقله
    } catch (err) {
      // لو المستخدم أغلق الـ popup → مش error حقيقي
      if (err.code !== "auth/popup-closed-by-user") {
        setError("حصلت مشكلة في تسجيل الدخول بجوجل");
      }
    }
  };
  return (
    <div className="min-h-screen flex bg-background">

      {/* ══ الجزء الأيسر — الـ Form ══ */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-20">
        <div className="max-w-md mx-auto w-full">

          {/* Logo */}
          <div className="flex items-center gap-2 mb-10">
            <span className="text-2xl">🚀</span>
            <span className="text-xl font-extrabold tracking-tighter text-on-surface">
              Level Up
            </span>
          </div>

          <h1 className="text-4xl font-black text-on-surface mb-2">Welcome back</h1>
          <p className="text-on-surface-variant mb-8">Continue your ascent to mastery.</p>

          {/* رسالة الخطأ */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-4 py-3 mb-4 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs uppercase tracking-widest text-on-surface-variant mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                required
                className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary transition-all"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-on-surface-variant mb-2 block">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-container text-white font-bold py-3 rounded-2xl hover:bg-opacity-90 active:scale-95 transition-all disabled:opacity-50"
            >
              {loading ? "جاري الدخول..." : "Sign In"}
            </button>
          </form>

          {/* Google */}
          <div className="mt-6">
            <p className="text-center text-xs text-on-surface-variant my-4">
              OR CONTINUE WITH
            </p>
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 bg-surface-container border border-outline-variant/20 rounded-2xl py-3 text-sm font-semibold text-on-surface hover:bg-surface-container-high transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 01-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z"/>
                <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 009 18z"/>
                <path fill="#FBBC05" d="M3.97 10.72A5.4 5.4 0 013.68 9c0-.6.1-1.18.29-1.72V4.95H.96A9 9 0 000 9c0 1.45.35 2.83.96 4.05l3.01-2.33z"/>
                <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.47.89 11.43 0 9 0A9 9 0 00.96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z"/>
              </svg>
              Google
            </button>
          </div>

          <p className="text-center text-sm text-on-surface-variant mt-8">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-primary font-bold hover:underline"
            >
              Join the community
            </button>
          </p>
        </div>
      </div>

      {/* ══ الجزء الأيمن — Hero ══ */}
      <div className="hidden lg:flex w-1/2 bg-surface-container rounded-3xl m-4 flex-col justify-end p-12 relative overflow-hidden">
        <h2 className="text-5xl font-black leading-tight mb-4 text-on-surface relative z-10">
          Master your craft,<br />one level at a time.
        </h2>
        <div className="flex gap-8 mt-6 relative z-10">
          <div>
            <p className="text-3xl font-black text-primary">50k+</p>
            <p className="text-xs text-on-surface-variant uppercase tracking-widest">Active Climbers</p>
          </div>
          <div>
            <p className="text-3xl font-black text-primary">1.2k</p>
            <p className="text-xs text-on-surface-variant uppercase tracking-widest">Guided Paths</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
