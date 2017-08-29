var return123 = async() => {
    throw new Error("this is error");
};

let executingFunction = async() =>{
    let res = await return123();
    console.log(res);
};

executingFunction();