const transporter = require("../config/transporterConfig");

exports.sendEmail = async (name, email, message) => {
    let mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: process.env.EMAIL_RECEIVER,
        subject: "Home Page Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b.Message:</b> ${message}`,
    };

    await transporter.sendMail(mailOptions);
};
