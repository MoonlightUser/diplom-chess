import { createToken } from '../functions/token.js';
import { readToken } from '../functions/token.js';
import { getUsers } from '../functions/database.js';



document.getElementById('login-form-submit').addEventListener('click', (e) => {
    const username = document.getElementById('login-form-username').value;
    const password = document.getElementById('login-form-password').value;
    createToken(username, password, (response) => {
        response = JSON.parse(response);
        window.localStorage.setItem("token", response);
        window.localStorage.setItem("user", username);
    });
});

document.getElementById('login-form-submit').addEventListener('click', (e) => {
    let token = window.localStorage.getItem("token");
    readToken(token, (response) => {
        console.log(response);
    });
});

document.getElementById('login-form-submit').addEventListener('click', (e) => {
    getUsers((response) => {
        console.log(response);
    });
});

