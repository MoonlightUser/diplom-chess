// const SERVER_URL = "https://creepy-puce-hen.cyclic.app"; // production
const SERVER_URL = "http://localhost:3000"; // test

export function getUsers(callback) {
    $.ajax({
        type: "POST",
        url: SERVER_URL + "/get-users",
        success: function (response) {
            callback(response);
            },
    });
}

export function addUser(username, password, repeatPassword, email, callback) {
    $.ajax({
        type: "POST",
        url: SERVER_URL + "/add-user",
        data: { username, password,repeatPassword, email},
        success: function (response) {
            callback(response);
            },
    });
}

export function findUser(username, password, callback) {
    $.ajax({
        type: "POST",
        url: SERVER_URL + "/find-user",
        data: { username, password},
        success: function (response) {
            callback(response);
            },
    });
}