
// ir generando canvas
var nc = 0; 
function PuestoPeligrar3(genero,vejez, visual, sectorElegido){
    
    nc++;
    document.getElementById("generador3").innerHTML='<canvas style="opacity:1;z-index:9999;" id="myChart3'+nc+'"></canvas>'
    var list = document.getElementsByTagName("tr");
    let devs=0;
    let leyes=0;
    let empresarios=0;
    let otros=0;
    let total=0
    for (let i = 3; i < list.length; i++) {

        const sexo = list[i].getElementsByTagName("td")[2].innerHTML;
        const edad = list[i].getElementsByTagName("td")[1].innerHTML;
        const respuesta = list[i].getElementsByTagName("td")[7].innerText;
        let sector = list[i].getElementsByTagName("td")[3].innerText;

        if((sexo==genero||genero=="Todos.")&&(edad==vejez||vejez=="Todos.")&&(sector==sectorElegido||sectorElegido=="Todos.")){          
            total++;
            splitearRespuesta = respuesta.split(",")
            splitearRespuesta.forEach(element => {
                if(element.trim()=="Desarrolladores de la tecnología."){
                    devs++;
                }
                else if(element.trim()=="Poder legislativo. (mediante leyes)"){
                    leyes++;
                }
                else if(element.trim()=="Empresarios."){
                    empresarios++;
                }
                else if(element.trim()=="Otro.")
                {
                    otros++;
                }
            });
           
        }
    }

    var ctx = document.getElementById('myChart3'+nc).getContext('2d');
    let porcentajes=[devs*100/total,leyes*100/total,empresarios*100/total,otros*100/total]
    var chart = new Chart(ctx,{
        "type":visual,
        "options":{
            "legend": { "display": false } 
            
     },
        "data":{
            "labels":["Desarrolladores de la tecnología","Poder legislativo","Empresarios","Otro"],
            
            "datasets":[
                {"label":"My First Dataset",
                "data":[porcentajes[0], porcentajes[1], porcentajes[2], porcentajes[3]],
                "backgroundColor":["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 160, 5)", "rgb(0, 205, 86)"]
                }]}});
            
    
    document.getElementById("totalrespuestas3").innerText=" : "+ total;
    document.getElementById("porcentajeDev").innerText=" "+ porcentajes[0].toFixed(1)+"% ("+devs+")";
    document.getElementById("porcentajeLey").innerText=" "+ porcentajes[1].toFixed(1)+"% ("+leyes+")";
    document.getElementById("porcentajeEmp").innerText=" "+ porcentajes[2].toFixed(1)+"% ("+empresarios+")";
    document.getElementById("porcentajeOtro").innerText=" "+ porcentajes[3].toFixed(1)+"% ("+otros+")";

    }
PuestoPeligrar3("Todos.", "Todos.", "bar", "Todos.")

var eligeSexo3= document.getElementById("eligeSexo3");
var eligeEdad3=document.getElementById("eligeEdad3");
var eligeVisual3 = document.getElementById("eligeVisual3");
var eligeSector3 = document.getElementById("eligeSector3");

eligeSexo3.addEventListener("change",(event)=>{
    if(event.target.value=="No ha contestado."){
        event.target.value=""
    }
    PuestoPeligrar3(event.target.value, eligeEdad3.value, eligeVisual3.value)
    if(event.target.value==""){
        event.target.value="No ha contestado."
    }
},false)
eligeVisual3.addEventListener("change", (event)=>{
    PuestoPeligrar3( eligeSexo3.value, eligeEdad3.value, event.target.value)
})
eligeEdad3.addEventListener("change",(event)=>{
    PuestoPeligrar3( eligeSexo3.value, event.target.value, eligeVisual3.value)
},false)

eligeSector3.addEventListener("change", (event)=>{
    if(event.target.value=="No ha contestado"){
        event.target.value=""
    }
    PuestoPeligrar3( eligeSexo3.value, eligeEdad3.value, eligeVisual3.value, event.target.value)
    if(event.target.value==""){
        event.target.value="No ha contestado"
    }

})

