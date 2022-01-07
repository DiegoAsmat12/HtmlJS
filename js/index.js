console.log("Hola desde la consola!");

function desplegarHola(elemento){
    console.log(elemento);
    // elemento.innerText="Acaba de cambiar";
    // elemento.remove();
    console.log("Hola, le diste al botón");
}
function showResult(elemento){
    elemento.innerText = "Alterando práctica de HTML con JavaScript";
    elemento.style.color="Red"
}
function returnToNormal(elemento){
    elemento.innerText = "Práctica de HTML con JavaScript"
    elemento.style.color="Black"
}