<template>
    <div id="body">
        <div id="bienvenue">
            <h1>Bonjour,</h1>
            <p>Bienvenue sur notre site!<br>
                Vous pourrez y trouvez des producteurs vendant des fruits et légumes bio et frais dans toute la France!<br>
                Si vous le souhaitez, vous pouvez même mettre vos propres produits en vente en créant un compte producteur.
            </p>
        </div>
        <div id="tableau_de_bord">
            <h2>Des annonces proche de chez vous...</h2>
            <div id="ans">

                <div class="an">
                    <div class="titre">
                        <img src="img/logo.png">
                        <h3> titre  hkhbiboib  bkbkb </h3>
                    </div>
                    <div class="description">
                        <div>
                            <p>Producteur :</p>
                            <router-link to='/profil_producteur'>michel</router-link>
                        </div>
                        <div>
                            <p>Annonce mise en ligne le :  </p>
                        </div>
                        
                        <div>
                            <p>Description : </p>
                        </div>
                        <div>
                            <p>Label : </p> 
                        </div>
                        <div>
                            <p>Prix : $</p>
                        </div>

                        <hr>

                        <div class="bouton_an" >
                            <button>Voir l'annonce</button>
                        </div>
                    </div>
                </div>
                
                <div class="an" v-for="an in annonces" :key="an.id" >
                    <div class="titre">
                        <img src="img/logo.png">
                        <h3> {{an.title}} </h3>
                    </div>
                    <div class="description">
                        <div>
                            <p>Producteur :</p>
                            <router-link to='/profil_producteur'>{{an.producteur}}</router-link>
                        </div>
                        <div>
                            <p>Annonce mise en ligne le : {{an.date}} </p>
                        </div>
                        
                        <div>
                            <p>Description : {{an.description}}</p>
                        </div>
                        <div>
                            <p>Label : {{an.label}}</p> 
                        </div>
                        <div>
                            <p>Prix : {{an.price}}$</p>
                        </div>

                        <hr>

                        <div class="bouton_an" >
                            <button>Voir l'annonce</button>
                        </div>
                    </div>
                </div>


            </div>
            <hr>
            <h2 id="titre_gauche">... et des producteurs locaux. </h2>
            <div id="producteurs">

                <div class="prod">
                    <img src="img/logo.png">
                    <h3><router-link to='/profil_producteur'>M.Michel</router-link></h3>
                    <hr>
                    <div> 
                        <p>description du profil producteurdescription du profil producteurd<br />escription du profil producteurdescription du profil producteurdescription du <br />profil producteurdescription du profil producteurd<br />es<br />cription du profil producteurdescription<br /> du profil producteurdescription du profil producteurdescription du profil producteurdescription du profil produ<br />cteurdescription du profil producteurdescription du profil producteurd<br />escription du profil producteurdescription du profil producteurdescription du profil producteurdescription <br />du profil producteurdescription du profil producteurdescrip<br />tion du profil producteurdescription du profil<br /> producteurdescription du profil producteurdescription du profil producteurdescription du profil producteurdesc<br />ription du profil producteur</p>
                    </div>
                    <div class="bouton_prod">
                        <button>En savoir plus</button>
                    </div>
                </div>

                <div class="prod" v-for="pr in producteurs" :key="pr.id">
                    <img src="img/logo.png">
                    <h3><router-link to='/profil_producteur'>{{ id.name }}</router-link></h3>
                    <hr>
                    <div> 
                        <p> Description du producteur : {{ pr.description }} </p>
                        <p> Point de vente : {{ pr.location }} </p>
                        <p> Label : {{ pr.label }} </p>
                    </div>
                    <div class="bouton_prod">
                        <button>En savoir plus</button>
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
                    title: 'titre annonce',
                    image: 'img/logo.png',
                    producteur: 'M Michel',
                    date: 22+"/"+22+"/"+2222,
                    description: 'descriptul    zjebZBEFLZIEMncmoihygoiunkrveiuriuearnoaminoierhviubvjknmjkuafidaiunmkcnzmoivhmrbvmznv',
                    label: '',
                    price: 1,
                },            
            ]},
            producteurs: { type: Array, default: [
                {
                    id: 1,
                    name: 'producteur 1',
                    image: 'img/logo.png',
                    description: 'lzebaizuvbpaiuzevapziuvbkjbkjouzbmvrnazmobviazubvmazn',
                    location: '12 rue du col 85',
                    label: ''
                }
            ]}
        },
        data () {
            return {
                annonces,
                producteurs,

            }
        }
    }
</script>


<style scoped>

    html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    }

   
    
    #bienvenue {
        margin-left: auto;
        margin-right: auto;
        width: 800px;
        height: 150px;
        margin-bottom: 2em;
        background-color: #ECF0F3;
        border-radius: 10px;
        box-shadow: 10px 10px 20px 0px #cdd3dd;
        border: solid 1px;
        padding: 10px;
    }

    #bienvenue h1{
        text-align: center;
    }

     #tableau_de_bord{
        width: 1000px;
        margin: 0 auto;
        padding: 20px;
        box-shadow: 10px 10px 20px 0px #cdd3dd;
        border: solid 1px;
        border-radius: 3px;
        display: flex;
        flex-direction: column;

    }
    #tableau_de_bord h2{
        padding: 20px;
    }

    #ans{
        display: flex;
        flex-direction: row;
        overflow: auto;

    }
    .an{
        height: 200px;
        width: 400px;
        margin: 10px;
        padding: 5px;
        box-shadow: 10px 10px 20px 0px #D1D9E6, -10px -10px 20px 0px #FFFFFF;
        border: solid 0.5px;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        flex: none;
   
    }
   
        
    .titre{
        flex-grow: 1;
        max-width: 30%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        
    }
    .titre h3{
        text-align: center;
        padding: 10px;
    }
    .titre img{
        padding: 0px;
        margin: 0px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        filter : drop-shadow(2px 3px 4px black);
        

    }

    .description{
        padding: 5px;
        margin: 0px;
        overflow: auto;
        flex-grow: 2;
        
    }
    hr{
        border: 1px solid #9C9C9C;
    }
    .bouton_an {
        flex: none;
        display: flex;
        flex-direction: column;
        

    }
    .bouton_an button {
        align-self: center;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    
    #titre_gauche{
        text-align: right;
    }
    #producteurs{
        display: flex;
        flex-direction: row;
        overflow: auto;
        
    }
    .prod{
        
        height: 400px;
        width: 300px;
        margin: auto 10px;
        padding: 10px;
        border: solid 0.5px;
        box-shadow: 10px 10px 20px 0px #D1D9E6, -10px -10px 20px 0px #FFFFFF;
        display: block;
        flex-direction: column;
        flex: none;
        overflow: auto;
        
    }
   
    .prod img{
        width: 75px;
        height: 75px;
        align-content: center;
        border-radius: 50%;
        background-color: grey;
        filter : drop-shadow(1px 2px 3px grey);
        flex: none;
    }
    
    .prod h3{
        text-align: center;
        flex: none;
        
    }
    hr{
        border: 1px solid grey;
    }
    .bouton_prod {
        flex: none;
        display: flex;
        flex-direction: column;
        

    }
    .bouton_prod button {
        align-self: center;
        margin-top: 15px;
        margin-bottom: 15px;
    }
   

   
</style>

