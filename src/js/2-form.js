const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
form.email.value = savedData.email || '';
form.message.value = savedData.message || '';

form.addEventListener('input', () => {
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  console.log('Form submitted:', {
    email: form.email.value,
    message: form.message.value,
  });

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
