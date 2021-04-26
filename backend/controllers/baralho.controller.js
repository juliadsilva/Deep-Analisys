var Baralho = require('../models/baralho.model');

exports.create = function(req, res) {
    let baralho = new Baralho({
        nome: req.body.nome,
        cor: req.body.cor,
        idUsuario: req.body.idUsuario
    });
    baralho.save(function(err) {
        if (err) return next(err);
        res.send('Baralho criado com sucesso')
    })
};

exports.detailsById = function(req, res) {
    Baralho.findById(req.params.id, function(err, baralho) {
        if (err) return next(err);
        res.send(baralho);
    })
};

exports.detailsByIdUsuario = function(req, res) {
    Baralho.find({ idUsuario: req.params.idUsuario },
        function(err, baralho) {
            if (err) return next(err);
            res.send(baralho);
        })
};

exports.update = function(req, res) {
    Baralho.findByIdAndUpdate(req.params.id, {
            nome: req.body.nome
        },
        function(err, baralho) {
            if (err) return next(err);
            baralho.nome = req.body.nome;
            res.send(baralho);
        })
};

exports.delete = function(req, res) {
    Baralho.findByIdAndDelete(req.params.id, function(err, baralho) {
        if (err) return next(err);
        res.send(baralho);
    })
};