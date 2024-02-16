//Captura todos os itens
var clientes = document.querySelectorAll(".cliente");

//Passa por cada item, calculando o valor total
for (var count=0; count < clientes.length; count++){
    //Captura a quantidade encomendada
    var qtde = clientes[count].querySelector(".info-qtd").textContent;

    //Captura o valor unitario do produto
    var unitario = clientes[count].querySelector(".info-valor").textContent;

    //Calcula o valor total
    //clientes[count].querySelector(".info-total").textContent = qtde * unitario;
    clientes[count].querySelector(".info-total").textContent = calculaTotal(qtde,unitario);
}

//Função para calcular o valor total
function calculaTotal(qtde,unitario){
    var total = 0;
    total=qtde*unitario;

    return total;
}