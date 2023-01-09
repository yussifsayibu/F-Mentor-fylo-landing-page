// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Form Validation

const form = document.querySelector("#form");
const email = document.querySelector("#hero-email");
const btn = document.querySelector("#hero-btn");
const text = document.querySelector("#hero-text");
let regExp = /^[^]+@[^]+\.[a-z]{2,3}$/ ;

function check(){
    if (email.value.match(regExp)){
        text.innerHTML = "";
        text.style.color = " ";
        email.style.borderColor= " ";
    }
    else{
        text.innerHTML = "Check your email please";
        text.style.color = "hsl(0, 100%, 63%)";
        email.style.borderColor= "1px solid hsl(0, 100%, 63%)";
        setTimeout(function(){
             text.innerHTML = " ";
        },8000);
    }

}

