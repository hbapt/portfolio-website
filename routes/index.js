const express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");
const app = express();
// const cors = require("cors");
require("dotenv").config();

const path = require('path');

// middleware
app.use(express.json());
// app.use(cors());

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        pass: process.env.WORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});
transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`);
});

router.post('/contact', async function (req, res, next) {

    let mailOptions = {
        from: `${req.body.emailState.email}`,
        to: process.env.EMAIL,
        subject: `Message de: ${req.body.emailState.name} | ${req.body.emailState.email}`,
        text: `${req.body.emailState.message}`,
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            res.json({
                status: "fail",
            });
        } else {
            console.log("== Message Sent ==");
            res.json({
                status: "success",
                mailOptions
            });
        }
    });
});



// const port = 3001;
// app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = router;