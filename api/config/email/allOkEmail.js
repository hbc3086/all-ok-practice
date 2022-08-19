const nodemailer = require('nodemailer');
const logger = require('../logger');

const emailPassing = process.env.SMTP_PASS;
const from = process.env.SMTP_FROM;
const host = process.env.SMTP_HOST;
const port = process.env.SMTP_PORT;
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: true,
  auth: {
    user,
    pass,
  },
});

async function sendMail(to, subject, content) {
  if(emailPassing){
    console.log('email passing');
    return true;
  } else {
    console.log('email send');
    /*
    const config = {
      from: '"ALL-OK" <'+from+'>',
      to: to,
      subject: subject,
      html: content
    }
    return transporter.sendMail(config)
      .then(info => {
        logger.debug('메일을 발송했습니다 : %O', info);
        return true;
      })
      .catch(err => {
        logger.error("메일 발송에 실패했습니다. : %O", err);
        return false;
      })

     */
  }
}

module.exports = {
  sendMail,
}
