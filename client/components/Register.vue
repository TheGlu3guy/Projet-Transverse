<template>
    <div>
        <h2>Vous avez déjà un compte</h2>
        <div id=login>
            <form @submit.prevent="loginUser()">
                <div>
                    <label for="mail">Adresse email*</label>
                    <div class="field_mail">
                        <input id="mail" v-model="email" placeholder="email">
                    </div>
                </div>
                <div>
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
        <h2>Vous n'avez pas encore de compte</h2>
        <div id="register">
            <div class="producteur">
                <router-link to='/register_producteur'>Créer un compte producteur</router-link>
            </div>
            <div class="acheteur">
                <router-link to='/register_acheteur'>Créer un compte acheteur</router-link>
            </div>
        </div>
        <main>
            <router-view>
                :prop="prop"
                @recup-emit="RecupEmit"
            </router-view>
        </main>
    </div>
</template>

<style scoped>
    #register, #login{
        margin :auto;
        width: max-content;
        margin-top: 2em;
    }

    .field_mail, .field_password{
        display: block;
        margin-bottom: .9em;
        margin-top: .2em;
    }

    #bouton_se_connecter{
        margin: 0 auto;
        width: 100px;
    }

    label{
        color: #004079;
        font-size: 14px;
        margin-bottom: .9em;
    }

    h2{
        text-align: center;
        color: #004079;
    }

    .producteur, .acheteur{
        color: #004079;
        font-size: 14px;
        margin-bottom: .9em;
    }    
</style>

<script>
    const Register_producteur = window.httpVueLoader('./components/Register_producteur.vue')
    const Register_acheteur = window.httpVueLoader('./components/Register_acheteur.vue')
    const routes = [
        { path: '/register_producteur', component: Register_producteur},
        { path: '/register_acheteur', component: Register_acheteur}
    ]
    const router = new VueRouter({
        routes
    })