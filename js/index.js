let resultado;
let totalCursos = 0;
let totalServicios = 0;
const recomendacionCursos = [];
const cursosEmpresas = { Hidrogruas: 900, Autoelevadores: 800, Gruas: 930 };
let ServiciosEmpresas = {
  ReparacionGruas: 1600,
  RevisionAutoelevadores: 1400,
  VisitaTecnica: 1000,
};
const PartEmp = [];
const seleccEmp = [];
let x;
let btn = document.querySelector("#btns");
btn.addEventListener("click", () => {
  Swal.fire({
    title: "Exito!",
    text: "Te has suscripto al Newsletter",
    icon: "success",
    confirmButtonText: "OK",
  });
});
