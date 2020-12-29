<template>
    <div id="vm">
        <div id="option_recherche">
            <form action="" method="post" id="options">
                <select name="fruit_legume" id="fruit_legume">
                    <option value="">--Cherchez vous quelque chose en particulier ?--</option>
                    <optgroup label="Fruits">
                        <option value="banane">Banane</option>
                        <option value="fraise">Fraise</option>
                        <option value="framboise">Framboise</option>
                    </optgroup>
                    <optgroup label="Légumes">
                        <option value="carrote">Carrote</option>
                        <option value="haricot">Haricot</option>
                        <option value="courgette">Courgette</option>
                    </optgroup>
                </select>
                <input type="text" id="titre" name="titre" placeholder="Titre de l'annnonce">
                <input type="text" id="localisation" name="localisation" placeholder="Localisation">
                <input type="text" id="max" name="max" placeholder="prix max">
                <input type="text" id="min" name="min" placeholder="prix min">
                <button>Rechercher</button>
            </form>
        </div>
        <div id="les_annonces">
            <div class="annonce">
                <img src="img/logo.png">
                <div class="annonce_contenu">
                    <h3>Vend Carrotte de qualité première en vrai</h3>
                    <div class="annonce_texte">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec sed odio nec justo tempus consequat. Nunc sapien 
                            orci, faucibus non ex eu, congue gravida augue. Maecenas
                             bibendum ante sit amet tellus suscipit sollicitudin. 
                             Sed tincidunt ut leo vitae mattis. Nunc sollicitudin 
                             non purus at ultrices. Cras a neque sit amet lorem 
                             laoreet vestibulum. Mauris consequat nibh volutpat, 
                             molestie sem ac, ultricies felis...</p>
                        <p class="annonce_localisation">
                            Localisation : 15 rue du truc, Machin 55600
                        </p>
                    </div>
                    <button>En savoir plus</button>
                </div>
            </div>
            <div class="annonce">
                <img src="img/logo.png">
                <div class="annonce_contenu">
                    <h3>Vend Carrotte de qualité première en vrai</h3>
                    <div class="annonce_texte">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec sed odio nec justo tempus consequat. Nunc sapien 
                            orci, faucibus non ex eu, congue gravida augue. Maecenas
                             bibendum ante sit amet tellus suscipit sollicitudin. 
                             Sed tincidunt ut leo vitae mattis. Nunc sollicitudin 
                             non purus at ultrices. Cras a neque sit amet lorem 
                             laoreet vestibulum. Mauris consequat nibh volutpat, 
                             molestie sem ac, ultricies felis...</p>
                        <p class="annonce_localisation">
                            Localisation : 15 rue du truc, Machin 55600
                        </p>
                    </div>
                    <button>En savoir plus</button>
                </div>
            </div>
            <div class="annonce">
                <img src="img/logo.png">
                <div class="annonce_contenu">
                    <h3>Vend Carrotte de qualité première en vrai</h3>
                    <div class="annonce_texte">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec sed odio nec justo tempus consequat. Nunc sapien 
                            orci, faucibus non ex eu, congue gravida augue. Maecenas
                             bibendum ante sit amet tellus suscipit sollicitudin. 
                             Sed tincidunt ut leo vitae mattis. Nunc sollicitudin 
                             non purus at ultrices. Cras a neque sit amet lorem 
                             laoreet vestibulum. Mauris consequat nibh volutpat, 
                             molestie sem ac, ultricies felis...</p>
                        <p class="annonce_localisation">
                            Localisation : 15 rue du truc, Machin 55600
                        </p>
                    </div>
                    <button>En savoir plus</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#option_recherche{
    width: auto;
    background-color: #DFDFDF;
    padding: 20px;
    display: flex;
    box-shadow: 10px 10px 20px 0px #cdd3dd;
}
form select{
    border: none;
    height: 25px;
    margin: 10px auto;
}
form input{
    background-color: white;
    border: none;
    border-bottom: 1px solid black;
    margin: 10px auto;
    height: 25px;
}
form button{
    border-radius: 50px;
    border: none;
    background-color: #079100;
    width: 100px;
    height: 30px;
    margin: 10px auto;
    color: white;
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
    max-width: 900px;
    background-color: #ECF0F3;
    height: fit-content;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
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
.annonce p{
    font-size: 0.8em;
    margin-left: 20px;
}
.annonce_texte{
    display: flex;
    flex-direction: row;
}
.annonce_texte .annonce_localisation{
    width: 400px;
    margin-right: 20px;
}
.annonce_contenu{
    display:flex;
    flex-direction: column;
}
.annonce button{
    border-radius: 50px;
    border: none;
    background-color: #C4C4C4;
    width: 150px;
    height: 40px;
    margin: 20px auto;
}
</style>

<script>
</script>
