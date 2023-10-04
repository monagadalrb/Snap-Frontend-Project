let feature = document.querySelector(".dropped-f");
let company = document.querySelector(".dropped-c");
let f_dropmenu = document.querySelector(".f .dropmenu-content");
let c_dropmenu = document.querySelector(".c .dropmenu-content");


window.onclick = function (event) {
  if (event.target.matches(".dropped-c")) {
    document.querySelector(".c .dropmenu-content").classList.toggle("show");
    f_dropmenu.classList.remove("show");
  } else if (event.target.matches(".dropped-f")) {
    document.querySelector(".f .dropmenu-content").classList.toggle("show");
    c_dropmenu.classList.remove("show");
  } else {
    f_dropmenu.classList.remove("show");
    c_dropmenu.classList.remove("show");
  }
};
