<template>
    <div>
        <div id="body">
            <div id="nom_note">
                <h2 id="nom_créateur">{{user.prenom}} {{user.nom}}</h2>
                <div class="note_créateur">
                    <h3>4.2 </h3><img class="star" src="img/star.svg" alt="little star">
                </div>
            </div>
            <hr>
            <h3 class="titre">Description du producteur:</h3>
            <p id="description">{{producteur.description}}</p>
            <hr>
            <div id="produits_producteur">
                <h3 class="titre">Ses différentes produits :</h3>
                <div v-for="annonce in annonces" :key="annonce.id_user" class="produit">
                    <div id="annonce">
                        <p>{{annonce.titre}}</p>
                        <p>{{annonce.contenu}}</p>
                        <button @click="ouvrirAnnonce(creation.id_annonce)">En savoir plus</button>
                    </div>
                </div>
            <hr>

            <div id="avis">
                <h3>Avis :</h3>
                <div id="form_avis">
                    <div id="note">
                        <img @click="setNote(1)" class="clickable star" :src="'img/'+isEmpty(1)">
                        <img @click="setNote(2)" class="clickable star" :src="'img/'+isEmpty(2)">
                        <img @click="setNote(3)" class="clickable star" :src="'img/'+isEmpty(3)">
                        <img @click="setNote(4)" class="clickable star" :src="'img/'+isEmpty(4)">
                        <img @click="setNote(5)" class="clickable star" :src="'img/'+isEmpty(5)">
                    </div>
                    <input id="titre_form" type="text" placeholder="Titre" v-model="titre">
                    <textarea id="description_form" type="text" placeholder="Description" v-model="contenu"></textarea>
                    <button @click="posterAvis">Poster l'avis</button>
                </div>
                <div v-for="avi in avis" :key="avi.id_avis" class="commentaire">
                    <div id="user_note">
                        <div class="user_commentaire">
                            <img src="./img/user.png" alt="">
                            <p>{{avi.pseudo}}</p>
                        </div>
                        <div id="note">
                            <img class="star" :src="'img/'+isEmptyCommentaire(avi.note, 1)">
                            <img class="star" :src="'img/'+isEmptyCommentaire(avi.note, 2)">
                            <img class="star" :src="'img/'+isEmptyCommentaire(avi.note, 3)">
                            <img class="star" :src="'img/'+isEmptyCommentaire(avi.note, 4)">
                            <img class="star" :src="'img/'+isEmptyCommentaire(avi.note, 5)">
                        </div>
                    </div>
                    <div id="titre_commentaire">
                        <h4>{{avi.titre}}</h4>
                    </div>
                    <div id="contenu_commentaire">
                        <p>{{avi.contenu}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .clickable{
        cursor: pointer;
        width: 30px;
    }
    hr{
        border: 1px solid #9C9C9C;
    }
    .créateur h3, .type_couleur h3{
        display: inline;
    }
    .couleur{
        display: block;
    }
    .titre_couleur, .text_couleur{
        display: inline-block;
    }
    .commentaire h4{
        margin-bottom: 10px;
    }
    .commentaire p{
        font-weight: 300;
    }
    .user_commentaire{
        display: flex;
        flex-direction: row;
        line-height: 50px;
        margin-bottom: 10px;
    }
    .user_commentaire img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .user_commentaire p{
        margin-left: 20px;
        width: max-content;
    }
    .commentaire{
        box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.25);
        padding: 20px;
        margin-bottom: 20px;
    }
    #form_avis button{
        background-color: #4D74FF;
        color: white;
        padding: 10px 20px;
        border-radius: 50px;
        border: none;
    }
    #form_avis button:hover{
        background-color: #416aff;
    }
    #form_avis button:active{
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
    #avis{
        padding-left: 20px;
        width: 480px;
    }
    #form_avis{
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
        margin-bottom: 2em;
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
    .note_créateur{
        display: flex;
        flex-direction: row;
        margin-left: auto;
    }
    .note h3{
        width: min-content;
        line-height: 30px;
        margin-right: 5px;
    }
    .star{
        height: 30px;
        width: 30px;
    }
    #titre_note, #user_note{
        margin-top: 20px;
        display: flex;
        flex-direction: row;
    }
    hr{
        margin: 20px 0;
    }
    h3{
        margin-bottom: 10px;
    }
    #commentaire{
        width: 450px;
    }
    #note{
        display: flex;
        flex-direction: row;
        margin-left: auto;
    }
    #titre_commentaire h4{
        margin-bottom: .3em;
    }
</style>

<script>
    module.exports = {
        data() {
            return{
                user: {},
                annonces: [],
                avis: [],
                id_user:  this.$route.query.id_user,
                producteur: {},
                producteur: [],
                producteur: 0,
                note: 0,
                contenu: "",
                titre: ""
            }
        },
        async mounted() {
        },
        async created(){
            const result = await axios.get('/api/users/'+this.id_user)
            this.user = result.data

            const result2 = await axios.get('/api/annonce/users/' + this.id_user)
            this.annonces = result2.data

            const result3 = await axios.get('/api/avis/users/' + this.id_user)
            this.avis = result3.data

            const result5 = await axios.get('/api/producteur/' + this.id_user)
            this.producteur = result5.data

            const result4 = await axios.get('/api/average/avis/users/'+this.id_user)
            var avg = result4.data.avg
            if(avg === null){
                this.average_avis = "0.00"
            }else{
                this.average_avis = avg.slice(0, 3)
            }

        },
        methods: {
            ouvrirAnnonce(id_annonce){
                this.$router.push('/produits/?id_produit='+id_produit)
            },
            async posterAvis() {
                if(this.isConnected && this.contenu!=="" && this.titre!=="" && this.note!==0){
                    const result = await axios.post('/api/avis', {
                        note: this.note,
                        contenu: this.contenu,
                        titre: this.titre,
                        id_user: this.id_user
                    }).catch(function (error) {
                        console.log(error.response.data)
                    })
                }
            },
            setNote(note){
                this.note = note
            },
            isEmpty(note){
                if(note>this.note){
                    return 'star_none.png'
                }else{
                    return 'star.png'
                }
            },
        },
    }
</script>