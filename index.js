var btnleng = document.getElementById("l");
var lenguaje = document.getElementById("leng");
var btnhist = document.getElementById("h");
var historia = document.getElementById("hist");
var btnubi = document.getElementById("u");
var ubicacion = document.getElementById("ubi");
var btncre = document.getElementById("c");
var creencias = document.getElementById("cre");
var btnsoci = document.getElementById("s");
var sociedad = document.getElementById("soci");
var btntra = document.getElementById("t");
var tradiciones = document.getElementById("tra");
var btncom = document.getElementById("co");
var comida = document.getElementById("com");
let vh=false;
let vu=false;
let vl=false;
let vc=false;
let vs=false;
let vt=false;
let vco=false;

btnubi.addEventListener('click', function(){
    if(vu==false){
        ubicacion.style="display: block;"
        comida.style="display: none;";
        sociedad.style="display: none;";
        creencias.style="display: none;";
        lenguaje.style="display: none;";
        historia.style="display: none;";
        tradiciones.style="display: none;";
    vh=false;
    vu=false;
    vl=false;
    vc=false;
    vs=false;
    vt=false;
    vco=false;
        vu=true;
    }else{
        ubicacion.style="display: none;"
        vu=false;
    }
});
btnhist.addEventListener('click', function(){
    if(vh==false){
        historia.style="display: block;"
        comida.style="display: none;";
        sociedad.style="display: none;";
        creencias.style="display: none;";
        lenguaje.style="display: none;";
        ubicacion.style="display: none;";
        tradiciones.style="display: none;";
        vh=true;
        vu=false;
        vl=false;
        vc=false;
        vs=false;
        vt=false;
        vco=false;
    }else{
        historia.style="display: none;"
        vh=false;
    }
});
btnleng.addEventListener('click', function(){
    if(vl==false){
        lenguaje.style="display: block;"
        comida.style="display: none;";
        sociedad.style="display: none;";
        creencias.style="display: none;";
        historia.style="display: none;";
        ubicacion.style="display: none;";
        tradiciones.style="display: none;";
        vl=true;
        vh=false;
        vu=false;
        vc=false;
        vs=false;
        vt=false;
        vco=false;
    }else{
        lenguaje.style="display: none;"
        vl=false;
    }
});

btncre.addEventListener('click', function(){
    if(vc==false){
        creencias.style="display: block;";
        comida.style="display: none;";
        sociedad.style="display: none;";
        lenguaje.style="display: none;";
        historia.style="display: none;";
        ubicacion.style="display: none;";
        tradiciones.style="display: none;";
        vh=false;
        vu=false;
        vl=false;
        vc=true;
        vs=false;
        vt=false;
        vco=false;
    }else{
        creencias.style="display: none;"
        vc=false;
    }
});

btnsoci.addEventListener('click', function(){
    if(vs==false){
        sociedad.style="display: block;";
        comida.style="display: none;";
        creencias.style="display: none;";
        lenguaje.style="display: none;";
        historia.style="display: none;";
        ubicacion.style="display: none;";
        tradiciones.style="display: none;";
        vh=false;
        vu=false;
        vl=false;
        vc=false;
        vs=true;
        vt=false;
        vco=false;
    }else{
        sociedad.style="display: none;"
        vs=false;
    }
});
btntra.addEventListener('click', function(){
    if(vt==false){
        tradiciones.style="display: block;";
        comida.style="display: none;";
        sociedad.style="display: none;";
        creencias.style="display: none;";
        lenguaje.style="display: none;";
        historia.style="display: none;";
        ubicacion.style="display: none;";
        vh=false;
        vu=false;
        vl=false;
        vc=false;
        vs=false;
        vt=true;
        vco=false;
    }else{
        tradiciones.style="display: none;"
        vt=false;
    }
});
btncom.addEventListener('click', function(){
    if(vco==false){
        comida.style="display: block;";
        sociedad.style="display: none;";
        creencias.style="display: none;";
        lenguaje.style="display: none;";
        historia.style="display: none;";
        ubicacion.style="display: none;";
        tradiciones.style="display: none;";
        vh=false;
        vu=false;
        vl=false;
        vc=false;
        vs=false;
        vt=false;
        vco=true;
    }else{
        comida.style="display: none;"
        vco=false;
    }
});