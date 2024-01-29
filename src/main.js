// iziToast
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// simplelightbox
import SimpleLightbox from "simplelightbox";


const myForm = document.querySelector('form');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(myForm);
  const data = Object.fromEntries(formData);
  console.log(data);
});


//gallery
var lightbox = new SimpleLightbox('.gallery a');
