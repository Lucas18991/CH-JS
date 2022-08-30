let formulario = document.getElementById("cont");

let count = localStorage.getItem("Counts");
let btn = document.getElementById("btn");
let disp = document.getElementById("display");

btn.onclick = function () {
  localStorage.setItem("Counts", count++);

  disp.innerHTML = localStorage.getItem("Counts");
};

let btnsz = document.querySelector("#btns");
btnsz.addEventListener("click", () => {
  Swal.fire({
    title: "Exito!",
    text: "Te has suscripto al Newsletter",
    icon: "success",
    confirmButtonText: "OK",
  });
});
