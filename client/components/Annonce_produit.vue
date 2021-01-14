<template>
    <div>
        <div id="body">
            <img id="image_annonce" src="img/logo.png">
            <div id="titre">
                <h2 id="titre_annonce">{{annonce.titre}}</h2>
            </div>
            <div id="informations_annonce">
                <p>Producteur :</p><router-link to='/profil_producteur'>{{user.prenom}} {{user.nom}}</router-link>
                <p>Produit : {{produit.nom}}</p>
                <p>Quantité disponible:{{annonce.quantite}}</p>
                <p>Label :{{label.nom}}</p> 
                <p>
                    <strong>Prix : </strong>{{annonce.prix}} <span v-if="annonce.in_kg">par piece</span><span v-if="!annonce.in_kg">au kilo</span>
                </p>
            </div>
            <hr>
            <h3 class="titre">Description de l'annonce :</h3>
            <p id="description">{{annonce.description}}</p>

            <h3 v-if="!isConnected">Vous souhaitez ce produit ? Connectez vous et vous pourrez en réserver !</h3>
            <form v-if="isConnected" @submit.prevent="requestProduct()">
                <h3>Je désire réserver une partie des produits disponibles.</h3>
                <p v-for="error in errors" :key="error" class="error">erreur :{{error}}</p>
                <p v-for="suc in sucess" :key="suc" class="sucess">{{suc}}</p>
                <input type="range" id="quantite" name="quantite" min="0" :max="annonce.quantite" v-model="quantite">
                <label for="quantite">Quantité: {{quantite}} <span v-if="annonce.in_kg">pièces</span><span v-if="!annonce.in_kg">kilos</span></label>
                <p>Cela revient à un prix de : {{price}}€</p>
                <p>Laissez un message :</p>
                <textarea v-model="message" id="comments" name="comments"
                        rows="5" placeholder="Bonjour, j'ai hâte de faire cet échange avec vous">
                </textarea>
                <div id='submit'><input type="submit" value="Réserver"></div>
            </form>
        </div>
    </div>
</template>

<style scoped>  
    .sucess{
        color: rgb(73, 170, 34)
    }
    .error{
        color: rgb(170, 34, 34)
    }
    form{
        width: 500px;
        margin: 0 auto;
        padding: 20px;
        box-shadow: rgb(209, 217, 230) 10px 10px 20px 0px, 
                    rgb(255, 255, 255) -10px -10px 20px 0px;
        display: flex;
        flex-direction: column;
    }
    #comments{
        resize: vertical;
    }
    #submit{
        display: flex;
    }
    #submit input{
        border-radius: 50px;
        border: none;
        background-color: rgb(196, 196, 196);
        width: 150px;
        height: 40px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
    }
    hr{
        border: 1px solid #9C9C9C;
    }
    .commentaire h4{
        margin-bottom: 10px;
    }
    .commentaire p{
        font-weight: 300;
    }
    .profil{
        display: flex;
        flex-direction: row;
        line-height: 50px;
        margin-bottom: 10px;
    }
    .profil img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .profil p{
        margin-left: 20px;
        width: max-content;
    }
    .commentaire{
        box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.25);
        padding: 20px;
        margin-bottom: 20px;
    }
    #form_commentaire button{
        background-color: #4D74FF;
        color: white;
        padding: 10px 20px;
        border-radius: 50px;
        border: none;
    }
    #form_commentaire button:hover{
        background-color: #416aff;
    }
    #form_commentaire button:active{
        background-color: #416aff;
        box-shadow: inset 20px 20px 60px #375ad9, 
            inset -20px -20px 60px #4b7aff;
    }
    #titre_form{
        margin: 10px 0;
        border: 1px solid #D1D1D1;
        padding: 10px;
    }
    #description_form{
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #D1D1D1;
        height: 200px;
        resize: vertical;
    }
    #commentaires{
        padding-left: 20px;
        width: 480px;
    }
    #form_commentaire{
        box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.25);
        padding: 20px;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    .row{
        display: flex;
        flex-direction: row;
    }
    #description{
        font-weight: 300;
    }
    .pourcentage{
        display: flex;
        flex-direction: row;
        margin: 10px 0;
    }
    .pourcentage .barre{
        width: 150px;
        margin: 0 5px;
        background-color: rgb(255, 174, 0);
    }
    #notes{
        width: 300px;
    }
    #moyenne{
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
    }
    #moyenne p{
        line-height: 30px;
        margin-left: 10px;
    }
    #body{
        width: 800px;
        margin: 0 auto;
    }
    #image_annonce{
        object-fit: cover;
        width: 800px;
        height: 350px;
        border-radius: 17px;
        margin: 20px 0;
    }
    #titre_annonce{
        width: max-content;
        margin-bottom: 10px;
    }
    .note{
        display: flex;
        flex-direction: row;
        margin-left: auto;
    }
    .note h3{
        width: min-content;
    }
    .star{
        height: 30px;
        width: 30px;
    }
    #titre_note{
        margin-top: 20px;
        display: flex;
        flex-direction: row;
    }
    hr{
        margin: 20px 0;
    }
    .titre{
        margin-bottom: 10px;
    }
</style>

<script>
    module.exports = {
        props: {
            isConnected: { type: Boolean}
        },
        data () {
            return {
                annonce: {},
                user:{},
                produit:{},
                label:{},
                quantite: 0,
                message:"",
                errors:[],
                sucess:[]
            }
        },
        async mounted () {
        },
        async created(){
            const result = await axios.get('/api/annonce/' + this.$route.query.id_annonce)
            this.annonce = result.data

            const result2 = await axios.get('/api/users/' + this.annonce.id_user)
            this.user = result2.data
            
            const result3 = await axios.get('/api/produits/' + this.annonce.id_produit)
            this.produit = result3.data

            const result4 = await axios.get('/api/labels/' + this.annonce.id_label)
            this.label = result4.data
        },
        methods: {
            async requestProduct(){
                this.errors = []
                if(this.quantite>0){
                    await axios.post('/api/demandes/', {
                        message: this.message,
                        quantite: this.quantite,
                        id_annonce: this.annonce.id_annonce
                    })
                    this.sucess.push("Demande envoyée, Vous recevrez une réponse d'ici peu.")
                }else{
                    this.errors.push("Choississez une quantité non nulle")
                }
            }
        },
        computed :{
            price(){
                return this.quantite*this.annonce.prix
            }
        }
    }
</script>
