/**
* @fileoverview Este AM representa una prueba y se encarga
* de gestionar los diferentes tipos de preguntas.
*
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/
KPTF.Prueba = function(){
    this.puntaje_maximo=0;
    this.puntaje_total=0;
    this.calificacion_maxima=100;
    var preguntas=new Array();
    var indice=-1;
    
    /*
    * Añade una pregunta
    * @param {object} pregunta Es la pregunta a ser añadida
    */
    this.añadirPregunta=function(pregunta){
        this.puntaje_maximo+=pregunta.puntos;
        preguntas.push(pregunta);
    };
    
    /*
    * incrementa el inicie y retorna la siguiente pregunta
    * @return {object} es la siguiente pregunta en la prueba
    */
    this.siguientePregunta=function(){
        if(indice<0)
            indice=-1;
        indice++;
        if(indice>= preguntas.length)
            return false;
        return preguntas[indice];
    };
    
    /*
    * Verifica la respuesta a una pregunta
    * @param {object} respuesta Es la posible respuesta dada por el usuario
    * @return {object} es el total de puntos obtenidos con la respuesta
    */
    this.responder=function(respuesta){
        var puntos = preguntas[indice].responder(respuesta);
        this.puntaje_total+=puntos;
        return puntos;
    };
};

//Inicia el AM
KPTF.Prueba.iniciar=function(){
    KPTF.requiereAM("pregunta", 1.0, KPTF.Prueba);
};

/*
 * se le asigna al AM el identificador, la version para el framework y la
 * informacion mostrada en consola
 */
KPTF.Prueba.am_id="prueba";
KPTF.Prueba.am_version=1.0;
KPTF.Prueba.am_log="Prueba basado en kptf.js";

//se añade el AM al arreglo de adicion de modular
KPTF.añadirAM(KPTF.Prueba);