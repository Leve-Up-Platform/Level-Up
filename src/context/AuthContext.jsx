// src/context/AuthContext.jsx

import { createContext, useState, useEffect, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup, // ← رجّعناها
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../services/firebase";

export const AuthContext = createContext();
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

// ⬆️ لو الـ warning بيزعجك حط useAuth في ملف منفصل
// بس مش ضروري دلوقتي

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const register = async (name, email, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName: name });
    await setDoc(doc(db, "users", result.user.uid), {
      name,
      email,
      points: 0,
      level: 1,
      rank: "Beginner Scholar",
      avatar: "",
      createdAt: new Date(),
    });
    return result;
  };

  const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    // ✅ popup بدل redirect — بيشتغل على localhost
    const result = await signInWithPopup(auth, provider);

    // احفظ بياناته لو أول مرة
    const userDocRef = doc(db, "users", result.user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      await setDoc(userDocRef, {
        name: result.user.displayName || "",
        email: result.user.email,
        points: 0,
        level: 1,
        rank: "Beginner Scholar",
        avatar: result.user.photoURL || "",
        createdAt: new Date(),
      });
    }

    return result;
  };

  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, register, login, loginWithGoogle, logout }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
