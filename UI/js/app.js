
// const imgSrc = [
//     '../assets/wedding-1.jpg',
//     '../assets/wedding-2.jpg',
//     '../assets/wedding-cater-3.jpg',
//     '../assets/wedding-catere-food.jpg'
// ];

// initial img and dot setup
// let imgNum = 0;
// img.src = imgSrc[imgNum];
// img.name = 0;

// // slider-arrow functions



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