const sumar = (a,b) => {
    return new Promise ((resolve, reject) =>{
        if(a < 0 || b < 0){
            reject(`Esto no es valido`)
        }else{
            resolve(a+b);
        }
    });
};

const result = sumar(3,5).then((res)=>{
    //console.log(res);
    document.write(res);

}).catch((error)=>{
    //console.log(error);
    document.write(error);
});

