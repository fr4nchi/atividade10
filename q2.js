function calcular(){
    var dias = document.querySelector(".dias").value;
    var horas = document.querySelector(".horas").value;

    var resultado1 = dias * 24;
    var resultado2 = resultado1 + parseInt(horas);

    document.querySelector(".resultado").innerHTML = "Duração da viagem em horas: " + resultado2 + "hrs";

}