'use strict'

console.log('watsapp dude');

// código del cuadrado

function perimetroSquare(lado) {
    return lado * 4;
}
perimetroSquare();

function areaSquare(lado) {
    return lado * lado;
}
areaSquare();


// código del triángulo

function perimetroTriangle(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
perimetroTriangle();

function areaTriangle(base, altura) {
    return (base * altura) / 2;
}
areaTriangle();


// código del círculo 

function diametroCirculo(radio) {
    return radio * 2;
}
diametroCirculo();

const PI = Math.PI;
console.log('El pi es ' + PI);


function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
perimetroCirculo();


function areaCirculo(radio) {
    return (radio * radio) * PI;
}
areaCirculo();


// funciones de HTML

const input = document.getElementById('inputCuadrado');
const result = document.querySelector('.result');


function calcularPerimetro() {
    const value = input.value;
    const perimetro = perimetroSquare(value);
    result.innerHTML = perimetro;

}

function calcularArea() {
    const value = input.value;
    const area = areaSquare(value);
    result.innerHTML.value = area;
}

