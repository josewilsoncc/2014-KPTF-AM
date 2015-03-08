/**
* @fileoverview Esta es la configuracion del framework, donde
* se indican que AM se añadiran y los valores de constantes/variables
* relevantes.
*
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/

//AM necesarios
KPTF.incluirAM("three.modelo");
KPTF.incluirAM("three.escena");
KPTF.incluirAM("three.camara");
KPTF.incluirAM("three.foco");
KPTF.incluirAM("three.ambiente");
KPTF.incluirAM("three.renderizador");
KPTF.incluirAM("buzz.sonido");
KPTF.incluirAM("kptf.teclado");
KPTF.incluirAM("kptf.hilo");
//KPTF.incluirAM("kptf.scorm");
KPTF.incluirAM("kptf.util");
//KPTF.incluirAM("pregunta");
//KPTF.incluirAM("prueba");
KPTF.incluirAM("mundo3d.mundo");
KPTF.incluirAM("mundo3d.elemento");
KPTF.incluirAM("three.geometria");
KPTF.incluirAM("physi.elementos");

//Asignacion de valores a las variables y constantes
KPTF.configurar=function(){
    Physijs.scripts.worker="js/lib/physi/physijs_worker.js";
    KPTF.planoCartesiano=false;

    KPTF.Renderizador.ANCHO=window.innerWidth-5;
    KPTF.Renderizador.ALTO=window.innerHeight-5;
    KPTF.Renderizador.ANTIALIAS=false;
    
    KPTF.Camara.ANCHO=window.innerWidth/2;
    KPTF.Camara.ALTO=window.innerHeight;

    KPTF.Camara.CORTE_TRASERO=10000;
};