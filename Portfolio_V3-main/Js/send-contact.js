const scriptURL = 'https://script.google.com/macros/s/AKfycbwiGta-0beEy1iTbarpFBzWbGmWU_F1_yOqWH5pNOrT_KaixFR4feug2i9g8prZh7IcKQ/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})