var botaoBuscar = document.querySelector("#buscar-encomendas");

botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.rawg.io/api/games?key=5d43498fe2f74583af72ecf91d767a9f");
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;

        // Convert the string into a JavaScript object
        var encomendas = JSON.parse(resposta);

        // Insert the fetched encomendas into the table
        encomendas.results.forEach(function(encomenda){
            var novaEncomendaTR = montaTR(encomenda);
            tabela.appendChild(novaEncomendaTR);
        });
    });
    xhr.send();
});
