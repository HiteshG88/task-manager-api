const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hiteshgupta1234567@gmail.com',
        subject: 'Thanks for Joining Us',
        text: `Welcome to the app, ${name}, let me know how things go with the application.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hiteshgupta1234567@gmail.com',
        subject: 'Leaving so Soon',
        text: `Thanks for using our Services, ${name}, let us know how we can improve our application, your feedback is important to us.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}