function CalculaIMC() {
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var resultado = document.getElementById("resultado");

  var imc = peso / Math.pow(altura, 2);

  if (!peso || !altura) {
    alert("Insira valores validos!");
  } else {
    resultado.innerHTML = imc.toFixed(2);
    document.getElementById("resul").style.visibility = "visible";
  }
}

function LimpaIMC() {
  var peso = parseFloat((document.getElementById("peso").value = ""));
  var altura = parseFloat((document.getElementById("altura").value = ""));
  var resultado = document.getElementById("resultado");

  document.getElementById("resul").style.visibility = "hidden";
  var imc = peso / altura;

  resultado.innerHTML = "";

  peso = parseFloat(document.getElementById("peso").focus());
}
