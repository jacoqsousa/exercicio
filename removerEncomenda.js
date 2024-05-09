//  Ações Diretamente nas linhas da Tabela
// var encomendas = document.querySelectorAll(".cliente");

// encomendas.forEach(function(linha){
//     linha.addEventListener("dblclick",function(){
//         this.remove();
//     });
// });

// Ações na Tabela
var tabela = document.querySelector('table');

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500)
});