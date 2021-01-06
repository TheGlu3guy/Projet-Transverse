const express = require('express')
const router = express.Router()
//const example = require('../data/example.js')
const bcrypt = require('bcrypt')
const { Client } = require('pg')

const client = new Client({
 user: 'postgres',
 host: 'localhost',
 password: '123',
 database: 'postgres'
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
      isProducteur: user.isProducteur,
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
  const nom = req.body.nom
  const prenom = req.body.prenom

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
    text: `INSERT INTO users(email, password, nom, prenom)
    VALUES ($1, $2, $3, $4)
    `,
    values: [email, hash, nom, prenom]
  })
  res.send('ok')
})

router.post('/registerProducteur', async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const nom = req.body.nom
  const prenom = req.body.prenom
  const description = req.body.description

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
  // alors on le crée .

  const hash = await bcrypt.hash(password, 10)

  await client.query({
    text: `INSERT INTO users(email, password, nom, prenom)
    VALUES ($1, $2, $3, $4)
    `,
    values: [email, hash, nom, prenom]
  })

  const result2 = await client.query({
    text: 'SELECT lastval()'
  })

  const idUser = result2.rows[0].lastval
  if(typeof description === 'undefined'){
    await client.query({
      text: `INSERT INTO producteur(id_user, description)
      VALUES ($1, $2)
      `,
      values: [idUser, description]
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
  const id_produit = req.body.id_produit
  const quantite = req.body.quantite
  const in_kg = req.body.in_kg
  const id_label = req.body.id_label
  //un bolean qui dit si la quantite et le prix est en kilo (true) ou par piece (false)
  
  if(typeof description === 'undefined'
    || typeof titre === 'undefined'
    || typeof prix === 'undefined'
    || typeof id_produit === 'undefined'
    || typeof quantite === 'undefined'
    || typeof in_kg === 'undefined'){
    res.status(401).json({
      message: 'annonce incomplete'
    })
    return
  }
  if(typeof req.session.userId === 'undefined'){
    console.log("pas connecté")
    res.status(401).json({
      message: 'user not connected'
    })
    return
  }
  await client.query({
    text: `INSERT INTO annonces (id_user, description, titre, prix, id_produit, quantite, in_kg)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,
    values: [req.session.userId, description, titre, prix, id_produit, quantite, in_kg]
  })
  res.send('ok')
})

router.get('/annonce', async (req, res) => {
  const result = await client.query({
    text: 'SELECT * FROM annonces'
  })

  if (result.rows.length <= 0) {
    res.status(401).json({
      message: 'il n\'y a pas encore d\'annonces'
    })
    return
  }

  res.send(result.rows)
})

router.get('/labels', async (req, res) => {
  const result = await client.query({
    text: 'SELECT * FROM labels'
  })

  if (result.rows.length <= 0) {
    res.status(401).json({
      message: 'il n\'y a pas encore d\'annonces'
    })
    return
  }

  res.send(result.rows)
})

router.get('/produits', async(req, res)=> {
  const id_produit = req.body.id_produit
  
  if(typeof id_produit === 'undefined'){
    const result = await client.query({
      text : 'SELECT * from produits'
    })
  
    if (result.rows.length <= 0) {
      res.status(401).json({
        message: 'il n\'y a pas encore de produits'
      })
      return
    }
  
    res.send(result.rows)
  } else {
    const result = await client.query({
      text : 'SELECT * from produits WHERE id_produit = $1',
      values : [id_produit]
    })

    if (result.rows.length <= 0) {
      res.status(401).json({
        message: 'Ce produit n\'existe pas.'
      })
      return
    }

    res.send(result.rows[0])
  }
  
})
module.exports = router
