
function verificar() {

    var anoNascimentoInput = document.getElementById('Anodenascimento')
    var radios = document.getElementsByName('genero')
    var resultado = document.getElementById('verificado')
    var img = document.getElementById('imagem')
    var a, vdd = false
    var anoNascimento = Number(anoNascimentoInput.value)

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            a = radios[i].value
            vdd = true
        }
    }

    // ano atual
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    idade = anoAtual - anoNascimento

    if (idade > 0 && idade < 124 && vdd == true) {

        // criança
        if (idade < 11) {
            if (a == "masculino") {
                Text = "O genero: " + a + ", com " + idade + " anos de idade"
                img.src = "img/criancaM.png"
                img.style.display = "block"
            } else {
                Text = "O genero: " + a + ", com " + idade + " anos de idade"
                img.src = "img/criancaF.png"
                img.style.display = "block"
            }

        }
        // jovem
        else if (idade < 26) {
            if (a == "masculino") {
                Text = "O genero: " + a + ", com " + idade + " anos de idade"
                img.src = "img/jovemM.png"
                img.style.display = "block"
            } else {
                Text = "O genero: " + a + ", com " + idade + " anos de idade"
                img.src = "img/jovemF.png"
                img.style.display = "block"
            }


        }
        // adulto
        else if (idade < 61) {

            if (a == "masculino") {
                Text = "O genero: " + a + ", com " + idade + " anos de idade"
                img.src = "img/adultoM.png"
                img.style.display = "block"
            } else {
                Text = "O genero: " + a + ", com " + idade + " anos de idade"
                img.src = "img/adultaF.png"
                img.style.display = "block"
            }

        }
        //idoso
        else {
            if (a == "masculino") {
                Text = "O genero: " + a + ", com " + idade + " anos de idade "
                img.src = "img/idosoM.png"
                img.style.display = "block"
            } else {
                Text = "O genero: " + a + ", com " + idade + " anos de idade"
                img.src = "img/idosaF.png"
                img.style.display = "block"
            }
        }

        resultado.innerHTML = Text
    } else {

        alert(`Deve ser informado um ano entre 1900 a 2024 ou campo não informado`);

    }


}