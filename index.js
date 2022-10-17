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

const inputCuadrado = document.getElementById('inputCuadrado');
const inputTriangle1 = document.getElementById('inputTriangulo1');
const inputTriangle2 = document.getElementById('inputTriangulo2');
const baseTriangulo = document.getElementById('baseTriangulo');
const alturaTriangle = document.getElementById('alturaTriangle');
const resultCuadrado = document.querySelector('.resultCuadrado');
const resultTriangulo = document.querySelector('.resultTriangulo');
const perimetroCuadrado = document.querySelector('.perimetroCuadrado');
const perimetroTrianguloButton = document.querySelector('.perimetroTriangulo');
const areaTrianguloButton = document.querySelector('.areaTriangulo');
const areaCuadrado = document.querySelector('.areaCuadrado');

// cuadrado
function calcularPerimetro() {
    const value = inputCuadrado.value;
    const perimetro = perimetroSquare(value);
    resultCuadrado.classList.add('result-color');
    resultCuadrado.innerHTML = 'Resultado: ' + ' ' + perimetro + ' cm';

}

function calcularArea() {
    const value = inputCuadrado.value;
    const area = areaSquare(value);
    resultCuadrado.classList.add('result-color');
    resultCuadrado.innerHTML = 'Resultado: ' + ' ' + area + ' cm2';
}

perimetroCuadrado.addEventListener('click', calcularPerimetro);
areaCuadrado.addEventListener('click', calcularArea);

// triangulo

function perimetroTriangulo() {
    const value1 = parseInt(inputTriangle1.value);
    const value2 = parseInt(inputTriangle2.value);
    const value3 = parseInt(baseTriangulo.value);
    const trianglePerimetro = perimetroTriangle(value1, value2, value3);
    resultTriangulo.classList.add('result-color');
    resultTriangulo.innerHTML = 'Resultado: ' + ' ' + trianglePerimetro + ' cm';
}
function areaTriangulo() {
    const value3 = parseInt(baseTriangulo.value);
    const value4 = parseInt(alturaTriangle.value);
    const areaTriangulo = areaTriangle(value3, value4);
    resultTriangulo.classList.add('result-color');
    resultTriangulo.innerHTML = 'Resultado: ' + ' ' + areaTriangulo + ' cm2';
}

perimetroTrianguloButton.addEventListener('click', perimetroTriangulo);
areaTrianguloButton.addEventListener('click', areaTriangulo);

// circunferencia