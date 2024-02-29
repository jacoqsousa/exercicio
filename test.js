//Captura todos os itens
var clientes = document.querySelectorAll(".cliente");

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
    
}

//Função para calcular o valor total
function calculaTotal(qtde,unitario){
    var total = 0;
    total=qtde*unitario;

    return total;
}