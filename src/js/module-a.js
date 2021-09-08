import svg from '../img/less8kb.svg';
import png from '../img/less8.png';


let $png = document.querySelector("#png");
let $svg = document.querySelector("#svg");

$png.addEventListener("click", () => {
    let pngImg = document.createElement("img");
    pngImg.classList.add('img__png');
    pngImg.src = png;
    document.querySelector("#imgs").append(pngImg)
})

$svg.addEventListener("click", () => {
    let svgImg = document.createElement("img");
    svgImg.classList.add('img__png');
    svgImg.src = svg;
    document.querySelector("#imgs").append(svgImg)
})