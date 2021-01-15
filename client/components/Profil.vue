<template>
    <div id="tab">
        <div id="titre">
            <img src="img/logo.png">
            <h1>{{user.prenom}} {{user.nom}}</h1>
        </div>
        <div id="historique des annonces">  
            <h2 >Historique des annonces en ligne</h2>  
            <div v-for="annonce in annonces" :key="annonce.id_annonce">
                <p>Titre de votre annonce : {{annonce.titre}}</p>
                <p>Contenu de votre annonce : {{annonce.contenu}}</p>
            </div>
        </div> 
            <div id="historique des demandes">
                <h2>Historique des demandes</h2>
                <div v-for="demande in demandes" :key="demande.id_demande" class="demandes">
                    <div class="demande">
                        <h3>DEMANDE :</h3>
                        <p>Vous avez reçu une demande de la part de : {{demande.nom}} {{demande.prenom}}</p>
                        <p>Il vous as laissé le message suivant :{{demande.message}}</p>
                        <p>Quantite souhaitée : {{demande.quantite}}</p>
                        <p>Annonce concernée :</p>
                        <button @click="$router.push('/annonce_produit/?id_annonce='+demande.id_annonce)">Aller vers l'annonce</button>
                    </div>
                </div>
            </div>   
        <div id="acheteur">
        </div>
    </div>
</template>

<style scoped>
    .demande{
        margin: 20px auto;
        padding: 20px;
        width: 400px;
        border: solid black;
    }
    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        }
    #tab {
        width: 1000px;
        margin: 0px auto;
        padding: 0px;
        box-shadow: 10px 10px 20px 0px #79979e;
        background-color: #DFDFDF;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        margin-bottom: 2em;
    }
    #titre{
        padding-left: 20px;
        padding-top: 30px;
        padding-bottom: 20px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    #titre img{
        width: 100px;
        height: 100px;
        align-content: center;
        border-radius: 50%;
        background-color: grey;
        filter : drop-shadow(1px 2px 3px grey);
        flex: none;
    }
    #titre h1{
        align-self: flex-end;
        padding: 20px;
    }
    #historique {
        flex: none;
        width: 750px;
        height: 600px;
        margin: auto;
        
        box-shadow: 10px 10px 20px 0px rgb(131, 163, 168) ;
        border-radius: 10px;
        
        margin-bottom: 2em;
        display: block;
        flex-direction: column;
        
    }
    #historique h2 {
        text-align: center;
        flex: none;
    }
    #annonces {
        flex: none;
        max-height: 500px;
        display: flex;
        flex-direction: column;
        overflow: auto;
    }
    hr {
        border: 1px solid grey;
    }
    #annonce {
        flex: none;
        width: 700px;
        margin: 15px auto;
        box-shadow: 10px 10px 20px 0px #cdd3dd;
        padding: 10px;
        display: flex;
        flex-direction: row;
        box-shadow: 10px 10px 20px 0px rgb(131, 163, 168) ;
        border-radius: 10px;
        border: solid 2px  rgb(89, 103, 105);
        margin-bottom: 2em;
        
    }
    .column1 {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-content: flex-end;

    }
    .column1 button{
        border-radius: 50px;
        border: none;
        background-color: #C4C4C4;
        width: 150px;
        height: 40px;
        margin-left: auto;
        margin-right: auto;
    }
    #column2 {
        flex-grow: 2;
        display: flex;
        flex-direction: column
    }
    #image_annonce{
        object-fit: cover;
        width: 150px;
        height: 150px;
        border-radius: 17px;
        border: solid;
        margin: 20px 0;
    }
    #titre_annonce{
        width: max-content;
        margin-bottom: 10px;
    }
</style>

<script>
    module.exports = {
        props: {
            user: { type: Object}
        },
        data () {
            return {
                annonces: [],
                users: {},
                demandes: [],
                user: {},
            }
        },
        async mounted(){
            const result = await axios.get('/api/produits', {})
            this.produits = result.data

            const result2 = await axios.get('/api/demandes/' + this.user.id_user)
            this.demandes = result2.data
        },
        methods: {
            deleteItem () {
            },
            ouvrirAnnonce(id_annonce){
                this.$router.push('/annonces/?id_annonce='+id_annonce)
            },
        }
    }
</script>
