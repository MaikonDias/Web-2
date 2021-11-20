const express = require('express');
const jwt = require('jsonwebtoken');
const routes = express.Router();
const SECRET = 'sample text';

routes.get('/', function (req, res) {
  res.render('index', {
    title: "MotorSpotlight",
    info: "Acompanhe o automobilismo nacional com MotorSpotlight"
  });
});

routes.get('/loginpage', function (req, res) {
  res.render('loginpage', {
    title: "MotorSpotlight - Login",
    label1: "Nome", label2: "Senha", logo: "MotorSpotlight"
  });
});

routes.get('/about', function (req, res) {
  res.render('about', {
    title: "MotorSpotlight - Sobre",
    name: "Sobre",
    info: "O MotorSpotlight tem a proposta de ser um calendário de corridas automotivas, com a intenção de ajudar as pessoas a acompanharem os eventos",
    logo: "MotorSpotlight"

  });
});

routes.get('/dev', function (req, res) {
  res.render('dev', {
    title: "MotorSpotlight - Desenvolvedor",
    name: "Desenvolvido Por :",
    infonome: "Maikon Alexander de Barros Dias",
    info: "estudante, 7º Período de engenharia de software",
    logo: "MotorSpotlight"

  });
});

routes.get('/tech', function (req, res) {
  res.render('tech', {
    title: "MotorSpotlight - Tecnologias",
    name: "Tecnologias utilizadas",
    tech: [
      "Express.js",
      "Handlebars",
      "Docker"
    ],
    logo: "MotorSpotlight"
  });
});


routes.post('/login', function (req, res) {
  if (req.body.user === 'admin' && req.body.pass === '123') {
    const id = 1;
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300
    });
    return res.json({ auth: true, token: token });
  }

  res.status(500).json({ message: 'Login inválido!' });
})

routes.post('/logout', function (req, res) {
  return res.json({ auth: false, token: null });
})

module.exports = routes;