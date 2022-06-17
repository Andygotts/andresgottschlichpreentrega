let entrada = prompt("ingrese tu equipo de futbol para saber su ultimo resultado")
 while ( entrada != "salir"){
switch(entrada){
case "boca":
alert ("boca 5 - 3 Tigre")
break;
case "river":
alert ("river 0 - 1")
break;
case "racing":
alert ("racing 2 - 0 velez")
break;
case "independiente":
alert ("independiente 1 - 2 argentinos jr")
break;
case "velez":
alert ("velez 0 - 2 racing")
break;
case "san lorenzo":
alert ("san lorenzo 3 - 3 arsenal")
break;
case "estudiantes":
alert ("estudiantes 2 - 1 sarmiento")
break;
case "rosario central":
alert ("rosario central  1 - 0 godoy cruz")
break;
default:
  alert("error")
  break;
}
entrada = prompt ("ingresa nuevamente tu nuemro favorito")
 }