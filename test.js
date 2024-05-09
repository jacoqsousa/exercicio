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

var items = document.querySelectorAll(".cliente");

items.forEach(function(item) {
    var qtdeElement = item.querySelector(".info-qtd");
    var qtde = parseInt(qtdeElement.textContent);
    var unitario = parseFloat(item.querySelector(".info-valor").textContent);

    
    if (!validarQuantidade(qtdeElement)) {
        return; 
    }


    var total = calculaTotal(qtde, unitario);
    item.querySelector(".info-total").textContent = formataEmValorMonetario(total);
    item.querySelector(".info-valor").textContent = formataEmValorMonetario(unitario);
    qtdeElement.textContent = qtde; 
});

function calculaTotal(qtde, unitario) {
    var total = qtde * unitario;
    return total;
}

function formataEmValorMonetario(valor) {
    if (!isNaN(valor)) {
        var valorMonetario = valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
        return valorMonetario;
    } else {
        return "Valor Inválido!";
    }
}

function validarQuantidade(qtdeElement) {
    var qtde = parseInt(qtdeElement.textContent);

    if (qtde < 1 || isNaN(qtde)) {
        qtdeElement.textContent = "QTDE INVÁLIDA!";
        qtdeElement.style.color = 'red';
        return false;
    }

    // Quantity is valid
    return true;
}

var botaoAdicionar = document.querySelector(".adicionar-encomenda");


botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    nome = document.getElementById("nomecliente").value
    produto = document.getElementById("produtos").value
    quantidade = parseFloat(document.getElementById("quanti").value)
    valor = parseFloat(document.getElementById("Vunitario").value)

    var compra = { nome: nome, quantidade: quantidade, valor: valor, produto : produto };
    var erros = validaCompra(compra);
    if (erros.length > 0) {
        
        exibeMensagensErro(erros);
        return; 
    }

    total = calculaTotal(quantidade, valor)
    

    tabela = document.querySelector(".tabela")
    linha = document.createElement("tr")
    coluna_1 = document.createElement("td")
    coluna_2 = document.createElement("td")
    coluna_3 = document.createElement("td")
    coluna_4 = document.createElement("td")
    coluna_5 = document.createElement("td")

    coluna_1.textContent = nome
    coluna_2.textContent = produto
    coluna_3.textContent = quantidade
    coluna_4.textContent = formataEmValorMonetario(valor)
    coluna_5.textContent = formataEmValorMonetario(total)

    tabela.appendChild(linha)
    linha.appendChild(coluna_1)
    linha.appendChild(coluna_2)
    linha.appendChild(coluna_3)
    linha.appendChild(coluna_4)
    linha.appendChild(coluna_5)

    //Limpa a UL de erros
    document.querySelector("#mensagens-erro").innerHTML="";
});

 function validaCompra(compra){
     var erros = []

    if(compra.nome==""){
        erros.push("Insira um nome válido!")
    }
    if(isNaN(compra.quantidade)){
        erros.push("Quantidade inválida!")
    }
    if(isNaN(compra.valor)){
        erros.push("Insira um valor!")
    }
    if(compra.produto =="Selecione"){
        erros.push("Selecione um produto!")
    }

    return erros;
}

//Função para exibir os erros de preenchimento do formulário
function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    //Limpa a UL para exibir os erros
    ul.innerHTML="";
  

    erros.forEach(function(msg){
        var li = document.createElement("li");
        li.textContent = msg;
        ul.appendChild(li);
    })

}

