<template>
    <div>
        <h2>Créer votre compte</h2>
        <div id="register">
            <form @submit.prevent="createUser()">
                <div>
                    <label for="civilité">Civilité*</label>
                    <div class="select_civilité">
                        <select id="civilité" name="civilité">
                            <option value="none" selected disabled hidden>Civilité</option>
                            <option value="mme">Mme</option>
                            <option value="m">M</option>
                        </select>
                    </div>
                </div>
                
                <div>
                    <label for="lastname">Nom*</label>
                    <div class="field_lastname"> 
                        <input type="texte" id="lastname" v-model="text" placeholder="Nom">
                    </div>
                </div>
                <div>
                    <label for="name">Prénom*</label>
                    <div class="field_firstname"> 
                        <input type="texte" id="name" v-model="text" placeholder="Prénom">
                    </div>
                </div>
                <div>
                    <label for="adresse">Adresse*</label>
                        <div class="field_adress">
                            <input type="texte" id="adress" v-model="text" placeholder="Adresse de l'exploitation">
                        </div>
                </div>
                <div>
                    <label for="mail">Email*</label>   
                        <div class="field_mail">
                            <input type="text" id="mail" v-model="email" placeholder="Email">
                        </div>
                </div>    
                <div>
                    <label for="password">Mot de passe*</label>
                    <div class="field_password"> 
                        <input type="password" id="password" v-model="password" placeholder="Mot de passe">
                    </div>
                </div>
                <div>
                    <label for="cpassword">Confirmation du mot de passe*</label>
                    <div class="field_cpassword">
                        <input type="password" id="cpassword" v-model="c_password" placeholder="Confirmation du mot de passe">
                    </div> 
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
        margin: 0 auto;
        width : 200px;
        margin-bottom: 2em;
    }

    label{
        color: #004079;
        font-size: 14px;
        margin-bottom: .9em;
    }

    #bouton_créer{
        margin: 0 auto;
        width: 150px;
    }

    h2{
        color: #004079;
        text-align: center;
    }

    .select_civilité, .field_lastname, .field_firstname, .field_adress, .field_mail, .field_password, .field_cpassword{
        display: block;
        margin-bottom: .9em;
        margin-top: .2em;
    }
</style>

<script>
    module.exports = {
        data () {
            return {
                text: '',
                nom: '',
                prénom:'',
                adresse:'',
                email: '',
                password: '',
                c_password: ''
            }
        },
        async mounted () {
        },
        methods: {
            async createUser() {
                await axios.post('/api/register', {
                nom: this.nom,
                prénom: this.prénom,
                adresse: this.adresse,
                email: this.email,
                password: this.password
                })
                this.$router.push('/')
            }
        }
    }
</script>