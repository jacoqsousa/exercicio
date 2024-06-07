//Captura todos os itens
/*var clientes = document.querySelectorAll(".cliente");

//Passa por cada item, calculando o valor total
for (var count=0; count < clientes.length; count++){
    //Captura a quantidade encomendada
    var qtde = clientes[count].querySelector(".info-qtd").textContent;

    //Captura o valor unitario do produto
    var unitario = clientes[count].querySelector(".info-valor").textContent;

    //Valida a quantidade
    if(qtde<1 || isNaN(qtde)){
        //Quantidade NOK, avisa o usuario
        clientes[count].querySelector(".info-qtd").textContent = "QTDE INVALIDA!";
        clientes[count].querySelector(".info-qtd").style.color='red';
    }else{
        //Quantidade OK, prossegue
        //Calcula o valor total
        clientes[count].querySelector(".info-total").textContent = calculaTotal(qtde,unitario);  
    }

    if(unitario<1 || isNaN(unitario)){
        clientes[count].querySelector(".info-valor").textContent = "FOR FREE";
        clientes[count].style.background='red';
    }else{
        
    }
    
}*/

/*function validarQuantidade(qtdeElement) {
    var qtde = qtdeElement.textContent;

    if (qtde < 1 || isNaN(qtde)) {
        // Quantidade inválida, fornece feedback ao usuário
        qtdeElement.textContent = "QTDE INVÁLIDA!";
        qtdeElement.style.color = 'red';
        return false;
    }

    // Quantidade válida
    return true;
}
*/

/*function validarValor(valorElement, clienteElement) {
    var valor = valorElement.textContent;

    if (valor < 1 || isNaN(valor)) {
        // Valor inválido, fornece feedback ao usuário
        valorElement.textContent = "FOR FREE";
        clienteElement.style.background = 'red';
        return false;
    }

    // Valor válido
    return true;
}
*/

/*function validarDadosCliente(cliente) {
    // Captura a quantidade encomendada
    var qtdeElement = cliente.querySelector(".info-qtd");
    var qtdeValida = validarQuantidade(qtdeElement);

    // Captura o valor unitário do produto
    var valorElement = cliente.querySelector(".info-valor");
    var valorValido = validarValor(valorElement, cliente);

    // Retorna true se ambos quantidade e valor forem válidos
    return qtdeValida && valorValido;
}


var clientes = document.querySelectorAll(".cliente");

for (var count = 0; count < clientes.length; count++) {
    if (validarDadosCliente(clientes[count])) {
        // Dados válidos, pode prosseguir com outras operações se necessário
    } else {
        // Dados inválidos, tratamento adicional ou feedback ao usuário
    }
}


//Função para calcular o valor total
function calculaTotal(qtde,unitario){
    var total = 0;
    total=qtde*unitario;

    return total;
}
*/

var botaoAdicionar = document.querySelector(".adicionar-encomenda");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let metacritic = parseFloat(document.getElementById("metacritic").value);
    let playtime = parseFloat(document.getElementById("playtime").value);
    let released = document.getElementById("released").value;

    var compra = { name: name, metacritic: metacritic, playtime: playtime, released: released };
    var erros = validaCompra(compra);
    if (erros.length > 0) {
        exibeMensagensErro(erros);
        return;
    }

    // Limpa a UL de erros
    document.querySelector("#mensagens-erro").innerHTML = "";

    // Adiciona a nova encomenda na tabela
    var tabela = document.querySelector("#tabela-encomendas");
    var novaEncomendaTR = montaTR(compra); 
    tabela.appendChild(novaEncomendaTR);
});

// Função para montar a linha de encomenda na tabela
function montaTR(encomenda) {
    // Cria os elementos da linha da tabela
    var encomendaTR = document.createElement("tr");

    // Adiciona uma classe à nova linha
    encomendaTR.classList.add("nova-encomenda");

    var nomeTD = document.createElement("td");
    nomeTD.textContent = encomenda.name;

    var metacriticTD = document.createElement("td");
    metacriticTD.textContent = encomenda.metacritic;

    var playtimeTD = document.createElement("td");
    playtimeTD.textContent = encomenda.playtime;

    var releasedTD = document.createElement("td");
    releasedTD.textContent = encomenda.released;


    // Adiciona os dados na linha da tabela
    encomendaTR.appendChild(nomeTD);
    encomendaTR.appendChild(metacriticTD);
    encomendaTR.appendChild(playtimeTD);
    encomendaTR.appendChild(releasedTD); 

    return encomendaTR;
}

// Função para validar os dados da compra
function validaCompra(compra){
    var erros = [];

    if (compra.name.trim() === "") {
        erros.push("Insira um nome válido!");
    }
    if (isNaN(compra.playtime) || compra.playtime <= 0 || compra.metacritic > 100) {
        erros.push("Playtime inválido!");
    }
    if (isNaN(compra.metacritic) || compra.metacritic <= 0 || compra.metacritic > 100) {
        erros.push("Avaliação inválida!");
    }
    if (compra.released.trim() === "") {
        erros.push("Data inválida!");
    }

    return erros;
}

// Função para exibir mensagens de erro
function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    // Limpa a UL para exibir os erros
    ul.innerHTML = "";

    erros.forEach(function(msg){
        var li = document.createElement("li");
        li.textContent = msg;
        ul.appendChild(li);
    });
}
