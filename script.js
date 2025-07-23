const ham=document.getElementById("ham")
const cross=document.getElementById("cross")
const details=document.getElementsByClassName("details2")
const menu = document.getElementsByClassName("nav")

ham.addEventListener("click",()=>{
  for (let i = 0; i < details.length; i++) {
        details[i].style.display = "flex";
    }

})
ham.addEventListener("click",()=>{
    cross.style.display="flex"
    ham.style.display="none"
  
 for (let i = 0; i < menu.length; i++) {
  menu[i].style.display = "flex";
  menu[i].style.flexDirection = "column";
}

})
cross.addEventListener("click",()=>{
 for (let i = 0; i < details.length; i++) {
        details[i].style.display = "none";
    }
 for (let i = 0; i < menu.length; i++) {
  menu[i].style.display = "flex";
  menu[i].style.flexDirection = "row";
}
 ham.style.display="flex"
 cross.style.display="none"
})

const messages = [
  "Building AI Chatbots...",
  "Designing Web Interfaces...",
  "Developing Mobile Apps...",
  "Automating Workflows..."
];

let index = 0;
let charIndex = 0;
let typingElement = document.querySelector('.ai-text');

function type() {
  if (charIndex < messages[index].length) {
    typingElement.textContent += messages[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 60);
  } else {
    setTimeout(() => {
      typingElement.textContent = "";
      charIndex = 0;
      index = (index + 1) % messages.length;
      type();
    }, 1500);
  }
}

type();

