//Nueva cuenta
  

if (!window.location.href.endsWith('newAccount.html')
&& !sessionStorage.getItem('logged')) {
window.location.href = "newAccount.html";
}

const headDiv = document.getElementById('usuario-name');

let nameUser = JSON.parse(localStorage.getItem('users'));


if(nameUser != null){
    headDiv.innerHTML = nameUser[0].usuario;
}