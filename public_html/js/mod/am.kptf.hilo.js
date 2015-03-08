/**
* @fileoverview Este AM se encarga simular un hilo, administra tareas
* repetitivas para lograrlo
*
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/

/*
* Crea la instancia de un Hilo
*/
KPTF.Hilo = function(nombre){
    
    //Es el nombre del hilo[opcional]
    this.nombre=nombre;
    
    //Son las tareas que se repiten constantemente en cada ciclo
    var _tareas_de_ciclo = new Array();
    //Son las tareas que se repiten cada cierto periodo
    var _tareas_periodicas = new Array();
    //Son tareas que una vez ejecutadas se desechan
    var _tareas_de_unica_ejecucion = new Array();
    
    //Inicia la ejecucion del Hilo
    this.iniciar=function(){
        _correr();
    };
    
    //Es la funcion que se llama en cada iteracion del Hilo
    function _correr(){
        var ahora = milisegundosActuales();
        for(_ih=0;_ih<_tareas_de_ciclo.length;_ih++){
            _tareas_de_ciclo[_ih].funcion(_tareas_de_ciclo[_ih].argumentos);
        }
        for(_ih=0;_ih<_tareas_de_unica_ejecucion.length;_ih++){
            if(ahora>=_tareas_de_unica_ejecucion[_ih].ultimoTiempo+_tareas_de_unica_ejecucion[_ih].tiempo){
                _tareas_de_unica_ejecucion[_ih].funcion(_tareas_de_unica_ejecucion[_ih].argumentos);
                _tareas_de_unica_ejecucion.splice(_ih,1);
                _ih--;
            }
        }
        for(_ih=0;_ih<_tareas_periodicas.length;_ih++){
            if(ahora>=_tareas_periodicas[_ih].ultimoTiempo+_tareas_periodicas[_ih].tiempo){
                _tareas_periodicas[_ih].funcion(_tareas_periodicas[_ih].argumentos);
                _tareas_periodicas[_ih].ultimoTiempo=_tareas_periodicas[_ih].ultimoTiempo+_tareas_periodicas[_ih].tiempo;
            }
        }
        requestAnimationFrame(_correr);
    };
    
    /*
     * Calcula los milisegundos transcurridos desde 1/1/1970
     * @returns {integer} son los milisegundos transcurridos desde 1/1/1970
     */
    function milisegundosActuales(){
        var fecha = new Date();
        return fecha.getTime();
    }
    
    /*
     * Es un objeto interno del Hilo, para ejecutar las acciones en el
     * momento adecuado.
     * @param {object} funcion Es la funcion a ejecutar en su debido tiempo.
     * @param {integer} tiempo Es el tiempo que debe transcurrir para la proxima
     * ejecucion de la tarea.
     * @param {object} argumentos Son los argumentos a manera de objeto que
     * resive la funcion a ejecutar.
     * @param {string} nombre Es un nombre para la tarea.
     * @param {object} tiempoDeCreacion Es el tiempo en el que la tarea se creo
     * o debio ser creada.
     */
    function Tarea(funcion, tiempo, argumentos, nombre, tiempoDeCreacion){
        this.funcion=funcion;
        this.tiempo=tiempo;
        this.argumentos=argumentos;
        this.nombre = nombre;
        this.ultimoTiempo= tiempoDeCreacion.getTime() || milisegundosActuales();
    };
    /*
     * Añade una tarea al arreglo de tareas del Hilo.
     * @param {object} funcion Es la funcion a ejecutar en su debido tiempo.
     * @param {integer} tiempo Es el tiempo que debe transcurrir para la proxima
     * ejecucion de la tarea.
     * @param {boolean} repetitiva Indica si la tarea se repetira constantemente
     * o solo una vez.
     * @param {object} argumentos Son los argumentos a manera de objeto que
     * resive la funcion a ejecutar.
     * @param {string} nombre Es un nombre para la tarea.
     * @param {object} tiempoDeCreacion Es el tiempo en el que la tarea se creo
     * o debio ser creada.
     */
    this.añadirTarea=function(){
        var funcion = arguments[0];
        var tiempo = arguments[1] || 0;
        var repetitiva = arguments[2] || false;
        var argumentos = arguments[3];
        var nombre;
        var tiempoDeCreacion = arguments[5] || new Date();
        if(repetitiva){
            if(tiempo === 0){
                nombre = arguments[4] || "tarea_c_"+_tareas_de_ciclo.length;
                _tareas_de_ciclo.push(new Tarea(funcion, tiempo, argumentos, nombre, tiempoDeCreacion));
            }
            else{
                nombre = arguments[4] || "tarea_p_"+_tareas_de_ciclo.length;
                _tareas_periodicas.push(new Tarea(funcion, tiempo, argumentos, nombre, tiempoDeCreacion));
            }
        }
        if(!repetitiva){
            nombre = arguments[4] || "tarea_u_"+_tareas_de_unica_ejecucion.length;
            _tareas_de_unica_ejecucion.push(new Tarea(funcion, tiempo, argumentos, nombre, tiempoDeCreacion));
        }
    };
};
//Inicia el AM Hilo
KPTF.Hilo.iniciar=function(){
    KPTF.miHilo=new KPTF.Hilo("Principal");
    KPTF.miHilo.iniciar();
};

/*
 * se le asigna al AM el identificador, la version para el framework y la
 * informacion mostrada en consola
 */
KPTF.Hilo.am_id="hilo";
KPTF.Hilo.am_version=1.0;
KPTF.Hilo.am_log="Hilo basado en kptf.js";

//se añade el AM al arreglo de adicion de modular
KPTF.añadirAM(KPTF.Hilo);