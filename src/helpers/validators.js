const phoneRegExp = /(([+][0-9]{1,3})|([0-9]{4}))\s*[\s]?[0-9]{1,3}([\s]?[0-9]{3})([\s]?[0-9]{3,4})/;
const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validateEmail = (email, phoneNumber) => {
  let error;
  if (!email && !phoneRegExp.test(phoneNumber)) {
    error = 'Required!';
  } else if (phoneRegExp.test(phoneNumber) && email) {
    if (!emailRegExp.test(email)) {
      error = 'Invalid email!';
    }
  } else if (!phoneRegExp.test(phoneNumber) && !emailRegExp.test(email)) {
    error = 'Invalid email';
  }

  return error;
};

export const validatePhoneNumber = (phoneNumber, email) => {
  let error;
  if (!phoneNumber && !emailRegExp.test(email)) {
    error = 'Required!';
  } else if (phoneNumber && emailRegExp.test(email)) {
    if (!phoneRegExp.test(phoneNumber)) {
      error = 'Invalid phone!';
    }
  } else if (!emailRegExp.test(email) && !phoneRegExp.test(phoneNumber)) {
    error = 'Invalid phone!';
  }

  return error;
};
