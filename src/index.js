
let sieBarOpen=false

const menu=document.querySelector('.menu-icon')
let sideBAr= document.querySelector('.container-menu')
let btnClose=document.querySelector('#closesidebar')

menu.addEventListener("click",()=>{
  sideBAr.classList.toggle('show-menu')
})


btnClose.addEventListener("click",()=>{
  sideBAr.classList.remove("show-menu")
})
