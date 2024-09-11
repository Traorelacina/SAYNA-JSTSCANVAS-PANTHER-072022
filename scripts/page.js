//scroll animation 

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('appear')
        } else{
            entry.target.classList.remove('appear')
        }
    })
})
const toscrollElements = document.querySelectorAll('.scroll')
toscrollElements.forEach((el) => observer.observe(el))

//custom cursor
const cursor = document.querySelector('.cursor')

document.addEventListener("mousemove", e =>{
    cursor.setAttribute("style", "top: "+(e.pageY - 25)+"px; left: "+(e.pageX - 25)+"px;")
})

document.addEventListener('click', () =>{
    cursor.classList.add("expand")
    setTimeout(() => {
        cursor.classList.remove("expand")
    }, 500);
})

//Nav 
const menuBurger = document.querySelector('.menu-burger')
const navLinks = document.querySelector ('.nav-links')

menuBurger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})

//validation d'un form et form popup
function showPopup() {
    let nameInput = document.getElementById("name")
    let emailInput = document.getElementById("email")
    let messageInput = document.getElementById("message")
    let errorDiv = document.getElementById("error")
    let username = nameInput.value.trim()
    let email = emailInput.value.trim()
    let message = messageInput.value.trim()
    if (username === "" || email === "" || message === "") {
        errorDiv.style.display = "block"
        return false
    }
    //message d'erreur
    errorDiv.style.display = "none"
    //affichage popup
    let popup = document.getElementById("popup")
    popup.style.display = "block"
    //vide la form apres submit
    nameInput.value = ""
    emailInput.value = ""
    messageInput.value = ""  
  return false
}

function closePopup(){
    let popup = document.getElementById("popup")
    popup.style.display = "none"
}
