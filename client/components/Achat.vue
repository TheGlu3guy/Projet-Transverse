<template>
    <div id="vm">
        <div class="option_recherche">
            <h2>Recherche rapide</h2>
            <div>
                <form action="" method="post" id="options">
                    <div class="select_produit">
                        <select id="Produit" name="produit">
                            <option value="none" selected disabled hidden>Produit</option>
                            <option v-for="produit in produits" :key="produit.id_produit" :value="produit.id_produit">{{produit.nom}}</option>
                        </select>
                    </div>
                    <div class="select_label">
                        <select id="Label" name="Label">
                            <option value="none" selected disabled hidden>Label</option>
                            <option v-for="label in labels" :key="label.id_label" :value="label.id_label">{{label.nom}}</option>
                            <!--
                            <option value="AOC">Appellation d'Origine Contrôlée</option>
                            <option value="AOP">Appellation d'Origine Protégée</option>
                            <option value="IGP">Indication Géographique Protégée</option>
                            <option value="LR">Label Rouge</option>
                            -->
                        </select>
                    </div>
                    <div class="select_région">
                        <select id="Région" name="région">
                            <option value="none" selected disabled hidden>Région</option>
                            <option v-for="region in regions" :key="region.id_region" :value="region.id_region">{{region.nom}}</option>
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
            <div v-for="annonce in annonces" :key="annonce.id_annonce" class="annonce">
                <img src="img/logo.png">
                <div class="annonce_contenu">
                    <h3>{{annonce.titre}}</h3>
                    <div class="annonce_texte"> 
                        <p><strong>Description : </strong>{{annonce.description}}</p>
                        <p class="annonce_label">
                            <strong>Labels du produit : </strong>{{labels.find(x => x.id_label === annonce.id_label).nom}}
                        </p>
                        <p class="annonce_label">
                            <strong>Produit vendu : </strong>{{produits.find(x => x.id_produit === annonce.id_produit).nom}}
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
    .annonce_contenu{

    }
    .annonce button{
        border-radius: 50px;
        border: none;
        background-color: #C4C4C4;
        width: 150px;
        height: 40px;
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
                max: '',
                annonces: [],
                labels: [],
                label: 0,
                regions: [],
                region: 0,
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

            const result3 = await axios.get('/api/annonce', {})
            this.annonces = result3.data

            const result4 = await axios.get('/api/region', {})
            this.regions = result4.data
        },
    }
</script>
