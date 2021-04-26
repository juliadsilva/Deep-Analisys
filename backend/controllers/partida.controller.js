var Partida = require('../models/partida.model');

exports.create = function(req, res) {
    let partida = new Partida({
        win: req.body.win,
        loss: req.body.loss,
        idBaralho: req.body.idBaralho
    });
    partida.save(function(err) {
        if (err) return next(err);
        res.send('Partida criada com sucesso')
    })
};

exports.detailsById = function(req, res) {
    Partida.findById(req.params.id, function(err, partida) {
        if (err) return next(err);
        res.send(partida);
    })
};

exports.detailsByIdBaralho = function(req, res) {
    Partida.find({ idBaralho: req.params.idBaralho },
        function(err, partida) {
            if (err) return next(err);
            res.send(partida);
        })
};

exports.delete = function(req, res) {
    Partida.findByIdAndDelete(req.params.id, function(err, partida) {
        if (err) return next(err);
        res.send(partida);
    })
};