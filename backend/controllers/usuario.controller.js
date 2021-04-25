var Usuario = require('../models/usuario.model');

exports.create = function(req, res) {
    let usuario = new Usuario({
        username: req.body.username,
        pais: req.body.pais,
        estado: req.body.estado,
        cidade: req.body.cidade,
        email: req.body.email,
        senha: req.body.senha
    });
    usuario.save(function(err) {
        if (err) return next(err);
        res.send('Usuário criado com sucesso')
    })
};

exports.detailsById = function(req, res) {
    Usuario.findById(req.params.id, function(err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.detailsByEmail = function(req, res) {
    Usuario.findOne({ email: req.params.email },
        function(err, user) {
            if (err) return next(err);
            res.send(user);
        })
};