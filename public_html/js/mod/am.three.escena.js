/**
* @fileoverview Este AM representa una escena
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0.1
*/
/*
 * Crea una scena
 * @param {boolean} arguments[0] Indica si es una escena fisica,
 * false por defecto.
 */
KPTF.Escena = function(){
    
    this.escenaFisica = arguments[0] || false;
    
    if(this.escenaFisica)
        this.objeto = new Physijs.Scene();
    else
        this.objeto = new THREE.Scene();
    
    /*
    * Añade un objeto a la escena
    * @param {object} temp Es el objeto a añadir en la escena
    */
    this.añadir=function(temp){
        if(temp.objeto!==null && temp.objeto!==undefined)
            this.objeto.add(temp.objeto);
        else
            this.objeto.add(temp);
    };
    
    /*
    * Cambia la gravedad si es una Physijs.Scene
    * @param {flotante} x Es la aceleración en el eje x de la gravedad
    * @param {flotante} y Es la aceleración en el eje y de la gravedad
    * @param {flotante} z Es la aceleración en el eje z de la gravedad
    */
    this.cambiarGravedad=function(x, y, z){
        if(this.escenaFisica)
            this.objeto.setGravity(new THREE.Vector3(x, y, z));
    };
};
   
//Inicia el AM 
KPTF.Escena.iniciar=function(){
};

/*
 * se le asigna al AM el identificador, la version para el framework y la
 * informacion mostrada en consola
 */
KPTF.Escena.am_id="escena";
KPTF.Escena.am_version=1.0;
KPTF.Escena.am_log="Escena basada en Three.js";

//se añade el AM al arreglo de adicion de modular
KPTF.añadirAM(KPTF.Escena);