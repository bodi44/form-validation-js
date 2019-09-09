export const generateErrorHtml = (errorText, id) => {
  const error = document.createElement('div');
  error.className = 'alert-danger';
  error.id = id;
  error.innerText = errorText;

  return error;
};

export const removeErrorsDOM = (phoneParent, emailParent) => {
  if (document.querySelector('#phoneError')) {
    phoneParent.removeChild(document.querySelector('#phoneError'));
  }

  if (document.querySelector('#emailError')) {
    emailParent.removeChild(document.querySelector('#emailError'));
  }
};
