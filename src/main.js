// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// simplelightbox
import SimpleLightbox from 'simplelightbox';

//++gallery
var lightbox = new SimpleLightbox('.gallery a');
//--gallery


//++myForm
const myForm = document.querySelector('form');
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
    getImage(inputValue)
      .then(posts => {
        imageArray = posts;
        if (imageArray.length === 0) {
          iziToast.info({
            title: 'Info',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
        } else {
          console.log(imageArray);
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
  const URL ='https://pixabay.com/api/?key='+API_KEY+'&q='+encodeURIComponent(inputValue)+'&image_type=photo&orientation=horizontal&safe_search=true&per_page=12';

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
