/**
* @fileoverview Este AM se encarga de renderizar
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/

/*
 * se asigna al renderizador la funcion en la cual se analiza la calidad y
 * si se quiere pintar el plano cartesiano y posteriormente se le mana al 
 * renderizador la escena y la camara 
 */
KPTF.Renderizador = function(){
    if(KPTF.Renderizador.ANTIALIAS)
        this.objeto = new THREE.WebGLRenderer({antialias: true});
    else
        this.objeto = new THREE.WebGLRenderer();
    this.objeto.setClearColor(0x00EEEE);
    this.objeto.setSize(KPTF.Renderizador.ANCHO, KPTF.Renderizador.ALTO);
    
    /*
     * se encarga del renderizado de una escena con una camara
     * @param {object} escena Es la escena a renderizar
     * @param {object} camara Es la camara desde la cual se
     * renderizara la escena
     */
    this.renderizar=function(escena, camara){
        if(KPTF.planoCartesiano){
            var tx = new THREE.AxisHelper(20);
            escena.objeto.add(tx);
        }
        this.objeto.render(escena.objeto, camara.objeto);
    };
    
    /*
     * Define una zona para el renderizado
     * @param {integer} x Es la coordenada X desde donde se renderizara
     * @param {integer} y Es la coordenada Y desde donde se renderizara
     * @param {integer} ancho Es el ancho de la zona donde se renderizara
     * @param {integer} alto Es el alto de donde se renderizara
     */
    this.renderizarEnZona=function(x, y, ancho, alto){
        this.objeto.setViewport(x, y, ancho, alto);
        this.objeto.setScissor(x, y, ancho, alto);
        this.objeto.enableScissorTest(true);
    };
    
    /*
     * Cambia el tamaño del renderizador
     * @param {integer} ancho Es el ancho del renderizador
     * @param {integer} alto Es el alto del renderizador
     */
    this.cambiarTamaño=function(ancho, alto){
        this.objeto.setSize(ancho, alto);
    };
    
    /*
     * Habilita/deshabilita las sombras en el renderizador
     * @param {boolean} arguments[0] true para habilitar, false
     * para deshabilitar, true por defecto
     */
    this.activarSombras=function(){
        render.objeto.shadowMapEnabled = true || arguments[0];
    };
};

KPTF.Renderizador.ANCHO=window.innerWidth;
KPTF.Renderizador.ALTO=window.innerHeight;
KPTF.Renderizador.ANTIALIAS=true;

/*
 * Esta funcion se encarga de seleccionar el objeto canvas del dom y vincularlo con el renderizador.
 * @param {object} canvas Es el id del div en el cual se va a renderizar o pintar
 * @param {object} renderizador Es el renderizador con el cual se va a pintar en el canvas
 */
KPTF.Renderizador.lienzo= function(canvas, renderizador)
{
    document.getElementById(canvas).appendChild(renderizador.objeto.domElement);
};

//Inicia el AM 
KPTF.Renderizador.iniciar=function(){
};

/*
 * se le asigna al AM el identificador, la version para el framework y la
 * informacion mostrada en consola
 */
KPTF.Renderizador.am_id="renderizador";
KPTF.Renderizador.am_version=1.0;
KPTF.Renderizador.am_log="Renderizador basado en Three.js";

//se añade el AM al arreglo de adicion de modular
KPTF.añadirAM(KPTF.Renderizador);