const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  email: '',
  message: '',
};

form.email.value = formData.email || '';
form.message.value = formData.message || '';

form.addEventListener('input', () => {
  formData.email = form.email.value;
  formData.message = form.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (!form.email.value.trim() || !form.message.value.trim()) {
    alert('Будь ласка, заповніть усі поля перед відправленням!');
    return;
  }

  console.log('Form submitted:', {
    email: form.email.value,
    message: form.message.value,
  });

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

аавав;
