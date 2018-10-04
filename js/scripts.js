function playAudio(audio) {
    document.getElementById(audio).play();
}

function pauseAudio(audio) {
    var controle = document.getElementById(audio);
    controle.pause();
    controle.currentTime = 0;
}

function validar() {
    var nome = document.getElementById("txtNome").value.trim();
    var senha = document.getElementById("txtSenha").value.trim();

    if (nome == '') {
        alert("Usuario Invalido")
        document.getElementById("txtNome").focus();
    } else if (senha == '') {
        alert("Senha Incorreta")
        document.getElementById("txtSenha").focus();
    }
}

function validarCadastro() {
    var nome = document.getElementById("txtNomeUsuario").value.trim();
    var email = document.getElementById("txtEmailUsuario").value.trim();
    var senha = document.getElementById("txtSenhaUsuario").value.trim();
    var confSenha = document.getElementById("txtConfSenhaUsuario").value.trim();

    if (nome == '') {
        alert("Por favor digite o nome de usuario!")
        document.getElementById("txtNomeUsuario").focus();
    } else if (email == '' || document.getElementById("txtEmailUsuario").value.indexOf('@') == -1 || document.getElementById("txtEmailUsuario").value.indexOf('.') == -1) {
        alert("Informe um Email valido")
        document.getElementById("txtEmailUsuario").focus();

    } else if (senha == '') {
        alert("Digite uma senha")
        document.getElementById("txtSenhaUsuario").focus();
    } else if (confSenha == '') {
        alert("Repita sua senha")
        document.getElementById("txtConfSenhaUsuario").focus();
    } else if (confSenha != senha) {
        alert("As senhas nao coincidem")
    }
        document.getElementById("nomeValidado").innerHTML = nome;
        document.getElementById("emailValidado").innerHTML = email;
        document.getElementById("senhaValidada").innerHTML = senha;

        g_cadastro.nome = nome;
        g_cadastro.idade = email;
        g_cadastro.estadoCivil = senha;
        g_cadastro.sexo = confSenha;

}
function enviarCadastro() {
    localStorage.setItem("nome", g_cadastro.nome);
    localStorage.setItem("email", g_cadastro.email);
    localStorage.setItem("senha", g_cadastro.senha);

    alert("Cadastro Efetuado com Sucesso! Clique em <OK> para CONFIRMAR!!!")

    window.open("infDadosCadastro.html", "_self");

}

function carregarDados() {
    document.getElementById("nome").innerHTML = localStorage.getItem("nome");
    document.getElementById("email").innerHTML = localStorage.getItem("email");
    document.getElementById("senha").innerHTML = localStorage.getItem("senha");
    document.getElementById("confSenha").innerHTML = localStorage.getItem("confSenha");
}
