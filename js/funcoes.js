var g_dadosPessoais = {
    "nome": "",
    "idade": 0,
    "estadoCivil": "",
    "sexo": "",
    "nossoSite": ""
}

function validarFormulario() {
    var nome = document.getElementById("txtNome").value.trim();
    var idade = document.getElementById("txtIdade").value;
    var estadoCivil = document.getElementById("selEstadoCivil").value;
    var sexo = document.getElementsByName('rdSexo');
    var nossoSite = document.getElementsByName('cbNossoSite');
    var sugestoes = document.getElementById("txtSugestoes").value.trim();

    var sexoCheck = "";
    var nossoSiteCheck = new Array();

    var i = 0;
    var j = 0;

    // Value 
    for (i; i < sexo.length; i++) {
        if (sexo[i].checked) {
            sexoCheck = document.getElementById("sexo" + (i + 1)).value;
        }
    }
    for (j; j < nossoSite.length; j++) {
        if (nossoSite[j].checked) {
            nossoSiteCheck.push(document.getElementById("siteOpcao" + (j + 1)).value);
        }
    }

    // Validação
    if (nome == "")
        return alert("Nome em branco. Favor preencher!")
    if ((idade < 1) || (idade > 130))
        return alert("Idade inválida. Favor Informar um número dentre 1 a 130!")
    if (estadoCivil == "selecione")
        return alert("Favor selecione o Estado Cívil!");
    if (sexoCheck == "")
        return alert("Sexo Inválido! Favor selecione o Sexo!");
    if (nossoSiteCheck.length == 0)
        return alert("Selecione uma opção de como você conheceu o site!")
    if (sugestoes == "")
        return alert("O Campo sugestões está em branco! Favor preencher!")


    document.getElementById("boxConferirInfo").className += "visivel";
    document.getElementById("nomeValidado").innerHTML = nome;
    document.getElementById("idadeValidada").innerHTML = idade;
    document.getElementById("estadoCivilValidado").innerHTML = estadoCivil;
    document.getElementById("sexoValidado").innerHTML = sexoCheck;
    document.getElementById("nossoSiteValidado").innerHTML = nossoSiteCheck.join(', ');
    document.getElementById("sugestoesValidado").innerHTML = sugestoes;

    g_dadosPessoais.nome = nome;
    g_dadosPessoais.idade = idade;
    g_dadosPessoais.estadoCivil = estadoCivil;
    g_dadosPessoais.sexo = sexoCheck;
    g_dadosPessoais.nossoSite = nossoSiteCheck;
    g_dadosPessoais.sugestoes = sugestoes;

}

function enviarDadosPessoais() {
    localStorage.setItem("nome", g_dadosPessoais.nome);
    localStorage.setItem("idade", g_dadosPessoais.idade);
    localStorage.setItem("estadoCivil", g_dadosPessoais.estadoCivil);
    localStorage.setItem("sexo", g_dadosPessoais.sexo);
    localStorage.setItem("nossoSite", g_dadosPessoais.nossoSite);
    localStorage.setItem("sugestoes", g_dadosPessoais.sugestoes);

    alert("Dados gravados com sucesso! Clique em <OK> para ver os dados!!!")

    window.open("verDados.html", "_self");

}

function carregarDados() {
    document.getElementById("nomePessoa").innerHTML = localStorage.getItem("nome");
    document.getElementById("idadePessoa").innerHTML = localStorage.getItem("idade");
    document.getElementById("estadoCivil").innerHTML = localStorage.getItem("estadoCivil");
    document.getElementById("sexo").innerHTML = localStorage.getItem("sexo");
    document.getElementById("nossoSite").innerHTML = localStorage.getItem("nossoSite");
    document.getElementById("sugestoes").innerHTML = localStorage.getItem("sugestoes");
}