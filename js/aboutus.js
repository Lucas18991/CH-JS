const pago = new Promise((res, rej) => {
  rej = true;
});

pago
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    console.log("Nosotros");
  });

let btn = document.querySelector("#btns");
btn.addEventListener("click", () => {
  Swal.fire({
    title: "Exito!",
    text: "Te has suscripto al Newsletter",
    icon: "success",
    confirmButtonText: "OK",
  });
});
