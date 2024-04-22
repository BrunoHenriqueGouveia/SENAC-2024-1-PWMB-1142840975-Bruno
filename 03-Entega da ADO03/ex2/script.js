
let numeros = []

function add() {
    var select = document.getElementById("select");
    var option = document.createElement("option");
    var textinput = document.getElementById("input");
    var num = Number(textinput.value);

    console.log(num);

    if (num > 100 || num < 1) {
        alert(`Deve ser de 1 a 100`);
    } else {
        numeros.push(num);

        option.text = "valor " + textinput.value + " adicionado";
        select.add(option);


    }
}


function finalizar() {
    if (select.length > 0) {
        var pqtd = document.getElementById('qtd');
        var pmaior = document.getElementById('maior');
        var pmenor = document.getElementById('menor');
        var psoma = document.getElementById('soma');
        var pmedia = document.getElementById('media');


        const totalElementos = numeros.length;
        const maiorValor = Math.max(...numeros);
        const menorValor = Math.min(...numeros);
        const somaValores = numeros.reduce((acc, curr) => acc + curr, 0);
        const mediaAritmetica = somaValores / totalElementos;

        pqtd.innerHTML =
            "Número de elementos cadastrados: " + totalElementos;
        pmaior.innerHTML = "Maior valor informado: " + maiorValor;
        pmenor.innerHTML = "Menor valor informado: " + menorValor;
        psoma.innerHTML = "Soma de todos os valores informados: " + somaValores;
        pmedia.innerHTML = "Média aritmética dos valores: " + mediaAritmetica;


    }
    else {
        alert(`Adicione valores antes de finalizar`);
    }
}