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

// Blow up posts
const posts = [
    {
        id: 1,
        profile_img: '../assets/wit2.jpg',
        user_name: 'Mary Henry',
        postedAt:  '24th May 2019',
        img: [
            '../assets/venue-1.jpeg',
            '../assets/venue-2.jpg'
        ],
        name: 'Grande Place',
        address: 'Avda.<br/> Reina Maria Cristina</br> s/n 08004 Barcelona',
        descriptiuon: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumnam commodi odit beatae minus minima eius atque magni esserepellat voluptates assumenda, nulla, corporis delectus magnam.Obcaecati doloribus nobis id.",
        price: '$220'

    },
    {
        id: 2,
        profile_img: '../assets/wit-3.jpg',
        user_name: 'Emmy charles',
        postedAt:  '24th May 2019',
        img: [
            '../assets/1.jpg',
            '../assets/cater-1.jpg',
            '../assets/cater-2.jpg',
        ],
        name: 'Emmy\'s catering services',
        address: 'Avda.<br/> Reina Maria Cristina</br> s/n 08004 Barcelona',
        descriptiuon: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumnam commodi odit beatae minus minima eius atque magni esserepellat voluptates assumenda, nulla, corporis delectus magnam.Obcaecati doloribus nobis id.",
        price: '$200'

    },
    {
        id: 3,
        profile_img: '../assets/wit-4.jpg',
        user_name: 'Alexander Mercer',
        postedAt:  '24th May 2019',
        img: [
            '../assets/photographer-1.jpg',
            '../assets/photographer-2.jpg',
            '../assets/photographer-3.jpg',
            '../assets/my_w_image_1.jpg'
        ],
        name: 'Lexander Graphics',
        address: 'Avda.<br/> Reina Maria Cristina</br> s/n 08004 Barcelona',
        descriptiuon: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumnam commodi odit beatae minus minima eius atque magni esserepellat voluptates assumenda, nulla, corporis delectus magnam.Obcaecati doloribus nobis id.",
        price: '$156'

    },
    {
        id: 4,
        profile_img: '../assets/wit-5.jpg',
        user_name: 'Angela Flydo',
        postedAt:  '24th May 2019',
        img: [
            '../assets/planner-1.jpg',
            '../assets/planner-2.jpg',
            '../assets/planner-3.jpeg'
        ],
        name: 'Bourgie Decor',
        address: 'Avda.<br/> Reina Maria Cristina</br> s/n 08004 Barcelona',
        descriptiuon: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumnam commodi odit beatae minus minima eius atque magni esserepellat voluptates assumenda, nulla, corporis delectus magnam.Obcaecati doloribus nobis id.",
        price: '$345'

    }
];


const main = document.getElementById('main');
let i = 0;
posts.forEach(el => {
    const postArea = document.createElement('div');
    postArea.className = 'post';
    postArea.innerHTML = ` <div class="post-header">
    <img src="${el.profile_img}" alt="user" />
    <div class="post-user">
      <div class="post-user__name">${el.user_name}</div>
      <div class="post-user__post-date">${el.postedAt}</div>
    </div>
  </div>
  <div class="post-content">
    <div class="post-content__img">
      <img src="${el.img[0]}" alt="0" name="`+
      el.img
      +`" id="${++i}" />
      <div class="movement-arrow">
        <a href="javascrip:void(0);" class="left" onclick= "slider(${i},'left','left-${i}','right-${i}')" id="left-${i}">&#x3c;</a>
        <a href="javascript:void(0);" class="right" onclick= "slider(${i},'right','left-${i}','right-${i}')", id="right-${i}">&#x3e;</a>
      </div>
    </div>
    <div class="post-content__description">
      <h3>${el.name}</h3>
      <div class="description">
        <div class="description-text">${el.descriptiuon}</div>
        <div class="description-location">
          <div class="address">${el.address}</div>
          <div class="money">${el.price}</div>
        </div>
        <div class="book-me">
          <a href="javascript:void(0)" class="book-me__button">Book now</a>
        </div>
      </div>    
    </div>
  </div>`
    main.appendChild(postArea);

})


const slider = (position, side,position_left,position_right) => {
    const img = document.getElementById(position);
    let imgSrc = img.name.split(',')

    const left = document.getElementById(position_left);
    const right = document.getElementById(position_right);

    if (side === 'right') {
        if (img.alt <= imgSrc.length) {
            left.style.visibility = 'visible';
            img.alt = Number(img.alt) + Number(1);
            img.src = imgSrc[img.alt];
            if (img.alt >= imgSrc.length -1) {
                right.style.visibility = 'hidden';
            }
        }
    } else if(side === 'left'){
        console.log(img.alt);
        if(img.alt <= 0){
            left.style.visibility = 'hidden';
        }else{
            right.style.visibility = 'visible';
            img.alt = Number(img.alt) - Number(1);
            img.src = imgSrc[img.alt]; 
        }
    }

}