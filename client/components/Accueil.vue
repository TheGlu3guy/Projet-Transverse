<template>
    <div id="vm">
        <div id="bienvenue">
            <h1>Bonjour "Nom d'utilisateur"</h1>
            <p>Bienvenue sur notre site!<br>
                Vous pourrez y trouvez des producteurs vendant des fruits et légumes bio et frais !<p>
        </div>
        <div class="actualites">
            <div>
                <h2>Des producteurs de votre région...</h2>
                <div class="actus">
                    <div>
                        <div class="petite_actu"></div>
                        <p>Actu1</p>
                    </div>
                    <div>
                        <div class="petite_actu"></div>
                        <p>Actu1</p>
                    </div>
                    <div>
                        <div class="grande_actu"></div>
                        <p>Actu1</p>
                    </div>
                    <div>
                        <div class="petite_actu"></div>
                        <p>Actu1</p>
                    </div>
                    <div>
                        <div class="petite_actu"></div>
                        <p>Actu1</p>
                    </div>
                </div>
                <div class="barre"><div class="emplacement"></div></div>
            </div>
            
            <div>
                <h2 class="titre_gauche">...et d'ailleurs</h2>
                    <div class="actus">
                        <div>
                            <div class="petite_actu"></div>
                            <p>Actu1</p>
                        </div>
                        <div>
                            <div class="petite_actu"></div>
                            <p>Actu1</p>
                        </div>
                        <div>
                            <div class="grande_actu"></div>
                            <p>Actu1</p>
                        </div>
                        <div>
                            <div class="petite_actu"></div>
                            <p>Actu1</p>
                        </div>
                        <div>
                            <div class="petite_actu"></div>
                            <p>Actu1</p>
                        </div>
                    </div>
                <div class="barre"><div class="emplacement"></div></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #bienvenue{
        margin-left: auto;
        margin-right: auto;
        width: 800px;
        height: 350px;
        margin-bottom: 2em;
        background-color: #ECF0F3;
        border-radius: 10px;
        box-shadow: 10px 10px 20px 0px #cdd3dd;
        padding: 10px;
    }
    #bienvenue h1{
        text-align: center;
    }
    .actus{
        display: flex;
        flex-direction: row;
    }
    .petite_actu{
        height: 150px;
        width: 150px;
        border: 1px solid gray;
        margin: auto 10px;
        background: white;
    }
    .grande_actu{
        height: 200px;
        width: 200px;
        border: 1px solid gray;
        margin: auto 10px;
        background: white;
    }
    .actualites{
        width: 900px;
        padding: 20px;
        margin: 0 auto;
    }
    .barre{
        width: 700px;
        height: 5px;
        background: #C4C4C4;
        margin: 10px auto;
    }
    .emplacement{
        background-color: black;
        width: 100px;
        height: 5px;
        margin: 0 auto;
    }
    .titre_gauche{
        text-align: right;
    }
    .actus p{
        text-align: center;
        font-weight: bold;
    }
</style>

<script>
</script>
