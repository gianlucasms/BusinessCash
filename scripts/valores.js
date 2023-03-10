const valorInput = document.getElementById("valor");
const entradaCheckbox = document.getElementById("entrada");
const saidaCheckbox = document.getElementById("saida");
const entradaParagrafo = document.getElementById("entrada_valor");
const saidaParagrafo = document.getElementById("saida_valor");
const totalParagrafo = document.getElementById("total_valor");
let entradas = [];
let saidas = [];

valorInput.addEventListener("input", formatarMoedaInput);
entradaCheckbox.addEventListener("click", atualizarCheckbox);
saidaCheckbox.addEventListener("click", atualizarCheckbox);
document.getElementById("adicionar").addEventListener("click", adicionarValor);

function adicionarValor() {
  const valor = Number(valorInput.value.replace(/[^\d.-]/g, ""));
  if (!valor) return;
  if (entradaCheckbox.checked) {
    entradas.push(valor);
    entradaParagrafo.innerText = formatarMoeda(calcularEntradas());
  } else if (saidaCheckbox.checked) {
    saidas.push(valor);
    saidaParagrafo.innerText = formatarMoeda(calcularSaidas());
  }
  valorInput.value = "";
  totalParagrafo.innerText = formatarMoeda(calcularTotal());
}

function atualizarCheckbox() {
  if (this === entradaCheckbox && entradaCheckbox.checked) {
    saidaCheckbox.checked = false;
  } else if (this === saidaCheckbox && saidaCheckbox.checked) {
    entradaCheckbox.checked = false;
  }
}

function calcularEntradas() {
  return entradas.reduce((total, entrada) => total + entrada, 0);
}

function calcularSaidas() {
  return saidas.reduce((total, saida) => total + saida, 0);
}

function calcularTotal() {
  const entradasTotal = calcularEntradas();
  const saidasTotal = calcularSaidas();
  return entradasTotal - saidasTotal;
}

function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function formatarMoedaInput(valor) {
  const valorFormatado = formatarMoeda(Number(valor) / 100);
  return valorFormatado;
}

valorInput.addEventListener("input", function() {
  valorInput.value = formatarMoedaInput(valorInput.value.replace(/\D/g, ""));
});
