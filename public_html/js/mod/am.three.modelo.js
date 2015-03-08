/**
* @fileoverview Este AM representa un modelo en el escenario
* @author Jose Wilson Capera Castaño
* @author Estefania Alzate Daza
* @version 1.0
*/

/*
 * se asigna al modelo la funcion en la cual recibe por parametros la escena o 
 * funcion , la geometria y el material o la ruta de ellos, la posicion x,y,z y
 * la escala que se quiere para el modeloy posteriormente se llama a la funcion 
 * enviada por parametro o se añadea la escena
 */
KPTF.Modelo=function(){
    var rutaGeometriaJSON=arguments[0];
    var ruta_o_material=arguments[1];
    var funcion_o_escena=arguments[2];
    var xyz = arguments[3] || {x:0,y:0,z:0};
    var escalar = arguments[4] || {x:1,y:1,z:1};
    
    this.objetoMaterial;
    this.objetoGeometria;
    this.objeto;
    
    var self = this;
    
    /*
     * Se encarga de almacenar el modelo despues de su precarga
     * @param {object} objeto mescla de la geometria y el material
     * @param {object} objetoGeometria geometria del objeto
     * @param {object} objetoMaterial material del objeto
     */
    function almacenarModelo(objeto, objetoGeometria, objetoMaterial){
        self.objeto=objeto;
        self.objetoGeometria=objetoGeometria;
        self.objetoMaterial=objetoMaterial;
        
        if(typeof(funcion_o_escena)===KPTF.TIPO_FUNCION)
            funcion_o_escena(objeto, objetoGeometria, objetoMaterial);
        else
            funcion_o_escena.añadir(objeto);
    }
    
    var temp = new KPTF.ModeloPrecarga(rutaGeometriaJSON,ruta_o_material, almacenarModelo ,xyz, escalar);
};

/*
 * Se encarga de precargar un modelo
 * @param {string} arguments[0] ruta de la geometria JSON
 * @param {string, object} arguments[1] ruta del materia o material
 * @param {object} arguments[2] funcion a llamar despues de la precarga
 * @param {object} arguments[3] vector de posicion X, Y y Z
 * @param {object} arguments[4] vector de escalar X, Y y Z
 */
KPTF.ModeloPrecarga=function(){
    
    var loader = new THREE.JSONLoader();
    this.objetoMaterial;
    this.objetoGeometria;
    this.objeto;

    var rutaGeometriaJSON=arguments[0];
    var ruta_o_material=arguments[1];
    var funcion_o_escena=arguments[2];

    var xyz = arguments[3] || {x:0,y:0,z:0};
    var escalar = arguments[4] || {x:1,y:1,z:1};

    loader.load(rutaGeometriaJSON, function(geometria){
        this.objetoMaterial;
        this.objetoGeometria;
        this.objeto;
        if(typeof(ruta_o_material)===KPTF.TIPO_CADENA)
            objetoMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, map: THREE.ImageUtils.loadTexture(ruta_o_material)});
        if(typeof(ruta_o_material)===KPTF.TIPO_OBJETO)
            objetoMaterial = ruta_o_material;
        if(typeof(ruta_o_material)===KPTF.TIPO_INDEFINIDO || ruta_o_material===null)
            objetoMaterial=new THREE.MeshLambertMaterial({color: 0x00ff00});
        objetoGeometria = geometria;
        objeto = new THREE.Mesh(this.objetoGeometria, this.objetoMaterial);

        if(typeof(xyz)===KPTF.TIPO_NUMERO)
            xyz={x: xyz, y:xyz, z:xyz};
        
        objeto.position.x=xyz["x"];
        objeto.position.y=xyz["y"];
        objeto.position.z=xyz["z"];

        if(typeof(escalar)===KPTF.TIPO_NUMERO)
            escalar={x: escalar, y:escalar, z:escalar};

        objeto.scale.x=escalar["x"];
        objeto.scale.y=escalar["y"];
        objeto.scale.z=escalar["z"];

        if(typeof(funcion_o_escena)===KPTF.TIPO_FUNCION)
            funcion_o_escena(objeto, objetoGeometria, objetoMaterial);
        else
            funcion_o_escena.añadir(objeto);
    });
    
    
};

//Inicia el AM 
KPTF.Modelo.iniciar=function(){
};

/*
 * se le asigna al AM el identificador, la version para el framework y la
 * informacion mostrada en consola
 */
KPTF.Modelo.am_id="modelo";
KPTF.Modelo.am_version=1.0;
KPTF.Modelo.am_log="Modelo basado en Three.js";

//se añade el AM al arreglo de adicion de modular
KPTF.añadirAM(KPTF.Modelo);