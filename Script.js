import { auth } from "./firebase-config.js";
import { 
    getAuth, 
    RecaptchaVerifier, 
    signInWithPhoneNumber, 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
    const sendEmailCodeBtn = document.getElementById("sendEmailCode");
    const sendPhoneCodeBtn = document.getElementById("sendPhoneCode");
    const signupForm = document.getElementById("signupForm");

    // تهيئة Recaptcha للهاتف
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sendPhoneCode', {
        'size': 'invisible'
    });

    sendPhoneCodeBtn.addEventListener("click", () => {
        const phone = document.getElementById("phone").value;
        if (!phone) {
            alert("يرجى إدخال رقم الهاتف!");
            return;
        }

        signInWithPhoneNumber(auth, phone, window.recaptchaVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                alert("تم إرسال كود التحقق إلى هاتفك!");
            })
            .catch((error) => {
                console.error("خطأ في إرسال الكود:", error);
                alert("حدث خطأ، تأكد من صحة الرقم.");
            });
    });

    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const emailCode = document.getElementById("emailCode").value;
        const phone = document.getElementById("phone").value;
        const phoneCode = document.getElementById("phoneCode").value;
        const gender = document.getElementById("gender").value;
        const nationality = document.getElementById("nationality").value;
        const termsAccepted = document.getElementById("terms").checked;

        if (!fullName || !email || !phone || !gender || !nationality || !termsAccepted) {
            alert("يرجى تعبئة جميع الحقول والموافقة على الإقرار!");
            return;
        }

        // التحقق من كود الهاتف
        window.confirmationResult.confirm(phoneCode)
            .then((result) => {
                alert("تم التحقق من الهاتف بنجاح!");
                // هنا يمكنك حفظ بيانات المستخدم في Firebase Firestore أو أي قاعدة بيانات أخرى
            })
            .catch((error) => {
                console.error("كود الهاتف غير صحيح:", error);
                alert("كود الهاتف غير صحيح!");
            });
    });
});
