import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailField = form.querySelector('input[type="email"]');
const messageField = form.querySelector('textarea[name="message"]');
const formData = {};

form.addEventListener('submit', onSubmitClearFieldsAndStorage);
form.addEventListener('input', throttle(onInputForm, 500));

checkLocalStorage();

function onInputForm(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitClearFieldsAndStorage(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  let elements = evt.currentTarget.elements;
  let email = elements.email.value;
  let message = elements.message.value;
  const formDataCurrent = {
    email,
    message,
  };
  console.log(formDataCurrent);
}

function checkLocalStorage() {
  const dataLocal = localStorage.getItem(STORAGE_KEY);
  const dataLocalParse = JSON.parse(dataLocal);
  if (dataLocalParse?.email) {
    emailField.value = dataLocalParse.email;
  }
  if (dataLocalParse?.message) {
    messageField.value = dataLocalParse.message;
  }
}
