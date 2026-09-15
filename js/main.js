const header=document.querySelector(".nav"), menu=document.querySelector(".menu");
menu?.addEventListener("click",()=>header.classList.toggle("open"));
document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>header.classList.remove("open")));