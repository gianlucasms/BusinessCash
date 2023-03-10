function consultaEndereco(){
    let cep = document.getElementById('inputCep').value;

    if(cep.length !==8){
        alert('CEP invalido!');
        return;
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarDados(data)
        })
        
    });
}

function mostrarDados(dados){
    let resultado = document.getElementById('result')
    let resultado2 = document.getElementById('result2')
    let resultado3 = document.getElementById('result3')
    resultado.innerHTML = dados.logradouro;
    resultado2.innerHTML = dados.bairro;
    resultado3.innerHTML = dados.localidade;
}