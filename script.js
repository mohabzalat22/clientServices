let burgerIcon = document.querySelector('.right');
burgerIcon.addEventListener('click',function(event){
    // burgerIcon.classList.toggle('burger-effect');
    // burgerIcon.classList.toggle('vertical-center');
    ['burger-effect','vertical-center'].forEach((e)=>burgerIcon.classList.toggle(e));
    let menu = document.querySelector('.menu');
    menu.classList.toggle('active-menu');
});
////////////////// window-scroll /////////////////
let section = document.querySelector('.container-about');
window.onscroll = function(){
    if(window.scrollY >= section.offsetTop - 400){
        section.classList.add('smooth-scroll-js');
    }
};