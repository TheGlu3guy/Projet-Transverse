<template>
    <div id="tab">
        <div id="titre">
            <img src="img/logo.png">
            <h1>{{user.prenom}} {{user.nom}}</h1>
        </div>
        <div id="historique_des_annonces">  
            <h2 >Historique des annonces en ligne</h2>  
            <div v-for="annonce in annonces" :key="annonce.id_annonce" class="annonce">
                <img src="img/logo.png">
                <div class="annonce_contenu">
                    <h3>{{annonce.titre}}</h3>
                    <div class="annonce_texte"> 
                        <p><strong>Description : </strong>{{annonce.description}}</p>
                        <p class="annonce_label">
                            <strong>Produit vendu : </strong>{{produits.find(x => x.id_produit === annonce.id_produit).nom}}
                        </p>
                        <p class="annonce_label">
                            <strong>Prix : </strong>{{annonce.prix}} <span v-if="annonce.in_kg">par piece</span><span v-if="!annonce.in_kg">au kilo</span>
                        </p>
                        <p class="annonce_label">
                            <strong>Localisation : </strong>{{regions.find(x => x.id_region === annonce.id_region).nom}}
                        </p>
                    </div>
                    <button @click="$router.push('/annonce_produit/?id_annonce='+annonce.id_annonce)">En savoir plus</button>
                </div>
            </div>
        </div> 
        <div id="historique_des_demandes">
            <h2>Historique des demandes</h2>
            <div v-for="demande in demandes" :key="demande.id_demande" class="demandes">
                <div class="demande">
                    <h3>DEMANDE :</h3>
                    <p>Vous avez reçu une demande de la part de : {{demande.nom}} {{demande.prenom}}</p>
                    <p>Il vous a laissé le message suivant : {{demande.message}}</p>
                    <p>Quantité souhaitée : {{demande.quantite}}</p>
                    <p>Annonce concernée :</p>
                    <button @click="$router.push('/annonce_produit/?id_annonce='+demande.id_annonce)">Aller vers l'annonce</button>
                </div>
            </div>
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
        height: max-content;
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
    #historique_des_annonces, #historique_des_demandes{
        width: auto;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2em;
        width: 900px;
        background-color: #ECF0F3;
        height: fit-content;
        display: flex;
        justify-content: center;
        flex-direction: column;
        box-shadow: 10px 10px 20px 0px #cdd3dd;
    }
    .annonce{
        width: 800px;
        border-radius: 20px;
        background: #E3E6EC;
        display: flex;
        flex-direction: row;
        margin : 20px auto;
        height: 240px;;
        box-shadow: 10px 10px 20px 0px #D1D9E6, -10px -10px 20px 0px #FFFFFF;
    }
    h2{
        text-align: center;
    }
    button{
        border-radius: 50px;
        border: none;
        background-color: #C4C4C4;
        width: 150px;
        height: 40px;
        margin-left: auto;
        margin-right: auto;
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
            const result = await axios.get('/api/users/' + this.user.id_user)
            this.user = result.data

            const result2 = await axios.get('/api/produits', {})
            this.produits = result2.data

            const result3 = await axios.get('/api/demandes/' + this.user.id_user)
            this.demandes = result3.data

            const result4 = await axios.get('/api/annonce/users/' + this.user.id_user)
            this.annonces = result4.data
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
