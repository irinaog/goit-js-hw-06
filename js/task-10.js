// const refs = {
//   input: document.querySelector('input'),
//   create: document.querySelector('button[data-create]'),
//   destroy: document.querySelector('button[data-destroy]'),
//   boxes: document.querySelector('#boxes'),
// };

// refs.create.addEventListener('click', createBoxes());

// function createBoxes(amount) {
//   let boxSize = 30;
//     for (let i = 0; i <= amount-1; i += 1){
//       const createBoxEl = document.createElement('div');
//       createBoxEl.style.width = `${boxSize}px`;
//       createBoxEl.style.height = `${boxSize}px`;
//       boxSize += 10;
//       createBoxEl.style.backgroundColor = getRandomHexColor();
//       refs.boxes.append(createBoxEl);
//       console.log(createBoxEl);
//       } 
// }; 

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };

// refs.destroy.addEventListener('click', destroyBoxes());
// function destroyBoxes() {
//   refs.boxes.removeChild;
// }



