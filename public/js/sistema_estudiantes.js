var nombres_estudiantes = ["Maria", "Juan", "Marco", "Rosa", "Felipe", "Daniela", "Sofia", "Esteban", "Jose"];
var notas_estudiantes = [8, 4, 10, 6, 3, 9, 5, 7, 2];

var btn_calcular = document.getElementById('btn_calcular');

var aprobados = 0;
var supletorios = 0;
var reprobados = 0;
var suma_total = 0;

notas_estudiantes.forEach(function(nota, posicion) {
    let id_celda = "nota_" + nombres_estudiantes[posicion].toLowerCase();
    document.getElementById(id_celda).textContent = nota;

});

btn_calcular.addEventListener('click', function() {

    notas_estudiantes.forEach(function(nota){
    suma_total = suma_total + nota;  
    if (nota >= 7 && nota <= 10) {
        aprobados = aprobados + 1;
    } else if (nota >= 5 && nota <= 6) {
        supletorios = supletorios + 1;
    } else if (nota >= 0 && nota <= 4) {
        reprobados = reprobados + 1;
    }
    })
    
    var promedio = suma_total / notas_estudiantes.length;

    var estado = "";
    if (promedio >= 7) {
        estado = "APROBADO";
        document.getElementById('estado_curso').className = "text-success fw-bold";
    } else {
        estado = "EN RIESGO";
        document.getElementById('estado_curso').className = "text-danger fw-bold";
    }

    document.getElementById('total_aprobados').textContent = aprobados;
    document.getElementById('total_supletorios').textContent = supletorios;
    document.getElementById('total_reprobados').textContent = reprobados;
    document.getElementById('promedio_curso').textContent = promedio.toFixed(2);
    document.getElementById('estado_curso').textContent = estado;
    

});