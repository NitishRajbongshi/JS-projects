const form = document.getElementById('form');
const user_name = document.getElementById('name');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let error_message =[]; // will store the error message

    // check name field is filed or not
    if(user_name.value === '' || user_name.value == null) {
        error_message.push('Name field is required');
        dis_error();
    }

    // check password field is filed or not
    if(password.value === '' || password.value == null) {
        error_message.push('Password field is required' );
        dis_error();
    }

    // if password is too long and too short
    if(password.value.length < 6 || password.value.length > 15) {
        if(error_message.length == 0) {
            error_message.push('Passoword length should be 6 to 15 long');
            dis_error();
        } 
    }

    // if password is set to password 
    if(password.value === 'password' ) {
        error_message.push('Password value can not be password');
        dis_error();
    }

    // it will prevent the page to load when press submit button and there is an error occuring
    if(error_message.length > 0) {
        e.preventDefault(); 
    }

    function dis_error() {
        // can use either one of them
        // error.textContent = error_message;
        error.innerHTML = error_message.join(' and ');
    }
});
