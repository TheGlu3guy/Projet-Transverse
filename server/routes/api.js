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


router.delete('/me', async (req, res) => {
  if (typeof req.session.userId === 'undefined') {
    res.send('non connecté')
    return
  }

  delete req.session

  res.send('ok')
})
router.get('/me', async (req, res) => {
  if (typeof req.session.userId === 'undefined') {
    res.status(401).json({ message: 'not connected' })
    return
  }

  const result = await client.query({
    text: 'SELECT id_user, email FROM users WHERE id_user=$1',
    values: [req.session.userId]
  })

  res.json(result.rows[0])
})

const users = []

/*
Route à faire :
  - ajout d'une annonce
  - recupération des annonces dispo (en fonction des dates etc... donc plusieurs routes)
  - récup annonce favoris
  - ajout annonce favoris
*/

//Se connecter
router.post('/login', async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const result = await client.query({
    text: 'SELECT users.id_user, users.email, users.password, users.nom, users.prenom, producteur.description, producteur.id_producteur FROM users LEFT JOIN producteur ON users.id_user=producteur.id_user WHERE email=$1',
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
    req.session.isProducteur = false

    if(user.id_producteur!==null){
      req.session.isProducteur = true
      req.session.description = user.description
    }

    res.json({
      id: user.id_user,
      isProducteur: req.session.isProducteur,
      email: user.email
    })

  } else {
    res.status(401).json({
      message: 'bad password'
    })
    return
  }
})

//S'enregistrer en tant qu'acheteur
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

//S'enregistrer en tant que producteur
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

//Poster une annonce
router.post('/annonce', async (req, res) => {
  const description = req.body.description
  const titre = req.body.titre
  const prix = req.body.prix
  const id_produit = req.body.id_produit
  const quantite = req.body.quantite
  const in_kg = req.body.in_kg
  const id_label = req.body.id_label
  const id_region = req.body.id_region
  const id_departement = req.body.id_departement
  const adresse = req.body.adresse
  //un bolean qui dit si la quantite et le prix est en kilo (true) ou par piece (false)
  
  if(typeof description === 'undefined'
    || typeof titre === 'undefined'
    || typeof prix === 'undefined'
    || typeof id_produit === 'undefined'
    || typeof quantite === 'undefined'
    || typeof in_kg === 'undefined'
    || typeof adresse === 'undefined'){
    res.status(401).json({
      message: 'annonce incomplete'
    })
    return
  }
  if(typeof req.session.userId === 'undefined'){
    res.status(401).json({
      message: 'user not connected'
    })
    console.log("not connected")
    return
  }
  if(!req.session.isProducteur){
    res.status(401).json({
      message: 'user not a producteur'
    })
    console.log("not producteur")
    return
  }
  await client.query({
    text: `INSERT INTO annonces (id_user, description, titre, prix, id_produit, quantite, in_kg, id_label, id_region, id_departement, adresse)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    `,
    values: [req.session.userId, description, titre, prix, id_produit, quantite, in_kg, id_label, id_region, id_departement, adresse]
  })
  res.send('ok')
})

//Poster un avis
router.post('/avis', async (req, res) => {
  const note = req.body.note
  const contenu = req.body.contenu
  const titre = req.body.titre
  const id_producteur = req.body.id_producteur
  const id_user = req.session.userId

  if(typeof id_user === 'undefined'){
    res.status(401).json({
      message: 'you are not connected'
    })
    return
  }

  if(typeof note === 'undefined'
    || typeof contenu === 'undefined'
    || typeof titre === 'undefined'
    || typeof id_producteur === 'undefined'){
    res.status(401).json({
      message: 'avis incomplet'
    })
    return
  }

  await client.query({
    text: `INSERT INTO avis(note, contenu, titre, id_user, id_producteur)
    VALUES ($1, $2, $3, $4, $5)
    `,
    values: [note, contenu, titre, id_user, id_producteur]
  })
  
  res.send('ok')
})


//Obtenir toutes les annonces
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

//Obtenir une annonce en particulier
router.get('/annonce/:id_annonce', async (req, res) => {
  const id_annonce = parseInt(req.params.id_annonce)

  const result = await client.query({
    text: 'SELECT * FROM annonces WHERE id_annonce = $1',
    values: [id_annonce]
  })

  if (result.rows.length <= 0) {
    res.status(401).json({
      message: 'il n\'y a pas d\'annonces avec ce label'
    })
    return
  }

  res.send(result.rows[0])
})

//Obtenir les annonces par label
router.get('/annonce/label/:id_label', async (req, res) => {
  const id_label = parseInt(req.params.id_label)

  const result = await client.query({
    text: 'SELECT * FROM annonces WHERE id_label = $1',
    values: [id_label]
  })

  if (result.rows.length <= 0) {
    res.status(401).json({
      message: 'il n\'y a pas d\'annonces avec ce label'
    })
    return
  }

  res.send(result.rows)
})

//Obtenir les annonces par produit
router.get('/annonce/produit/:id_produit', async (req, res) => {
  const id_produit = parseInt(req.params.id_produit)
  const result = await client.query({
    text: 'SELECT * FROM annonces WHERE id_produit = $1',
    values: [id_produit]
  })

  if (result.rows.length <= 0) {
    res.status(401).json({
      message: 'il n\'y a pas d\'annonces avec ce produit'
    })
    return
  }
})

