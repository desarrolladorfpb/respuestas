function muestraComentariosTecnologia(){
    marcoAmenaza = document.getElementById("marcoTecnologia");
    let list = document.getElementsByTagName("tr");

    totalComentarios = 0;
    let destacados= [3, 4, 6, 8, 9, 14, 15, 18, 20, 21, 25, 32, 34, 35, 40, 46, 47, 49, 56, 64, 68, 71, 75
    , 79, 82, 85, 87, 89, 92, 116, 130, 134, 140, 142, 149, 153, 159, 161, 163, 165, 168, 195];
    let fuera=[51, 108, 170];
    for (let i = 3; i < list.length; i++) {
        const comentario = list[i].getElementsByTagName("td")[10].innerText;

        let tipocomentario="comentario";
        if(comentario!=""){
            if(destacados.includes(i)){
                tipocomentario="comentarioDestacado";
    
            }else if(fuera.includes(i)){
                tipocomentario="comentarioFuera";
            }else {
                
                 tipocomentario="comentario";
            }
            totalComentarios++;
            marcoAmenaza.innerHTML += `<em><div class="${tipocomentario}">"${comentario}"</div></em>`;
        }
    }
}
muestraComentariosTecnologia();