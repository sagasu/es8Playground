let asyncFunc1 = async() => {
    return new Promise((resolve, reject) => {
       resolve(); 
    });
}

let asyncFunc2 = async() => {
    return new Promise((resolve, reject) => {
       resolve(); 
    });
}

let as = async() => {
    await Promise.all([asyncFunc1(), asyncFunc2()]);
}