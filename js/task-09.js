function getRandomHexColor() {
  
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  backgroundColor: document.querySelector('body'),
  colorName: document.querySelector(".color"),
  btn: document.querySelector('.change-color'),
};

refs.btn.addEventListener('click', () => {
  refs.backgroundColor.style.backgroundColor = getRandomHexColor();
  refs.colorName.textContent = getRandomHexColor();
})
