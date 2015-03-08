/**
* @fileoverview Este AM gestiona las camaras en el escenario
*
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/
/*
 * se asigna a la camara la funcion en la cual por parametros se envia la posicion
 * x,y,z en el plano, si no se envian parametros por defecto es (0,0,0),de lo contrario 
 * se asigna la posicion deseado y tiene la opcion de apuntar a un objeto determinao
 */
KPTF.Camara = function(){
    this.objeto = new THREE.PerspectiveCamera(KPTF.Camara.ANGULO_CAMARA, KPTF.Camara.ANCHO / KPTF.Camara.ALTO, KPTF.Camara.CORTE_FRONTAL, KPTF.Camara.CORTE_TRASERO);
    
    this.ubicar=function(){
        if(arguments.length===0){
            this.objeto.position.x=0;
            this.objeto.position.y=0;
            this.objeto.position.z=0;
        }
        if(arguments.length===3){
            this.objeto.position.x=arguments[0];
            this.objeto.position.y=arguments[1];
            this.objeto.position.z=arguments[2];
        }
        if(arguments.length===4){
            this.objeto.position.x=arguments[0];
            this.objeto.position.y=arguments[1];
            this.objeto.position.z=arguments[2];
            this.objeto.lookAt(arguments[3].position);
        }
        if(arguments.length===6){
            this.objeto.position.x=arguments[0];
            this.objeto.position.y=arguments[1];
            this.objeto.position.z=arguments[2];
            this.mirarA(arguments[3], arguments[4], arguments[5]);
        }
    };
    
    /*
     * mirarA:
     * Se encarga de que la camara apunta a la direccion esperada, tiene 3 modos de uso:
     * 1) Apuntar al origen, se llama la funcion sin parametros
     * 2) Apuntar a un objeto, se llama la funcion y le se envia como parametro dicho objeto
     * 3) Apuntar a un punto fijo, se llama la funcion enviandole los parametro X, Y y Z.
     */
    this.mirarA=function(){
        if(arguments.length===0){
            this.objeto.lookAt(new THREE.Vector3(0, 0, 0));
        }
        if(arguments.length===1){
            this.objeto.lookAt(arguments[0].position);
        }
        if(arguments.length===3){
            this.objeto.lookAt(new THREE.Vector3(arguments[0], arguments[1], arguments[2]));
        }
    };
    
    this.cambiarAspecto=function(aspecto){
        this.objeto.aspect = aspecto;
        this.objeto.updateProjectionMatrix();
    };
};

KPTF.Camara.ANCHO=window.innerWidth;
KPTF.Camara.ALTO=window.innerHeight;

KPTF.Camara.ANGULO_CAMARA=45;
KPTF.Camara.CORTE_FRONTAL=0.1;
KPTF.Camara.CORTE_TRASERO=0;

//Inicia el AM 
KPTF.Camara.iniciar=function(){
};

/*
 * se le asigna al AM el identificador, la version para el framework y la
 * informacion mostrada en consola
 */
KPTF.Camara.am_id="camara";
KPTF.Camara.am_version=1.0;
KPTF.Camara.am_log="Camara basada en Three.js";

//se añade el AM al arreglo de adicion de modular
KPTF.añadirAM(KPTF.Camara);