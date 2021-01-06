<template>
    <div>
        <div id=login>
            <h2>Vous avez déjà un compte ? Connectez-vous</h2>
            <form @submit.prevent="login()">
                <div class=login_mail>
                    <label for="mail">Adresse email*</label>
                    <div class="field_mail">
                        <input id="mail" v-model="email" placeholder="Adresse email">
                    </div>
                </div>
                <div class="login_password">
                    <label for="password">Mot de passe*</label>
                    <div class="field_password">
                        <input type="password" id="password" v-model="password" placeholder="Mot de passe">
                    </div>
                </div> 
                <div id="bouton_se_connecter">
                    <button type="submit">Se connecter</button>
                </div>
            </form>
        </div>
        <hr>
        <div id="register">
            <h2>Vous n'avez pas encore de compte ?</h2>
            <div class="producteur">
                <router-link to='/register_producteur'>Créer un compte producteur</router-link>
            </div>
            <div class="acheteur">
                <router-link to='/register_acheteur'>Créer un compte acheteur</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #login{
        margin-left: auto;
        margin-right: auto;
        width: 520px;
        height: 270px;
        background-color: #ECF0F3;
        border-radius: 10px;
        box-shadow: 10px 10px 20px 0px #cdd3dd;
        padding: 10px;
        margin-bottom : 2em;
    }
    .field_mail, .field_password{
        margin-bottom: .9em;
        margin-top: .4em;
        text-align: center;
    }
    #mail, #password{
        width: 200px;
        height: 30px;
    }
    .login_mail, .login_password{
        width: 200px;
        margin-left: auto;
        margin-right: auto;
    }
    #mail_icon{
        width: 20px;
        height: 20px;
        background-color: transparent;
    }
    #bouton_se_connecter{
        text-align: center;
    }
    button{
        border-radius: 50px;
        border: none;
        background-color: #C4C4C4;
        width: 150px;
        height: 40px;
    }
    hr{
        width: 520px;
        margin: 0 auto;
    }
    #register{
        margin-left: auto;
        margin-right: auto;
        margin-top: 2em;
        width: 520px;
        height: 150px;
        background-color: #ECF0F3;
        border-radius: 10px;
        box-shadow: 10px 10px 20px 0px #cdd3dd;
        padding: 10px;
        margin-bottom : 2em;
    }
    label{
        color: black;
        font-size: 14px;
        margin-bottom: .9em;
        text-align: center;
    }
    h2{
        text-align: center;
        color: #004079;
    }
    .producteur, .acheteur{
        color: black;
        font-size: 14px;
        margin-top: .9em;
        text-align: center
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
</style>

<script>
    module.exports = {
        data () {
            return {
                email: '',
                password: ''
            }
        },
        async mounted () {
        },
        methods: {
            async login() {
                this.$emit('login', {
                    email: this.email,
                    password: this.password
                })
            }
        }
    }
</script>