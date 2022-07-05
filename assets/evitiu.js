const btn = document.querySelector("#btn");
const navbar = document.querySelector(".header-nav");
const btn2 = document.querySelector("#btn2");
const number = document.getElementById("number");

btn.onclick = function () {
    navbar.classList.toggle(
    "active"
    ); /**Nos permite agregar una clase cuando se agrega una clase**/
};
btn2.onclick = function () {
    navbar.classList.toggle("active");
};


let cantidad = 0;
let time = setInterval(() => {
    cantidad += 200;
    number.textContent = new Intl.NumberFormat().format(cantidad) + " +";
    if (cantidad === 10000) {
    clearInterval(time);
}
}, 60);