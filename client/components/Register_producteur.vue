<template>
    <div>
        <div id="register">
            <h2>Créez votre compte producteur</h2>
            <form @submit.prevent="createUser()">
                <div class="signup">
                    <label for="civilité">Civilité*</label>
                    <div class="select_civilité">
                        <select id="civilité" name="civilité">
                            <option value="none" selected disabled hidden>Civilité</option>
                            <option value="mme">Mme</option>
                            <option value="m">M</option>
                        </select>
                    </div>
                </div>
                <div class="signup">
                    <label for="lastname">Nom*</label>
                    <div class="field_lastname"> 
                        <input type="texte" id="lastname" v-model="nom" placeholder="Nom">
                    </div>
                </div>
                <div class="signup">
                    <label for="name">Prénom*</label>
                    <div class="field_firstname"> 
                        <input type="texte" id="name" v-model="prenom" placeholder="Prénom">
                    </div>
                </div>
                <div class="signup">
                    <label for="adresse">Description des ventes*</label>
                        <div class="field_adress">
                            <input type="texte" id="adress" v-model="description" placeholder="Description">
                        </div>
                </div>
                <div class="signup">
                    <label for="mail">Email*</label>   
                        <div class="field_mail">
                            <input type="text" id="mail" v-model="email" placeholder="Email">
                        </div>
                </div>    
                <div class="signup">
                    <label for="password">Mot de passe*</label>
                    <p id="consigne">Votre mot de passe doit contenir 8 caractères, dont au moins une minuscule, une majuscule et un chiffre.</p>
                    <div class="field_password"> 
                        <input type="password" id="password" v-model="password" placeholder="Mot de passe">
                    </div>
                </div>
                <div class="signup">
                    <label for="cpassword">Confirmation du mot de passe*</label>
                    <div class="field_cpassword">
                        <input type="password" id="cpassword" v-model="c_password" placeholder="Mot de passe">
                    </div> 
                </div>
                <div class="required">
                    <p>*Champs obligatoires</p>
                </div>
                <div id="bouton_créer">
                    <button type="submit">Créer un compte</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
    #register{
        width: 400px;
        height: 720px;
        background-color: #ECF0F3;
        padding: 10px;
        box-shadow: 10px 10px 20px 0px #cdd3dd;
        margin-left: auto;
        margin-right: auto;
        border-radius: 10px;
    }
    label{
        color: black;
        font-size: 14px;
        margin-bottom: .9em;
    }
    #bouton_créer{
        text-align: center;
    }
    button{
        border-radius: 50px;
        border: none;
        background-color: #C4C4C4;
        width: 150px;
        height: 40px;
    }
    h2{
        color: black;
        text-align: center;
    }
    .select_civilité, .field_lastname, .field_firstname, .field_adress, .field_mail, .field_password, .field_cpassword{
        display: block;
        margin-bottom: .9em;
        margin-top: .2em;
    }
    .signup{
        margin-left: auto;
        margin-right: auto;
        width: 200px;
    }
    #consigne{
        color: #6C6B6C;
        font-size: smaller;
        text-align: justify;
    }
    .required{
        margin-left: auto;
        margin-right: auto;
        width: 200px;
        color: #6C6B6C;
        font-size: smaller;
        text-align: justify;
        margin-bottom: .9em;
        margin-top: .2em;
    }
    input{
        background-color: white;
        border: none;
        border-bottom: 1px solid black;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: .5em;
        height: 25px;
        width: 200px;
    }
    select{
        border: none;
        height: 25px;
        width: 200px;
    }
</style>

<script>
    module.exports = {
        data () {
            return {
                nom: '',
                prenom:'',
                description:'',
                email: '',
                password: '',
                c_password: ''
            }
        },
        async mounted () {
        },
        methods: {
            async createUser() {
                if(this.c_password === this.password){
                    await axios.post('/api/registerProducteur', {
                        nom: this.nom,
                        prenom: this.prenom,
                        description: this.adresse,
                        email: this.email,
                        password: this.password,
                        description: this.description
                    })
                    this.$router.push('/')
                }
            }
        }
    }
</script>