export function Mensagem (mensagem, tipo) {
    
    var msg = document.getElementById("mensagem");
    if (tipo == "sucesso") {
        msg.innerHTML = mensagem;
        msg.style.backgroundColor = "green";
        msg.style.display = "block";
    } else if (tipo == "erro") {
        msg.innerHTML = mensagem;
        msg.style.backgroundColor = "red";
        msg.style.display = "block";
    } else if (tipo == "alerta") {
        msg.innerHTML = mensagem;
        msg.style.backgroundColor = "yellow";
        msg.style.display = "block";
    } else if (tipo = "limpar") {
        msg.style.display = "none";
    } else {
        msg.innerHTML = "Tipo de mensagem inválida. Insira: sucesso, erro ou alerta.";
        msg.style.backgroundColor = "blue";
        msg.style.display = "block";
    }
}
export default Mensagem;





