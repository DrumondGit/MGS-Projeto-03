const router = require('express').Router();     

router.get("/", (req, res) => {
    res.render('home.ejs')
})

router.get("/users", (req, res) => {
    res.send("Usuários")
});

// TODO Adicionar rota /addStudent

module.exports = router
