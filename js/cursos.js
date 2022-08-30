fetch("/cursos.json")
  .then((res) => res.json())
  .then((data) => {
    const preciosarray1 = data[0].precio;
    const preciosarray2 = data[1].precio;
    const preciosarray3 = data[2].precio;
    const preciosarray4 = data[3].precio;
    const preciosarray5 = data[4].precio;
    const Cursonombre1 = data[0].nombre;
    const Cursonombre2 = data[1].nombre;
    const Cursonombre3 = data[2].nombre;
    const Cursonombre4 = data[3].nombre;
    const Cursonombre5 = data[4].nombre;
    document.getElementById("Cursoprecio1").innerHTML = "$" + preciosarray1;
    document.getElementById("Cursoprecio2").innerHTML = "$" + preciosarray2;
    document.getElementById("Cursoprecio3").innerHTML = "$" + preciosarray3;
    document.getElementById("Cursoprecio4").innerHTML = "$" + preciosarray4;
    document.getElementById("Cursoprecio5").innerHTML = "$" + preciosarray5;
    document.getElementById("Cursonombre1").innerHTML =
      "Curso de " + Cursonombre1;
    document.getElementById("Cursonombre2").innerHTML =
      "Curso de " + Cursonombre2;
    document.getElementById("Cursonombre3").innerHTML =
      "Curso de " + Cursonombre3;
    document.getElementById("Cursonombre4").innerHTML =
      "Curso de " + Cursonombre4;
    document.getElementById("Cursonombre5").innerHTML =
      "Curso de " + Cursonombre5;
  });

let carro = [{}];

updatecarroTotal();

/* listener para los botones*/
document.getElementById("vaciarCarro").addEventListener("click", vaciarCarro);
let btns = document.getElementsByClassName("adicionarCarro");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    adicionarCarro(this);
  });
}

/* Aadiciona al carro*/

function adicionarCarro(elem) {
  //init
  let sibs = [];
  let precios;
  let getservicioNombre;
  let carro = [];
  let stringcarro;
  //ciclos hijos
  while ((elem = elem.previousSibling)) {
    if (elem.nodeType === 3) continue;
    if (elem.className == "precio") {
      precios = elem.innerText;
    }
    if (elem.className == "servicioNombre") {
      getservicioNombre = elem.innerText;
    }
    sibs.push(elem);
    console.log(precios);
    console.log(getservicioNombre);
  }
  //Crear objeto servicio
  let servicio = {
    servicioNombre: getservicioNombre,
    precio: precios,
  };
  //Convertir a Json para guardar
  let stringservicio = JSON.stringify(servicio);

  if (!sessionStorage.getItem("carro")) {
    //adicionar json a array
    carro.push(stringservicio);
    //carro to JSON
    stringcarro = JSON.stringify(carro);
    //ccrear storage de session
    sessionStorage.setItem("carro", stringcarro);
    AdicionarCarro(getservicioNombre);
    updatecarroTotal();
  } else {
    //tomar carro y convertir a array
    carro = JSON.parse(sessionStorage.getItem("carro"));
    //realizar un push al string
    carro.push(stringservicio);
    stringcarro = JSON.stringify(carro);
    //sobrescribir datos en el carro
    sessionStorage.setItem("carro", stringcarro);
    AdicionarCarro(getservicioNombre);
    updatecarroTotal();
  }
}
/* calcular  Total carro */
function updatecarroTotal() {
  //init
  let total = 0;
  let precio = 0;
  let items = 0;
  let servicioNombre = "";
  let carrotable = "";
  if (sessionStorage.getItem("carro")) {
    //agarrar datos del carro y parsearlos
    let carro = JSON.parse(sessionStorage.getItem("carro"));
    //nro de items del carro
    items = carro.length;
    //revisar cada item del carro
    for (let i = 0; i < items; i++) {
      //convertir json a Objeto
      let x = JSON.parse(carro[i]);
      //Tomar el precio
      precio = parseFloat(x.precio.split("$")[1]);
      servicioNombre = x.servicioNombre;
      //adicionar al total el precio
      carrotable +=
        "<tr><td>" +
        servicioNombre +
        "</td><td>$" +
        precio.toFixed(2) +
        "</td></tr>";
      total += precio;
    }
  }
  //actualizar html
  document.getElementById("total").innerHTML = total.toFixed(2);
  //insertar cursos al carro
  document.getElementById("carrotable").innerHTML = carrotable;
  //actualizar carro en html
  document.getElementById("totalItems").innerHTML = items;
}
//mensaje cuando se adiciona al carro
function AdicionarCarro(pname) {
  let message = pname + " se adiciono al carro";
  let alerts = document.getElementById("alerts");
  alerts.innerHTML = message;
  if (!alerts.classList.contains("message")) {
    alerts.classList.add("message");
  }
}
/* Vaciar carro */
function vaciarCarro() {
  //Remueve el storage del carro
  if (sessionStorage.getItem("carro")) {
    sessionStorage.removeItem("carro");
    updatecarroTotal();
    let alerts = document.getElementById("alerts");
    alerts.innerHTML = "";
    if (alerts.classList.contains("message")) {
      alerts.classList.remove("message");
    }
  }
}

let btn = document.querySelector("#btns");
btn.addEventListener("click", () => {
  Swal.fire({
    title: "Exito!",
    text: "Te has suscripto al Newsletter",
    icon: "success",
    confirmButtonText: "OK",
  });
});
const botns = document.querySelector("#checkout");

const vaciarCarroq = document.querySelector("#vaciarCarro");

vaciarCarroq.addEventListener("mouseover", () => {
  carro = sessionStorage.getItem("carro");
  console.log(carro);
});

botns.addEventListener("mouseover", () => {
  carro = sessionStorage.getItem("carro");
  console.log(carro);
  carro == null
    ? botns.addEventListener("click", () => {
        Swal.fire({
          title: "Error!",
          text: "Debe agregar al menos un curso para el checkout",
          icon: "error",
          confirmButtonText: "Volver",
        });
      })
    : botns.addEventListener("click", () => {
        Swal.fire({
          title: "Exito!",
          text: "Felicidades ! Solo queda un paso para obtener tus cursos",
          icon: "success",
          confirmButtonText: "Ir a pagos",
        });
      });
});
