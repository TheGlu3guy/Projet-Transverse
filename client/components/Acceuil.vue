<template>
    <div id="vm">
        <div id="bienvenue">
            <h1>Bonjour "Nom d'utilisateur"</h1>
            <p>Instrutions sur comment utiliser le site :<br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mi vel nibh pretium posuere. Integer tempor lorem justo, et aliquam turpis aliquet in. Pellentesque blandit pellentesque risus quis interdum. Sed vitae cursus sem. Duis ac orci ut nulla blandit vestibulum ac id leo. Integer luctus eros in dolor vestibulum sollicitudin. Nullam et quam pellentesque, convallis nunc vel, sollicitudin felis. Suspendisse sollicitudin leo sit amet ex gravida, id viverra eros ornare. Nunc libero tellus, efficitur non auctor faucibus, porta vitae magna. Aenean vel orci metus. Sed ut ligula ornare, ultricies tortor eu, porttitor nisi.
                </p>
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
        width: 800px;
        background: #E9E9E9;
        padding: 20px;
        margin: 0 auto;
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
