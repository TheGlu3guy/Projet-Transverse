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

  const user = result.rows[0]

  //verifions le mot de passe
  if (await bcrypt.compare(password, user.password)) {
    req.session.userId = user.id_user
    req.session.email = user.email
    req.session.pseudo = user.pseudo
    
    //verifions si l'utilisateur est un producteur
    const result2 = await client.query({
      text: 'SELECT * FROM producteur WHERE id_user=$1',
      values: [user.id_user]
    })
    
    if(result2.rowCount>0){
      const producteur = result2.rows[0]
      req.session.isProducteur = true
      req.session.description = producteur.description
    }else{
      req.session.isProducteur = false
    }

    res.json({
      id: user.id_user,
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

router.post('/registerProducteur', async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const pseudo = req.body.pseudo
  const description = req.body.descripton

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

  const result2 = await client.query({
    text: 'SELECT lastval()'
  })

  const idUser = result2.rows[0].lastval
  if(typeof description === 'undefined'){
    await client.query({
      text: `INSERT INTO producteur(id_user)
      VALUES ($1)
      `,
      values: [idUser]
    })
  }else {
    await client.query({
      text: `INSERT INTO producteur(id_user, description)
      VALUES ($1, $2)
      `,
      values: [idUser, description]
    })
  }
  
  res.send('ok')
})

router.post('/annonce', async (req, res) => {
  const description = req.body.description
  const titre = req.body.titre
  const prix = req.body.prix
  const localisation = req.body.localisation
  
  if(typeof description === 'undefined'
    || typeof titre === 'undefined'
    || typeof prix === 'undefined'
    || typeof localisation === 'undefined'){
    res.status(401).json({
      message: 'annonce incomplete'
    })
    return
  }
  if(typeof req.session.userId === 'undefined'){
    res.status(401).json({
      message: 'user not connected'
    })
    return
  }
  await client.query({
    text: `INSERT INTO annonces (id_user, description, titre, prix, location)
    VALUES ($1, $2, $3, $4, $5)
    `,
    values: [req.session.userId, description, titre, prix, localisation]
  })
  res.send('ok')
})

router.post('/annonce', async (req, res) => {
  const result = await client.query({
    text: 'SELECT * FROM annonces'
  })

  if (result.rows.length > 0) {
    res.status(401).json({
      message: 'il n\'y a pas encore d\'annonces'
    })
    return
  }
})

module.exports = router
