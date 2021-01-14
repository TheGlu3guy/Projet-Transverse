<template>
    <div>
        <div id="producteur" v-if="user.isProducteur">
            <div id="titre">
                <img src="img/logo.png">
                <h1>{{user.prenom}} {{user.nom}}</h1>
            </div>
            <div id="historique annonces">  
                <h2 >Historique des annonces</h2>  
                <hr> 
                <div v-for="annonce in annonces" :key="annonce.id_user" class="annonce"> 
                    <div class="annonce">
                        <img src="./img/young1pact.jpg" alt="une annonce du producteur" @click="ouvrirAnnonce(creation.id_annonce)">
                        <h3>{{annonce.titre}}</h3>
                    </div>
                        <button>Modifier</button>
                        <button>Supprimer</button>
                </div>
                <hr>
            </div> 
            <div id="historique des demandes">
                <h2>Historique des demandes</h2>
                <div v-for="demande in demandes" :key="demande.id_user" class="demande">
                    <div class="demande">
                        <h3>{{demandes}}</h3>
                        <p>{{demande.message}}</p>
                        <p>{{demande.quantite}}</p>
                        <p>{{demande.id_annonce}}
                    </div>
            </div>
        </div>   
        <div id="acheteur">
        </div>
    </div>
</template>

<style scoped>
    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        }
    #tab {
        width: 1000px;
        margin: 0px auto;
        padding: 0px;
        box-shadow: 10px 10px 20px 0px #cdd3dd;
        display: flex;
        flex-direction: column;
    }
    #titre{
        padding-left: 20px;
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
        align-self: center;
        padding: 20px;
    }
    #historique {
        flex: none;
        width: 750px;
        height: 600px;
        margin: auto;
        margin-bottom: 50px;
        box-shadow: 10px 10px 20px 0px #cdd3dd;
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
        
    }
    .column1 {
        flex-grow: 1;
        display: flex;
        flex-direction: column
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
                user: {},
                users: {},
                demandes: {},
            }
        },
        async created(){
            const result = await axios.get('/api/produits', {})
            this.produits = result.data

            const result2 = await axios.get('/api/demandes/', + this.user.id_user)
            this.labels = result2.data

            const result3 = await axios.get('/api/annonces/users/' + this.user.id_user)
            this.annonces = result3.data

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
