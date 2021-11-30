const quote = ["FRONT-END WEB DEVELOPER"];
let textPos = 0;
const blinker = `<span class="blinker">|</span>`;

typeWriter = () => {
    document.querySelector("#header__frontEnd-text").innerHTML = quote[0].substring(0, textPos) + blinker;

    if(textPos++ != quote[0].length) setTimeout(typeWriter, 100);
}
window.addEventListener("load", typeWriter);