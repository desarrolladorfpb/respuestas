
// ir generando canvas
var nc = 0; 
function recogeSectores(){
    let lista = document.getElementsByTagName("tr");
    
    sectores=[];
    for (let index = 3; index < lista.length; index++) {
        let sector = lista[index].getElementsByTagName("td")[3].innerText;
        if(!sectores.includes(sector)){
            sectores.push(sector);
        }
    }
   
   
    console.log(sectores)
}
recogeSectores()
function PuestoPeligrar(genero,vejez, visual, sectorElegido){
    
    nc++;
    document.getElementById("generador").innerHTML='<canvas style="opacity:1;z-index:9999;" id="myChart'+nc+'"></canvas>'
    var list = document.getElementsByTagName("tr");
    let no=0;
    let futuro=0;
    let pasado=0;
    let presente=0;
    let total=0
    for (let i = 3; i < list.length; i++) {

        const sexo = list[i].getElementsByTagName("td")[2].innerHTML;
        const edad = list[i].getElementsByTagName("td")[1].innerHTML;
        let sector = list[i].getElementsByTagName("td")[3].innerText;
        const respuesta = list[i].getElementsByTagName("td")[4].innerText;
        if((sexo==genero||genero=="Todos.")&&(edad==vejez||vejez=="Todos.")&&(sector==sectorElegido||sectorElegido=="Todos.")){
            
            total++;
            if(respuesta=="Si, mi trabajo pasado."){
                pasado++;
            }
            else if(respuesta=="No."){
                no++;
            }
            else if(respuesta=="Si, mi trabajo presente."){
                presente++;
            }
            else if(respuesta=="Si, mi trabajo futuro (por ejemplo si eres estudiante).")
            {
                futuro++;
            }
        }
    }

    var ctx = document.getElementById('myChart'+nc).getContext('2d');
    let porcentajes=[futuro*100/total,presente*100/total,pasado*100/total,no*100/total]
    var chart = new Chart(ctx,{
        "type":visual,
        "options":{
            "legend": { "display": false } 
            
     },
        "data":{
            "labels":["Si, mi trabajo futuro","Si, mi trabajo presente","Si, mi trabajo pasado","No"],
            
            "datasets":[
                {"label":"My First Dataset",
                "data":[porcentajes[0], porcentajes[1], porcentajes[2], porcentajes[3]],
                "backgroundColor":["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 160, 5)", "rgb(0, 205, 86)"]
                }]}});
            
    
    document.getElementById("totalrespuestas").innerText=" : "+ total;
    document.getElementById("porcentajeFuturo").innerText=" "+ porcentajes[0].toFixed(1)+"% ";
    document.getElementById("porcentajePasado").innerText=" "+ porcentajes[2].toFixed(1)+"% ";
    document.getElementById("porcentajePresente").innerText=" "+ porcentajes[1].toFixed(1)+"% ";
    document.getElementById("porcentajeNo").innerText=" "+ porcentajes[3].toFixed(1)+"% ";
    }
PuestoPeligrar("Todos.", "Todos.", "pie", "Todos.")

document.getElementById("eligeSexo").addEventListener("change",(event)=>{
    if(event.target.value=="No ha contestado."){
        event.target.value=""
    }
    PuestoPeligrar(event.target.value, document.getElementById("eligeEdad").value, document.getElementById("eligeVisual").value, document.getElementById("eligeSector").value)
    if(event.target.value==""){
        event.target.value="No ha contestado."
    }
},false)
document.getElementById("eligeVisual").addEventListener("change", (event)=>{
    PuestoPeligrar( document.getElementById("eligeSexo").value, document.getElementById("eligeEdad").value, event.target.value, document.getElementById("eligeSector").value)
})

document.getElementById("eligeEdad").addEventListener("change",(event)=>{
    PuestoPeligrar( document.getElementById("eligeSexo").value, event.target.value, document.getElementById("eligeVisual").value, document.getElementById("eligeSector").value)
},false)

document.getElementById("eligeSector").addEventListener("change", (event)=>{
    if(event.target.value=="No ha contestado"){
        event.target.value=""
    }
    PuestoPeligrar( document.getElementById("eligeSexo").value, document.getElementById("eligeEdad").value,document.getElementById("eligeVisual").value, event.target.value)
    if(event.target.value==""){
        event.target.value="No ha contestado"
    }

})

