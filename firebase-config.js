// استيراد مكتبة Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// تكوين Firebase باستخدام البيانات الخاصة بك
const firebaseConfig = {
    apiKey: "AIzaSyCcxorEgUgnocy0vlJolVEtUkz-oyyWbLg",
    authDomain: "forms-v.firebaseapp.com",
    projectId: "forms-v",
    storageBucket: "forms-v.firebasestorage.app",
    messagingSenderId: "55307283635",
    appId: "1:55307283635:web:f88d8f3387c928830ad4c6"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// تصدير الكائنات لاستخدامها في باقي الملفات
export { app, auth, db };
