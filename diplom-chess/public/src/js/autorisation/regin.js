import { getUsers } from '../functions/database.js';
import { addUser } from '../functions/database.js';

document.getElementById('regin-form-submit').addEventListener('click', (e) => {
    const username = document.getElementById('regin-form-username').value;
    const password = document.getElementById('regin-form-password').value;
    const repeatPassword = document.getElementById('regin-form-repeat-password').value;
    const email = document.getElementById('regin-form-email').value;
    addUser(username, password, repeatPassword, email, (response) => {
        switch (response) {
            case "1": // user added
                console.log("User added");
                break;
            case "2": // user already exists by email
                console.log("user already exists");
                break;
            case "3": // passwords do not match with repeat-password
                console.log("Passwords do not match");
                break;
            case "4": 
                console.log("Password is too short (min 6 symbols) or contains forbidden symbols");
                break;
            case "5":
                console.log("Username is too short (min 3 symbols) or too long (max 20 symbols) or contains forbidden symbols");
                break;
            case "6": // email is not valid
                console.log("Email is not valid");
                break;
            case "7": // email already exists
                console.log("email already exists");
                break;
            default:
                console.log("unknown error");
                break;
        }
    });
});
