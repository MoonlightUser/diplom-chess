// const SERVER_URL = "https://creepy-puce-hen.cyclic.app"; // production
const SERVER_URL = "http://localhost:3000"; // test

export function createToken(username, password, callback) {
    $.ajax({
        type: "POST",
        url: SERVER_URL + "/create-token",
        data: { username, password},
        success: function (response) {
            callback(response);
            },
    });
}

export function readToken(token, callback) {
    $.ajax({
        type: "POST",
        url: SERVER_URL + "/read-token",
        data: { token},
        success: function (response) {
            callback(response);
            },
    });
}