//Obtenir les annonces par région
router.get('/annonce/region/:id_region', async (req, res) => {
  const id_region = parseInt(req.params.id_region)
  const result = await client.query({
    text: 'SELECT * FROM annonces WHERE id_region = $1',
    values: [id_region]
  })

  if (result.rows.length <= 0) {
    res.status(401).json({
      message: 'il n\'y a pas d\'annonces avec cette region'
    })
    return
  }

  res.send(result.rows)
})

//Obtenir les annonces par producteur
router.get('/annonce/users/:id_user', async (req, res) => {
  const id_user = parseInt(req.params.id_user)
  const result = await client.query({
    text: 'SELECT * FROM annonces WHERE id_user = $1',
    values: [id_user]
  })

  if (result.rows.length <= 0) {
    res.status(401).json({
      message: 'il n\'y a pas d\'annonces avec ce producteur'
    })
    return
  }

  res.send(result.rows)
})

//Obtenir les avis par producteur
router.get('/avis/users/:id_user', async (req, res) => {
  const id_user = parseInt(req.params.id_user)
  const result = await client.query({
    text: 'SELECT * FROM avis WHERE id_user = $1',
    values: [id_user]
  })

  if (result.rows.length <= 0) {
    res.status(401).json({
      message: 'il n\'y a pas d\'avis avec ce producteur'
    })
    return
  }

  res.send(result.rows)
})

//Obtenir tous les labels
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

//Obtenir toutes les régions
router.get('/regions', async (req, res) => {
  const result = await client.query({
    text: 'SELECT * FROM regions'
  })

  if (result.rows.length <= 0) {
    res.status(401).json({
      message: 'il n\'y a pas encore d\'annonces'
    })
    return
  }
  res.send(result.rows)
})

//Obtenir tous les départements
router.get('/departements', async (req, res) => {
  const result = await client.query({
    text: 'SELECT * FROM departements'
  })

  if (result.rows.length <= 0) {
    res.status(401).json({
      message: 'il n\'y a pas encore d\'annonces'
    })
    return
  }
  res.send(result.rows)
})

//Obtenir tous les avis
router.get('/avis', async (req, res) => {
  const result = await client.query({
    text: 'SELECT * FROM avis'
  })

  if (result.rows.length <= 0) {
    res.status(401).json({
      message: 'il n\'y a pas encore d\'avis'
    })
    return
  }
  res.send(result.rows)
})

//Obtenir tous les produits
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

//Obtenir un user en particulier
router.get('/users/:id_user', async (req, res) => {
  const id_user = parseInt(req.params.id_user)

  const result = await client.query({
    text: 'SELECT * FROM users WHERE id_user = $1',
    values: [id_user]
  })

  if (result.rows.length <= 0) {
    res.status(401).json({
      message: 'il n\'y a pas d\'annonces avec ce label'
    })
    return
  }

  res.send(result.rows[0])
})
//Obtenir un produit en particulier
router.get('/produits/:id_produit', async (req, res) => {
  const id_produit = parseInt(req.params.id_produit)

  const result = await client.query({
    text: 'SELECT * FROM produits WHERE id_produit = $1',
    values: [id_produit]
  })

  if (result.rows.length <= 0) {
    res.status(401).json({
      message: 'il n\'y a pas d\'annonces avec ce label'
    })
    return
  }

  res.send(result.rows[0])
})

//Obtenir les demandes d'un producteur
router.get('/demandes/:id_user', async (req, res) => {
  const id_user = parseInt(req.params.id_user)

  const result = await client.query({
    text: `SELECT demandes.id_user, demandes.message, demandes.quantite, demandes.id_annonce, demandes.id_demande, annonces.id_user AS id_producteur 
    FROM demandes LEFT JOIN annonces 
    ON demandes.id_annonce = annonces.id_annonce
    WHERE annonces.id_user = $1`,
    values: [id_user]
  })

  res.send(result.rows)
})


//Obtenir un label en particulier
router.get('/labels/:id_label', async (req, res) => {
  const id_label = parseInt(req.params.id_label)

  const result = await client.query({
    text: 'SELECT * FROM labels WHERE id_label = $1',
    values: [id_label]
  })

  if (result.rows.length <= 0) {
    res.status(401).json({
      message: 'il n\'y a pas d\'annonces avec ce label'
    })
    return
  }

  res.send(result.rows[0])
})

router.post('/demandes', async (req, res) => {
  const id_user = req.session.userId

  if(typeof id_user === 'undefined'){
    res.status(401).json({
      message: 'you are not connected'
    })
    return
  }

  const message = req.body.message
  const quantite = req.body.quantite
  const id_annonce = req.body.id_annonce

  if(typeof message === 'undefined'
    || typeof quantite === 'undefined'
    || typeof id_annonce === 'undefined'){
    res.status(401).json({
      message: 'demande incomplète'
    })
    return
  }

  await client.query({
    text: `INSERT INTO demandes(id_user, message, quantite, id_annonce)
    VALUES ($1, $2, $3, $4)
    `,
    values: [id_user, message, quantite, id_annonce]
  })

  await client.query({
    text: `UPDATE annonces SET quantite = quantite - $1 
    WHERE id_annonce = $2`,
    values: [quantite, id_annonce]
  })
  
  res.send('ok')
})
module.exports = router

//Obtenir les données d'un producteur
router.get('/producteur/users/:id_user', async (req, res) => {
  const id_user = parseInt(req.params.id_user)

  const result = await client.query({
    text: 'SELECT * FROM producteur WHERE id_user = $1',
    values: [id_user]
  })

  if (result.rows.length <= 0) {
    res.status(401).json({
      message: 'il n\'y a pas d\'user avec cet id'
    })
    return
  }

  res.send(result.rows[0])
})