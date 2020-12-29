# Projet-Transverse
Projet Tranverse : Projet de 5 mois réalisé dans le cadre de l'enseignement à l'Efrei en L3 New.

# Contenu du git

Alors comme vous pouvez le constater y'a plein de dossier du coup je vais les résumer ici :

- bin :
    contient www.
    - www :
        fichiers de config du serv, on le démarre la bas mais en gros j'ai copié collé du tp4 donc on touche pas ou peine de mort.
- client :
    contient les fichiers globalement côté client qui vont s'executer dans le navigateur
    - index.html :
        fichiers d'arrivé du client, j'ai mis le header et le footer dedans vu que c'est commun à toute les pages, y'a un router view qui en fonction de l'url demandé par le navigateur va affiché une certaine vue par ex : url_site/ -> Acceuil, url_site/ -> Acceuil, url_site/achat -> Achat (et c'est tout pour le moment il manque plein de trucs)
        C'est ici qu'il faut ajouter votre page, vous créer le composant .vue dans components/ et vous le "connecter" à un url dans index.html pour pouvoir le voir en allant à l'url que vous aurez choisit.
    - components/
        C'est ici qu'il faut mettre les composants .vue suivez les exemple déjà réalisé mais en gros il faut un <template><div>ici l'html</div></template>
        <style scoped>ici le css</style>
        <script>ici le js de vuejs</script> 
    - img/
        Les images hein
- server
    Ici y'a tout ce qui se passe sur le serveur donc l'api par ex
    - routes
        - api.js
            C'est ici qu'est l'api avec les get, post, update, delete etc
    - app.js
        aussi un fichiers copié collé en relation avec le comportement du serveur, les modules etc

Voilà ! Allez on finit ça mtn et choppe le 23/20