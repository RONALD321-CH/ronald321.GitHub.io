document.addEventListener("DOMContentLoaded", () => {
    const $submit = document.getElementById("submit"),
          $password = document.getElementById("password"),
          $username = document.getElementById("username"),
          $visible = document.getElementById("visible");

    // Usuario y contraseña válidos predefinidos
    const validUsername = "unaj";
    const validPassword = "1234";

    // Mostrar/ocultar contraseña según el checkbox
    $visible.addEventListener("change", () => {
        if ($visible.checked) {
            $password.type = "text";
        } else {
            $password.type = "password";
        }
    });

    $submit.addEventListener("click", (e) => {
        // Comprobamos si los campos de usuario y contraseña coinciden con los valores correctos
        if ($username.value === validUsername && $password.value === validPassword) {
            e.preventDefault();  // Evitar el comportamiento por defecto del formulario
            window.location.href = "home.html";  // Redirigir si las credenciales son correctas
        } else {
            e.preventDefault();  // Evitar que el formulario envíe datos
            alert("Usuario o contraseña incorrectos.");  // Mensaje de error si las credenciales no coinciden
        }
    });
});

