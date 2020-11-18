function muestraOtrosComentarios(){
    marcoAmenaza = document.getElementById("marcoOtros");
    let list = document.getElementsByTagName("tr");
    totalComentarios = 0;
    let relacionados =[3, 6, 20, 21, 31, 32, 38, 42, 46, 63, 86, 92, 94, 98, 101, 102, 104,106, 107, 108, 110
    , 111, 113, 134, 136, 146, 149,167, 179, 180, 181, 184, 189, 192 ]
    let negativos = [128]
    let divertidos = [39, 51, 65, 87, 119, 124, 120, 135, 145, 170,175]
    
    for (let i = 3; i < list.length; i++) {
        const comentario = list[i].getElementsByTagName("td")[11].innerText;
        let tipocomentario="comentario"
        if(comentario!=""){
            if(relacionados.includes(i)){
                tipocomentario="comentario";
    
            }else if(negativos.includes(i)){
                tipocomentario="comentarioDestacado";
            }
            else if(divertidos.includes(i)){
                tipocomentario="comentarioFuera";
            }else {
                tipocomentario="comentarioPositivo";
            }
            totalComentarios++;
            marcoAmenaza.innerHTML += `<em><div class="${tipocomentario}">"${comentario}"</div></em>`;
        }
    }
}
muestraOtrosComentarios();