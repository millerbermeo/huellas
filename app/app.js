window.onload = inicio;

function inicio() {
  btnUno = document.querySelector(".fa-bars");
  menu = document.querySelector(".nav-menu");

  btnUno.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  n1 = document.querySelector("#nosotros");
  n2 = document.querySelector(".sub-menu-uno");

  n1.addEventListener("click", () => {
    n1.classList.toggle("active");
    n2.classList.toggle("active");
  });

  n3 = document.querySelector("#evento");
  n4 = document.querySelector(".sub-menu-dos");

  n3.addEventListener("click", () => {
    n3.classList.toggle("active");
    n4.classList.toggle("active");
  });

  navMenu = document.querySelector(".nav");

  banner = document.querySelector(".banner-top");
  sub1 = document.querySelector(".sub-menu-uno");
  sub2 = document.querySelector(".sub-menu-dos");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      navMenu.classList.add("scroll");
      banner.classList.add("scroll");
      sub1.style.top = "40px";
      sub2.style.top = "40px";

      n1.classList.remove("active");
      n2.classList.remove("active");
      n3.classList.remove("active");
      n4.classList.remove("active");
    } else {
      navMenu.classList.remove("scroll");
      banner.classList.remove("scroll");
      sub1.style.top = "95px";
      sub2.style.top = "95px";
    }
  });

  puntoUno = document.querySelector(".punto-left");
  puntoDos = document.querySelector(".punto-middle");
  puntoTres = document.querySelector(".punto-right");

  capaUno = document.querySelector(".content-capas");
  capaDos = document.querySelector(".content-capas-dos");
  capaTres = document.querySelector(".content-capas-tres");

  puntoUno.addEventListener("click", () => {
    capaUno.classList.remove("active");
    capaDos.classList.remove("active");
    capaTres.classList.remove("active");
  });

  puntoDos.addEventListener("click", () => {
    capaUno.classList.add("active");
    capaDos.classList.add("active");
    capaTres.classList.remove("active");
  });

  puntoTres.addEventListener("click", () => {
    capaUno.classList.add("active");
    capaDos.classList.remove("active");
    capaTres.classList.add("active");
  });
}
