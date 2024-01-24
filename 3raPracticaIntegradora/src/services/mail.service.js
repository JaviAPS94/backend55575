import nodemailer from 'nodemailer';
import config from '../config/config.js';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: config.userNodemailer, //Variables de ambiente
        pass: config.passwordNodemailer
    }
});

export const sendEmail = async (email) => {
    await transporter.sendMail({
        from: 'CoderHouse 55575',
        to: email.to,
        subject: email.subject,
        html: email.html
    });
}