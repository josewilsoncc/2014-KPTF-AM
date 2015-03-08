/**
* @fileoverview Este AM genera elemento fisicos de Physi.js
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0.1
*/

/*
 * Crea un elemento con efectos fisicos
 * @param {type} geometria Es la geometria del objeto
 * @param {type} rutaMaterial Es la ruta del material del objeto
 * @param {type} friccion Es el indice de friccion del objeto
 * @param {type} restitucion Es el inidice de elasticidad del objeto
 * @param {type} masa Es la masa del objeto
 */
KPTF.ElementoFisico = function(geometria, rutaMaterial, friccion, restitucion, masa){
    var threeMaterial = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(rutaMaterial)});
    
    var materialFisico= Physijs.createMaterial(
        threeMaterial,
        friccion,
        restitucion
    );
    
    this.objeto = new Physijs.BoxMesh(
        geometria,
        materialFisico,
        masa
    );
    
    /*
    * Cambia la posicion elemento
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
     * Habilita/deshabilita las sombras emitidas por el elemento
     * @param {boolean} arguments[0] true para habilitar, false
     * para deshabilitar, true por defecto.
     */
    this.activarSombras=function(){
        this.objeto.receiveShadow = true || arguments[0];
        this.objeto.castShadow = true || arguments[0];
    };
};

KPTF.ElementoFisico.GEOMETRIA_ESFERA=0;
KPTF.ElementoFisico.GEOMETRIA_CUBO=1;
   
//Inicia el AM 
KPTF.ElementoFisico.iniciar=function(){
};

/*
 * se le asigna al AM el identificador, la version para el framework y la
 * informacion mostrada en consola
 */
KPTF.ElementoFisico.am_id="elemento_fisico";
KPTF.ElementoFisico.am_version=1.0;
KPTF.ElementoFisico.am_log="Elemento fisico basado en Physi.js";

//se añade el AM al arreglo de adicion de modular
KPTF.añadirAM(KPTF.ElementoFisico);