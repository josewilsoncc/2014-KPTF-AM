/**
* @fileoverview Este AM se encarga de la gestion del sonido
*
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/

/*
* Crea la instancia de un Sonido
* @param {string} arguments[0] Es la ruta del archivo de sonido
* @param {boolean} arguments[1] True si el sonido se repetira constantemente (loop)
* [opcional, false por defecto]
*/
KPTF.Sonido = function(){
    this.sonido_url=arguments[0];
    this.miSonido = new buzz.sound(this.sonido_url);
    var repetir = arguments[1] || false;
    var hiloAñadido=false;
    
    /*
    * Cambia el modelo grafico del águila
    * @param {boolean} arguments[0] inidica que si el sonido ya se esta
    * reproduciendo, se detenga e inicie de nuevo.
    */
    this.reproducir=function(){
        var reiniciar = arguments[0] || false;
        this.miSonido.stop();
        if(reiniciar)
            this.miSonido = new buzz.sound(this.sonido_url);
        this.miSonido.play();
        
        if(repetir && !hiloAñadido){
            hiloAñadido=true;
            KPTF.miHilo.añadirTarea(this.verificarPorcentaje, 500, true, this);
        }
    };
    
    /*
    * Verifica si el sonido llego al 100% para reiniciarse de ser necesario
    * @param {object} este es la instancia del AM de sonido
    */
    this.verificarPorcentaje=function(este){
        if (este.miSonido.getPercent()===100 && repetir){
            este.miSonido = new buzz.sound(este.sonido_url);
            este.miSonido.play();
        }
    };
    
    /*
     * Pausa el sonido
     */
    this.pausar=function(){
        this.miSonido.pause();
    };
    
    /*
     * Detiene el sonido
     */
    this.detener=function(){
        this.miSonido.stop();
    };
};

//Inicia el AM sonido
KPTF.Sonido.iniciar=function(){
};
/*
 * se le asigna al AM el identificador, la version para el framework y la
 * informacion mostrada en consola
 */
KPTF.Sonido.am_id="buzz";
KPTF.Sonido.am_version=1.0;
KPTF.Sonido.am_log="Sonido basado en Buzz.js";

//se añade el AM al arreglo de adicion de modular
KPTF.añadirAM(KPTF.Sonido);