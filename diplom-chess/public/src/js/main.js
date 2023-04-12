import { readToken } from './functions/token.js';

if (window.localStorage.getItem("token") != null) {
    readToken(window.localStorage.getItem("token"), (response) => {
        if (JSON.parse(response) === false) {
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("user");
            console.log("Expired token");
        }
    });
}