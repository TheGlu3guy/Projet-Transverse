<template>
    <div class="historique">
        <div style="text-align: center">historique de l'utilisateur</div>
                
 
       
        <article id="annonce" v-for="item in cart" :key="item.id">
            <div  id="image_annonce" :style="{ backgroundImage: 'url(' + item.image + ')' }"></div>
            <div id="titre">
                <h2 id="titre_annonce"> {{ item.title }} </h2>
            </div>
            <div v-if="editingItem.id !== item.id" >
                <div class="raw">
                    <p> {{ item.date }} </p>
                    <p>{{ item.price * item.qty }}$</p>
                    <button @click="editItem(item)">Modifier</button>
                    <button @click="deleteItem(itemId)">Supprimer</button>
                </div>
            </div>
            <div v-else>
                <div>
                    <h2>
                        <input type="text" v-model="editingItem.name">-<input type="number" v-model="editingItem.price">
                    </h2>
            </div>
            <div >
                <button @click="sendEditItem()">Valider</button>
                <button @click="abortEditItem()">Annuler</button>
            </div>
            <input type="text" v-model="editingItem.image" placeholder="Lien vers l'image">
        </article> 

    </div>
                
</template>


<script>
module.exports={
    props:{
        cart: { type: Array, default: [
            {
                id: 1,
                title: 'annonce',
                date: 22+"/"+22+"/"+2222,
                image: 'img/logo.png',
                price: 1,
                qty: 3
            },
            {
                id: 2,
                title: 'annonce',
                date: 22+"/"+22+"/"+2222,
                image: 'img/logo.png',
                price: 1,
                qty: 3
            }
        ]},
        userid:{ type: Number, default: 0 },
        articleid:{ type: Number, default: 0 },
    },
    data () {
        return {
            newItem: {
                title: '',
                date: 0,
                image: '',
                price: 0,
                qty: 0
            },
            editingItem: {
                id: -1,
                title: '',
                date: 0,
                qty: 0,
                image: '',
                price: 0,
                qty: 0
                
            }
        }
    },
    methods: {
        deleteItem () {
            this.$emit('delete-item', itemId)
        },
        editItem (item) {
            this.editingItem.id = item.id
            this.editingItem.name = item.name
            this.editingItem.image = item.image
            this.editingItem.price = item.price
        },
        sendEditItem () {
            this.$emit('update-item', this.editingItem)
            this.abortEditItem()
        },
        abortEditItem () {
            this.editingItem = {
                id: -1,
                name: '',
                qty: '',
                image: '',
                price: 0,
            }
        }
    }
}
</script>

<style scoped>

    #annonce {
        width: 800px;
        margin: 0 auto;
        border: solid;
        padding: 10px;
    }
     #image_annonce{
        object-fit: cover;
        width: 150px;
        height: 150px;
        border-radius: 17px;
        border: solid;
        margin: 20px 0;
    }
    #titre_annonce{
        width: max-content;
        margin-bottom: 10px;
    }
    .titre{
        margin-bottom: 10px;
    }
    .row{
        display: flex;
        flex-flow: inherit;
    }
   
</style>
