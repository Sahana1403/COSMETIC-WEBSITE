const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
    return;
  }
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  form.reset();
});
