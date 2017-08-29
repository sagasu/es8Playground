// nice function in promise wrapping
// also async collects all the promises from inside, so if it will return a promise it will be a single promise not a promise inside a promise
var return123 = async() => {
    throw new Error("this is error");
};

return123().catch(result => {
    console.log(result);
});
