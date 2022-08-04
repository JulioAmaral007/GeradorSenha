/* Creating a slider and a button. The slider is used to set the length of the password. The button is
used to generate the password. */
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
let novaSenha  = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

/**
 * It generates a random password based on the length of the slider.
 */
function generatePassword(){
    
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;

}

/**
 * When the button is clicked, the alert will pop up, and the password will be copied to the clipboard.
 */
function copyPassword(){
    alert("Senha coopiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}