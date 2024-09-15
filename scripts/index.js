const menu = document.getElementById("burger");
const itens = document.querySelector(".itens");

menu.addEventListener('click', () => itensOn());


function itensOn() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block';
    }
}