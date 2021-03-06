var Partida = require('../models/partida.model');

exports.create = function(req, res, next) {
    let partida = new Partida({
        ident: req.body.ident,
        win: req.body.win,
        loss: req.body.loss,
        idBaralho: req.body.idBaralho
    });
    partida.save(function(err) {
        if (err) return next(err);
        res.send(partida)
    })
};

exports.detailsById = function(req, res, next) {
    Partida.findById(req.params.id, function(err, partida) {
        if (err) return next(err);
        res.send(partida);
    })
};

exports.detailsByIdBaralho = function(req, res, next) {
    Partida.find({
            idBaralho: req.params.idBaralho
        },
        function(err, partida) {
            if (err) return next(err);
            res.send(partida);
        })
};

exports.detailsByIdent = function(req, res, next) {
    Partida.findOne({
            ident: req.params.ident,
            idBaralho: req.params.idBaralho
        },
        function(err, partida) {
            if (err) return next(err);
            res.send(partida);
        })
};

exports.delete = function(req, res, next) {
    Partida.findByIdAndDelete(req.params.id,
        function(err, partida) {
            if (err) return next(err);
            res.send(partida);
        })
};