let formulario      = document.getElementById("cont");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");
    alert("Formulario enviado")
}

        let count = 0;
        let btn = document.getElementById("btn");
        let disp = document.getElementById("display");
  
        btn.onclick = function () {
            count++;
            disp.innerHTML = count;
        }

        const btns = document.querySelector('#btns')
        btns.addEventListener('click', () => {
        
            Swal.fire({
                title: 'Exito!',
                text: 'Te has suscripto al Newsletter',
                icon: 'success',
                confirmButtonText: 'OK'
        })
        })
        
        const botns = document.querySelector('#submit')
        botns.addEventListener('click', () => {
        
            Swal.fire({
                title: 'Exito!',
                text: 'Te has suscripto al Newsletter',
                icon: 'success',
                confirmButtonText: 'OK'
        })
        })