const menu = document.querySelector('.hamburger')
const nav = document.querySelector('nav ul')
menu.addEventListener('click',()=>{
nav.style.display=='none' ? nav.style.display='flex' : nav.style.display='none'
})