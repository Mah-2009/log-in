function show_password() {
    var password = document.getElementById("pas");
    var toggleIcon = document.getElementById("togglePassword");

    if (password.type === "password") {
        password.type = "text";
        toggleIcon.classList.add('fa-eye');
        toggleIcon.classList.remove('fa-eye-slash');
    } else {
        password.type = "password";
        toggleIcon.classList.add('fa-eye-slash');
        toggleIcon.classList.remove('fa-eye');
    }
}
