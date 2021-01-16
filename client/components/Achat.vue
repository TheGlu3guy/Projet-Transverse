<template>
    <div id="vm">
        <div class="option_recherche">
            <h2>Rechercher un produit</h2>
            <div id="rechercher">
                <form @submit.prevent="filter()">
                    <div class="select_produit">
                        <select id="" name="produit" v-model="produit">
                            <option value="" selected disabled hidden>Produit</option>
                            <option v-for="produit in produits" :key="produit.id_produit" :value="produit.id_produit">{{produit.nom}}</option>
                        </select>
                    </div>
                    <div class="select_label">
                        <select id="label" name="label" v-model="label">
                            <option value="" selected disabled hidden>Label</option>
                            <option v-for="label in labels" :key="label.id_label" :value="label.id_label">{{label.nom}}</option>
                        </select>
                    </div>
                    <div class="select_région">
                        <select id="region" name="region" v-model="region">
                            <option value="" selected disabled hidden>Région</option>
                            <option v-for="region in regions" :key="region.id_region" :value="region.id_region">{{region.nom}}</option>
                        </select>
                    </div>
                    <div class="select_departement">
                        <select id="departement" name="departement" v-model="departement">
                            <option value="" selected disabled hidden>Département</option>
                            <option v-for="departement in departements" :key="departement.id_departement" :value="departement.id_departement">{{departement.nom}}</option>
                        </select>
                    </div>
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
        <div id="les_annonces">
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
        height: 300px;
        background-color: #DFDFDF;
        padding: 10px;
        box-shadow: 10px 10px 20px 0px #79979e;
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
        height: 240px;;
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
    .annonce button{
        border-radius: 50px;
        border: none;
        background-color: #C4C4C4;
        width: 150px;
        height: 40px;
    }
    #rechercher{
        text-align: center;
        margin-top: 1em;
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
                departements: [],
                departement: 0,
                label: '',
                produit: '',
                departement: '',
                region: '',
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

            const result4 = await axios.get('/api/regions', {})
            this.regions = result4.data
            

            const result5 = await axios.get('/api/departements', {})
            this.departements = result5.data
        },
        methods: {
            async filter(){
                console.log(this.produit+" "+this.label+" "+this.region+""+this.departement)
                const result = await axios.get('/api/annonce/filter', {
                    region: this.region,
                    departement: this.departement,
                    produit: this.produit,
                    label: this.label,
                    min: parseInt(this.min),
                    max: parseInt(this.max)
                })
            }
        }
    }
</script>
