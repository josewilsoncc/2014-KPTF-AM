/**
* @fileoverview Esta clase es el kernel/nucleo de todo
* el framework, se encarga de administrar todos los AM
*
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/

/*
 * TENER EN CUENTA:
 * 
 * Movimiento al renderizar relativo a la velocidad del procesador
 * 
 * Paso de objetos por referencia
 */

var KPTF = {REVISION: '1'};

//Constantes de magnitud.
KPTF.BAJA=1;
KPTF.MEDIA=2;
KPTF.ALTA=3;

//Constantes de tipo.
KPTF.TIPO_FUNCION = "function";
KPTF.TIPO_CADENA = "string";
KPTF.TIPO_NUMERO = "number";
KPTF.TIPO_OBJETO = "object";
KPTF.TIPO_INDEFINIDO = "undefined";
KPTF.TIPO_BOLEANO = "boolean";

//Constantes de consola
KPTF.CONSOLA_LOG = 0;
KPTF.CONSOLA_DEPURAR = 1;
KPTF.CONSOLA_ADVERTIR = 2;
KPTF.CONSOLA_ERROR = 3;

//Arreglo de AM
KPTF.AM=new Array();

/*
* Añade un AM al arreglo de AM
* @param {object} am Es el AM que se añadira
*/
KPTF.añadirAM=function(am){
    KPTF.AM.push(am);
};

/*
 * Se encarga de iniciar cada uno de los AM listados
 */
KPTF.iniciar=function(){
    for (var i = 0; i< KPTF.AM.length; i++){
        KPTF.consola("Iniciando AM ID:"+KPTF.AM[i].am_id+" -> "+KPTF.AM[i].am_log);
        KPTF.AM[i].iniciar();
    }
    KPTF.configurar();
};

/*
 * Incluye un JS al html actual en el head.
 * @param {object} js Es javascript que se añadira
 */
KPTF.incluirJS=function(js)
{
    document.writeln("<script src='js/" + js + ".js'><" + "/script>");
};

/*
 * Incluye un CSS al html actual en el head.
 * @param {object} css Es archivo css que se añadira
 */
KPTF.incluirCSS=function(css)
{
    document.writeln("<link href='css/" + css + ".css' rel='stylesheet' media='screen'>");
};

/*
 * Incluye un AM al html actual en el head.
 * @param {object} am Es el AM que se añadira
 */
KPTF.incluirAM=function(am)
{
    document.writeln("<script src=js/mod/am." + am + ".js><" + "/script>");
};

/*
 * Verifica si existe un AM necesario para el funcionamiento de otro.
 * @param {object} requerido Es el AM que se requiere
 * @param {object} version Es la version del AM que se requiere
 * @param {object} dependiente Es el AM que necesita del AM
 * requerido para funcionar correctamente
 */
KPTF.requiereAM=function(requerido, version, dependiente){
    var am = KPTF.obtenerAM(requerido);
    if(am===false)
        KPTF.consola("Falta el AM id:"+requerido+", requerido por el AM id:"+dependiente.am_id, KPTF.CONSOLA_ERROR);
    else if(am.am_version<version)
        KPTF.consola("El AM id:"+requerido+" debe estar actualizado a la version "+version+", requerido por el AM id:"+dependiente.am_id, KPTF.CONSOLA_ERROR);
};

/*
 * Obtiene un AM especifico
 * @param {object} id Es el id del AM que se quiere obtener
 */
KPTF.obtenerAM=function(id){
    for(i=0;i< KPTF.AM.length;i++)
        if(KPTF.AM[i].am_id===id)
            return KPTF.AM[i];
    return false;
};

KPTF.includeJS=KPTF.incluirJS;

//Incluyendo la libreria Three.js
KPTF.incluirJS("lib/three.min");
//Incluyendo la libreria Physi.js
KPTF.incluirJS("lib/physi");
//Incluyendo la libreria Jquery.js
KPTF.incluirJS("lib/jquery-2.1.1.min");
//Incluyendo la libreria Buzz.js
KPTF.includeJS("lib/buzz.min");
//Incluyendo la libreria SCORM_API_wrapper.js
KPTF.includeJS("lib/SCORM_API_wrapper");
//Incluyendo la libreria bootstrap.min.js
KPTF.includeJS("lib/bootstrap.min");
//Incluyendo el modulo de configuracion
KPTF.incluirJS("configuracion");
//Incluyendo el modulo principal
KPTF.incluirJS("main");

//Funcion de prueba para verificar que el archivo KPTF esta vinculado al HTML
KPTF.holaMundo = function ()
{
    alert("Hola mundo");
};


/*
 * Imprime un mensaje en la consola con base en los parametros
 * @param {string} arguments[0] Es el mensaje a mostrar en consola
 * @param {object} arguments[1] es la constante que indica que tipo de mensaje es asi:
 * CONSOLA_LOG muestra un mensaje en la consola.
 * CONSOLA_DEPURAR muestra un mensaje y ademas nuestra el número de línea donde se encuentra.
 * CONSOLA_ADVERTIR muestra un mensaje de alerta con un icono y fondo amarillo para identificarlo.
 * CONSOLA_ERROR muestra un mensaje de error con un icono y fondo en color rojo.
 * 
 */
KPTF.consola=function(){
    var mensaje = arguments[0] || "";
    mensaje = "KPTF -> "+mensaje;
    var tipo = arguments[1] || KPTF.CONSOLA_LOG;
    switch(tipo){
        case KPTF.CONSOLA_DEPURAR:console.debug(mensaje);break;
        case KPTF.CONSOLA_ADVERTIR:console.warn(mensaje);break;
        case KPTF.CONSOLA_ERROR:console.error(mensaje);break;
        case KPTF.CONSOLA_LOG:
        default:
            console.log(mensaje);
            break;
    }
};

/*
 * Muestra un mensaje y cierra la ventana
 * @param {string} arguments[0] Es el mensaje a mostrar
 */
KPTF.menjase=function(){
    var mensaje = arguments[0] || "";
    var salir = arguments[1] || false;
    alert(mensaje);
    if(salir){
        window.close();
    }
};