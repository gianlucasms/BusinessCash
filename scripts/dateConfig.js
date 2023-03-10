import Mensagem from "./mensagem.js"
//Até a linha 6 deixa o input cep impossibilitado de inserir
const input = document.getElementById("inputCep");

input.addEventListener("input", function() {
  this.value = this.value.replace(/[^0-9]/g, '');
});

const dataNascimentoInput = document.getElementById("date");

dataNascimentoInput.addEventListener("change", function() {
  const dataNascimento = new Date(this.value);
  const dataAtual = new Date();
  const diferencaMilissegundos = Math.abs(dataAtual - dataNascimento);
  const idade = diferencaMilissegundos / 1000 / 60 / 60 / 24 / 365.25;

  if (idade < 18) {
    Mensagem("Você precisa ter mais de 18 anos para usar este serviço.", "erro");
    this.value = "";
  }
  else{
    Mensagem("", "limpar")
  }
});