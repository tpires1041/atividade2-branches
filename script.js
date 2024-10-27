let mostrarDados = function()
{
  let nome = document.getElementsByClassName("nome").value
  let idade = document.getElementById("idade").value
  let ano = document.getElementById("ano").value

    document.getElementById("resultadoNomes").innerHTML = nome
    document.getElementById("resultadoIdade").innerHTML = idade
    document.getElementById("resultadoAno").innerHTML = ano
  }