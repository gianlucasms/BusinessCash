import {
    Mensagem
} from "./mensagem.js";

function businessCashRequestLogin() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (login === "gian" && senha === "gian") {
        Mensagem("Logado!", "sucesso");
        setTimeout(function () {
            window.location.href = "telaConsulta.html";
        }, 1500);
    } else {
        Mensagem("Credenciais invalidas!", "erro");
        setTimeout(function () {
            Mensagem("", "limpar");
        }, 3000);
    }
}

document.getElementById("buttonRequest").addEventListener("click", businessCashRequestLogin);