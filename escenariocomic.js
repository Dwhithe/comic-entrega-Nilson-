/* escenario 1: quiero hacerle zoom a la imagen y correr el meteoro de lugar */

/* escenario 2: mover de posicion el meteorito y darle opacidad a la nube   */

/* escenario 3: mover de posicion la nube */

/* escenario 4: zoom a la imagen, opacidad a los gusanos con click y aparicion de los mosquitos con click */

/* escenario 5: movimiento a las nubes */

/* escenario 6: opacidad para la puerta, cuadro de texto con click a las mesas, al cuadro de la pared, movimiento en y para la palanca  */

/* escenario 7: darle movimiento al peronsaje y al mosquito, darle hover al arbusto y opacidad, cuadro de texto para token  */

/* escenario 8: intercalar las cascadas, click al arbusto y click al meteoro */

/* escenario 9: opacidad para la puerta, cuadro de texto con click a las mesas, al cuadro de la pared, movimiento en y para la palanca */


/* assets */
let reproductorButton = document.querySelector('.reproductor');
let audioElement = document.querySelector('audio');

/* reproducir audio */
reproductorButton.addEventListener('click', function () {
    if (audioElement.paused) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
}); 

/* escenario1 */

let mundoAgrandar = document.querySelector('.img1-2');
let meteorito1Image = document.querySelector('.meteorito1');
let flecha1 = document.querySelector('.flecha1')
let cuadrotexto1 = document.querySelector('.cuadrotexto1')


/* meteorito movimiendose */

/* planeta poniendose grande */

flecha1.addEventListener('click', escalaMundo )

function escalaMundo(){
    cuadrotexto1.classList.remove('oculto1')
    flecha1.classList.add('oculto')
    mundoAgrandar.classList.add('escala-mundo');
    meteorito1Image.classList.add('mover-meteorito');
}




/* escenario 2 */


let flecha2 = document.querySelector('.flecha2')
let meteorito2 = document.querySelector('.meteorito2')
let personaje2 = document.querySelector('.personaje2')
let cuadrotexto2 =document.querySelector('.cuadrotexto2')

personaje2.addEventListener('click', activar)

function activar (){
    cuadrotexto2.classList.remove('oculto')
    flecha2.classList.add('oculto')
    personaje2.classList.add('mover-personaje2')
    meteorito2.style.animationPlayState='running'
    personaje2.style.animationPlayState='running'
} 

/*audio escenario 3 */


let flecha3 = document.querySelector('.flecha3')
let video3 = document.querySelector('.video3')
let cuadrotexto3 =document.querySelector('.cuadrotexto3')

video3.addEventListener('click', function () {
    if (video3.paused) {
        video3.play();
    } else {
        video3.pause();
    }
}); 


/* 
video3.addEventListener('click', activar)

function activar (){
    flecha3.classList.add('oculto')
    cuadrotexto3.classList.remove('oculto')
    
} */

