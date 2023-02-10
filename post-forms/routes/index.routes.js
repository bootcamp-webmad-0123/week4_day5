const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index");
})



// Login form render
router.get("/iniciar-sesion", (req, res, next) => {
  res.render("auth/login-form");
})


// Login form handler
router.post("/iniciar-sesion", (req, res, next) => {

  const { userEmail, userPwd } = req.body

  res.send(`<h1>El usuario es ${userEmail} y su contraseña es ${userPwd}</h1>`)

})

module.exports = router