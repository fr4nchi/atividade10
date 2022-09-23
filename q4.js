function calcular(){
    alert("Formas de pagamento:  avista e parcelado!")

    var preco = document.querySelector(".preco").value;
    
    var avista = parseFloat(preco) - (parseFloat(preco) * 0.1);

    var parcelado = parseFloat(preco) / 3; 


    document.querySelector(".resultado1").innerHTML = "Valor avista: " + avista;
    document.querySelector(".resultado2").innerHTML = "Valor da parcela em 3x: " + parcelado; 
}