const evaluar=() =>{
    const edad = prompt("Cúal es tu edad?")
if(edad<18){
alert("menor de edad");
return
}
alert("es mayor de edad");
};

setTimeout(evaluar,2000);