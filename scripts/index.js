const body = document.getElementById("corpo");
const burger = document.getElementById("burger");
const itens = document.querySelector(".itens");

body.addEventListener('onresize', () => mudarTamanho());
burger.addEventListener('click', () => clickMenu());

function clickMenu() {
    if(itens.style.display == 'none') {
        itens.style.display = 'block';
    } else {
        itens.style.display = 'none';
    }
}

function mudarTamanho() {
    if(window.innerWidth >= 768) {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block';
    }
}