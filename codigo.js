// JavaScript Document
//var nombre ="Alejandro";
//var apellido ="Guerrero";
//var edad =28;

//alert(nombre + " " + apellido + "\n" + edad + " años.");
//alert(5*8 +"2");

var peso;
var pesoEnMarte;

alert("¿Quieres saber tu peso en marte?");
peso = prompt("¿Cuál es tu peso en kg?", "70");
peso = parseInt(peso);

pesoEnMarte = (peso / 9.81) * 3.711;

alert("Tu peso en marte es: " + pesoEnMarte + " kg");