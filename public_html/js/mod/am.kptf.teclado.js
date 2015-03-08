/**
* @fileoverview Este AM se encarga del manejo del teclado
*
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/
/*
 * se asignan las funciones correspondientes a las teclas arriba abajo 
 * y presion continua 
 */
KPTF.Teclado = new function(){
    this.añadirFuncionTeclaArriba=function(funcion){
        KPTF.Teclado.funcionesTeclaArriba.push(funcion);
    };
    this.añadirFuncionTeclaPresionada=function(funcion){
        KPTF.Teclado.funcionesTeclaPresionada.push(funcion);
    };
    this.añadirFuncionTeclaAbajo=function(funcion){
        KPTF.Teclado.funcionesTeclaAbajo.push(funcion);
    };
};
/*
 * se crean los arreglos de las funciones correspondientes a la tecla 
 * arriba, abajo y presion continua 
 */
KPTF.Teclado.funcionesTeclaArriba=new Array();
KPTF.Teclado.funcionesTeclaPresionada=new Array();
KPTF.Teclado.funcionesTeclaAbajo=new Array();
/*
 * en esta funcion se recorre el arreglo de las funciones asignadas a 
 * tecla arriba y se ejecunta cada una con respecto al parametro evento
 * @param evento {objeto} Es el evento unico que produce una tecla
 */
KPTF.Teclado.teclaArriba=function(evento){
    //KPTF.consola("Tecla arriba: "+evento.keyCode);
    for (var i = 0; i< KPTF.Teclado.funcionesTeclaArriba.length; i++){
        var funcion = KPTF.Teclado.funcionesTeclaArriba[i];
        funcion(evento);
    }
};
/*
 * en esta funcion se recorre el arreglo de las funciones asignadas a 
 * tecla presionada y se ejecunta cada una con respecto al parametro evento
 * @param evento {objeto} Es el evento unico que produce una tecla
 */
KPTF.Teclado.teclaPresionada=function(evento){
    //KPTF.consola("Tecla presionada: "+evento.keyCode);
    for (var i = 0; i< KPTF.Teclado.funcionesTeclaPresionada.length; i++){
        var funcion = KPTF.Teclado.funcionesTeclaPresionada[i];
        funcion(evento);
    }
};
/*
 * en esta funcion se recorre el arreglo de las funciones asignadas a 
 * tecla abajo y se ejecunta cada una con respecto al parametro evento
 * @param evento {objeto} Es el evento unico que produce una tecla
 */
KPTF.Teclado.teclaAbajo=function(evento){
    //KPTF.consola("Tecla abajo: "+evento.keyCode);
    for (var i = 0; i< KPTF.Teclado.funcionesTeclaAbajo.length; i++){
        var funcion = KPTF.Teclado.funcionesTeclaAbajo[i];
        funcion(evento);
    }
};
/*
 * se da inicio al teclado añadiendo los oyentes cuando se presiona y 
 * se suelta la tecla arriba y abajo
 */
KPTF.Teclado.iniciar=function(){
    document.addEventListener("keyup", KPTF.Teclado.teclaArriba, false);
    document.addEventListener("keydown", KPTF.Teclado.teclaAbajo, false);
};
/*
 * se le asigna al AM el identificador, la version para el framework y la
 * informacion mostrada en consola
 */
KPTF.Teclado.am_id="teclado";
KPTF.Teclado.am_version=1.0;
KPTF.Teclado.am_log="Teclado basado en kptf.js";

//se añade el AM al arreglo de adicion de modular
KPTF.añadirAM(KPTF.Teclado);