let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let corridaSchema = require('../Models/Corrida');

router.route('/criar-corrida').post((req, res, next) => {
    corridaSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/').get((req, res) => {
    corridaSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/editar-corrida/:id').get((req, res) => {
    corridaSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.route('/atualizar-corrida/:id').put((req, res, next) => {
    corridaSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('GP Atualizado !')
        }
    })
})

router.route('/excluir-corrida/:id').delete((req, res, next) => {
    corridaSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;