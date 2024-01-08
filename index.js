



function addFocusListeners(inputId, className) {
    const inputElement = document.getElementById(inputId);
    const cardElement = document.getElementById("card");
    const highlightElement = document.getElementById("highlight");

    inputElement.addEventListener("focus", () => {
        cardElement.classList.remove('flip');
        highlightElement.className = className;
    });
}

function addInputListeners(inputId, updateFunction) {
    const inputElement = document.getElementById(inputId);

    inputElement.addEventListener("input", (e) => {
        updateFunction(e.target.value);
    });
}


addFocusListeners("number", 'highlightNumber');
addFocusListeners("holder", 'highlightHolder');
addFocusListeners("expirationMonth", 'highlightExpire');
addFocusListeners("expirationYear", 'highlightExpire');

document.getElementById("cvv").addEventListener("focus", () => {
    document.getElementById("card").classList.add('flip');
    document.getElementById("highlight").className = 'highlightcvv';
});

document.getElementById("cvv").addEventListener("focusout", () => {
    document.getElementById("card").classList.remove('flip');
    document.getElementById("highlight").className = 'hidden';
});




    let enteredCardNumbers = 0

document.getElementById("number").addEventListener("input", (e) => {
    const value = e.target.value

    if(enteredCardNumbers > value.length) {
        document.getElementById('cardNumber').children[15 - (15 - value.length)].classList.remove('filed')
        document.getElementById('cardNumber').children[value.length].innerHTML = "#<br>"
    }
    else {
        if(value.length > 4 && value.length < 13) {
            document.getElementById('cardNumber').children[value.length - 1].innerText += "*"
        }else {
            document.getElementById('cardNumber').children[value.length - 1].innerText += value.slice(-1)
        }    

        document.getElementById('cardNumber').children[value.length - 1].classList.add('filed')
    }

    enteredCardNumbers = value.length

})
  
addInputListeners("holder", (value) => {
    document.getElementById('cardHolderName').innerText = value;
});

addInputListeners("cvv", (value) => {
    document.getElementById('cardcvvfield').innerText = Array(value.length + 1).join("*");
});

addInputListeners("expirationMonth", (value) => {
    document.getElementById('cardExpiresMonth').innerText = value;
});

addInputListeners("expirationYear", (value) => {
    document.getElementById('cardExpiresYear').innerText = value.slice(-2);
});
