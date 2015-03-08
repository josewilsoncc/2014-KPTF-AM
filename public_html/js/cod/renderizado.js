/**
* @fileoverview Se encarga del renderizado
*
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/

var render;
var escena;
var camara;

var cubeG;
var cubeM;
var cube;

//Foco de luz
var foco = new KPTF.PuntoDeLuz(0xFFFFFF);

/*
 * Se encarga iniciar el renderizado
 */
function iniciarRenderizado() {
    render = new KPTF.Renderizador();
    escena = new KPTF.Escena(true);
    camara = new KPTF.Camara();
    
    camara.cambiarAspecto(window.innerWidth / window.innerHeight);

    KPTF.Renderizador.lienzo("canvas", render);
    
    cubeG = new THREE.BoxGeometry(4, 4, 4);
    cubeM = new THREE.MeshBasicMaterial({color: 0xFF0000, wireframe: true});
    cube = new THREE.Mesh(cubeG, cubeM);
    
    cube.position.x = 0;
    cube.position.y = 0;
    cube.position.z = 0;
    
    camara.ubicar(10, 10, 10, cube);
    
    escena.añadir(cube);

    KPTF.miHilo.añadirTarea(frender, 0, true);
    
    window.addEventListener('resize', onWindowResize, false);
}

/*
 * Funcion encargada del resposive design
 */
function onWindowResize() {
    KPTF.Renderizador.ANCHO = window.innerWidth - 5;
    KPTF.Renderizador.ALTO = window.innerHeight - 5;

    KPTF.Camara.ANCHO = window.innerWidth;
    KPTF.Camara.ALTO = window.innerHeight;

    camara.cambiarAspecto(window.innerWidth / window.innerHeight);
    render.cambiarTamaño(window.innerWidth, window.innerHeight);
}
/*
 * Renderiza las dos camara
 */
function frender() {
    render.renderizar(escena, camara);
}