const Datas = require('../models/data')
const nodemailer = require("nodemailer")
exports.datapost = ((req, res) => {
    Datas.create(req.body, (err, docs) => {
        if (!err) {
            let mailTransporter = nodemailer.createTransport({
                service: "gmail.com",
                auth: {
                    user: "reddysainadh18@gmail.com",
                    pass: "snaavk81",
                },
                secureConnection: true,
                tls: {
                    rejectUnauthorized: false,
                    secureProtocol: "TLSv1_method",
                },
            })

            let mailDetails = {
                from: 'Sainadh',
                to: req.body.mail,
                subject: `Pubg - Tournament`,
                html: `<p>Congratulations you have successfully completed the first step of winning the prize money.Your registration is under review.Please wait for a while until we cross check the transactions details.We will get back to you.</p>`,
            }

            mailTransporter.sendMail(mailDetails, function (err7, data) {
                res.send({ message: "success" })

            })
        }
        else { res.send({ message: "error" }) }
    })
})

exports.dataget = (async (req, res, next) => {
    const data = await Datas.find().lean();
    (data || data.message != 'error') ? res.send(data) : res.send({ message: "error" })
})


exports.updatedata = (async (req, res, next) => {
    Datas.updateOne({ mail: req.body.mail }, { $set: req.body }, (err, docs) => {
        let mailTransporter = nodemailer.createTransport({
            service: "gmail.com",
            auth: {
                user: "reddysainadh18@gmail.com",
                pass: "snaavk81",
            },
            secureConnection: true,
            tls: {
                rejectUnauthorized: false,
                secureProtocol: "TLSv1_method",
            },
        })

        let mailDetails = {
            from: 'Sainadh',
            to: req.body.mail,
            subject: `Pubg - Tournament`,
            html: `<p>Felicidades,you have succesfully entered into the our contest.Hope you will win the contest.Happy gaming..
            <a href="https://chat.whatsapp.com/LTkJqwFrnGFJOQZ5MmpSjI">Click to join the whastapp group for futher information.</a></p>
            `,
        }

        mailTransporter.sendMail(mailDetails, function (err7, data) {

            res.send({ message: "success" })

        })
    })
})