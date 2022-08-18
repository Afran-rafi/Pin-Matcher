
//  addEventListener way ----------->
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
*/

// function way ------------>

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