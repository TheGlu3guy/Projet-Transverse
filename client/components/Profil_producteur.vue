<template>
    <div>
        <div id="body">
            <img id="image_créateur" src="img/young1pact.jpeg">
            <div id="nom_note">
                <h2 id="nom_créateur">M.Michel</h2>
                <div class="note_créateur">
                    <h3>4.2 </h3><img class="star" src="img/star.svg" alt="little star">
                </div>
            </div>
            <p>Actif depuis le : 11/12/2020</p>
            <hr>
            <h3 class="titre">Description du producteur:</h3>
            <p id="description">Je suis un petit producteur du sud de la France qui vend de superbes tomates.</p>
            <hr>
            <div id="créations">
                <h3 class="titre">Ses différentes produits :</h3>
                <div id="création1">
                    <button>Voir le produit</button>
                </div>
                <div id="création2">
                    <button>Voir le produit</button>
                </div>
            <hr>
            <div class="row">
                <div id="notes">
                    <h3 class="titre">Avis :</h3>
                    <div id="moyenne">
                        <img class="star" src="img/star.svg">
                        <img class="star" src="img/star.svg">
                        <img class="star" src="img/star.svg">
                        <img class="star" src="img/star.svg">
                        <img class="star" src="img/star.svg">
                        <p>4,2 sur 5</p>
                    </div>
                    <div class="pourcentage">
                        <p>5 étoiles</p>
                        <div class="barre"></div>
                        <p>81%</p>
                    </div>
                    <div class="pourcentage">
                        <p>4 étoiles</p>
                        <div class="barre"></div>
                        <p>81%</p>
                    </div>
                    <div class="pourcentage">
                        <p>3 étoiles</p>
                        <div class="barre"></div>
                        <p>81%</p>
                    </div>
                    <div class="pourcentage">
                        <p>2 étoiles</p>
                        <div class="barre"></div>
                        <p>81%</p>
                    </div>
                    <div class="pourcentage">
                        <p>1 étoiles</p>
                        <div class="barre"></div>
                        <p>81%</p>
                    </div>
                </div>
                <div id="commentaires">
                    <div id="form_commentaire">
                        <div id="stars">
                            <img class="star" src="client/img/star.svg">
                            <img class="star" src="client/img/star.svg">
                            <img class="star" src="client/img/star.svg">
                            <img class="star" src="client/img/star.svg">
                            <img class="star" src="client/img/star.svg">
                        </div>
                        <input id="titre_form" type="text" placeholder="Titre">
                        <textarea id="description_form" type="text" placeholder="Description"></textarea>
                        <button>Poster l'avis</button>
                    </div>
                    <div class="commentaire">
                        <div class="profil">
                            <img src="img/user.png" alt="">
                            <p>Mmme Siffert</p>
                        </div>
                        <div id="stars">
                            <img class="star" src="client/img/star.svg">
                            <img class="star" src="client/img/star.svg">
                            <img class="star" src="client/img/star.svg">
                            <img class="star" src="client/img/star.svg">
                            <img class="star" src="client/img/star.svg">
                            <h4>Produits de très bonne qualité</h4>
                        </div>
                        <p>M.Michel a été très cordial lorsque je suis venue chercher mes tomates, et ces dernières étaient très bonnes !</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
        width: 100px;
        height: 60px;
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
</script>