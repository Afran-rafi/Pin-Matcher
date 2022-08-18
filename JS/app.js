// function way ------------> Jhankar Mahbub Sir ------->

function getPin() {
    const random = Math.round(Math.random() * 10000);
    const newRandom = random + '';
    if (newRandom.length == 4) {
        return parseInt(newRandom);
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('generate-input').value = pin
}

document.getElementById('digit').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const input = document.getElementById('number-input');
    if (isNaN(number)) {
        if (number == 'C') {
            input.value = '';
        }
    }
    else {
        const inputValue = input.value;
        const newNumber = inputValue + number;
        input.value = newNumber;
    }
});

function verifyPin() {
    const randomPin = document.getElementById('generate-input').value
    const myPin = document.getElementById('number-input').value
    const success = document.getElementById('success')
    const fail = document.getElementById('fail')
    if (randomPin == myPin) {
        success.style.display = 'block';
        fail.style.display = 'none';
    }
    else {
        success.style.display = 'none';
        fail.style.display = 'block';
    }
}


//  addEventListener way -----------> Fahim Ahmed ------->

/*
document.getElementById('generate-pin-btn').addEventListener('click', function () {
    const random = Math.round(Math.random() * 10000);
    const newRandom = random + ''
    console.log(newRandom)
    const input = document.getElementById('generate-input');
    const inputValue = input.value;
    if (newRandom.length == 4) {
        parseInt(newRandom);
        input.value = newRandom
    }
})

const digits = document.getElementsByClassName('button');
for (const digit of digits) {
    digit.addEventListener('click', function (e) {
        const number = e.target.innerText;
        const input = document.getElementById('number-input');
        if (isNaN(number)) {
            if (number == 'C') {
                input.value = ''
            }
        }
        else {
            const inputValue = input.value;
            const newNumber = inputValue + number;
            input.value = newNumber;
        }
    })
}

document.getElementById('submit-btn').addEventListener('click', function () {
    const randomPin = document.getElementById('generate-input')
    const myPin = document.getElementById('number-input')
    const success = document.getElementById('success')
    const fail = document.getElementById('fail')
    if (randomPin.value == myPin.value) {
        fail.style.display = 'none';
    }
    else {
        success.style.display = 'none'
    }
})
*/


