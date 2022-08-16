

function balão(){
var balão = document.getElementById("balão1").style.display = "block"


}

function balão01(){
    var balão = document.getElementById("balão1").style.display = "none"
}

function balão1(){
    var balão = document.getElementById("balão2").style.display = "block"
    
    
    }
    
    function balão02(){
        var balão = document.getElementById("balão2").style.display = "none"
    }

function balão2(){
        var balão = document.getElementById("balão3").style.display = "block"
        
        
    }
        
function balão03(){
            var balão = document.getElementById("balão3").style.display = "none"
    }

    function balão3(){
        var balão = document.getElementById("balão4").style.display = "block"
        
        
    }
        
function balão04(){
            var balão = document.getElementById("balão4").style.display = "none"
    }

function barra(val){
    var barra = document.getElementById("barra");
    var txt = document.getElementById("txt");
    var por = 100 * (val/500);
    

   if(por <= 10){
    barra.style.width = por + "%";
    txt.innerHTML = por + "%";
       barra.style.background = "red"
   } else if (por <= 50){
    barra.style.width = por + "%";
    txt.innerHTML = por + "%";
       barra.style.background = "yellow"
   } else if (por <= 100){
    barra.style.width = por + "%";
    txt.innerHTML = por + "%";
    barra.style.background = "green"
   } else{
    barra.style.width = 100 + "%";
    txt.innerHTML = "+" + 100 + "%";
    barra.style.background = "green"
   }

}

function barra_temperatura(val){
    var barra = document.getElementById("barra_temperatura");
    var txt = document.getElementById("txt1");
   

   if(val <= 10){
    barra.style.width = val + "%";
    txt.innerHTML = val + "ºc"
       barra.style.background = "blue"
       
   } else if (val <= 50){
       barra.style.background = "orange"
       barra.style.width = val + "%";
       txt.innerHTML = val + "ºc"
   } else if(val <= 100){
    barra.style.background = "red"
    barra.style.width = val + "%";
    txt.innerHTML = val + "ºc"
   } else{
    barra.style.background = "red"
    barra.style.width = 100 + "%";
    txt.innerHTML = val + "ºc"
   }

}

function barra_planta(val){
    var barra = document.getElementById("barra_planta");
    var txt = document.getElementById("txt3");
    var por = 100 * (val/500);
    

   if(por <= 10){
    barra.style.width = por + "%";
    txt.innerHTML = por + "%";
       barra.style.background = "red"
   } else if (por <= 50){
    barra.style.width = por + "%";
    txt.innerHTML = por + "%";
       barra.style.background = "orange"
   } else if (por <= 100){
    barra.style.width = por + "%";
    txt.innerHTML = por + "%";
    barra.style.background = "green"
   } else{
    barra.style.width = 100 + "%";
    txt.innerHTML = "+" + 100 + "%";
    barra.style.background = "green"
   }
}

function perfil(){
    var perfil = document.getElementById("perfil").style.display = "block";
    
}

function perfil2(){
    var perfil = document.getElementById("perfil").style.display = "none";
}

function alerta(){
    var box = document.getElementById("box_alerta").style.display = "block";
}

function alerta2(){
    var box = document.getElementById("box_alerta").style.display = "none";
}


function menu(){
    var menu = document.getElementById("box_menu").style.display = "block";
}

function  menu_saida(){
    var menu = document.getElementById("box_menu").style.display = "none";
    
}



   

