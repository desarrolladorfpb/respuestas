
// ir generando canvas
var nc = 0; 

function PuestoPeligrar(genero,vejez){
    
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
        console.log(edad)
        console.log(vejez)
        const respuesta = list[i].getElementsByTagName("td")[4].innerText;
        if((sexo==genero||genero=="Todos.")&&(edad==vejez||vejez=="Todos.")){
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
        "type":"pie",
        "data":{
            "labels":["Si, mi trabajo futuro","Si, mi trabajo presente","Si, mi trabajo pasado","No"],
            "options":{
                
         },
            "datasets":[
                {"label":"My First Dataset",
                "data":[porcentajes[0], porcentajes[1], porcentajes[2], porcentajes[3]],
                "backgroundColor":["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)", "rgb(0, 205, 86)"]
                }]}});
            
    
    //
    console.log(genero+":")
    console.log("futuro"+ futuro*100/total)
    console.log("presente"+ presente*100/total)
    console.log("pasado"+ pasado*100/total)
    console.log("no"+ no*100/total)
    console.log("-------------------------------")
    }
PuestoPeligrar("Todos.", "Todos.")

document.getElementById("eligeSexo").addEventListener("change",(event)=>{
    if(event.target.value=="No ha contestado."){
        event.target.value=""
    }
    PuestoPeligrar(event.target.value, document.getElementById("eligeEdad").value)
    if(event.target.value==""){
        event.target.value="No ha contestado."
    }
},false)
document.getElementById("eligeEdad").addEventListener("change",(event)=>{
    if(event.target.value=="No ha contestado."){
        event.target.value=""
    }
    PuestoPeligrar( document.getElementById("eligeSexo").value,event.target.value)
    if(event.target.value==""){
        event.target.value="No ha contestado."
    }
},false)

