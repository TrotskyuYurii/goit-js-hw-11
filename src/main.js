const myForm = document.querySelector('form');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(myForm);
  const data = Object.fromEntries(formData);
  console.log(data);
});

