<template>
    <div>
        <div class="nouveau_produit">
            <h2>Ajouter un nouveau produit à la vente</h2>
            <form @submit.prevent="createPost()" id="mon_form">
                <div class="ajouter_produit">
                    <div class="informations_produit">
                        <p>Caractéristiques du produit</p>
                        <div class="field_produit">
                            <label for="produit">Produit :</label>
                            <select id="Produit" name="Produit" v-model="produit">
                                <option value="" selected disabled hidden>Produit</option>
                                <option v-for="produit in produits" :key="produit.id_produit" :value="produit.id_produit">{{produit.nom}}</option>
                            </select>
                        </div>
                        <div class="field_label">
                            <label for="label">Label :</label>
                            <select id="Label" name="Label" v-model="label">
                                <option value="" selected disabled hidden>Label</option>
                                <option v-for="label in labels" :key="label.id_label" :value="label.id_label">{{label.nom}}</option>
                            </select>
                        </div>
                        <div class="field_prix">
                            <label for="prix">Prix :</label>
                            <input type="text" id="prix" name="prix" placeholder="Veuillez saisir un prix" required v-model="prix">
                            <select id="Prix" name="Prix" required v-model="en_kg">
                                <option value="" selected disabled hidden>Prix</option>
                                <option :value="true">Prix/kg</option>
                                <option :value="false">Prix/unité</option>
                            </select>
                        </div>
                        <div class="field_quantité">
                            <label for="quantité">Quantité disponible :</label>
                            <input type="text" id="quantité" name="quantité" placeholder="Veuillez saisir une quantité" required v-model="quantite">
                        </div>
                    </div>
                    <div id="informations_localisation">
                        <p>Localisation</p>
                        <div class="field_region">
                            <label for="region">Région :</label>
                            <select id="Region" name="Region" v-model="region">
                                <option value="" selected disabled hidden>Région</option>
                                <option v-for="region in regions" :key="region.id_region" :value="region.id_region">{{region.nom}}</option>
                            </select>
                        </div>
                        <div class="field_departement">
                            <label for="departement">Département :</label>
                            <select id="departement" name="departement" v-model="departement">
                                <option value="" selected disabled hidden>Département</option>
                                <option v-for="departement in departements" :key="departement.id_departement" :value="departement.id_departement">{{departement.nom}}</option>
                            </select>
                        </div>
                        <div class="field_ville">
                            <label for="code_postal">Code postal :</label>
                            <input type="number" id="code_postal" name="quantité" placeholder="Veuillez saisir un code postal" required v-model="code_postal">
                        </div>
                        <div class="field_adresse">
                            <label for="adresse">Adresse de retrait :</label>
                            <input type="text" id="adresse" name="adresse" placeholder="Veuillez saisir une adresse" required v-model="adresse">
                        </div>
                    </div>
                    <div class="informations_generales">
                        <p> Informations générales de l'annonce</p>
                        <div class="field_titre">
                            <label for="titre">Titre :</label>
                            <input type="text" id="titre" name="titre" placeholder="Veuillez saisir un titre" required v-model="titre">
                        </div>
                        <div class="field_description">
                            <label for="description">Description :</label>
                            <input type="text" id="description" name="description" placeholder="Veuillez saisir une description" required v-model="description">
                        </div>
                        <div class="field_photo">
                            <label for="photo">Photo :</label>
                            <input @change="processFile($event)" type="file" id="photo" name="photo" placeholder="Photo" accept="image/png, image/jpeg">
                        </div>
                    </div>
                    <!--
                    <div class="field_disponibilité">
                        <label for="disponibilité">Date de disponibilité :</label>
                        <input type="date" id="date_disponibilité" name="disponibilité" required>
                    </div>
                    -->
                </div>
                <div class="bottom">
                    <button type="submit" id='ajouter'>Ajouter mon produit à la vente</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
    select{
        border: none;
        height: 26px;
        width: 180px;
    }
    .nouveau_produit{
        margin-left: auto;
        margin-right: auto;
        width: 520px;
        height: 710px;
        margin-bottom: 2em;
        background-color: #ECF0F3;
        border-radius: 10px;
        box-shadow: 10px 10px 20px 0px #cdd3dd;
        padding: 10px;
    }
    .mes_produits{
        margin-left: auto;
        margin-right: auto;
        width: 520px;
        height: 310px;
        margin-bottom: 2em;
        margin-top: 2em;
        background-color: #ECF0F3;
        border-radius: 10px;
        box-shadow: 10px 10px 20px 0px #cdd3dd;
        padding: 10px;
    }
    h2{
        text-align: center;
        margin-bottom: 1em;;
    }
    .bottom{
        margin-left: auto;
        margin-right: auto;
        width: max-content;
        margin-top: 1.5em;
    }
    .field_titre, .field_label, .field_prix, .field_quantité, .field_photo, .field_produit, .field_adresse, .field_region, .field_departement, .field_description, .field_ville{
        margin-bottom: .9em;
    }
    .ajouter_produit p{
        font-weight: bold;
    }
    .ajouter_produit{
        margin-top: .6em;
    }
    .produits_en_vente{
        display: flex;
        flex-direction: row;
    }
    .produit_en_vente{
        display: flex;
        height: 150px;
        width: 150px;
        border: 1px solid gray;
        margin: auto 10px;
        background: white;
    }
    .produits_en_vente p{
        text-align: center;
        font-weight: bold;
    }
    input{
        background-color: white;
        border: none;
        border-bottom: 1px solid black;
        margin-left: auto;
        margin-right: auto;
        height: 25px;
        width: 190px;
    }
    hr{
        width: 520px;
        margin: 0 auto;
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
            isConnected: { type: Boolean }
        },
        data () {
            return {
                produits: [],
                prix: 0,
                en_kg: false,
                labels: [],
                quantite: 0,
                produit: 0,
                label: 0,
                description: "",
                titre: "",
                adresse: "",
                regions: [],
                region: 0,
                departements: [],
                departement: 0,
                departement: '',
                region: '',
                produit: '',
                label: '',
                prix: '',
                en_kg: '',
            }
        },
        async mounted () {
            console.log(this.isConnected)
        },
        processFile(e) {
            console.log(e.target.files[0])
        },
        async created(){
            const result = await axios.get('/api/produits', {})
            this.produits = result.data

            const result2 = await axios.get('/api/labels', {})
            this.labels = result2.data

            const result3 = await axios.get('/api/regions', {})
            this.regions = result3.data

            const result4 = await axios.get('/api/departements', {})
            this.departements = result4.data
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
                        id_label: this.label,
                        id_region: this.id_region,
                        id_departement: this.id_departement,
                        adresse: this.adresse,
                    })
                }else{
                    console.log('user pas connecté')
                }
                
            }
        }
    }
</script>
