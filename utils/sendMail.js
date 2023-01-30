const nodemailer = require("nodemailer");


const sendEmail = async options => {
            console.log(options.email)
            const transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                                    user: 'miss.poojarijal@gmail.com',
                                    pass: 'mfrsmrozmuvudqej'
                        }
            });


            const mailOptions = {
                        from: 'miss.poojarijal@gmail.com',
                        to: options.email,
                        subject: options.subject,
                        text: options.message
            };

            await transporter.sendMail(mailOptions)
}

module.exports = sendEmail;