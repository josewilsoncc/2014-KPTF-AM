/**
* @fileoverview Este AM se encarga de representar un mundo en 3D
* que contiene elementos3D.
*
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/

/*
* Crea un mundo en 3D que contiene elementos3D.
* @param {integer} arguments[0] Es la coordenada X del mundo en el escenario
* @param {integer} arguments[1] Es la coordenada Y del mundo en el escenario
* @param {integer} arguments[2] Es la coordenada Z del mundo en el escenario
* @param {integer} arguments[3] Es el ancho del mundo en el escenario
* @param {integer} arguments[4] Es el alto del mundo en el escenario
* @param {integer} arguments[5] Es el largo del mundo en el escenario
*/
KPTF.Mundo3D = function(){
    KPTF.Mundo3D.x=arguments[0];
    KPTF.Mundo3D.y=arguments[1];
    KPTF.Mundo3D.z=arguments[2];
    
    this.ancho = arguments[3];
    this.alto = arguments[4];
    this.largo = arguments[5];
    
    this.mundo = new Array();
    for(var x=0;x<KPTF.Mundo3D.bloquesEnX;x++){
        this.mundo[x]=new Array();
        for(var y=0;y<KPTF.Mundo3D.bloquesEnY;y++){
            this.mundo[x][y]=new Array();
            for(var z=0;z<KPTF.Mundo3D.bloquesEnZ;z++){
                if(x===0 || x===KPTF.Mundo3D.bloquesEnX-1 || y===0 || y===KPTF.Mundo3D.bloquesEnY-1){
                    if(z===0)
                        if(x===0 && y===0)
                            this.mundo[x][y][z]=new KPTF.Elemento3D(KPTF.Elemento3D.TIPO_ELEMENTO_PARED_HORIZONTAL);
                        else if(x===0 && y===1)
                            this.mundo[x][y][z]=new KPTF.Elemento3D(KPTF.Elemento3D.TIPO_ELEMENTO_PARED_VERTICAL);
                        else if(x===1 && y===9)
                            this.mundo[x][y][z]=new KPTF.Elemento3D(KPTF.Elemento3D.TIPO_ELEMENTO_PARED_HORIZONTAL);
                        else if(x===9 && y===0)
                            this.mundo[x][y][z]=new KPTF.Elemento3D(KPTF.Elemento3D.TIPO_ELEMENTO_PARED_VERTICAL);
                        else
                            this.mundo[x][y][z]=null;
                    if(z===1)
                        if(x===0 && y===0)
                            this.mundo[x][y][z]=new KPTF.Elemento3D(KPTF.Elemento3D.TIPO_ELEMENTO_META_HORIZONTAL);
                        else if(x===0 && y===1)
                            this.mundo[x][y][z]=new KPTF.Elemento3D(KPTF.Elemento3D.TIPO_ELEMENTO_META_VERTICAL);
                        else if(x===1 && y===9)
                            this.mundo[x][y][z]=new KPTF.Elemento3D(KPTF.Elemento3D.TIPO_ELEMENTO_META_HORIZONTAL);
                        else if(x===9 && y===0)
                            this.mundo[x][y][z]=new KPTF.Elemento3D(KPTF.Elemento3D.TIPO_ELEMENTO_META_VERTICAL);
                        else
                            this.mundo[x][y][z]=null;
                }
                else{
                    this.mundo[x][y][z]=null;
                }
            }
        }
    }
    
    /*
    * Añade el mundo al escenario.
    * @param {object} escena Es la escena a la que sera añadida el mundo
    */
    this.añadirA=function(escena){
        for(var x=0;x<KPTF.Mundo3D.bloquesEnX;x++){
            for(var y=0;y<KPTF.Mundo3D.bloquesEnY;y++){
                for(var z=0;z<KPTF.Mundo3D.bloquesEnZ;z++){
                    if(this.mundo[x][y][z]!==null){
                        escena.añadir(this.mundo[x][y][z].objeto);
                        this.mundo[x][y][z].posicion(KPTF.Mundo3D.x+x, KPTF.Mundo3D.y+y, KPTF.Mundo3D.z-z);
                    }
                }
            }
        }
    };
};

KPTF.Mundo3D.x=0;
KPTF.Mundo3D.y=0;
KPTF.Mundo3D.z=0;

KPTF.Mundo3D.bloquesEnX=10;
KPTF.Mundo3D.bloquesEnY=10;
KPTF.Mundo3D.bloquesEnZ=2;

//Inicia el AM
KPTF.Mundo3D.iniciar=function(){
    KPTF.requiereAM("mundo3d.elemento", 1.0, KPTF.Mundo3D);
};

/*
 * se le asigna al AM el identificador, la version para el framework y la
 * informacion mostrada en consola
 */
KPTF.Mundo3D.am_id="mundo3d.mundo";
KPTF.Mundo3D.am_version=1.0;
KPTF.Mundo3D.am_log="Elemento basado en kptf.js";

//se añade el AM al arreglo de adicion de modular
KPTF.añadirAM(KPTF.Mundo3D);