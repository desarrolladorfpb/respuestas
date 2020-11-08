
// ir generando canvas
var nc = 0; 
function PuestoPeligrar4(genero,vejez, visual, sectorElegido){
    
    nc++;
    document.getElementById("generador4").innerHTML='<canvas style="opacity:1;z-index:9999;" id="myChart4'+nc+'"></canvas>'
    var list = document.getElementsByTagName("tr");
    let tiempo=0;
    let costumbre=0;
    let si=0;
    let total=0
    for (let i = 3; i < list.length; i++) {

        const sexo = list[i].getElementsByTagName("td")[2].innerHTML;
        const edad = list[i].getElementsByTagName("td")[1].innerHTML;
        const respuesta = list[i].getElementsByTagName("td")[8].innerText;
        let sector = list[i].getElementsByTagName("td")[3].innerText;

        if((sexo==genero||genero=="Todos.")&&(edad==vejez||vejez=="Todos.")&&(sector==sectorElegido||sectorElegido=="Todos.")){
            
            total++;
            if(respuesta=="Si, no se deberían automatizar procesos que requieran empatía."){
                si++;
            }
            else if(respuesta=="No, acabaríamos por acostumbrarnos."){
                costumbre++;
            }
            else if(respuesta=="No, si sirve para ganar tiempo."){
                tiempo++;
            }
            
        }
    }

    var ctx = document.getElementById('myChart4'+nc).getContext('2d');
    let porcentajes=[si*100/total,costumbre*100/total,tiempo*100/total]
    var chart = new Chart(ctx,{
        "type":visual,
        "options":{
            "legend": { "display": false } 
            
     },
        "data":{
            "labels":["Si","No, acabariamos por acostumbrarnos","No, si sirve para ganar tiempo"],
            
            "datasets":[
                {"label":"My First Dataset",
                "data":[porcentajes[0], porcentajes[1], porcentajes[2]],
                "backgroundColor":["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 160, 5)"]
                }]}});
            
    
    document.getElementById("totalrespuestas4").innerText=" : "+ total;
    document.getElementById("porcentajeEmpatia").innerText=" "+ porcentajes[0].toFixed(1)+"% ";
    document.getElementById("porcentajeCostumbre").innerText=" "+ porcentajes[1].toFixed(1)+"% ";
    document.getElementById("porcentajeTime").innerText=" "+ porcentajes[2].toFixed(1)+"% ";

    }
PuestoPeligrar4("Todos.", "Todos.", "pie", "Todos.")

var eligeSexo4= document.getElementById("eligeSexo4");
var eligeEdad4=document.getElementById("eligeEdad4");
var eligeVisual4 = document.getElementById("eligeVisual4");
var eligeSector4 = document.getElementById("eligeSector4");

eligeSexo4.addEventListener("change",(event)=>{
    if(event.target.value=="No ha contestado."){
        event.target.value=""
    }
    PuestoPeligrar4(event.target.value, eligeEdad4.value, eligeVisual4.value, eligeSector4.value)
    if(event.target.value==""){
        event.target.value="No ha contestado."
    }
},false)
eligeVisual4.addEventListener("change", (event)=>{
    PuestoPeligrar4( eligeSexo4.value, eligeEdad4.value, event.target.value, eligeSector4.value)
})
eligeEdad4.addEventListener("change",(event)=>{
    console.log(eligeVisual.value)
    PuestoPeligrar4( eligeSexo4.value, event.target.value, eligeVisual4.value, eligeSector4.value)
},false)

eligeSector4.addEventListener("change", (event)=>{
    if(event.target.value=="No ha contestado"){
        event.target.value=""
    }
    PuestoPeligrar4( eligeSexo4.value, eligeEdad4.value, eligeVisual4.value, event.target.value)
    if(event.target.value==""){
        event.target.value="No ha contestado"
    }

})

