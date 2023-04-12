import { readToken } from "./functions/token.js";
const CLIENT_URL = "http://127.0.0.1:5500";


if (window.localStorage.getItem("token") == null) { // if token is not exist
    window.location.href = CLIENT_URL + "/diplom-chess/public/index.html";
}
else { // if token is exist
    readToken(window.localStorage.getItem("token"), (response) => {
        if (JSON.parse(response) === false) { // if token is expired
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("user");
            window.location.href = CLIENT_URL + "/diplom-chess/public/index.html";
        }
        else { // if token is valid
            window.localStorage.setItem("token", JSON.parse(response));
            console.log("Token is valid");
            console.log(JSON.parse(response));
        }
    });
}


document.getElementById('logout').addEventListener("click", ()=>{
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    window.location.href = CLIENT_URL + "/diplom-chess/public/index.html";
})

document.getElementsByClassName('user-data__username')[0].innerHTML = window.localStorage.getItem("user");

