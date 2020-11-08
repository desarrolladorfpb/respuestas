
// ir generando canvas
var nc = 0; 
function PuestoPeligrar2(genero,vejez, visual, sectorElegido){
    
    nc++;
    document.getElementById("generador2").innerHTML='<canvas style="opacity:1;z-index:9999;" id="myChart2'+nc+'"></canvas>'
    var list = document.getElementsByTagName("tr");
    let no=0;
    let improbable=0;
    let probable=0;
    let si=0;
    let total=0
    for (let i = 3; i < list.length; i++) {

        const sexo = list[i].getElementsByTagName("td")[2].innerHTML;
        const edad = list[i].getElementsByTagName("td")[1].innerHTML;
        const respuesta = list[i].getElementsByTagName("td")[6].innerText;
        let sector = list[i].getElementsByTagName("td")[3].innerText;
        if((sexo==genero||genero=="Todos.")&&(edad==vejez||vejez=="Todos.")&&(sector==sectorElegido||sectorElegido=="Todos.")){
            
            total++;
            if(respuesta=="Bastante probable."){
                probable++;
            }
            else if(respuesta=="Sí."){
                si++;
            }
            else if(respuesta=="Bastante improbable."){
                improbable++;
            }
            else if(respuesta=="No.")
            {
                no++;
            }
        }
    }

    var ctx = document.getElementById('myChart2'+nc).getContext('2d');
    let porcentajes=[si*100/total,probable*100/total,improbable*100/total,no*100/total]
    var chart = new Chart(ctx,{
        "type":visual,
        "options":{
            "legend": { "display": false } 
            
     },
        "data":{
            "labels":["Si","Bastante probable","Bastante improbable","No"],
            
            "datasets":[
                {"label":"My First Dataset",
                "data":[porcentajes[0], porcentajes[1], porcentajes[2], porcentajes[3]],
                "backgroundColor":["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 160, 5)", "rgb(0, 205, 86)"]
                }]}});
            
    
    document.getElementById("totalrespuestas2").innerText=" : "+ total;
    document.getElementById("porcentajeSi").innerText=" "+ porcentajes[0].toFixed(1)+"% ";
    document.getElementById("porcentajeProbable").innerText=" "+ porcentajes[1].toFixed(1)+"% ";
    document.getElementById("porcentajeIm").innerText=" "+ porcentajes[2].toFixed(1)+"% ";
    document.getElementById("porcentajeNo2").innerText=" "+ porcentajes[3].toFixed(1)+"% ";

    }
PuestoPeligrar2("Todos.", "Todos.", "pie", "Todos.")

var eligeSexo2= document.getElementById("eligeSexo2");
var eligeEdad2=document.getElementById("eligeEdad2");
var eligeVisual2 = document.getElementById("eligeVisual2");
var eligeSector2 = document.getElementById("eligeSector2");

eligeSexo2.addEventListener("change",(event)=>{
    if(event.target.value=="No ha contestado."){
        event.target.value=""
    }
    PuestoPeligrar2(event.target.value, eligeEdad2.value, eligeVisual2.value, eligeSector2.value)
    if(event.target.value==""){
        event.target.value="No ha contestado."
    }
},false)
eligeVisual2.addEventListener("change", (event)=>{
    PuestoPeligrar2( eligeSexo2.value, eligeEdad2.value, event.target.value, eligeSector2.value)
})
eligeEdad2.addEventListener("change",(event)=>{
    PuestoPeligrar2( eligeSexo2.value, event.target.value, eligeVisual2.value, eligeSector2.value)
},false)

eligeSector2.addEventListener("change", (event)=>{
    if(event.target.value=="No ha contestado"){
        event.target.value=""
    }
    PuestoPeligrar2( eligeSexo2.value, eligeEdad2.value, eligeVisual2.value, event.target.value)
    if(event.target.value==""){
        event.target.value="No ha contestado"
    }

})

