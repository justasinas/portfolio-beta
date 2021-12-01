const quote = ["FRONT-END WEB DEVELOPER"];
let textPos = 0;
const blinker = `<span class="blinker">|</span>`;

typeWriter = () => {
    document.querySelector("#header__frontEnd-text").innerHTML = quote[0].substring(0, textPos) + blinker;

    if(textPos++ != quote[0].length) setTimeout(typeWriter, 100);
}
window.addEventListener("load", typeWriter);

const navToggle = document.querySelector(".hamburger");
const links = document.querySelector(".link_list");

navToggle.addEventListener("click", function() {
    links.classList.toggle("show_links");
    navToggle.classList.toggle("turn");
});
window.addEventListener("scroll", function () {
    document.querySelector('nav').classList.toggle("nav-fixed",window.scrollY >50);
});
/*window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      document.querySelector('nav').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('nav').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
        document.querySelector('nav').classList.remove('fixed-top');
       // remove padding top from body
      document.body.style.paddingTop = '0';
    } 
});*/