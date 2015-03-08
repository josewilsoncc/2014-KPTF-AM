/**
* @fileoverview Este AM se encarga de facilitar
* algunas funciones genericas.
*
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/
KPTF.Util = new function(){
    
    /*
    * Crea un arreglo vacio en 2D con el numero de filas indicado
    * @param {integer} filas Es el numero de filas para el arreglo
    */
    this.CrearArreglo2D=function(filas) {
        var arreglo = [];
        for (var i=0;i<filas;i++) {
           arreglo[i] = [];
        }
        return arreglo;
    };
    
    /*
    * Crea un arreglo vacio en 3D con el numero de filas y columnas indicado
    * @param {integer} filas Es el numero de filas para el arreglo
    * @param {integer} columnas Es el numero de columnas para el arreglo
    */
    this.CrearArreglo3D=function(filas, columnas) {
        var arreglo = [];
        for (var i=0;i<filas;i++) {
            arreglo[i] = [];
            for(var j=0;j<columnas;j++){
                arreglo[i][j]=[];
            }
        }
        return arreglo;
    };
};

//Inicia el AM
KPTF.Util.iniciar=function(){
};

/*
 * se le asigna al AM el identificador, la version para el framework y la
 * informacion mostrada en consola
 */
KPTF.Util.am_id="util";
KPTF.Util.am_version=1.0;
KPTF.Util.am_log="Util basado en kptf.js";

//se añade el AM al arreglo de adicion de modular
KPTF.añadirAM(KPTF.Util);