//Registrar usuario

const form = document.getElementById('signin')
const userName = document.getElementById('exampleInputName1');
const userEmail = document.getElementById('exampleInputEmail1');
const userPass = document.getElementById('exampleInputPassword1');


    form.addEventListener('submit', function(event) {
        event.preventDefault();

    let user = Array(
        { 
            usuario: userName.value,
            correo: userEmail.value,
            clave: userPass.value
        } 
    );

    localStorage.setItem('users', JSON.stringify(user));

    //crear un inicio de sesión y redirecciona al index
    window.location.href = "./index.html";
        sessionStorage.setItem('logged', true);
        return true
    });
