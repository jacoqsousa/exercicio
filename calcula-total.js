// Altera o título da tabela
var titulo = document.querySelector(".title");
titulo.textContent = "Lista de Encomendas";

// Captura os dados de todos os clientes
var clientes = document.querySelectorAll(".cliente");

for (var i = 0; i < clientes.length; i++) {
    /*================================================================
        ROTINA DE CÁLCULO DO VALOR TOTAL POR ENCOMENDA
    ==================================================================*/
    
    // Captura a QUANTIDADE encomendada por cada cliente
    var qtde = parseFloat(clientes[i].querySelector(".info-qtd").textContent);

    // Captura o VALOR UNITÁRIO de cada encomenda
    var unitario = parseFloat(clientes[i].querySelector(".info-valor").textContent);

    // Verifica se a QUANTIDADE recebida é válida
    if (!validaQtde(qtde)) {
        clientes[i].querySelector(".info-total").textContent = "Quantidade inválida!";
        // Colore a fonte dessa linha na cor vermelha
        clientes[i].style.color = "red";
    } else {
        // Verifica se o VALOR UNITÁRIO é válido
        if (!validaUnitario(unitario)) {
            clientes[i].querySelector(".info-total").textContent = "Valor unitário é inválido!";
            // Colore o fundo dessa linha na cor light coral
            clientes[i].style.backgroundColor = "lightcoral";
        } else {
            // Formata o VALOR UNITÁRIO
            clientes[i].querySelector(".info-valor").textContent = formataValor(unitario);

            // Calcula o VALOR TOTAL e exibe na tabela
            clientes[i].querySelector(".info-total").textContent = calculaTotal(qtde, unitario);
        }
    }
}

// Formatação de valor
function formataValor(valor) {
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

// Função para calcular o VALOR TOTAL
function calculaTotal(qtd, unitario) {
    var total = qtd * unitario;
    return formataValor(total);
}

// Função para validar a quantidade
function validaQtde(qtd) {
    return !isNaN(qtd) && qtd > 0;
}

// Função para validar o valor unitário
function validaUnitario(unitario) {
    return !isNaN(unitario) && unitario > 0;
}
