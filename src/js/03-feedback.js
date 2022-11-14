import throttle from 'lodash.throttle';

const input = document.querySelector('input');
const STORAGE_KEY = 'feedback-form-state';

let data = { email: '', message: '' };

input.addEventListener(
  'input',
  throttle(event => {
    if (event.target.nodeName === 'INPUT') {
      data.email = event.target.value;
    } else if (event.target.nodeName === 'TEXTAREA') {
      data.message = event.target.value;
    }
    if (data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, 500)
);
if (localStorage.getItem(STORAGE_KEY)) {
  data = JSON.parse(localStorage.getItem(STORAGE_KEY));
}
email.value = data.email;
message.value = data.message;
