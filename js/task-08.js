const form = document.querySelector('.login-form');
// const btn = document.querySelector('button[type="submit"]');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail.length===0 || password.length === 0) {
        alert('Все поля должны быть заполнены');
    }
    else {
        const formDate = {
        email: mail,
        password: password,
        }
        console.log(formDate);
        form.reset();
    };
    
    
};



