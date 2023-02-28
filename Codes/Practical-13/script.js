const form = document.getElementById('registrationForm');
const name = document.getElementById('name');
const password = document.getElementById('password');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const birthday = document.getElementById('birthday');
const pincode = document.getElementById('pincode');

form.addEventListener('submit', function(event) {
  if (!validateName()) {
    event.preventDefault();
  }
  if (!validatePassword()) {
    event.preventDefault();
  }
  if (!validatePhone()) {
    event.preventDefault();
  }
  if (!validateEmail()) {
    event.preventDefault();
  }
  if (!validateBirthday()) {
    event.preventDefault();
  }
  if (!validatePincode()) {
    event.preventDefault();
  }
});

function validateName() {
  const nameRegex = /^[a-zA-Z ]+$/;
  if (!nameRegex.test(name.value)) {
    alert('Please enter a valid name');
    return false;
  }
  return true;
}

function validatePassword() {
  const passwordRegex = /^[A-Z][a-zA-Z0-9]{7,11}$/;
  if (!passwordRegex.test(password.value)) {
    alert('Please enter a valid password (must be 8-12 characters with the first letter capitalized)');
    return false;
  }
  return true;
}

function validatePhone() {
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone.value)) {
    alert('Please enter a valid phone number (must be 10 digits)');
    return false;
  }
  return true;
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    alert('Please enter a valid email address');
    return false;
  }
  return true;
}


