
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const delayInput = document.querySelector('input[name="delay"]');
  if (delayInput) {
    delayInput.classList.add('delay-input');
  }

 
  const stateInputs = document.querySelectorAll('input[name="state"]');
  stateInputs.forEach((input) => {
    if (input.value === 'fulfilled') {
      input.classList.add('fulfilled-input');
    } else if (input.value === 'rejected') {
      input.classList.add('rejected-input');
    }
  });


  const fieldset = document.querySelector('fieldset');
  if (fieldset) {
    fieldset.classList.add('state-fieldset');
  }

  const form = document.querySelector('.form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const delay = parseInt(delayInput.value);
    const selectedState = Array.from(stateInputs).find(input => input.checked).value;

    createPromise(delay, selectedState)
      .then((delay) => {
        iziToast.success({
          title: 'Success',
          message: `✅ Fulfilled promise in ${delay}ms`,
          position: 'topCenter'
        });
      })
      .catch((delay) => {
        iziToast.error({
          title: 'Error',
          message: `❌ Rejected promise in ${delay}ms`,
          position: 'topCenter'
        });
      });
  });

  function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  }
});
