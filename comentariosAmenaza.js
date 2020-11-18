function muestraComentariosAmenaza(){
    marcoAmenaza = document.getElementById("marcoAmenaza");
    let list = document.getElementsByTagName("tr");
    let destacados= [13, 30, 39, 48, 49, 75, 87, 89, 95, 109, 110, 111, 116, 134, 150, 157, 186, 191]
    let fuera=[51, 170]
    let tipocomentario="";
    totalComentarios = 0;
    for (let i = 3; i < list.length; i++) {
        const comentario = list[i].getElementsByTagName("td")[5].innerText;
        
        if(destacados.includes(i)){
            tipocomentario="comentarioDestacado";

        }else if(fuera.includes(i)){
            tipocomentario="comentarioFuera";
        }else {
            
             tipocomentario="comentario";
        }
        if(comentario!=""){
            totalComentarios++;
            marcoAmenaza.innerHTML += `<em><div class="${tipocomentario}">"${comentario}"</div></em>`;
        }
    }
}
muestraComentariosAmenaza();