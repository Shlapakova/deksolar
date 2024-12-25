const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, phone, message } = req.body;

    // Настройка транспорта для отправки почты
    const transporter = nodemailer.createTransport({
        service: 'gmail', // или другой SMTP-сервер
        auth: {
            user: 'eworkpoland@gmail.com',
            pass: 'jareknina'
        }
    });

    const mailOptions = {
        from: 'eworkpoland@gmail.com',
        to: 'biuro@deksolar.pl',
        subject: `Запрос на обратный звонок от ${name}`,
        text: `Имя: ${name}\nТелефон: ${phone}\nСообщение: ${email}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Błąd podczas wysyłania wiadomości.');
        } else {
            return res.status(200).send('Wiadomość została wysłana!');
        }
    });
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});