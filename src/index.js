import { validateEmail, validatePhoneNumber } from './helpers/validators';
import { generateErrorHtml, removeErrorsDOM } from './helpers/errorHandlers';

import './index.css';

let emailHasError = false;
let phoneHasError = false;

const form = document.querySelector('form');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');
const submitButton = document.querySelector('.btn');
const emailBlock = document.querySelector('#emailBlock');
const phoneBlock = document.querySelector('#phoneBlock');

email.addEventListener('input', event => {
  let error = validateEmail(event.target.value, phoneNumber.value);

  if (error) {
    if (!document.querySelector('#emailError')) {
      emailBlock.appendChild(generateErrorHtml(error, 'emailError'));
    } else {
      document.querySelector('#emailError').innerText = error;
    }

    emailHasError = true;
    email.required = true;
  } else {
    phoneNumber.required = false;
    email.required = false;
    emailHasError = false;

    removeErrorsDOM(phoneBlock, emailBlock);
  }

  submitButton.disabled = !(!emailHasError && !phoneHasError);
});

phoneNumber.addEventListener('input', event => {
  let error = validatePhoneNumber(event.target.value, email.value);

  if (error) {
    if (!document.querySelector('#phoneError')) {
      phoneBlock.appendChild(generateErrorHtml(error, 'phoneError'));
    } else {
      document.querySelector('#phoneError').innerText = error;
    }
    phoneHasError = true;
    phoneNumber.required = true;
  } else {
    phoneNumber.required = false;
    email.required = false;
    phoneHasError = false;

    removeErrorsDOM(phoneBlock, emailBlock);
  }

  submitButton.disabled = !(!emailHasError && !phoneHasError);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Submitted: ', email.value, phoneNumber.value);
  email.value = '';
  phoneNumber.value = '';
});
