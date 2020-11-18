var nc = 0; 
function eligePorcentaje(tipo, visual){
    
    if(tipo=="Edad"){
        porcentajesEdad(visual);
    }
    if(tipo=="Género"){
        porcentajesGenero(visual);
    }
    if(tipo=="Sector"){
        porcentajesSector(visual);
    }
}
function porcentajesEdad(visual){
    nc++;
    document.getElementById("generadorPorcentajes").innerHTML='<canvas style="opacity:1;z-index:9999;" id="myChart'+nc+'"></canvas>'
    var list = document.getElementsByTagName("tr");
    let menor=0;
    let mayor18=0;
    let mayor30=0;
    let mayor40=0;
    let mayor50=0;
    let mayor60=0;
    let total=0
    for (let i = 3; i < list.length; i++) {
        const edad = list[i].getElementsByTagName("td")[1].innerText;
        total++;
        if(edad=="Menor de 18."){
            menor++;
        }
        else if(edad=="18-30."){
            mayor18++;
        }
        else if(edad=="31-40."){
            mayor30++;
        }
        else if(edad=="41-50.")
        {
            mayor40++;
        }
        else if(edad=="51-60.")
        {
            mayor50++;
        }
        else if(edad=="Mayor de 60.")
        {
            mayor60++;
        }
        
    }
    var ctx = document.getElementById('myChart'+nc).getContext('2d');
    let porcentajes=[menor*100/total,mayor18*100/total,mayor30*100/total,mayor40*100/total, mayor50*100/total, mayor60*100/total]
    document.getElementById("totalRespuestasGenteEncuestada").innerText=" : "+ total;
    var chart = new Chart(ctx,{
        "type":visual,
        "options":{
            
     },
        "data":{
            "labels":["Menor de 18","18-30","31-40","41-50","51-60","mayor de 60"],
            
            "datasets":[
                {"label":"My First Dataset",
                "data":[porcentajes[0], porcentajes[1], porcentajes[2], porcentajes[3], porcentajes[4], porcentajes[5]],
                "backgroundColor":["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 160, 5)", "rgb(0, 205, 86)", "rgb(200, 0, 86)","rgb(255, 0, 255)"]
                }]}});
    }
    function porcentajesSector(visual){
        nc++;
        document.getElementById("generadorPorcentajes").innerHTML='<canvas style="opacity:1;z-index:9999;" id="myChart'+nc+'"></canvas>'
        var list = document.getElementsByTagName("tr");
        let turismo=0;
        let tecnologico=0;
        let otros=0;
        let NoContesta=0;
        let educacion=0;
        let sanidad=0;
        let artistico=0;
        let servicios=0;
        let agricola=0;
        let comunicacion=0;
        let total=0
        for (let i = 3; i < list.length; i++) {
            const sector = list[i].getElementsByTagName("td")[3].innerText;
            total++;
            if(sector=="Turismo y Hostelería"){
                turismo++;
            }
            else if(sector=="Tecnológico"){
                tecnologico++;
            }
            else if(sector=="Educación"){
                educacion++;
            }
            else if(sector=="Sanidad")
            {
                sanidad++;
            }
            else if(sector=="Artístico")
            {
                artistico++;
            }
            else if(sector=="Servicios")
            {
                servicios++;
            }
            else if(sector=="Agrícola")
            {
                agricola++;
            }
            else if(sector=="Comunicación")
            {
                comunicacion++;
            }
            else if(sector=="Otros")
            {
                otros++;
            }
            else if(sector=="")
            {
                NoContesta++;
            }
            
        }
        var ctx = document.getElementById('myChart'+nc).getContext('2d');
        let porcentajes=[turismo*100/total,tecnologico*100/total,educacion*100/total,sanidad*100/total, artistico*100/total, servicios*100/total
            , agricola*100/total, comunicacion*100/total, otros*100/total, NoContesta*100/total]
        document.getElementById("totalRespuestasGenteEncuestada").innerText=" : "+ total;
        var chart = new Chart(ctx,{
            "type":visual,
            "options":{
                
         },
            "data":{
                "labels":["Turismo y hostelería","Tecnológico","Educación","Sanidad","Artístico","Servicios", "Agrícola", "Comunicación", "Otros", "No ha contestado"],
                
                "datasets":[
                    {"label":"My First Dataset",
                    "data":[porcentajes[0], porcentajes[1], porcentajes[2], porcentajes[3], porcentajes[4], porcentajes[5], porcentajes[6], porcentajes[7], porcentajes[8], porcentajes[9]],
                    "backgroundColor":["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 160, 5)", "rgb(0, 205, 86)", "rgb(200, 0, 86)","rgb(255, 0, 255)", "rgb(50, 0, 50)", "rgb(100, 0, 50)", "rgb(50, 0, 100)", "rgb(50, 100, 50)"]
                    }]}});
        }
    function porcentajesGenero(visual){
        nc++;
        document.getElementById("generadorPorcentajes").innerHTML='<canvas style="opacity:1;z-index:9999;" id="myChart'+nc+'"></canvas>'
        var list = document.getElementsByTagName("tr");
        let Mujer=0;
        let Hombre=0;
        let Otro=0;
        let NoDecirlo=0;
        let NoContesta=0;
        let total = 0;
        for (let i = 3; i < list.length; i++) {
            const sexo = list[i].getElementsByTagName("td")[2].innerText;
            total++;
            if(sexo=="Mujer."){
                Mujer++;
            }
            else if(sexo=="Hombre."){
                Hombre++;
            }
            else if(sexo=="Otro."){
                Otro++;
            }
            else if(sexo=="Prefiero no decirlo.")
            {
                NoDecirlo++;
            }
            else if(sexo=="")
            {
                NoContesta++;
            }
            
            
        }
        var ctx = document.getElementById('myChart'+nc).getContext('2d');
        let porcentajes=[Mujer*100/total,Hombre*100/total,Otro*100/total,NoDecirlo*100/total, NoContesta*100/total]
        document.getElementById("totalRespuestasGenteEncuestada").innerText=" : "+ total;
        var chart = new Chart(ctx,{
            "type":visual,
            "options":{
                
         },
            "data":{
                "labels":["Mujer","Hombre","Otro","Prefiere no decirlo","No han contestado"],
                
                "datasets":[
                    {"label":"My First Dataset",
                    "data":[porcentajes[0], porcentajes[1], porcentajes[2], porcentajes[3], porcentajes[4]],
                    "backgroundColor":["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 160, 5)", "rgb(0, 205, 86)", "rgb(200, 0, 86)"]
                    }]}});
        }
eligePorcentaje("Edad","pie")
document.getElementById("eligeVisualAgrupacion").addEventListener("change", (event)=>{
    eligePorcentaje( document.getElementById("eligeAgrupacion").value, event.target.value);
})
document.getElementById("eligeAgrupacion").addEventListener("change", (event)=>{
    eligePorcentaje( event.target.value,document.getElementById("eligeVisualAgrupacion").value );
})