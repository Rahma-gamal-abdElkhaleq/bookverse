import { useState, useEffect, useContext } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import HellowContext from "../component/Context";

export function useFavorites() {
  const { user } = useContext(HellowContext);
  const [favorites, setFavorites] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // تحميل الـ favorites أول ما الصفحة تفتح أو أول ما اليوزر يتغير (تسجيل دخول/خروج)
  useEffect(() => {
    let ignore = false;

    const load = async () => {
      setLoaded(false);

      if (user) {
        try {
          const ref = doc(db, "favorites", user.uid);
          const snap = await getDoc(ref);
          if (!ignore) {
            setFavorites(snap.exists() ? snap.data().books || [] : []);
          }
        } catch (error) {
          console.error("Error loading favorites:", error);
          if (!ignore) setFavorites([]);
        }
      } else {
        const saved = localStorage.getItem("favorites");
        if (!ignore) setFavorites(saved ? JSON.parse(saved) : []);
      }

      if (!ignore) setLoaded(true);
    };

    load();

    return () => {
      ignore = true;
    };
  }, [user]);

  // حفظ الـ favorites كل ما تتغير (بعد ما التحميل الأول يخلص)
  useEffect(() => {
    if (!loaded) return;

    const save = async () => {
      if (user) {
        try {
          const ref = doc(db, "favorites", user.uid);
          await setDoc(ref, { books: favorites });
        } catch (error) {
          console.error("Error saving favorites:", error);
        }
      } else {
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    };

    save();
  }, [favorites, user, loaded]);

  return [favorites, setFavorites];
}