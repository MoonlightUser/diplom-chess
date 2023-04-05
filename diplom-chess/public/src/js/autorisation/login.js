import { createToken } from '../token/token.js';

document.getElementById('login-form-submit').addEventListener('click', (e) => {
    const username = document.getElementById('login-form-username').value;
    const password = document.getElementById('login-form-password').value;
    console.log(createToken(username, password)); 
});
