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