const body = document.getElementById("corpo");
const menu = document.querySelector(".menu");
const itens = document.querySelector(".itens");

body.addEventListener('onresize', () => mudarTamanho());
menu.addEventListener('click', () => clickMenu());

function clickMenu() {
    if(itens.style.display === 'none') {
        itens.style.display = 'block';
    } else {
        itens.style.display = 'none';
    }
}

function mudarTamanho() {
    if(window.innerWidth >= 768) {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}