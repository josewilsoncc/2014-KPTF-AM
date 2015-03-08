/**
* @fileoverview Este AM representa un punto de luz
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/
/*
 * se asigna al punto de luz la funcion en la cual se puede enviar por parametros 
 * la posicion x,y,z en el plano y la tonalidad de dicho punto
 */
KPTF.PuntoDeLuz = function(){
    
    if(arguments.length===0){
        this.objeto = new THREE.SpotLight( 0xffffff );
        this.objeto.position = new THREE.Vector3(0,0,0);
    }
    
    if(arguments.length===1){
        this.objeto = new THREE.SpotLight( arguments[0]);
        this.objeto.position = new THREE.Vector3(0,0,0);
    }
    
    if(arguments.length===3){
        this.objeto = new THREE.SpotLight( 0xffffff );
        this.objeto.position = new THREE.Vector3(arguments[0],arguments[1],arguments[2]);
    }
    
    if(arguments.length===4){
        this.objeto = new THREE.SpotLight(arguments[0]);
        this.objeto.position = new THREE.Vector3(arguments[1],arguments[2],arguments[3]);
    }
    
    if(KPTF.calidad===KPTF.ALTA)
        this.objeto.castShadow=true;
    
    /*
    * Cambia la posicion del punto de luz
    * @param {object} posicion Es la posicion enviada en formato X, Y y Z; o a traves
    * de un vector.
    */
    this.posicion=function(){
        var x, y, z;
        if(arguments.length===3){
            x=arguments[0];
            y=arguments[1];
            z=arguments[2];
            this.objeto.position= new THREE.Vector3(x,y,z);
        }
        if(arguments.length===1){
            this.objeto.position=arguments[0];
        }
    };
    
    /*
     * Habilita/deshabilita las sombras emitidas por el foco
     * @param {boolean} activar true para habilitar, false
     * para deshabilitar, true por defecto
     * @param {flotante} define la intensidad de las sombras
     * entre 0 y 1, 0.5 por defecto
     */
    this.activarSombras=function(activar, intensidad){
        this.objeto.castShadow = true || activar;
        this.objeto.shadowDarkness = intensidad || 0.5;
    };
};

//Inicia el AM    
KPTF.PuntoDeLuz.iniciar=function(){
};

/*
 * se le asigna al AM el identificador, la version para el framework y la
 * informacion mostrada en consola
 */
KPTF.PuntoDeLuz.am_id="foco";
KPTF.PuntoDeLuz.am_version=0.5;
KPTF.PuntoDeLuz.am_log="Foco basado en Three.js";

//se añade el AM al arreglo de adicion de modular
KPTF.añadirAM(KPTF.PuntoDeLuz);