<template>
    <div>
        <div class="nouveau_produit">
            <h2>Ajouter un nouveau produit à la vente</h2>
            <form action="Ajouter un produit" method="post" onsubmit="return false" id="mon_form">
                <div class="ajouter_produit">
                    <div class="field_produit">
                        <label for="produit">Produit(s) :</label>
                        <select id="Produit" name="produit">
                            <option value="none" selected disabled hidden>Produit</option>
                            <option v-for="produit in produits" :key="produit.id_produit">{{produit.nom}}</option>
                        </select>
                    </div>
                    <div class="field_label">
                        <label for="label">Label(s) :</label>
                        <select id="Label" name="Label">
                            <option value="none" selected disabled hidden>Label</option>
                            <option value="AOC">Appellation d'Origine Contrôlée</option>
                            <option value="AOP">Appellation d'Origine Protégée</option>
                            <option value="IGP">Indication Géographique Protégée</option>
                            <option value="LR">Label Rouge</option>
                        </select>
                    </div>
                    <div class="field_prix">
                        <label for="prix">Prix :</label>
                        <input type="text" id="prix" name="prix" placeholder="Veuillez saisir un prix" required>
                        <select id="Prix" name="Prix" required>
                            <option value="none" selected disabled hidden>Prix</option>
                            <option value="Prix">Prix/kg</option>
                            <option value="Prix">Prix/unité</option>
                        </select>
                    </div>
                    <div class="field_photo">
                        <label for="photo">Photo(s) :</label>
                        <input type="file" id="photo" name="photo" placeholder="Photo" accept="image/png, image/jpeg">
                    </div>
                    <div class="field_quantité">
                        <label for="quantité">Quantité disponible :</label>
                        <input type="text" id="quantité" name="quantité" placeholder="Veuillez saisir une quantité" required>
                        <select id="quantité" name="quantité" required>
                            <option value="none" selected disabled hidden>Quantité</option>
                            <option value="Quantité">/kg</option>
                            <option value="Quantité">/unité</option>
                        </select>
                    </div>
                    <div class="field_disponibilité">
                        <label for="disponibilité">Date de disponibilité :</label>
                        <input type="date" id="date_disponibilité" name="disponibilité" required>
                    </div>
                    <div class="field_adresse">
                        <label for="adresse">Adresse de retrait :</label>
                        <input type="text" id="adresse" name="adresse" placeholder="Veuillez saisir une adresse" required>
                    </div>
                </div>
                <div class="bottom">
                    <button id='ajouter'>Ajouter mon produit à la vente</button>
                    <button id='supprimer' onclick="supprimer_element()">Tout supprimer</button>
                </div>
            </form>
        </div>
        <hr>
        <div class="mes_produits">
            <h2>Mes produits en vente</h2>
            <div class="produits_en_vente">
                <div>
                    <div class="produit_en_vente">
                    </div>
                    <p>Produit2</p>
                </div>
                <div>
                    <div class="produit_en_vente">
                    </div>
                    <p>Produit2</p>
                </div>
                                <div>
                    <div class="produit_en_vente">
                    </div>
                    <p>Produit3</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    select{
        border: none;
        height: 25px;
    }
    .nouveau_produit{
        margin-left: auto;
        margin-right: auto;
        width: 520px;
        height: 420px;
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
    }
    .bottom{
        margin-left: auto;
        margin-right: auto;
        width: max-content;
    }
    .field_disponibilité, .field_label, .field_prix, .field_quantité, .field_photo, .field_produit, .field_adresse{
        margin-bottom: .9em;
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
        margin-bottom: .5em;
        height: 25px;
    }
    hr{
        width: 520px;
        margin: 0 auto;
    }
</style>

<script>
    module.exports = {
        data () {
            return {
                produits: [],
                prix: 0,
                en_kg: false,
                labels: []
            }
        },
        async mounted () {
        },
        async created(){
            const result = await axios.get('/api/produits', {})
            console.log(result)
            this.produits = result.data

            const result2 = await axios.get('/api/labels', {})
            console.log(result2)
            this.labels = result2.data
        },
        methods: {
            
        }
    }
</script>
