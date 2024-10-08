const generate = document.getElementById('btn');
const pw1 = document.getElementById('password-one');
const pw2 = document.getElementById('password-two');
let length = prompt("Give me your password length (8-16):");
let isValue = false;

while (!isValue) {

    if (length < 8 || length > 16) {
        alert("Password length should be between 8 and 16 characters.");
        length = prompt("Give me your password length (8-16):");
    } else {
        isValue = true;
    }

    function generatePassword(length, charset) {
        let password = '';
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;


    }

}
generate.addEventListener('click', function () {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    pw1.value = generatePassword(length, charset);
    pw2.value = generatePassword(length, charset);
})







