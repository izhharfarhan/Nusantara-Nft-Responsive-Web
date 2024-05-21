/*alert contact*/
/alert contact/
function confirmSendMessage(event) {
  event.preventDefault();

  var nameInput = document.getElementsByClassName('nameAlert')[0];
  var emailInput = document.querySelector('input[type="email"]');
  var messageInput = document.querySelector('textarea');

  var nameValue = nameInput.value;
  var emailValue = emailInput.value;
  var messageValue = messageInput.value;

  // Validasi form
  if (nameValue.trim() === '' || emailValue.trim() === '' || messageValue.trim() === '') {
    alert('Mohon lengkapi semua field.');
    return;
  }

  // Validasi email
  if (!validateEmail(emailValue)) {
    alert('Mohon masukkan alamat email yang valid.');
    return;
  }

  var confirmation = confirm("Apakah Anda ingin mengirimkan pesan ini?");

  if (confirmation) {
    viewAlert(nameValue);
    resetForm();
  } else {
    resetForm();
  }
}

function viewAlert(name) {
  alert('Terima Kasih ' + name + ' !1!1!');
}

function resetForm() {
  document.getElementsByClassName('nameAlert')[0].value = '';
  document.querySelector('input[type="email"]').value = '';
  document.querySelector('textarea').value = '';
}

function validateEmail(email) {
  // Validasi email menggunakan regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}