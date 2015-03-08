/**
* @fileoverview Es el main del framework, aqui se incluyen los
* JavaScripts y CSS del proyecto
*
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/

KPTF.iniciar();
//KPTF.incluirCSS("estilo");
KPTF.incluirJS("cod/renderizado");

window.onload = function(){
    iniciarRenderizado();
};