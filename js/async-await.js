//const saludo =() => {return new Promise ((resolve,reject)=> {
//    resolve("Hola mundo");
//});
//};

const peticion = async () =>{
    setTimeout(()=>{
        const datos ={
            id: 3,
            name: "Clementine Bauch",
            username: "Nathan@yesenia",
        };
        console.log(datos);
    },1000);
};

peticion().then(console.log);

//const saludo = async () => {
//    return "Hola mundo";
//}
//saludo().then(response=> console.log(response));