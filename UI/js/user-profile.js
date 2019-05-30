const user_posts = [
  {
    id: 1,
    profile_img: '../assets/wit2.jpg',
    user_name: 'Mary Henry',
    postedAt: '24th May 2019',
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
    postedAt: '24th May 2019',
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
    postedAt: '24th May 2019',
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

  }
];

const profile = document.getElementById('profile');
let p = 0;
user_posts.forEach(el => {
  const postArea = document.createElement('div');
  postArea.className = 'post-user-profile';
  postArea.innerHTML = ` <div class="post-header">
      <img src="${el.profile_img}" alt="user" />
      <div class="post-user">
        <div class="post-user__name">${el.user_name}</div>
        <div class="post-user__post-date">${el.postedAt}</div>  
      </div>
      <a href='#id=${++p}' class='edit-post' onclick="editPost(${p})"><span style="font-size: 32px; color: #b64d7e">&#9998;</span></a>
    </div>
    <div class="post-content">
      <div class="post-content__img">
        <img src="${el.img[0]}" alt="0" name="` +
    el.img
    + `" id="${p}" />
        <div class="movement-arrow">
          <a href="javascrip:void(0);" class="left" onclick= "slider(${p},'left','left-${p}','right-${p}')" id="left-${p}">&#x3c;</a>
          <a href="javascript:void(0);" class="right" onclick= "slider(${p},'right','left-${p}','right-${p}')", id="right-${p}">&#x3e;</a>
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
        </div>    
      </div>
    </div>`
  profile.appendChild(postArea);

})

const slider = (position, side, position_left, position_right) => {
  const img = document.getElementById(position);
  let imgSrc = img.name.split(',')

  const left = document.getElementById(position_left);
  const right = document.getElementById(position_right);

  if (side === 'right') {
    if (img.alt <= imgSrc.length) {
      left.style.visibility = 'visible';
      img.alt = Number(img.alt) + Number(1);
      img.src = imgSrc[img.alt];
      if (img.alt >= imgSrc.length - 1) {
        right.style.visibility = 'hidden';
      }
    }
  } else if (side === 'left') {
    console.log(img.alt);
    if (img.alt <= 0) {
      left.style.visibility = 'hidden';
    } else {
      right.style.visibility = 'visible';
      img.alt = Number(img.alt) - Number(1);
      img.src = imgSrc[img.alt];
    }
  }

}

// handling the posts

const postModal = document.getElementById('post-form');
const editModal = document.getElementById('edit-post');
const heading = document.getElementById('heading');
const desc = document.getElementById('desc');
const error = document.getElementById('info');
const headingClass = document.getElementById('before-err');


const post = () => {
  error.style.display = 'none';
  postModal.style.transform = 'translate(0%,-98%)';
  headingClass.style.marginTop = '27%';

}

const cancel = () => {
  postModal.style.transform = 'translate(0%,-200%)';
  editModal.style.transform = 'translate(0%,-200%)';
}

const savePost = () => {
  if (heading.value.replace(/\s+/g, '').length === 0 || desc.value.replace(/\s+/g, '').length === 0) {
    headingClass.style.marginTop = '4%';
    error.style.display = 'block';
    error.style.backgroundColor = 'red';
    const errorEl = document.createElement('p');
    const errorMessage = document.createTextNode('Please fill in the required field');
    errorEl.appendChild(errorMessage);

    //checking if the message paragraph is rendered
    if (error.getElementsByTagName('p').length === 0) {
      error.style.display = 'block';
      error.style.backgroundColor = 'red';
      error.appendChild(errorEl);
    } else {
      error.removeChild(error.firstChild);
      error.appendChild(errorEl);
    }

  } else {
    headingClass.style.marginTop = '4%';
    error.style.display = 'block';
    error.style.backgroundColor = 'green';
    const errorEl = document.createElement('p');
    const errorMessage = document.createTextNode('Post successfully recorded');
    errorEl.appendChild(errorMessage);

    //checking if the message paragraph is rendered
    if (error.getElementsByTagName('p').length === 0) {
      error.style.display = 'block';
      error.style.backgroundColor = 'green';
      error.appendChild(errorEl);
    } else {
      error.removeChild(error.firstChild);
      error.appendChild(errorEl);
    }

    heading.value = '';
    desc.value = '';

  }
}

const editPost = (id) => {
  error.style.display = 'none';
  editModal.style.transform = 'translate(0%,-98%)';

  const post = user_posts[id - 1];
  const editTemplate = ` <div class="info" id="info-edit"></div>
<div class="heading" id='before-err-edit'>
  <label for="heading">Name</label>
  <input type="text" name="heading" id="heading-name" value='${post.name}'/>
</div>
<div class="description">
  <label for="description">Description</label>
  <textarea name="description" id="edit-desc" cols="30" rows="10">${post.descriptiuon}</textarea>
</div>
<div class="upload">
  <input type="file" name="pictures" id="pic" />
</div>
<div class="action-buttons">
  <button class="cancel" type="button" onclick="cancel()">Close</button>
  <button class="save" type="button" onclick="postEdit(${id})">Save</button>
</div>`
  editModal.innerHTML = editTemplate;

}

const postEdit = () => {
  const heading = document.getElementById('heading-name');
  const desc = document.getElementById('edit-desc');
  const error = document.getElementById('info-edit');
  const headingClass = document.getElementById('before-err-edit');
  error.style.display = 'none';


  if (heading.value.replace(/\s+/g, '').length === 0 || desc.value.replace(/\s+/g, '').length === 0) {

    headingClass.style.marginTop = '4%';

    const errorEl = document.createElement('p');
    const errorMessage = document.createTextNode('Please fill in the required field');
    errorEl.appendChild(errorMessage);


    //checking if the message paragraph is rendered
    if (error.getElementsByTagName('p').length === 0) {
      error.style.display = 'block';
      error.style.backgroundColor = 'red';
      error.appendChild(errorEl);
    } else {
      error.removeChild(error.firstChild);
      error.appendChild(errorEl);
    }

  } else {


    const errorEl = document.createElement('p');
    const errorMessage = document.createTextNode('Post successfully recorded');
    errorEl.appendChild(errorMessage);
    headingClass.style.marginTop = '4%';


    //checking if the message paragraph is rendered
    if (error.getElementsByTagName('p').length === 0) {
      error.style.display = 'block';
      error.style.backgroundColor = 'green';
      error.appendChild(errorEl);
    } else {
      error.removeChild(error.firstChild);
      error.appendChild(errorEl);
    }

    //clearing inputs
    heading.value = '';
    desc.value = '';
  }

}
