<template>
    <div id="vm">
        <div class="option_recherche">
            <h2>Recherche rapide</h2>
            <div>
                <form action="" method="post" id="options">
                    <div>
                        <select name="fruit_legume" id="fruit_legume" v-model="produit">
                            <option selected hidden>Cherchez vous quelque chose en particulier ?</option>
                            <option v-for="produit in produits" :key="produit.id_produit" :value="produit.id_produit">{{produit.nom}}</option>
                        </select>
                    </div>
                    <div>
                        <input v-model="titre" type="text" id="titre" name="titre" placeholder="Titre de l'annnonce">
                    </div>
                    <!--
                    <div>
                        <input type="text" id="localisation" name="localisation" placeholder="Localisation">
                    </div>
                    -->
                    <div>
                        <input v-model="min" type="text" id="max" name="max" placeholder="Prix maximum">
                        <input v-model="max" type="text" id="min" name="min" placeholder="Prix minimum">
                    </div>
                    <div id="bouton">
                        <button>Rechercher</button>
                    </div>
                </form>
            </div>
        </div>
        <hr>
        <div id="les_annonces">
            <div class="annonce">
                <img src="img/logo.png">
                <div class="annonce_contenu">
                    <h3>Vend Carrotte de qualité première en vrai</h3>
                    <div class="annonce_texte">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec sed odio nec justo tempus consequat. Nunc sapien 
                            orci, faucibus non ex eu, congue gravida augue. Maecenas
                             bibendum ante sit amet tellus suscipit sollicitudin. 
                             Sed tincidunt ut leo vitae mattis. Nunc sollicitudin 
                             non purus at ultrices. Cras a neque sit amet lorem 
                             laoreet vestibulum. Mauris consequat nibh volutpat, 
                             molestie sem ac, ultricies felis...</p>
                        <p class="annonce_localisation">
                            Localisation : 15 rue du truc, Machin 55600
                        </p>
                    </div>
                    <button @click="$router.push('/annonce_produit')">En savoir plus</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    h2{
        text-align: center
    }
    hr{
        width: 900px;
        margin: 0 auto;
    }
    .option_recherche{
        width: 900px;
        height: 270px;
        background-color: #DFDFDF;
        padding: 10px;
        box-shadow: 10px 10px 20px 0px #cdd3dd;
        margin-left: auto;
        margin-right: auto;
        border-radius: 10px;
        margin-bottom: 2em;
    }
    form select{
        border: none;
        height: 25px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: .5em;
        width: 350px;
    }
    form input{
        background-color: white;
        border: none;
        border-bottom: 1px solid black;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: .5em;
        height: 25px;
    }
    form button{
        border-radius: 50px;
        border: none;
        background-color: #C4C4C4;
        width: 150px;
        height: 40px;
        margin-left: auto;
        margin-right: auto;
    }
    #bouton{
        text-align: center;
        margin-top: .5em;
    }
    #option_recherche #min, #option_recherche #max{
        width: 100px;
    }
    #options{
        margin: 0;
        max-width: 700px;
        margin: 0 auto;
    }
    #les_annonces{
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
        height: fit-content;
        box-shadow: 10px 10px 20px 0px #D1D9E6, -10px -10px 20px 0px #FFFFFF;
    }
    .annonce img{
        width: 180px;
        height: 180px;
        border-radius: 20px;
        margin: 10px;
    }
    .annonce h3{
        font-size: 1em;
        text-align: center;
    }
    .annonce p{
        font-size: 0.8em;
        margin-left: 20px;
    }
    .annonce_texte{
        display: flex;
        flex-direction: row;
    }
    .annonce_texte .annonce_localisation{
        width: 400px;
        margin-right: 20px;
    }
    .annonce_contenu{
        display:flex;
        flex-direction: column;
    }
    .annonce button{
        border-radius: 50px;
        border: none;
        background-color: #C4C4C4;
        width: 150px;
        height: 40px;
        margin: 20px auto;
    }
</style>

<script>
    module.exports = {
        data () {
            return {
                produits: [],
                produit: 0,
                titre:'',
                min: '',
                max: ''
            }
        },
        async mounted () {
            console.log(this.isConnected)
        },
        async created(){
            const result = await axios.get('/api/produits', {})
            this.produits = result.data

            const result2 = await axios.get('/api/labels', {})
            this.labels = result2.data
        },
        methods: {
            async createPost() {
                console.log(this.label +'\n'+ this.produit)
                console.log(this.prix +" "+this.quantite)
                console.log(this.en_kg)
                if(this.isConnected){
                    const result = await axios.post('/api/annonce', {
                        titre: this.titre,
                        description: this.description,
                        prix: this.prix,
                        id_produit: this.produit,
                        in_kg: this.en_kg,
                        quantite: this.quantite,
                        id_label: this.label
                    })
                }else{
                    console.log('user pas connecté')
                }
                
            }
        }
    }
</script>
