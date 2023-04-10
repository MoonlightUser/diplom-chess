import { readToken } from './functions/token.js';

if (window.localStorage.getItem("token") != null) {
    readToken(window.localStorage.getItem("token"), (response) => {
        if (response == "Expired token ") {
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("user");
            console.log("Expired token");
        }
        else {
            console.log("Token is valid");
        }
    });
}