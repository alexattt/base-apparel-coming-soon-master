window.addEventListener('load', function () {
  var submitBtn = this.document.getElementById('submit-btn');

  submitBtn.addEventListener('click', function() {
    var emailValue = document.getElementById('email-input').value

    var errorMessage = document.getElementById('error-message')
    var errorIcon = document.getElementById('error-icon')
    var emailInput = document.getElementById('email-input')

    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (emailValue === '' || !emailValue.match(emailRegex)) {
      errorMessage.classList.remove("element-invisible")
      errorMessage.classList.add("element-visible")

      errorIcon.classList.remove("element-invisible")
      errorIcon.classList.add("element-visible")

      emailInput.classList.add("email-input-warning")
    }
    else {
      errorMessage.classList.remove("element-visible")
      errorMessage.classList.add("element-invisible")

      errorIcon.classList.remove("element-visible")
      errorIcon.classList.add("element-invisible")

      emailInput.classList.remove("email-input-warning")

      document.getElementById('email-input').value = ''
    }
  })
})