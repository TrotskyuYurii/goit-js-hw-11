// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//++simplelightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
//--simplelightbox

//++myForm
const myForm = document.querySelector('form');
const messageLoad = document.getElementById('searchImageText');
const container = document.querySelector('.container-image');

let imageArray;

myForm.addEventListener('submit', event => {
  event.preventDefault();

  const searchInput = document.getElementById('searchImage');
  const inputValue = searchInput.value;

  if (inputValue.trim() === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter what you want to find!',
      position: 'topRight',
    });
    return;
  } else {
    showHidemessageLoad();
    getImage(inputValue)
      .then(posts => {
        imageArray = posts;
        if (imageArray.length === 0) {
          showHidemessageLoad();
          iziToast.info({
            title: 'Info',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
        } else {
          showHidemessageLoad();
          render();
          openLightbox();
          // console.log(imageArray);
          // myForm.reset();
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
});
//--myForm

//++pixabay
function getImage(inputValue) {
  const API_KEY = '25736683-f5d7a17cce89782c978955728';
  const URL =
    'https://pixabay.com/api/?key=' +
    API_KEY +
    '&q=' +
    encodeURIComponent(inputValue) +
    '&image_type=photo&orientation=horizontal&safe_search=true&per_page=9';

  return fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(posts => {
      return posts.hits;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
}
//--pixabay

//++Керування відображенням напису завантаження
function showHidemessageLoad() {
  messageLoad.classList.toggle('isHidden');
}
//--Керування відображенням напису завантаження

//++Рендер структури галереї в.2
function productTemplate(item) {
  return `<div class="photo-card">
    <a href="${item.largeImageURL}" class="gallery-link">
      <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy" class="gallery-image" />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes:</b> ${item.likes}
      </p>
      <p class="info-item">
        <b>Views:</b> ${item.views}
      </p>
      <p class="info-item">
        <b>Comments:</b> ${item.comments}
      </p>
      <p class="info-item">
        <b>Downloads:</b> ${item.downloads}
      </p>
    </div>
  </div>`;
}

function productListTemplate() {
  return imageArray.map(productTemplate).join('');
}

function render() {
  const markup = productListTemplate();
  container.innerHTML = markup;
  console.log('render');
}//--



//++Формування структури галереї
function openLightbox() {
  ////v.1
  // const gallery = document.querySelector('.gallery');
  // gallery.innerHTML = '';
  // const fragment = document.createDocumentFragment();

  // for (let img of imageArray) {
  //   const listItem = document.createElement('li');
  //   listItem.classList.add('gallery-item');

  //   const listLink = document.createElement('a');
  //   listLink.classList.add('gallery-link');
  //   listLink.href = img.largeImageURL;

  //   const imgElement = document.createElement('img');
  //   imgElement.classList.add('gallery-image');

  //   imgElement.src = img.webformatURL;
  //   imgElement.setAttribute('data-source', img.largeImageURL);
  //   imgElement.alt = img.tags;

  //   listLink.appendChild(imgElement);
  //   listItem.appendChild(listLink);
  //   fragment.appendChild(listItem);
  // }

  // gallery.appendChild(fragment);

  ////v.2
  

  let options = {
    captionsData: 'alt',
    captionDelay: 250,
    captions: true,
  };

  let galleryDll = new SimpleLightbox('.container-image a', options);
  galleryDll.on('show.simplelightbox', function () {});
  galleryDll.refresh();
}
