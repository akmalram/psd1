window.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("menuList"),t=document.getElementById("toggleBtn"),n=document.getElementById("headerCloseBtn");t.addEventListener("click",function(){e.classList.toggle("active")}),n.addEventListener("click",function(){e.classList.toggle("active")});new Swiper(".comments .swiper-container",{direction:"horizontal",loop:!0,pagination:{el:".comments .swiper-pagination",dynamicBullets:!0}});document.querySelector("#headerScrollDown").addEventListener("click",function(){window.scroll({top:document.querySelector("section").offsetTop,left:0,behavior:"smooth"})})});