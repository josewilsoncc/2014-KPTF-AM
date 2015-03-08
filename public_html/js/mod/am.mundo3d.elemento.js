/**
* @fileoverview Este AM se encarga de representar un elemento en 3D
* para ser usado en el escenario.
*
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/

/*
* Crea un elemento en 3D con base en el parametro para ser usado en el escenario.
* @param {integer} arguments[0] Es el tipo de elemento que sera creado:
* KPTF.Elemento3D.TIPO_ELEMENTO_VACIO
* KPTF.Elemento3D.TIPO_ELEMENTO_MURO
* KPTF.Elemento3D.TIPO_ELEMENTO_PARED_HORIZONTAL
* KPTF.Elemento3D.TIPO_ELEMENTO_PARED_VERTICAL
* KPTF.Elemento3D.TIPO_ELEMENTO_META
* KPTF.Elemento3D.TIPO_ELEMENTO_META_HORIZONTAL
* KPTF.Elemento3D.TIPO_ELEMENTO_META_VERTICAL
*/
KPTF.Elemento3D = function(){
    
    this.objeto = null;
    this.tipo=arguments[0];
    
    switch(this.tipo){
        case KPTF.Elemento3D.TIPO_ELEMENTO_MURO:
            this.objeto = KPTF.Geometria.obtenerGeometria(KPTF.Geometria.obtenerCubo(KPTF.Elemento3D.ancho, KPTF.Elemento3D.alto, KPTF.Elemento3D.alto), KPTF.Geometria.obtenerMaterialTextura("img/texturas/rocks.jpg"));
            break;
        case KPTF.Elemento3D.TIPO_ELEMENTO_PARED_HORIZONTAL:
            this.objeto = KPTF.Geometria.obtenerGeometria(KPTF.Geometria.obtenerCubo(KPTF.Elemento3D.ancho*9, KPTF.Elemento3D.alto, KPTF.Elemento3D.largo), KPTF.Geometria.obtenerMaterialTextura("img/texturas/wood.jpg"));
            break;
        case KPTF.Elemento3D.TIPO_ELEMENTO_PARED_VERTICAL:
            this.objeto = KPTF.Geometria.obtenerGeometria(KPTF.Geometria.obtenerCubo(KPTF.Elemento3D.ancho, KPTF.Elemento3D.alto*9, KPTF.Elemento3D.largo), KPTF.Geometria.obtenerMaterialTextura("img/texturas/wood.jpg"));
            break;
        case KPTF.Elemento3D.TIPO_ELEMENTO_META:
            this.objeto = KPTF.Geometria.obtenerGeometria(KPTF.Geometria.obtenerCubo(KPTF.Elemento3D.ancho, KPTF.Elemento3D.alto, KPTF.Elemento3D.largo), KPTF.Geometria.obtenerMaterialTextura("img/texturas/meta.jpg"));
            break;
        case KPTF.Elemento3D.TIPO_ELEMENTO_META_HORIZONTAL:
            this.objeto = KPTF.Geometria.obtenerGeometria(KPTF.Geometria.obtenerCubo(KPTF.Elemento3D.ancho*9, KPTF.Elemento3D.alto, KPTF.Elemento3D.largo), KPTF.Geometria.obtenerMaterialTextura("img/texturas/meta.jpg"));
            break;
        case KPTF.Elemento3D.TIPO_ELEMENTO_META_VERTICAL:
            this.objeto = KPTF.Geometria.obtenerGeometria(KPTF.Geometria.obtenerCubo(KPTF.Elemento3D.ancho, KPTF.Elemento3D.alto*9, KPTF.Elemento3D.largo), KPTF.Geometria.obtenerMaterialTextura("img/texturas/meta.jpg"));
            break;
    }
    
    /*
    * Cambia la posicion x, y, z con base en el tipo de elemento
    * @param {integer} x Es coordenada logica en el eje X
    * @param {integer} y Es coordenada logica en el eje Y
    * @param {integer} z Es coordenada logica en el eje Z
    */
    this.posicion=function(x, y, z){
        if(this.objeto!==undefined && this.objeto!==null){
            switch(this.tipo){
                case KPTF.Elemento3D.TIPO_ELEMENTO_PARED_HORIZONTAL:
                case KPTF.Elemento3D.TIPO_ELEMENTO_META_HORIZONTAL:
                    this.objeto.position=new THREE.Vector3((x*KPTF.Elemento3D.ancho+KPTF.Elemento3D.ancho/2*7), (y*KPTF.Elemento3D.alto-KPTF.Elemento3D.alto/2), (z*KPTF.Elemento3D.largo-KPTF.Elemento3D.largo/2));
                    break;
                case KPTF.Elemento3D.TIPO_ELEMENTO_PARED_VERTICAL:
                case KPTF.Elemento3D.TIPO_ELEMENTO_META_VERTICAL:
                    this.objeto.position=new THREE.Vector3((x*KPTF.Elemento3D.ancho-KPTF.Elemento3D.ancho/2), (y*KPTF.Elemento3D.alto+KPTF.Elemento3D.alto/2*7), (z*KPTF.Elemento3D.largo-KPTF.Elemento3D.largo/2));
                    break;
                default:
                    this.objeto.position=new THREE.Vector3((x*KPTF.Elemento3D.ancho-KPTF.Elemento3D.ancho/2), (y*KPTF.Elemento3D.alto-KPTF.Elemento3D.alto/2), (z*KPTF.Elemento3D.largo-KPTF.Elemento3D.largo/2));
                    break;
            }
        }
    };
};

KPTF.Elemento3D.ancho=10;
KPTF.Elemento3D.alto=5;
KPTF.Elemento3D.largo=10000;

KPTF.Elemento3D.TIPO_ELEMENTO_VACIO=0;
KPTF.Elemento3D.TIPO_ELEMENTO_MURO=1;
KPTF.Elemento3D.TIPO_ELEMENTO_PARED_HORIZONTAL=2;
KPTF.Elemento3D.TIPO_ELEMENTO_PARED_VERTICAL=3;
KPTF.Elemento3D.TIPO_ELEMENTO_META=4;
KPTF.Elemento3D.TIPO_ELEMENTO_META_HORIZONTAL=5;
KPTF.Elemento3D.TIPO_ELEMENTO_META_VERTICAL=6;

//Inicia el AM
KPTF.Elemento3D.iniciar=function(){
    KPTF.requiereAM("three.geometria", 1.0, KPTF.Elemento3D);
};

/*
 * se le asigna al AM el identificador, la version para el framework y la
 * informacion mostrada en consola
 */
KPTF.Elemento3D.am_id="mundo3d.elemento";
KPTF.Elemento3D.am_version=1.0;
KPTF.Elemento3D.am_log="Elemento basado en kptf.js";

//se añade el AM al arreglo de adicion de modular
KPTF.añadirAM(KPTF.Elemento3D);