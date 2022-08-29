fetch("/servicios.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

let carro = [];

updatecarroTotal();

/* listener para los botones*/
document.getElementById("vaccarro").addEventListener("click", vaccarro);
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
    addedTocarro(getservicioNombre);
    updatecarroTotal();
  } else {
    //tomar carro y convertir a array
    carro = JSON.parse(sessionStorage.getItem("carro"));
    //realizar un push al string
    carro.push(stringservicio);
    stringcarro = JSON.stringify(carro);
    //sobrescribir datos en el carro
    sessionStorage.setItem("carro", stringcarro);
    addedTocarro(getservicioNombre);
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
  //insertar servicios al carro
  document.getElementById("carrotable").innerHTML = carrotable;
  //actualizar carro en html
  document.getElementById("totalItems").innerHTML = items;
}
//mensaje cuando se adiciona al carro
function addedTocarro(pname) {
  let message = pname + " se adiciono al carro";
  let alerts = document.getElementById("alerts");
  alerts.innerHTML = message;
  if (!alerts.classList.contains("message")) {
    alerts.classList.add("message");
  }
}
/* Vaciar carro */
function vaccarro() {
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

const btn = document.querySelector("#btns");
btn.addEventListener("click", () => {
  Swal.fire({
    title: "Exito!",
    text: "Te has suscripto al Newsletter",
    icon: "success",
    confirmButtonText: "OK",
  });
});

const botns = document.querySelector("#submit");
botns.addEventListener("click", () => {
  Swal.fire({
    title: "Exito!",
    text: "Te has suscripto al Newsletter",
    icon: "success",
    confirmButtonText: "OK",
  });
});
