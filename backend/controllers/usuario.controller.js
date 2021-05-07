var Usuario = require('../models/usuario.model');

exports.create = function(req, res, next) {
    let usuario = new Usuario({
        username: req.body.username,
        estado: req.body.estado,
        cidade: req.body.cidade,
        email: req.body.email,
        token: req.body.token
    });
    usuario.save(function(err) {
        if (err) return next(err);
        res.send('Usuário criado com sucesso')
    })
};

exports.details = function(req, res, next) {
    Usuario.findById(req.params.token, function(err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.detailsByEmail = function(req, res, next) {
    Usuario.findOne({ email: req.params.email },
        function(err, user) {
            if (err) return next(err);
            res.send(user);
        })
};