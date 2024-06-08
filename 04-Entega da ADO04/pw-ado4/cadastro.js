document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var radios = document.getElementsByName('genero');
    let a="";
    let urlAvatar="";

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            a = radios[i].value
        }
    }

    if (a == "masculino") {
        urlAvatar = "imgs/jovemM.png"
    } else { 
        urlAvatar= "imgs/jovemF.png" 
    }

    let cliente = {
        nome: nome,
        email: email,
        avatar: urlAvatar,
        senha: senha,
    };

    // Recuperar o array de usuários do Local Storage
    const usuariosStorage = localStorage.getItem('clientes');
    let clientes = usuariosStorage ? JSON.parse(usuariosStorage) : [];

    // Adicionar o novo usuário ao array
    clientes.push(cliente);

    // Salvar o array modificado no Local Storage
    localStorage.setItem('clientes', JSON.stringify(clientes));

    alert('Cadastro realizado com sucesso!');
    // ir para login
    window.location.href = 'login.html';
});