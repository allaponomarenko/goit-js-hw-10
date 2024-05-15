


//-------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Додати клас до input для затримки
    const delayInput = document.querySelector('input[name="delay"]');
    if (delayInput) {
      delayInput.classList.add('delay-input');
    }
  
    // Додати клас до radio input елементів
    const stateInputs = document.querySelectorAll('input[name="state"]');
    stateInputs.forEach((input) => {
      if (input.value === 'fulfilled') {
        input.classList.add('fulfilled-input');
      } else if (input.value === 'rejected') {
        input.classList.add('rejected-input');
      }
    });
  
    // Додати клас до fieldset
    const fieldset = document.querySelector('fieldset');
    if (fieldset) {
      fieldset.classList.add('state-fieldset');
    }
  });
  