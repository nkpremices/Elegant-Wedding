const cardNumber = document.getElementById('card-number');
const logo = document.getElementById('card-logo');
const logo_area = document.getElementById('show-logo');
const submitBtn = document.getElementById('submit-btn');
const name = document.getElementById('card-name');
const expireMonth = document.getElementById('month');
const expireYear = document.getElementById('year');
const cvcNumber = document.getElementById('cvc');
const error = document.getElementById('error');

setInterval(
    function () {
        if (cardNumber.value.length > 0) {
            cardNumber.value = arangeInput(cardNumber.value);
        }
    }, 200);
cardNumber.onkeypress = function () {
    if (cardNumber.value.length <= 16) {
        if (cardNumber.value.length >= 2) {
            if (cardNumber.value >= 51 && cardNumber.value <= 55) {
                logo.src = '../assets/MasterCard_Logo.svg.png';
                logo_area.style.opacity = '1';
            } else if (cardNumber.value >= 40 && cardNumber.value < 50) {
                logo.src = '../assets/Visa_Inc._logo.svg.png';
                logo_area.style.opacity = '1';
            }
        }
    } else if (cardNumber.value.length === 19) {
        cardNumber.setAttribute('disabled', true);
    }

}

submitBtn.addEventListener('click', () => {
    const accountNumber = cardNumber.value.replace(/\s+/g, '');
    const accountName = name.value;
    const expireDate = expireMonth.value + '/' + expireYear.value;
    const cvc = cvcNumber.value;


    if (accountNumber.replace(/\s+/g, '').length === 0
        || accountName.replace(/\s+/g, '').length === 0
        || expireMonth.value.replace(/\s+/g, '').length === 0
        || expireYear.value.replace(/\s+/g, '').length === 0
        || cvc.replace(/\s+/g, '').length === 0) {

        error.style.visibility = 'visible';
        cardNumber.removeAttribute('disabled', false);
        const messageParagh = document.createElement('p');
        const message = document.createTextNode('Please fill in all the fields');
        messageParagh.appendChild(message);
        const errorZone = document.getElementById('error');


        if (errorZone.getElementsByTagName('p').length === 0) {
            errorZone.appendChild(messageParagh);
        } else {
            errorZone.removeChild(errorZone.firstChild);
            errorZone.appendChild(messageParagh);
        }

    } else {
        if (isThisValidLuhnNumber(accountNumber)) {
            cardNumber.removeAttribute('disabled', false);
            document.getElementById('error').style.visibility = 'hidden';
            logo_area.style.opacity = '0';
            const cardData = {
                accountName,
                accountNumber,
                expireDate,
                cvc
            }

            error.style.visibility = 'visible';
            error.style.backgroundColor = '#00ff99';
            const messageParagh = document.createElement('p');
            const message = document.createTextNode('Succefully Received');
            messageParagh.appendChild(message);
            const errorZone = document.getElementById('error');
            errorZone.appendChild(messageParagh);

            clear();

            setInterval(function () {
            window.location.replace('user-home.html');
            }, 1000)

        } else {

            error.style.visibility = 'visible';
            cardNumber.removeAttribute('disabled', false);
            const messageParagh = document.createElement('p');
            const message = document.createTextNode('The Account Number is Invlid');
            messageParagh.appendChild(message);
            const errorZone = document.getElementById('error');


            if (errorZone.getElementsByTagName('p').length === 0) {
                errorZone.appendChild(messageParagh);
            } else {
                errorZone.removeChild(errorZone.firstChild);
                errorZone.appendChild(messageParagh);
            }

        }
    }


})

cardNumber.onkeydown = (event) => {
    const key = event.key;
    if (key === 'Backspace' || key === 'Delete') {
        if (cardNumber.value.length <= 1) {
            logo_area.style.opacity = '0';
        }
    }
}

const arangeInput = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{2,30}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
        return parts.join(' ');
    } else {
        return value;
    }
}

function isThisValidLuhnNumber(num) {
    var inputNum = num.toString();
    var sum = 0;
    var doubleUp = false;
    for (var i = inputNum.length - 1; i >= 0; i--) {
        var curDigit = parseInt(inputNum.charAt(i));
        if (doubleUp) {
            if ((curDigit * 2) > 9) {
                sum += (curDigit * 2) - 9;
            }
            else {
                sum += curDigit * 2;
            }
        }
        else {
            sum += curDigit;
        }
        var doubleUp = !doubleUp
    }
    return (sum % 10) == 0 ? true : false;

};

const clear = () => {
    cardNumber.value = '';
    name.value = '';
    expireMonth.value = '';
    expireYear.value = '';
    cvcNumber.value = '';
}

