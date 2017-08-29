function fetchRides(){
    return new Promise((resolve, reject) => {
        let rides = [1,2,3];
        resolve(rides);
    });
}

function fetchVisitors(rides) {
    return "";
}

fetchRides().then(rides => {
    return fetchVisitors(rides);
});