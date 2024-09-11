const answer = [
    "Si je suis fidèle c'est à ce trône peu importe qui monte dessus",
    "Il faut chercher en Arctique la cité perdue d'Atlantis. Ce sera un défi de taille pour ceux qui sont prêts à partir à la recherche de cette ancienne civilisation",
    "Le Roi Lion"
  ]
  
  
  const inputElement = document.querySelector('.enigme input')
  const checkButton = document.querySelector('.enigme button')
  const feedbackElement = document.createElement('div')
  feedbackElement.style.marginTop = '10px'
  feedbackElement.style.fontFamily = 'texte'
  feedbackElement.style.fontWeight = 'bold'
  
  
  inputElement.parentNode.insertBefore(feedbackElement, inputElement.nextSibling)
  
 
  const enigmas = [
    { div: document.getElementById('first'), hint: document.getElementById('one') },
    { div: document.getElementById('second'), hint: document.getElementById('two') },
    { div: document.getElementById('third'), hint: document.getElementById('three') }
  ]
  
  let currentEnigmaIndex = 0
  
  // Function pour afficher le feedback message
  function showFeedback(message, color) {
    feedbackElement.style.color = color
    feedbackElement.textContent = message
  
    // reinitialiser le  message feedback après 3 seconds
    setTimeout(function () {
      feedbackElement.textContent = ''
    }, 3000)
  }
  
  // Function pour afficher le next enigme
  function showNextEnigma() {
    if (currentEnigmaIndex < enigmas.length) {
      const currentEnigma = enigmas[currentEnigmaIndex]
      enigmas.forEach(enigma => {
        enigma.div.style.display = 'none'
        enigma.hint.style.display = 'none'
      })
      currentEnigma.div.style.display = 'block'
      currentEnigma.hint.style.display = 'block'
      currentEnigmaIndex++
    }
  }
  
  // Function pour afficher le congrats popup
  function showCongratsPopup() {
    const congratsPopup = document.getElementById('congratsPopup')
    congratsPopup.style.display = 'block'
  }
  
  // Function to show the second popup
  function showSecondPopup() {
    const secondPopup = document.getElementById('secondPopup')
    secondPopup.style.display = 'block'
  }
  
  // Countdown timer for the second popup
  function startTimer(duration) {
    const timerElement = document.getElementById('timer')
  
    let timer = duration
    let hours, minutes, seconds
  
    const intervalId = setInterval(function () {
      hours = Math.floor(timer / 3600)
      minutes = Math.floor((timer % 3600) / 60)
      seconds = Math.floor(timer % 60)
  
      hours = hours.toString().padStart(2, '0')
      minutes = minutes.toString().padStart(2, '0')
      seconds = seconds.toString().padStart(2, '0')
  
      timerElement.textContent = hours + ':' + minutes + ':' + seconds
  
      if (--timer < 0) {
        clearInterval(intervalId)
      }
    }, 1000)
  }
  
  // Event listener pour la checkbox button click
  checkButton.addEventListener('click', function () {
    const inputValue = inputElement.value.toLowerCase().trim()
    const currentAnswer = answer[currentEnigmaIndex - 1].toLowerCase()
    if (inputValue === currentAnswer) {
      showFeedback("Correct answer! You guessed it right!", 'green')
  
      // choisir les enigme vrai
      if (currentEnigmaIndex === enigmas.length) {
        showCongratsPopup()
  
        // Apres 5 seconds, afficher la second popup
        setTimeout(showSecondPopup, 5000)
  
        // Start le timer pour la second popup
        startTimer(40)
      }
  //adelin
      showNextEnigma()
    } else {
      showFeedback("Incorrect answer. Try again.", 'red')
    }
  
    // reinitialiser l'ajout
    inputElement.value = ''
  })
  
  // Function restart game à 0
  function restartGame() {
    currentEnigmaIndex = 0
    showNextEnigma()
    hidePopup('secondPopup')
    hidePopup('congratsPopup')
  }
  
  // Function pour la redirection du page acceuille et reinitialiser la game
  function redirectHomepage() {
    currentEnigmaIndex = 0
    showNextEnigma()
    hidePopup('congratsPopup')
    hidePopup('secondPopup')
    window.location.href = 'index.html' // Replace 'index.html' with the desired homepage URL
  }
  
  // Function hide popup
  function hidePopup(popupId) {
    const popup = document.getElementById(popupId)
    popup.style.display = 'none'
  }
  
  // Event listener pour la restart boutton click
  const restartButton = document.getElementById('restartButton')
  restartButton.addEventListener('click', restartGame)
  
  // Event listener pour la redirection de boutton click
  const redirectButton = document.getElementById('redirectButton')
  redirectButton.addEventListener('click', redirectHomepage)
  
  // timer compteur pour la deuxième popup
  function startTimer(duration) {
    const timerElement = document.getElementById('timer')
  
    let timer = duration
    let hours, minutes, seconds
  
    const intervalId = setInterval(function () {
      hours = Math.floor(timer / 3600)
      minutes = Math.floor((timer % 3600) / 60)
      seconds = Math.floor(timer % 60)
  
      hours = hours.toString().padStart(2, '0')
      minutes = minutes.toString().padStart(2, '0')
      seconds = seconds.toString().padStart(2, '0')
  
      timerElement.textContent = hours + ':' + minutes + ':' + seconds
  
      if (--timer < 0) {
        clearInterval(intervalId)
        redirectHomepage()
      }
    }, 1000)
  }
  showNextEnigma()  