function calcular(){
    var valor = document.querySelector("input.valor").value;

    var garcom = parseInt(valor) * 0.1;
    var total = parseInt(garcom) + parseInt(valor);   

    document.querySelector(".resultado1").innerHTML = "garcom: " + garcom;
    document.querySelector(".resultado2").innerHTML = "total: " + total;
}