<template>
    <div id="body">
        <div id="bienvenue">
            <h1>Bonjour,</h1>
            <p>Bienvenue sur notre site !<p>
            <p>Vous pourrez y trouvez des producteurs vendant des fruits et légumes bio et frais dans toute la France !</p>
            <p>Si vous le souhaitez, vous pouvez même mettre vos propres produits en vente en créant un compte producteur.</p>
            <p>Sinon, vous pouvez simplement créer un compte acheteur afin de consulter les différentes annonces en ligne et de rentrer en
                contact avec un producteur si l'une d'entre elles vous intéresse.</p>
            <p>
        </div>
        <div id="photos">
            <img id="légumes" src="img/légumes.jpg">
        </div>
    </div>
</template>

<style scoped>
    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
    #bienvenue {
        margin-left: auto;
        margin-right: auto;
        width: 810px;
        height: 300px;
        margin-bottom: 2em;
        box-shadow: 10px 10px 20px 0px #79979e;
        border-radius: 10px;
        margin-bottom: 2em;
        padding: 10px;
    }
    #photos{
        display: flex;
        width: fit-content;
        margin: 0 auto;                             
    }
    .fruits{
        width: 30%;
    }
    #légumes{
        text-align: center;
    }
    p{
        font-size: 1.1em;
    }
    #fruits, #légumes{
        display: flex;
    }
</style>

<script>
</script>
