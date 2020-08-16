import neels_drawing from './neels_drawing.png'

function addImage(){
  const img = document.createElement('img');
  img.alt = 'neels_drawing',
  img.width=300;
  img.src= neels_drawing;
  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;
