function calcular(){
    var vendas = document.querySelector(".venda").value;

    var quinze = parseFloat(vendas) * 0.15;

    var salario = quinze + 1200;

    document.querySelector(".resultado").innerHTML = "Você receberá o salário de: " + salario;
}