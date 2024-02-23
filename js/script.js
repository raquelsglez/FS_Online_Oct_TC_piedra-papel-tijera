const botonesJugada = document.querySelectorAll('.boton-jugada');
let puntosUsuario = 0;
let puntosOrdenador = 0;

const tiradaOrdenador = () => {
    let aleatorio = Math.random()*3;
    let respuesta;
    aleatorio = Math.floor(aleatorio);
    if(aleatorio === 0){
        respuesta = 'piedra';
    }else if (aleatorio === 1){
        respuesta = 'tijera'
    }else{
        respuesta = 'papel'
    }
    return respuesta;
}


function compararJugadas(jugadaUsuario, jugadaOrdenador){
    let resultado;
        if(jugadaOrdenador === jugadaUsuario){
            resultado = 'empate';
        }else if((jugadaOrdenador === 'piedra' && jugadaUsuario === 'papel') || 
            (jugadaOrdenador === 'papel' && jugadaUsuario ==='tijera') || 
            (jugadaOrdenador === 'tijera' && jugadaUsuario ==='piedra')){
            resultado = 'victoria';
            puntosUsuario++;
            document.getElementById('contador-usuario').innerHTML = `Tus puntos: ${puntosUsuario}`;
        }else{
            resultado = 'derrota';
            puntosOrdenador++;
            document.getElementById('contador-ordenador').innerHTML = `Puntos de la máquina: ${puntosOrdenador}`;
        }
}

botonesJugada.forEach(function(elemento) {
    elemento.addEventListener('click', function(event) {
        const jugadaUsuario = event.target.dataset.jugada;
        const jugadaOrdenador = tiradaOrdenador();
        compararJugadas(jugadaUsuario, jugadaOrdenador);
    });
});
