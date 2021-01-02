const express = require('express')
const router = express.Router()
//const example = require('../data/example.js')
const bcrypt = require('bcrypt')
const { Client } = require('pg')

const client = new Client({
 user: 'postgres',
 host: 'localhost',
 password: '123',
 database: 'transverse'
})

client.connect()

const users = []

/* Route à faire :
  - inscription --FAIT--
  - connexion --FAIT--
  - ajout d'une annonce
  - recupération des annonces dispo (en fonction des dates etc... donc plusieurs routes)
  - récup annonce favoris
  - ajout annonce favoris
*/



router.post('/login', async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const result = await client.query({
    text: 'SELECT * FROM users WHERE email=$1',
    values: [email]
  })

  if (result.rows.length === 0) {
    res.status(401).json({
      message: 'user doesnt exist'
    })
    return
  }
  // si on a pas trouvé l'utilisateur
  // alors on le crée
  const user = result.rows[0]

  if (await bcrypt.compare(password, user.password)) {
    // alors connecter l'utilisateur
    req.session.userId = user.id
    res.json({
      id: user.id,
      email: user.email
    })
  } else {
    res.status(401).json({
      message: 'bad password'
    })
    return
  }
})

router.post('/register', async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const pseudo = req.body.pseudo

  const result = await client.query({
    text: 'SELECT * FROM users WHERE email=$1',
    values: [email]
  })

  if (result.rows.length > 0) {
    res.status(401).json({
      message: 'user already exists'
    })
    return
  }
  // si on a pas trouvé l'utilisateur
  // alors on le crée

  const hash = await bcrypt.hash(password, 10)

  await client.query({
    text: `INSERT INTO users(email, password, pseudo)
    VALUES ($1, $2, $3)
    `,
    values: [email, hash, pseudo]
  })
  res.send('ok')
})
/*
class Objet {
  constructor () {
    this.createdAt = new Date()
    this.updatedAt = new Date()
    this.array = []
  }
}

router.use((req, res, next) => {
  // l'utilisateur n'est pas reconnu
  if (typeof req.session.objet === 'undefined') {
    req.session.objet = new Objet()
  }
  next()
})


router.get('/panier', (req, res) => {
  res.json(req.session.panier)
})

router.post('/panier', (req, res) => {
  req.body.articleId

  if (isNaN(quantity)) {
    res.status(400).json({ message: "You cannot add a quantity of 0 in your cart"})
    return
  }

  const newArticle = {
    id: articleId,
    quantity
  }

  res.send(newArticle)
})

router.put('/panier/:articleId', (req, res) => {
  const articleId = parseInt(req.params.articleId)

  if (isNaN(quantity) || quantity <= 0) {
    res.status(400).json({ message: "You cannot add a quantity of 0 in your cart"})
    return
  }

  res.send()
})

router.route('/article/:articleId')
  .get(parseArticle, (req, res) => {
  })
  .put(parseArticle, (req, res) => {
    const name = req.body.name
    const description = req.body.description
    const image = req.body.image
    const price = parseInt(req.body.price)

    req.article.name = name
    req.article.description = description
    req.article.image = image
    req.article.price = price
    res.send()
  })

  .delete(parseArticle, (req, res) => {
    const index = articles.findIndex(a => a.id === req.articleId)

    articles.splice(index, 1) // remove the article from the array
    res.send()
  })
*/
module.exports = router
