/**
* @fileoverview Este AM representa una geometria en el escenario
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/
KPTF.Geometria = function () {
};

/*
 * Retorna la geometria con su respectiva textura
 * @param {objeto} es la geometria, un cubo por defecto
 * @param {objeto} es el material
 * @return {objeto} mezcla de la geometria y el material
 */
KPTF.Geometria.obtenerGeometria = function () {
    var geometria = arguments[0] || this.obtenerCubo(4, 4, 4);
    var material = arguments[1];
    return new THREE.Mesh(geometria, material);
};

/*
 * Retorna un cubo
 * @param {integer} ancho es el ancho del cubo
 * @param {integer} alto es el alto del cubo
 * @param {integer} largo es el largo del cubo
 * @return {objeto} cubo especificado
 */
KPTF.Geometria.obtenerCubo = function (ancho, alto, largo) {
    return new THREE.BoxGeometry(ancho, alto, largo);
};

/*
 * Retorna una esfera
 * @param {integer} ancho es el ancho de la esfera
 * @param {integer} alto es el alto de la esfera
 * @param {integer} largo es el largo de la esfera
 * @return {objeto} esfera especificada
 */
KPTF.Geometria.obtenerEsfera = function (ancho, alto, largo) {
    return new THREE.SphereGeometry(ancho, alto, largo);
};

/*
 * Genera un material basico
 * @param {objeto} arguments[0] es el color en hexadecimal, por defecto 0xFF0000
 * @param {objeto} arguments[1] indica si el material es recubierto o solo la malla
 * true por defecto.
 * @return {objeto} retorna el material basico solicitado
 */
KPTF.Geometria.obtenerMaterialBasico = function () {
    var color = arguments[0] || 0xFF0000;
    var wireframe = true || arguments[1];
    return new THREE.MeshBasicMaterial({color: color, wireframe: wireframe});
};

/*
 * Genera un material texturizado
 * @param {objeto} arguments[0] es la ruta de la textura
 * @param {objeto} arguments[1] es el color en hexadecimal, por defecto 0xFF0000
 * @return {objeto} retorna el material texturizado solicitado
 */
KPTF.Geometria.obtenerMaterialTextura = function () {
    var ruta = arguments[0];
    var color = arguments[1] || 0xFFFFFF;
    return new THREE.MeshPhongMaterial({color: color, map: THREE.ImageUtils.loadTexture(ruta)});
};

//Inicia el AM 
KPTF.Geometria.iniciar = function () {
};

/*
 * se le asigna al AM el identificador, la version para el framework y la
 * informacion mostrada en consola
 */
KPTF.Geometria.am_id = "three.geometria";
KPTF.Geometria.am_version = 1.0;
KPTF.Geometria.am_log = "Geometrias basado en three.js";

//se añade el AM al arreglo de adicion de modular
KPTF.añadirAM(KPTF.Geometria);