const form = document.getElementById('callbackForm');
form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(form);

    const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: formData.get('name'),
            phone: formData.get('phone'),
            message: formData.get('email')
        })
    });

    const resultMessage = document.getElementById('resultMessage');
    if (response.ok) {
        resultMessage.textContent = 'Wiadomość została wysłana!';
    } else {
        resultMessage.textContent = 'Błąd podczas wysyłania wiadomości.';
    }
});
function testForm() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  console.log(`Имя: ${name}`);
  console.log(`Телефон: ${phone}`);
  console.log(`Сообщение: ${message}`);
}