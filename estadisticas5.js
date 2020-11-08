
// ir generando canvas
var nc = 0; 
function PuestoPeligrar5(genero, vejez, visual, sectorElegido){
    
    nc++;
    document.getElementById("generador5").innerHTML='<canvas style="opacity:1;z-index:9999;" id="myChart5'+nc+'"></canvas>'
    var list = document.getElementsByTagName("tr");
    let persona=0;
    let pantalla=0;
    let no=0;
    let total=0
    for (let i = 3; i < list.length; i++) {

        const sexo = list[i].getElementsByTagName("td")[2].innerHTML;
        const edad = list[i].getElementsByTagName("td")[1].innerHTML;
        const respuesta = list[i].getElementsByTagName("td")[9].innerText;
        let sector = list[i].getElementsByTagName("td")[3].innerText;
        if((sexo==genero||genero=="Todos.")&&(edad==vejez||vejez=="Todos.")&&(sector==sectorElegido||sectorElegido=="Todos.")){
            
            total++;
            if(respuesta=="Con la persona."){
                persona++;
            }
            else if(respuesta=="Con la pantalla."){
                pantalla++;
            }
            else if(respuesta=="No he ido."){
                no++;
            }
            
        }
    }

    var ctx = document.getElementById('myChart5'+nc).getContext('2d');
    let porcentajes=[persona*100/total,pantalla*100/total,no*100/total]
    var chart = new Chart(ctx,{
        "type":visual,
        "options":{
            "legend": { "display": false } 
            
     },
        "data":{
            "labels":["Con la persona","Con la pantalla","No he ido"],
            
            "datasets":[
                {"label":"My First Dataset",
                "data":[porcentajes[0], porcentajes[1], porcentajes[2]],
                "backgroundColor":["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 160, 5)"]
                }]}});
            
    
    document.getElementById("totalrespuestas5").innerText=" : "+ total;
    document.getElementById("porcentajePersona").innerText=" "+ porcentajes[0].toFixed(1)+"% ";
    document.getElementById("porcentajePantalla").innerText=" "+ porcentajes[1].toFixed(1)+"% ";
    document.getElementById("porcentajeNo5").innerText=" "+ porcentajes[2].toFixed(1)+"% ";

    }
PuestoPeligrar5("Todos.", "Todos.", "pie", "Todos.")

var eligeSexo5= document.getElementById("eligeSexo5");
var eligeEdad5=document.getElementById("eligeEdad5");
var eligeVisual5 = document.getElementById("eligeVisual5");
var eligeSector5 = document.getElementById("eligeSector5");

eligeSexo5.addEventListener("change",(event)=>{
    if(event.target.value=="No ha contestado."){
        event.target.value=""
    }
    PuestoPeligrar5(event.target.value, eligeEdad5.value, eligeVisual5.value)
    if(event.target.value==""){
        event.target.value="No ha contestado."
    }
},false)
eligeVisual5.addEventListener("change", (event)=>{
    PuestoPeligrar5( eligeSexo5.value, eligeEdad5.value, event.target.value)
})
eligeEdad5.addEventListener("change",(event)=>{
    console.log(eligeVisual.value)
    PuestoPeligrar5( eligeSexo5.value, event.target.value, eligeVisual5.value)
},false)

eligeSector5.addEventListener("change", (event)=>{
    if(event.target.value=="No ha contestado"){
        event.target.value=""
    }
    PuestoPeligrar5( eligeSexo5.value, eligeEdad5.value, eligeVisual5.value, event.target.value)
    if(event.target.value==""){
        event.target.value="No ha contestado"
    }

})

