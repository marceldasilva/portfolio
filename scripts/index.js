const menu = document.getElementById("burger");
const itens = document.querySelector(".itens");
const body = document.querySelector("body");

menu.addEventListener('click', () => itensOn());
body.addEventListener('resize', () => mudouTamanho());


function itensOn() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block';
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block';
    } else {
        itens.style.display = 'none';
    }
}