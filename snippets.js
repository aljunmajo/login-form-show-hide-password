
/* CSS */
/*
div.password-box {
    display: flex; 
    align-items: center; 
    border: solid 1px #9b9b9b; 
    background-color: #fff; 
    border-radius: 6px;
}
label .bi {
    font-size: 25px;
}
.password-box .bi {
    font-size: 25px;
    padding-left: 8px;
    padding-right: 8px;
}

.bi::before {
    color: #797979;
}
*/

const passwordIcon = document.querySelector('.eye-icon');
const lockIcon = document.querySelector('.lock-icon');
const input = document.querySelector('.password-box input');

/*
passwordIcon.addEventListener('click', function(){
    //gamit ang javascript dynamically i-changed ang type ng attribute password->text
    input.setAttribute('type','text'); 
});
*/

/*
var password = true;

passwordIcon.addEventListener('click', function(){
            if(password) {
                // gamit ang javascript dynamically i-changed ang type ng attribute
                input.setAttribute('type','text'); 
                passwordIcon.classList.remove('bi-eye-fill');
                passwordIcon.classList.add('bi-eye-slash-fill');

                lockIcon.classList.remove('bi-lock-fill');
                lockIcon.classList.add('bi-unlock-fill');
            } else {
                input.setAttribute('type','password');
                passwordIcon.classList.remove('bi-eye-slash-fill');
                passwordIcon.classList.add('bi-eye-fill');

                lockIcon.classList.remove('bi-unlock-fill');
                lockIcon.classList.add('bi-lock-fill');
            }
        password = !password;
});
*/

