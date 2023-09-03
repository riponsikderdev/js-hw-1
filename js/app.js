// LIGHT STARTS HERE
let onbtn = document.querySelector('.lighton')
let image = document.querySelector('.container .light img')
let offbtn = document.querySelector('.lightoff')


function lightonfun() {
    image.src = "./images/lighton.png"
}


onbtn.addEventListener('click', lightonfun)

function lightofffun() {
    image.src = "./images/lightoff.png"
}
offbtn.addEventListener('click', lightofffun)
// LIGHT ENDS HERE
// RANGE STARTS HERE
let slider = document.querySelector('.slider')
let result = document.querySelector('.result')

function updateSliderValue() {
    result.innerHTML = slider.value;
}
slider.addEventListener('input', updateSliderValue)
// RANGE ENDS HERE
// QUANTITY STARTS HERE
let plusBtn = document.querySelector('.incrementbtn')
let output = document.querySelector('.input')

function incrementvalue() {
    output.value = Number(output.value) + 1;
}
plusBtn.addEventListener("click", incrementvalue)

let decrementBtn = document.querySelector('.decrementbtn')

function decrementValue() {
    if (output.value <= 1) {
        return false;
    } else {
        output.value = Number(output.value) - 1;
    }
    decrementBtn.addEventListener("click", decrementValue)
}
// QUANTITY ENDS HERE
// PASSWORD STARTS HERE
let btn = document.querySelector('.passwordToggler')
let password = document.querySelector('.password')

function eyeandpskfun() {
    if (password.type == 'password') {
        password.type = 'text'
        btn.innerHTML = '<i class="bi bi-eye-slash-fill"></i>'
    } else {
        password.type = 'password';
        btn.innerHTML = '<i class="bi bi-eye-fill"></i>'

    }
}

btn.addEventListener('click', eyeandpskfun)
// PASSWORD ENDS HERE
