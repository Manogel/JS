function clicou(){
//alert('Voce clicou');
document.getElementById('alert').innerHTML = ' <div class="alert alert-success" role="alert">Voce foi cadastrado!</div>  '


}




var inputElement = document.querySelector('#app select');
var buttonElement = document.querySelector("#app button");
var listElement = document.querySelector("#app ul");
var lista = [
    'Fazer café',
    'Estudar',
    'Acessar o google'
];

function render(){
    listElement.innerHTML = '';

    for (elemento of lista){
        var taglista = document.createElement('li');
        var elementoTexto = document.createTextNode(elemento);

        taglista.appendChild(elementoTexto);
        listElement.appendChild(taglista);
    }
}

render();

function addTodos(){
    var textoInput = inputElement.value;
    lista.push(textoInput);
    inputElement.value = '';
    render();
}

//buttonElement.onclick = addTodos();