const input = document.querySelector('#name-input');
const nameUser = document.querySelector('#name-output');
input.addEventListener('input', () => {
    if (input.value.length === 0) {
        nameUser.textContent = "Anonymous";
    }
    else {
        nameUser.textContent = input.value;
    }
    // nameUser.textContent = input.value;
    console.log(input.value);
});
