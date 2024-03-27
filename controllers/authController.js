const User = require("../models/user")

exports.signUpUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const user = new User({
        name: name,
        email: email,
        password: password,
    })

    user.save()
        .then(result => {
            res.status(201).json({
                massage: "User criado com sucesso!",
                result: result
            })
        }).catch(error => {
            res.status(500).json({
                massage: "Erro ao cria user",
                result: error
            })
        })
}

exports.signInUser = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

}