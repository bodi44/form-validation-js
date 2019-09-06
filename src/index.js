import './index.css'

const form = document.querySelector('form');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');

form.addEventListener('submit', event => {
  event.preventDefault();
  email.value = 'hello';
  phoneNumber.value = 'world';
});
