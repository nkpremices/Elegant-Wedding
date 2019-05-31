const read = JSON.parse(localStorage.getItem('myStorage'));
let users = [];

if (read.length > 0) {
    read.forEach(el => users.push(el));
} else {
    localStorage.setItem('myStorage', JSON.stringify(users));
}

// get signup data
const signup = () => {
    // input values
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;
    const acc = document.getElementById('account-type');
    const acc_type = acc.options[acc.selectedIndex].text;

    // unique id
    const read = JSON.parse(localStorage.getItem('myStorage'))
    const id = read.length + 1;
    const user = {
        id,
        fname,
        lname,
        email,
        password,
        acc_type
    }

    users.push(user);
    localStorage.setItem('myStorage', JSON.stringify(users));
}

const login = () => {
    const error = document.getElementById('failed-login');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    for (let i of read) {

        if (i.email === email && i.password === password) {

            if (i.acc_type === 'Customer') {

                window.location.replace('user-home.html');

            } else if (i.acc_type === 'Service Provider') {

                window.location.replace('service-provider.html');

            }
        } else {
           error.style.display ='block'
        }
    }

}

// var read = JSON.parse(localStorage.getItem('myStorage'));