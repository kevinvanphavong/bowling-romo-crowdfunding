document.addEventListener('DOMContentLoaded', () => {
  closeImageOnClick();
  selectImageOnClick();
})
function displayImageOnClick() {
  const imageContainer = document.querySelector('.js-container-image')
  const imageCloseButton = imageContainer.querySelector('.js-container-image__closed-button')
}

function closeImageOnClick() {
  const imageContainer = document.querySelector('.js-container-image')
  const imageCloseButton = imageContainer.querySelector('.js-container-image__closed-button')

  if (imageCloseButton === null) {
    return
  }

  imageCloseButton.addEventListener('click', () => {
    imageContainer.classList.add('js-container-image--hidden')
    imageContainer.querySelector('img').remove();
  })
}

function selectImageOnClick() {
  const imageContainer = document.querySelector('.js-container-image')
  const images = document.querySelectorAll('img')

  for (let i = 0; i < images.length; i++) {
    let image = images[i];
    image.style.cursor = 'pointer';
    image.addEventListener('click', () => {
      let newImage = image.cloneNode(true);
      newImage.className = "js-container-image__selected-image";
      imageContainer.append(newImage);
      imageContainer.classList.remove('js-container-image--hidden');
    })
  }
}
