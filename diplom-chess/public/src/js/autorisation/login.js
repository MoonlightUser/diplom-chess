import { createToken } from '../functions/token.js';
import { readToken } from '../functions/token.js';
import { getUsers } from '../functions/database.js';
import { findUser } from '../functions/database.js';
const SERVER_URL = "http://localhost:3000"; // test
const CLIENT_URL = "http://127.0.0.1:5500"; // test

document.getElementById('login-form-submit').addEventListener('click', (e) => {

    //css
    document.body.style.cursor = "wait";
    document.getElementById('login-form-submit').style.cursor = "wait";
    document.body.appendChild(document.createElement('div')).className = "loader";
    document.getElementById('login-form-submit').disabled = true;
    //end css
    
    const username = document.getElementById('login-form-username').value;
    const password = document.getElementById('login-form-password').value;
    findUser(username, password, (response) => {
        switch (response) {
            case "1": // user found
                console.log("User found");
                createToken(username, password, (response) => {
                    response = JSON.parse(response);
                    window.localStorage.setItem("token", response);
                    window.localStorage.setItem("user", username);
                    window.location.href = CLIENT_URL + "/diplom-chess/public/pages/main-autorised.html";
                });
                break;
            case "2": // password is incorrect
                console.log("Password is incorrect");
                break;
            case "3": // user not found
                console.log("User not found");
                break;
            default:
                console.log("unknown error");
                break;
        }
        //css
        document.body.style.cursor = "default";
        document.getElementById('login-form-submit').style.cursor = "pointer";
        document.getElementById('login-form-submit').disabled = false;
        document.getElementsByClassName('loader')[0].remove();
        //end css
    });
});

