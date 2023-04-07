let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
let header=document.querySelector('.header-3');

menu.addEventListener('click' ,()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scroll > 250){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

/* code for slider  */

var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
      
    },
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    loop:true,
  });

  /*code for add to cart logic */

  let add_to_cart=document.querySelectorAll(".btn");
  let product_item=document.querySelectorAll(".product");
  let box_item=document.querySelectorAll(".box");



