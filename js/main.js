// Definimos los datos correctos de acceso
const correctUsername = "admin@admin";
const correctPassword = "password123";

// Función para verificar los datos de acceso
function verifyLogin(username, password) {
    return username === correctUsername && password === correctPassword;
}

// Manejo del evento de envío del formulario
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores ingresados por el usuario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar los datos de acceso
    if (verifyLogin(username, password)) {
        alert("Acceso permitido!");
        // Redirigir o realizar alguna acción adicional aquí
        //insertar codigo que navegue HREF JS
        
    } else {
        document.getElementById('errorMsg').innerText = "Invalid username or password.";

    }

});


