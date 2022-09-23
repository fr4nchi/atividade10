function calcular(){
    var eleitores = document.querySelector(".eleitor").value;
    var brancos = document.querySelector(".branco").value;
    var validos = document.querySelector(".valido").value;
    var nulos = document.querySelector(".nulo").value;

    var percBrancos = (parseFloat(brancos) * 100) / parseFloat(eleitores);
    var percValidos = (parseFloat(validos) * 100) / parseFloat(eleitores);
    var percNulos = (parseFloat(nulos) * 100) / parseFloat(eleitores);

    document.querySelector(".resultado1").innerHTML = "Percentual votos em branco: " + percBrancos+"%";
    document.querySelector(".resultado2").innerHTML = "Percentual de votos válidos: " + percValidos+"%";
    document.querySelector(".resultado3").innerHTML = "Percentual de votos nulos: " + percNulos+"%";
}