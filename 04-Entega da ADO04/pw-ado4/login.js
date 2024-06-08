document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    let clientes = [];
    let usuarioEncontrado = null;

    // Carrega os usuários do localStorage
    const usuariosStorage = localStorage.getItem('clientes');
    if (usuariosStorage) {
        clientes = JSON.parse(usuariosStorage);
    }


    for (let index = 0; index < clientes.length; index++) {

        if (clientes[index].email === email && clientes[index].senha === senha) {
            usuarioEncontrado = clientes[index];
            break;
        }
    }



    if (usuarioEncontrado) {

        const loginCliente = {
            email: usuarioEncontrado.email,
            nome: usuarioEncontrado.nome,
            urlAvatar: usuarioEncontrado.avatar,
        };

        localStorage.setItem('LoginCliente', JSON.stringify(loginCliente));

        alert('Login realizado com sucesso!');
    } else {
        alert('voce nao e nosso cliente, faca seu cadastro');
    }
    window.location.href = 'lojaVirtual.html';
});
