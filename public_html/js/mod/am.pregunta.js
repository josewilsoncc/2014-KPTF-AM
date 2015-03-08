/**
* @fileoverview Este AM representa diferente tipos de pregunta es
* usado principalmente por el AM prueba
*
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/
/*
* Crea una pregunta es usado principalmente por el AM prueba
* @param {integer} arguments[0] Indica cuantos puntos vale la pregunta
* @param {integer} arguments[1] Es el enunciado de la pregunta
* @param {integer} arguments[2] Es la respuesta correcta de la pregunta
* @param {integer} arguments[3] Es el tipo de pregunta:
* KPTF.Pregunta.TIPO_SMU
* KPTF.Pregunta.TIPO_VERDADERO_FALSO
* KPTF.Pregunta.TIPO_PALABRA_ESCRITA
* KPTF.Pregunta.TIPO_CHEQUEO
* @param {integer} arguments[4] De se necesario son las posible opciones
*/
KPTF.Pregunta = function(){
    this.puntos=arguments[0];
    this.texto = arguments[1];
    this.respuesta = arguments[2];
    if(typeof(this.respuesta)===KPTF.TIPO_CADENA)
        this.respuesta=this.respuesta.toLowerCase().trim();
    this.tipo = arguments[3];
    
    if(this.tipo===KPTF.Pregunta.TIPO_SMU || this.tipo===KPTF.Pregunta.TIPO_CHEQUEO)
        this.opciones=arguments[4];
    
    /*
    * Es la respuesta a la pregunta
    * @param {boolean, string, array} respuesta Es la respuesta a la pregunta
    * con base en el tipo de la pregunta.
    */
    this.responder=function(respuesta){
        switch(this.tipo){
            case KPTF.Pregunta.TIPO_SMU:
            case KPTF.Pregunta.TIPO_VERDADERO_FALSO:
            case KPTF.Pregunta.TIPO_PALABRA_ESCRITA:
                if (this.respuesta === respuesta)
                    return this.puntos;
                break;
            case KPTF.Pregunta.TIPO_CHEQUEO:
                var porcentaje=0;
                KPTF.consola("Tipo_chequeo");
                for(var i=0;i<respuesta.length;i++){
                    KPTF.consola("if "+respuesta[i]+" === "+this.respuesta[i]);
                    if(respuesta[i]===this.respuesta[i])
                        porcentaje++;
                }
                return this.puntos*(porcentaje/respuesta.length);
                break;
        }
        return 0;
    };
};

KPTF.Pregunta.TIPO_SMU=0;
KPTF.Pregunta.TIPO_VERDADERO_FALSO=1;
KPTF.Pregunta.TIPO_PALABRA_ESCRITA=2;
KPTF.Pregunta.TIPO_CHEQUEO=3;

//Inicia el AM
KPTF.Pregunta.iniciar=function(){
};

/*
 * se le asigna al AM el identificador, la version para el framework y la
 * informacion mostrada en consola
 */
KPTF.Pregunta.am_id="pregunta";
KPTF.Pregunta.am_version=1.0;
KPTF.Pregunta.am_log="Pregunta basado en kptf.js";

//se añade el AM al arreglo de adicion de modular
KPTF.añadirAM(KPTF.Pregunta);