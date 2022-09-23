function calcular(){
    var conta = document.querySelector(".conta").value;
    var pessoas = document.querySelector(".pagar").value;

    var resultado = parseFloat(conta) / parseInt(pessoas);

    document.querySelector(".resultado").innerHTML = "Total para cada um: " + "R$:"+resultado;
}