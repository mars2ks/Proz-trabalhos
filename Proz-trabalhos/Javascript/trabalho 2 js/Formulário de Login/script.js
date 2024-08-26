document.getElementById('texto')
.addEventListener('click', function(e) {
    e.preventDefault();

    let login = document.getElementById('input-login').value;
    let senha = document.getElementById('input-login01').value;


if (login == "admin" && senha == "1234"){
    alert("Login bem-sucedido!");
}
else if (login != "admin" || senha != "1234"){
    alert("Nome de usuário ou senha incorretos");
}
document.getElementById('input-login').value = "";
document.getElementById('input-login01').value = "";
})