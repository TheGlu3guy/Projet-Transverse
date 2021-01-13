<template>
    <div id="body">
        <div id="bienvenue">
            <h1>Bonjour,</h1>
            <p>Bienvenue sur notre site!<br>
                Vous pourrez y trouvez des producteurs vendant des fruits et légumes bio et frais dans toute la France!<br>
                Si vous le souhaitez, vous pouvez même mettre vos propres produits en vente en créant un compte producteur.
            <p>
        </div>
        <div class="actualites">
            <h2>Des annonces proche de chez vous...</h2>
            <div class="annonces">
                    <div>
                        <div class="an">
                            
                            <div class="titre">
                                <img class="image_annonce" src="img/logo.png">
                                <h3 class="titre_annonce">Titre de l'annonce</h3>
                            </div>
                            <div>
                                <p>Producteur :</p><router-link to='/profil_producteur'>M.Michel</router-link>
                                <p>Annonce mise en ligne le : 11/02/2020</p>
                                <p>Produit : Pomme ; Poire ; Pastèque</p>
                                <p>Quantité :</p>
                                <p>Label :</p> 
                                <hr>
                                <p class="description">description de l'annonce de qualité uezbo    uvziubrizuvb    zbev    uib</p>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <div class="an">
                            
                            <div class="titre">
                                <img class="image_annonce" src="img/logo.png">
                                <h3 class="titre_annonce">Titre de l'annonce</h3>
                            </div>
                            <div>
                                <p>Producteur :</p><router-link to='/profil_producteur'>M.Michel</router-link>
                                <p>Annonce mise en ligne le : 11/02/2020</p>
                                <p>Produit : Pomme ; Poire ; Pastèque</p>
                                <p>Quantité :</p>
                                <p>Label :</p> 
                                <hr>
                                <p class="description">description de l'annonce de qualité uezbo    uvziubrizuvb    zbev    uib</p>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <div class="an">
                            
                            <div class="titre">
                                <img class="image_annonce" src="img/logo.png">
                                <h3 class="titre_annonce">Titre de l'annonce</h3>
                            </div>
                            <div>
                                <p>Producteur :</p><router-link to='/profil_producteur'>M.Michel</router-link>
                                <p>Annonce mise en ligne le : 11/02/2020</p>
                                <p>Produit : Pomme ; Poire ; Pastèque</p>
                                <p>Quantité :</p>
                                <p>Label :</p> 
                                <hr>
                                <p class="description">description de l'annonce de qualité uezbo    uvziubrizuvb    zbev    uib</p>
                            </div>
                            
                        </div>
                    </div>
                     <div>
                        <div class="an">
                            
                            <div class="titre">
                                <img class="image_annonce" src="img/logo.png">
                                <h3 class="titre_annonce">Titre de l'annonce</h3>
                            </div>
                            <div>
                                <p>Producteur :</p><router-link to='/profil_producteur'>M.Michel</router-link>
                                <p>Annonce mise en ligne le : 11/02/2020</p>
                                <p>Produit : Pomme ; Poire ; Pastèque</p>
                                <p>Quantité :</p>
                                <p>Label :</p> 
                                <hr>
                                <p class="description">description de l'annonce de qualité uezbo    uvziubrizuvb    zbev    uib</p>
                            </div>
                            
                        </div>
                    </div>
                     <div>
                        <div class="an">
                            
                            <div class="titre">
                                <img class="image_annonce" src="img/logo.png">
                                <h3 class="titre_annonce">Titre de l'annonce</h3>
                            </div>
                            <div>
                                <p>Producteur :</p><router-link to='/profil_producteur'>M.Michel</router-link>
                                <p>Annonce mise en ligne le : 11/02/2020</p>
                                <p>Produit : Pomme ; Poire ; Pastèque</p>
                                <p>Quantité :</p>
                                <p>Label :</p> 
                                <hr>
                                <p class="description">description de l'annonce de qualité uezbo    uvziubrizuvb    zbev    uib</p>
                            </div>
                            
                        </div>
                    </div>

                   
            </div>
            <h2 class="titre_gauche">... et des producteurs locaux. </h2>
            <div class="annonces">
                    <div>
                        <div class="prod">
                            <div class="prod_content">
                                <img src="img/logo.png">
                                <h3>Producteur</h3>
                                <p>description du profil producteur</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="prod">
                            <div class="prod_content">
                                <img src="img/logo.png">
                                <h3>Producteur</h3>
                                <p>description du profil producteur</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="prod">
                            <div class="prod_content">
                                <img src="img/logo.png">
                                <h3>Producteur</h3>
                                <p>description du profil producteur</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="prod">
                            <div class="prod_content">
                                <img src="img/logo.png">
                                <h3>Producteur</h3>
                                <p>description du profil producteur</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="prod">
                            <div class="prod_content">
                                <img src="img/logo.png">
                                <h3>Producteur</h3>
                                <p>description du profil producteur</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="prod">
                            <div class="prod_content">
                                <img src="img/logo.png">
                                <h3>Producteur</h3>
                                <p>description du profil producteur</p>
                            </div>
                        </div>
                    </div>
                    
            </div>
        </div>
    </div>
</template>

<script>

    
    module.export = {
        props: {
            annonces: { type: Array, default: [
                {
                    id: 1,
                    title: 'annonce 1',
                    date: 22+"/"+22+"/"+2222,
                    image: 'img/logo.png',
                    price: 1,
                    qty: 3
                },
            ]},
            producteurs: { type: Array, default: [
                {
                    id: 1,
                    name: 'producteur 1',
                    image: 'img/logo.png',
                    location: '12 rue du col 85'
                }
            ]}
        }
    }
</script>


<style scoped>

    html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    }

    
    #bienvenue{
        margin-left: auto;
        margin-right: auto;
        width: 800px;
        height: 150px;
        margin-bottom: 2em;
        background-color: #ECF0F3;
        border-radius: 10px;
        box-shadow: 10px 10px 20px 0px #cdd3dd;
        padding: 10px;
    }
    #bienvenue h1{
        text-align: center;
    }

    .actualites{
        width: 1000px;
        padding: 20px;
        margin: 0 auto;
        box-shadow: 10px 10px 20px 0px #cdd3dd;

    }

    .annonces{
        display: flex;
        flex-direction: row;
        overflow: auto;
    }
    .an{
        height: 250px;
        width: 400px;
        margin: auto 10px;
        padding: 10px;
        background: white;
        box-shadow: 10px 10px 20px 0px #D1D9E6, -10px -10px 20px 0px #FFFFFF;
        display: flex;
        overflow: auto;
    }
   
     .an p{
        text-align: left;
        
    }
    .titre_annonce{
        width: max-content;
        margin-bottom: 10px;
    }
    .titre{
        margin-bottom: 10px;
        flex-direction: row;
    }
    .description{
        font-weight: 300;
    }
    hr{
        border: 1px solid #9C9C9C;
    }
    .image_annonce {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: auto;
        filter : drop-shadow(2px 3px 4px black);

    }
    .titre_gauche{
        text-align: right;
    }
    .prod{
        height: 150px;
        width: 300px;
        border: 1px solid gray;
        margin: auto 10px;
        padding: 10px;
        background: white;
    }
    .prod_content{
        display: flex;
        flex-direction: row;
        line-height: 50px;
        margin-bottom: 10px;
    }
    .prod_content img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .prod_content p{
        margin-left: 20px;
        width: max-content;
    }
    .prod p{
        text-align: left;

    }
</style>

