// Verify If jQuery is working
// $(document).ready(function () {
//     if (jQuery) {
//         alert("It's working !");
//     } else {
//         alert("No Jquery !");
//     }
// });

var produitsDisp = document.getElementById('tabProduits');

class Produits {
    constructor(type, titre, image, prix, like) {
        this.type = type;
        this.titre = titre;
        this.image = image;
        this.prix = prix;
        this.like = like;
    }
}

var tabProduits = [
    new Produits("Sac", "Sac de Sport", "images/sac_Addidas.jpg", 55, true),
    new Produits("Chaussures", "Chaussures de ville", "images/chaussures_ville.jpg", 175, false),
    new Produits("TShirt", "TShirt Manga", "images/tShirt.jpg", 25, false)
];

for (var i = 0; i < tabProduits.length; i++) {
    produitsDisp.insertAdjacentHTML('beforeend', '<div class="produits" id="' + tabProduits[i].type + '"></div>');
    document.getElementById(tabProduits[i].type).innerHTML = '<div class="titre">' + tabProduits[i].titre + '</div><div class="image"><img src = "' + tabProduits[i].image + '"></div> <div class="infos"><span class="prix">' + tabProduits[i].prix + '€ </span><button class="button">Buy</button> <i class="far fa-heart"></i></div>';
}

// NodeList of my heart span
var heart = document.querySelectorAll(".infos i.far.fa-heart");


// Change to filled heart if the like property = true
function likeVerif(array) {
    for (let i = 0; i < tabProduits.length; i++) {
        if (array[i].like === true) {
            heart[i].className = "fas fa-heart";
        } else {
            heart[i].className = "far fa-heart";
        }
    }
}
likeVerif(tabProduits);

// Switch the state of the heart icon
function likeSwitch(el) {
    if (el.className == "far fa-heart") {
        el.className = "fas fa-heart";
    } else {
        el.className = "far fa-heart";
    }
}

for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener('click', function () {
        likeSwitch(heart[i]);
    });
}

// creer une fonction : prendre les données et les envoyer sur mon Serveur.(à créer)

