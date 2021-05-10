var Baralho = require('../models/baralho.model');

exports.create = function(req, res, next) {
    let baralho = new Baralho({
        nome: req.body.nome,
        cor: req.body.cor,
        idUsuario: req.body.idUsuario
    });
    baralho.save(function(err) {
        if (err) return next(err);
        res.send(baralho);
    })
};

exports.update = function(req, res, next) {
    Baralho.findByIdAndUpdate(req.params.id, {
            nome: req.body.nome,
            cor: req.body.cor,
        },
        function(err, baralho) {
            if (err) return next(err);
            baralho.nome = req.body.nome;
            res.send(baralho);
        })
};

exports.delete = function(req, res, next) {
    Baralho.findOneAndDelete({
            nome: req.params.nome,
            idUsuario: req.params.idUsuario
        },
        function(err, baralho) {
            if (err) return next(err);
            res.send(baralho);
        })
};

exports.details = function(req, res, next) {
    Baralho.findById(req.params.id, function(err, baralho) {
        if (err) return next(err);
        res.send(baralho);
    })
};

exports.detailsByNome = function(req, res, next) {
    Baralho.findOne({
            nome: req.params.nome,
            idUsuario: req.params.idUsuario
        },
        function(err, baralho) {
            if (err) return next(err);
            res.send(baralho);
        })
};

exports.detailsByIdUsuario = function(req, res, next) {
    Baralho.find({ idUsuario: req.params.idUsuario },
        function(err, baralho) {
            if (err) return next(err);
            res.send(baralho);
        })
};