

function crearTablaAmigos(){

 
  var tabla = document.createElement("table");
    
  document.getElementById("contenedor_amigos").appendChild(tabla);  
    for (i=0;i<amigos.length;i++){
      var tr = document.createElement("tr");
      tabla.appendChild(tr);
      
      var td = document.createElement("td");
      var td2 = document.createElement("td");
      tr.appendChild(td);
      td.innerHTML="<strong>"+(amigos[i].nombre)+"<strong>";
      tr.appendChild(td2);
      td2.innerHTML="<strong>"+(amigos[i].apellido)+"<strong>";
    }
  
tabla.className="tabla";

}
