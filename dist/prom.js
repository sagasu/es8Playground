"use strict";

function fetchRides() {
    return new Promise(function (resolve, reject) {
        var rides = [1, 2, 3];
        resolve(rides);
    });
}

function fetchVisitors(rides) {
    return "";
}

fetchRides().then(function (rides) {
    return fetchVisitors(rides);
});