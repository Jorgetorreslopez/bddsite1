const emailService = require('../services/emailService');

exports.sendContactEmail = async (req, res) => {
    const { name, email, message } = req.body;
    try {
        await emailService.sendEmail(name, email, message);
        res.status(200).send({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Failed to send email", error);
        res.status(500).send({ message: "Failed to send email" });
    }
};
