<template>

    <div id="tab">
        <div id="titre">
            <img src="img/logo.png">
            <h1>titre client</h1>
        </div>


       
        <div id="historique">  
            <h2 >historique de l'utilisateur</h2>  
            <hr> 
            <div id="annonces"> 
                <article id="annonce" v-for="item in cart" :key="item.id">
                    <div class="column1">
                        <div :style="{ backgroundImage: 'url(' + item.image + ')' }"></div>
                        <h3> {{ item.title }} </h3>
                    </div>
                    <div id="column2">
                        <p> {{ item.date }} </p>
                        <p>{{ item.price * item.qty }}$</p>
                        
                    </div>
                    <div class="column1">
                        <button>Modifier</button>
                        <button>Supprimer</button>
                    </div>
                    
                </article>
                
            </div>
            <hr>
        </div>


         
         

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
            },
            {
                id: 3,
                title: 'annonce',
                date: 22+"/"+22+"/"+2222,
                image: 'img/logo.png',
                price: 1,
                qty: 3
            },
            {
                id: 4,
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
   
    methods: {
        deleteItem () {
          
        }
    }
}
</script>

<style scoped>
    html, body {
                margin: 0;
                padding: 0;
                font-family: 'Roboto', sans-serif;
            }

    #tab {
        
        width: 1000px;
        margin: 0px auto;
        padding: 0px;
        box-shadow: 10px 10px 20px 0px #cdd3dd;
        display: flex;
        flex-direction: column;
    }

    #titre{
        
        padding-left: 20px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    #titre img{
        width: 100px;
        height: 100px;
        align-content: center;
        border-radius: 50%;
        background-color: grey;
        filter : drop-shadow(1px 2px 3px grey);
        flex: none;
    }
    #titre h1{
        align-self: center;
        padding: 20px;
    }

    #historique {
        flex: none;
        width: 750px;
        height: 600px;
        margin: auto;
        margin-bottom: 50px;
        box-shadow: 10px 10px 20px 0px #cdd3dd;
        display: block;
        flex-direction: column;
        
    }
    #historique h2 {
        text-align: center;
        flex: none;
    }
    #annonces {
        flex: none;
        max-height: 500px;
        display: flex;
        flex-direction: column;
        overflow: auto;
        
    }
    hr {
        border: 1px solid grey;
    }

    #annonce {
        flex: none;
        width: 700px;
        margin: 15px auto;
        box-shadow: 10px 10px 20px 0px #cdd3dd;
        padding: 10px;
        display: flex;
        flex-direction: row;
        
    }
    .column1 {
        flex-grow: 1;
        display: flex;
        flex-direction: column

    }
    #column2 {
        flex-grow: 2;
        display: flex;
        flex-direction: column

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
    
   
</style>
