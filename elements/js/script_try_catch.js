'use strict'

// try {
//   console.log("it's OK");
//   console.log(item);
//   console.log("next code");
// } catch(error) {
//   console.log(error);
// } finally {
//   console.log('final message');
// }
// // console.log(item);
// console.log('we jumped over error');
// const btn = document.querySelector('#two_button');
// try {
//   const btn_first = document.querySelector('#my_button').addEventListener('click', () =>{
//     if (btn_first.classList.contains('red')) {
//       btn_first.classList.remove('red');
//         } else {
//           btn_first.classList.add('red');
//         }
//     console.log('its OK');
//     const div = document.createElement('div');
//     div.classList.add('wrapper'); 
//     document.body.append(div);
//     btn.classList.add('red');
//     // btn_first.classList.add('blue');
//   });
// } catch {
// console.log('its not OK');
// }
const data = [
  {
    id: 'box',
    tag: 'div'
  },
  {
    id: '',
    tag: 'nav'
  },
  {
    id: 'box',
    tag: 'span'
  } 
]

data.forEach((blockObj, i) =>{
  const block = document.createElement(blockObj.tag);
  if (!blockObj.id) throw new Error(`В даних під номером ${i+1} немає id`);
  block.setAttribute('id', blockObj.id );
  document.body.append(block);

});