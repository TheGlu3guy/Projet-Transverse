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
                            <p>Actu1</p>
                            <p>  </p>
                        </div>
                    </div>   
                    <div>
                        <div class="an">
                            <p>Actu1</p>
                        </div>
                        
                    </div>
                     <div>
                        <div class="an"></div>
                        <p>Actu1</p>
                    </div>
                    <div>
                        <div class="an"></div>
                        <p>Actu1</p>
                    </div>
            </div>
            <h2 class="titre_gauche">... et des producteurs locaux. </h2>
            <div class="annonces">
                    <div>
                        <div class="prod"></div>
                        <p>Actu1</p>
                    </div>
                    <div>
                        <div class="prod"></div>
                        <p>Actu1</p>
                    </div>
                    <div>
                        <div class="prod"></div>
                        <p>Actu1</p>
                    </div>
                    <div>
                        <div class="prod"></div>
                        <p>Actu1</p>
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
        width: 900px;
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
        height: 150px;
        width: 300px;
        border: 1px solid gray;
        margin: auto 10px;
        padding: 10px;
        background: white;
    }

    .prod{
        height: 150px;
        width: 300px;
        border: 1px solid gray;
        margin: auto 10px;
        padding: 10px;
        background: white;
    }
    .titre_gauche{
        text-align: right;
    }
    .actus p{
        text-align: center;
        font-weight: bold;
    }
</style>

