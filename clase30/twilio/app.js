import express from 'express';
import twilio from 'twilio';

const app = express();

const TWILIO_ACCOUNT_SID = 'AC21c45da859a8a4b5f1a92b5030d58a06';
const TWILIO_AUTH_TOKEN = 'bbe02f21b2a95d526b5828d4b3477a19';
const TWILIO_PHONE_NUMBER = '+16088893559';

const client = twilio(
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_PHONE_NUMBER
);

app.get('/sms', async (req, res) => {
    await client.messages.create({
        from: TWILIO_PHONE_NUMBER,
        to: '+593958963171',
        body: 'Este es un mensaje de prueba de SMS clase 55575'
    });

    res.send('SMS enviado');
});

app.get('/sms-custom', async (req, res) => {
    const { name, product } = req.query;

    await client.messages.create({
        from: TWILIO_PHONE_NUMBER,
        to: '+593958963171',
        body: `Gracias, ${name}, tu solicitud del producto ${product} ha sido aprobada`
    });

    res.send('SMS enviado');
});

app.get('/whatsapp', async (req, res) => {
    const { name, product } = req.query;

    await client.messages.create({
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+593958963171',
        body: `Gracias, ${name}, tu solicitud del producto ${product} ha sido aprobada`,
        mediaUrl: 'https://cdn.uc.assets.prezly.com/971f25d5-4704-4b75-9fb1-2ce35c6b498f/-/quality/best/-/format/auto/'
    });

    res.send('Whatsapp enviado');
});

app.listen(8080);

