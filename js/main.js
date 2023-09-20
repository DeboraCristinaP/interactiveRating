//declarando as variaveis e pegando do html os elementos
const mainContainer = document.querySelector(".container") //esse é o container da avaliação  
const thanksContainer = document.querySelector(".thank-you") // esse aparece qnd o botão de enviar e clicado
const submitButton = document.getElementById("enviar") //o botão de enviar
const rateAgain = document.getElementById("rate-again") // o botão de avaliar de novo
const ratings = document.querySelectorAll(".botoes") // os botões de avaliação
const actualRating = document.getElementById("rating") //local onde será exibido qual foi a avaliação do usuário


submitButton.addEventListener("click", () => {
  //aqui quando o botão de submit é clicado o container principal é escondido e o thank-you entra no lugar dele
  mainContainer.style.display = "none"
  thanksContainer.classList.remove("hidden")

  
  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      actualRating.innerHTML = rating.innerHTML
    })
  })
})

// quando o botão "rate again" é acionado volta a mostrar o container principal e esconde no bloco de "thank-you".
rateAgain.addEventListener("click", () => {
  mainContainer.style.display = "block"
  thanksContainer.classList.add("hidden")
})