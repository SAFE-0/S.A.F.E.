document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let emailCode = document.getElementById("emailCode").value;
    let phone = document.getElementById("phone").value;
    let phoneCode = document.getElementById("phoneCode").value;
    let gender = document.getElementById("gender").value;
    let nationality = document.getElementById("nationality").value;
    let termsAccepted = document.getElementById("terms").checked;

    if (!termsAccepted) {
        alert("يجب الموافقة على الإقرار.");
        return;
    }

    alert("تم التسجيل بنجاح!");
});
