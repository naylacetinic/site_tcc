function validar()  {
    var nome = form1.nome.value;
    var email = foorm1.email.value;
    var senha = form1.senha.value;

    if (nome == "") {
    alert ('Preencha o campo com seu nome')
    form1.nome.focus();
    return false
    }
    if (email == "") {
    alert ('Preencha o campo com seu email')
    form1.email.focus();
    return false
    }
    if (senha == "") {
    alert ('Preencha o campo com sua senha')
    form1.senha.focus();
    return false
    }
    if (nome.length <5) {
        alert ('Digite seu nome completo')
        return false
    }
}