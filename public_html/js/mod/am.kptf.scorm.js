/**
* @fileoverview Este AM se encarga de la conexion con LMS
* a través del estandar SCORM
*
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/
KPTF.SCORM = function() {
    
    //Constantes usadas por el envoltorio del SCORM
    var ESTADO_DE_LA_LECCION="cmi.core.lesson_status";
    var NOMBRE_DEL_ESTUDIANTE="cmi.core.student_name";
    var CALIFICACION_MAXIMA="cmi.core.score.max";
    var CALIFICACION_MINIMA="cmi.core.score.min";
    var CALIFICACION_OPTENIDA="cmi.core.score.raw";
    
    var COMPLETA = "completed";
    
    var _scorm = pipwerks.SCORM;
    var LMSConectado = false;
    var NombreDelEstudiante;

    //Inicia la conexion con el LMS
    this.iniciar = function() {
        LMSConectado = _scorm.init();
        if (LMSConectado) {
            var estadoDeLaLeccion = _scorm.get(ESTADO_DE_LA_LECCION);
            NombreDelEstudiante = _scorm.get(NOMBRE_DEL_ESTUDIANTE);
        }
        else
            KPTF.consola("Error: No se pudo conectar con el LMS.", KPTF.CONSOLA_ADVERTIR);
        
        if(parent.document.getElementById("page-mod-scorm-player")!==null){
            parent.document.getElementById("page-mod-scorm-player").style.padding="0";
            parent.document.getElementById("page-mod-scorm-player").style.marginLeft="auto";
            parent.document.getElementById("page-mod-scorm-player").style.marginRight="auto";
        }
        if(parent.document.getElementById("scormtop")!==null)
            parent.document.getElementById("scormtop").style.display="none";
    };
    
    /*
     * Guarda la calificacion del paquete SCORM
     * @param {integer} minima Es la calificación minima posible
     * @param {integer} maxima Es la calificación maxima posible
     * @param {integer} total Es la calificación obtenida
     */
    this.calificacion = function(minima, maxima, total){
        if (LMSConectado) {
            _scorm.set(CALIFICACION_MINIMA, minima);
            _scorm.set(CALIFICACION_MAXIMA, maxima);
            _scorm.set(CALIFICACION_OPTENIDA, total);
            KPTF.consola("La calificación fue guardada.");
        }
        else
            KPTF.consola("La calificación no pudo se guardada porque no existe una conexión.", KPTF.CONSOLA_ADVERTIR);
    };

    /*
     * Completa el paquete SCORM, se encarga de cerrar la conexion
     * y cerrar la ventana en un ambiente real (LMS)
     */
    this.completar = function() {
        KPTF.consola("SCORM Completando...");
        if (typeof(LMSConectado)!==KPTF.TIPO_INDEFINIDO && LMSConectado) {
            KPTF.consola("SCORM Conexion viva...");
            var exito = _scorm.set(ESTADO_DE_LA_LECCION, COMPLETA);
            if (exito){
               _scorm.quit();
               parent.window.close();
            }
            else
                KPTF.consola("Error: El SCORM no pudo cambiarse al estado completado!", KPTF.CONSOLA_ERROR);
        }
        else
            KPTF.consola("Error: No se pudo conectar con el LMS.", KPTF.CONSOLA_ERROR);
    };
    
    /*
     * Obtiene el nombre del estudiante del LMS
     * @returns {string} Es el nombre del estudiante
     */
    this.obtenerNombreEstudiante=function(){
        return _scorm.get(NOMBRE_DEL_ESTUDIANTE);
    };
};

//Inicia el AM
KPTF.SCORM.iniciar = function() {
    KPTF.scorm = new KPTF.SCORM();
    KPTF.scorm.iniciar();
};

/*
 * se le asigna al AM el identificador, la version para el framework y la
 * informacion mostrada en consola
 */
KPTF.SCORM.am_id = "scorm";
KPTF.SCORM.am_version = 1.0;
KPTF.SCORM.am_log = "SCORM basado en pipwerks";

//se añade el AM al arreglo de adicion de modular
KPTF.añadirAM(KPTF.SCORM);