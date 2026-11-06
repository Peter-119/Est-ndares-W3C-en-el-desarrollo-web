var nombre = "";
if (nombre == "") {
    alert("Error: Aun no nos ha proporcionado su nombre");
} else {
    alert("Hemos guardado su informacion" + nombre + "!");
}

var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
for (var i = 0; i < 7; i++) {
    alert(dias[i]);
}
<p id="demo"></p>

function mutiplicar(p1, p2) {
    return p1 * p2;
}
document.getElementById("demo").innerHTML = mutiplicar(4, 3);