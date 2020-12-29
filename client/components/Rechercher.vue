<template>
    <div class="rechercher">
        <h2>Rechercher un produit</h2>
        <select id="Produit" name="produit">
            <option value="none" selected disabled hidden>Produit</option>
            <optgroup label="Fruits">
                <option value="Poire">Poire</option>
                <option value="Pomme">Pomme</option>
                <option value="Fraise">Fraise</option>
                <option value="Framboise">Framboise</option>
                <option value="Banane">Banane</option>
                <option value="Clémentine">Clémentine</option>
                <option value="Mandarine">Mandarine</option>
                <option value="Citron">Citron</option>
                <option value="Citron Vert">Citron Vert</option>
                <option value="Orange">Orange</option>
                <option value="Abricot">Abricot</option>
                <option value="Pêche">Pêche</option>
                <option value="Prune">Prune</option>
                <option value="Cerise">Cerise</option>
                <option value="Nectarine">Nectarine</option>
                <option value="Mirabelle">Mirabelle</option>
                <option value="Melon">Melon</option>
                <option value="Myrtille">Myrtille</option>
                <option value="Cassis">Cassis</option>
                <option value="Groseille">Groseille</option>
                <option value="Mûre">Melon</option>
                <option value="Pastèque">Pastèque</option>
                <option value="Figue">Figue</option>
                <option value="Raisin">Raisin</option>
                <option value="Kiwi">Kiwi</option>
                <option value="Ananas">Ananas</option>
            </optgroup>
            <optgroup label="Légumes">
                <option value="Salade">Salade</option>
                <option value="Courgette">Courgette</option>
                <option value="Concombre">Concombre</option>
                <option value="Carotte">Carotte</option>
                <option value="Poivron">Poivron</option>
                <option value="Piment">Piment</option>
                <option value="Aubergine">Aubergine</option>
                <option value="Epinard">Epinard</option>
                <option value="Poireau">Poireau</option>
                <option value="Chou-fleur">Chou-fleur</option>
                <option value="Brocoli">Brocoli</option>
                <option value="Persil">Persil</option>
            </optgroup>
            <optgroup label="Fromages">
                <option value="Salade">Salade</option>
                <option value="Courgette">Courgette</option>
                <option value="Concombre">Concombre</option>
                <option value="Carotte">Carotte</option>
            </optgroup>
        </select>
        <select id="Label" name="Label">
            <option value="none" selected disabled hidden>Label</option>
            <option value="AOC">Appellation d'Origine Contrôlée</option>
            <option value="AOP">Appellation d'Origine Protégée</option>
            <option value="IGP">Indication Géographique Protégée</option>
            <option value="LR">Label Rouge</option>
        </select>
        <select id="Région" name="région">
            <option value="none" selected disabled hidden>Région</option>
            <option value="AOC">Auvergne-Rhône-Alpes</option>
            <option value="AOP">Bourgogne-Franche-Compté</option>
            <option value="IGP">Corse</option>
            <option value="LR">Bretagne</option>
            <option value="AOC">Grand-Est</option>
            <option value="AOP">Provence-Alpes-Côte-d'Azur</option>
            <option value="IGP">Occitanie</option>
            <option value="LR">Pays-de-la-Loire</option>
            <option value="LR">Normandie</option>
            <option value="AOC">Hauts-de-France</option>
            <option value="AOP">Centre-Val-de-Loire</option>
            <option value="IGP">Nouvelle-Aquitaine</option>
            <option value="LR">Ile-de-France</option>
        </select>
        <input data-role="slider">
    </div>
    <div class="bouton">
        <button>Rechercher</button>
    </div>
    <div id="carte">
        <h2>Découvrez les produits dans la région de votre choix</h2>
        <img class="displayed" src="img/carte-france-regions.png" usemap="#image-map">
        <map name="image-map">
            <area target="" alt="Grand-Est" title="Grand-Est" href="" coords="321,90,294,162,314,189,342,184,355,203,384,181,426,205,440,138" shape="poly">
            <area target="" alt="Hauts-de-France" title="Hauts-de-France" href="" coords="243,50,235,85,243,124,299,143,321,87,282,60,264,39" shape="poly">
            <area target="" alt="Normandie" title="Normandie" href="" coords="132,107,144,157,210,170,244,125,236,86,199,105,187,128" shape="poly">
            <area target="" alt="Bretagne" title="Bretagne" href="" coords="38,151,46,178,111,206,152,186,146,159,112,155,99,160,84,145" shape="poly"> 
            <area target="" alt="Pays-de-la-Loire" title="Pays-de-la-Loire" href="" coords="151,160,146,193,103,209,120,248,146,268,164,262,159,235,187,226,196,206,216,184,206,171" shape="poly">
            <area target="" alt="Centre-Val-de-Loire" title="Centre-Val-de-Loire" href="" coords="215,187,187,224,225,262,262,263,282,242,281,183,251,173,234,142,211,172" shape="poly">
            <area target="" alt="Bourgogne-Franche-Compté" title="Bourgogne-Franche-Compté" href="" coords="280,179,285,243,325,267,379,265,419,202,385,184,359,202,341,187,315,189,294,166" shape="poly">
            <area target="" alt="Auvergne-Rhône-Alpes" title="Auvergne-Rhône-Alpes" href="" coords="267,261,253,334,304,336,323,361,367,362,399,324,420,311,405,264,379,266,325,268,283,242" shape="poly">
            <area target="" alt="Corse" title="Corse" href="" coords="449,412,428,428,436,467,451,474,459,440" shape="poly">
            <area target="" alt="Occitanie" title="Occitanie" href="" coords="254,334,232,329,207,373,174,381,170,396,179,409,168,428,197,442,205,433,263,455,284,448,293,414,331,398,348,376,327,362,300,337" shape="poly">
            <area target="" alt="Nouvelle-Aquitaine" title="Nouvelle-Aquitaine" href="" coords="142,350,124,409,164,436,174,411,170,384,204,373,230,330,253,332,265,265,224,262,187,228,163,234,166,262,149,269,143,319" shape="poly">
            <area target="" alt="Ile-de-France" title="Ile-de-France" href="" coords="245,128,234,141,253,171,279,181,291,167,295,147" shape="poly">
            <area target="" alt="Provence-Alpes-Côte-d'Azur" title="Provence-Alpes-Côte-d'Azur" href="" coords="342,365,348,377,331,402,395,420,437,385,443,367,435,372,415,357,419,338,402,324,369,362" shape="poly">
        </map>
    </div>
    <div class="Région">
        <select id="Région" name="région">
            <option value="none" selected disabled hidden>Région</option>
            <option value="AOC">Auvergne-Rhône-Alpes</option>
            <option value="AOP">Bourgogne-Franche-Compté</option>
            <option value="IGP">Corse</option>
            <option value="LR">Bretagne</option>
            <option value="AOC">Grand-Est</option>
            <option value="AOP">Provence-Alpes-Côte-d'Azur</option>
            <option value="IGP">Occitanie</option>
            <option value="LR">Pays-de-la-Loire</option>
            <option value="LR">Normandie</option>
            <option value="AOC">Hauts-de-France</option>
            <option value="AOP">Centre-Val-de-Loire</option>
            <option value="IGP">Nouvelle-Aquitaine</option>
            <option value="LR">Ile-de-France</option>
        </select>
    </div>
</template>

<style scoped>
    #Label{
    border-radius: 10px;
    }

    #Région{
        border-radius: 10px;
    }

    .bouton{
        text-align: center
    }

    button{
        border-radius: 8px;
        background-color: lightseagreen;
    }


    h2 {
        text-align: center;
    }

    img.displayed{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .Région{
        text-align: center;
    }

    .rechercher{
    width: 540px;
    height: 100px;
    padding: 10px;
    background-color:antiquewhite;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    }

    #Produit{
    border-radius: 10px;
    }
</style>

<script>
</script>