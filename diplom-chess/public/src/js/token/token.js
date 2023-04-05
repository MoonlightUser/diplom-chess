const SERVER_URL = "http://localhost:3000";

export function createToken(username, password) {
    $.ajax({
        type: "POST",
        url: SERVER_URL,
        data: { username, password},
        success: function (response) {
            console.log(response);
            },
    });
}