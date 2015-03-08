/**
* @fileoverview Este AM representa la iluminacion ambiente en el escenario
*
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/
/*
 * se asigna a luzAmbiente la funcion en la cual se analiza si se ha mandado algun parametro
 * de no ser asi se le asigna 0x999999 por defecto,contrario a esto se le asignara el manado 
 * por el usuario
 * @param {object} arguments[0] Es el color de la luz ambiente en formato hexadecimal
 */
KPTF.LuzAmbiente = function(){
    if(arguments.length==0)
        this.objeto=new THREE.AmbientLight(0x999999);
    if(arguments.length==1)
        this.objeto=new THREE.AmbientLight(arguments[0]);
};

//Inicia el AM
KPTF.LuzAmbiente.iniciar=function(){
};

/*
 * se le asigna al AM el identificador, la version para el framework y la
 * informacion mostrada en consola
 */
KPTF.LuzAmbiente.am_id="ambiente";
KPTF.LuzAmbiente.am_version=0.1;
KPTF.LuzAmbiente.am_log="Luz de ambiente basada en Three.js";

//se añade el AM al arreglo de adicion de modular
KPTF.añadirAM(KPTF.LuzAmbiente);