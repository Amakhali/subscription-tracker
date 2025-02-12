import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env.js';

export const accountEmail = 'mukodazayofe@gmail.com';

export const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:accountEmail,
        password: EMAIL_PASSWORD
    }
})