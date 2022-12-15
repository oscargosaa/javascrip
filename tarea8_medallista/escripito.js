var posicion;

function resolve(p) {

    if (p == 1) {
    	document.write("Medalla de ouro");
    } 

    else if (p == 2){
    document.write("Medalla de plata");
    }

    else if (p == 3){
        document.write("Medalla de Bronce");
        }
    
    else {
    	document.write("mentiroso");
    }
}

posicion = prompt("En   que posición quedaste??");
resolve(posicion);