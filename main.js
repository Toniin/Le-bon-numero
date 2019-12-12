// Initialise 30 secondes pour trouver le juste prix
let secondes = 30

let gagné = false

// Son d'applaudissement pour dire bravo
const music = new Audio()
music.src = "./assets/img/Bravo-applaudissement.mp3"

// Démarrer la partie facile
$("#lancerPartieF").click(function() {
    
    prixMax = 100   
    // Afficher le prix maximum du container
    $('#prixMax').html(prixMax)
    nb = Math.floor(Math.random()* prixMax)
    // Afficher le numéro aléatoire dans la console
    console.log(nb)
    $('#lancerPartieF').hide()
    $('#lancerPartieM').hide()
    $('#lancerPartieD').hide()
    $('#formulaire, #astuce h2').show()
    // Décompte du chrono de 30s à 0s
    let chrono = setInterval(function() {
        if (secondes == 0) {
            // Perdu chrono à 0s
            clearInterval(chrono)
            $('#imgBas, #imgHaut, #imgBravo, #formulaire, #astuce h2').hide()
            $('#nouvellePartie, #imgGO').show();
        } else if (gagné == false) {
            secondes--
            $('#chrono').html(secondes)
        } else {
            clearInterval(chrono)
        }
    }, 1000)
})
// Démarrer la partie normale
$("#lancerPartieM").click(function() {

    prixMax = 700 
    // Afficher le prix maximum du container
    $('#prixMax').html(prixMax)
    nb = Math.floor(Math.random()* prixMax)
    // Afficher le numéro aléatoire dans la console
    console.log(nb)
    $('#lancerPartieF').hide()
    $('#lancerPartieM').hide()
    $('#lancerPartieD').hide()
    $('#formulaire, #astuce h2').show()
    // Décompte du chrono de 30s à 0s
    let chrono = setInterval(function() {
        if (secondes == 0) {
            // Perdu chrono à 0s
            clearInterval(chrono)
            $('#imgBas, #imgHaut, #imgBravo, #formulaire, #astuce h2').hide()
            $('#nouvellePartie, #imgGO').show();
        } else if (gagné == false) {
            secondes--
            $('#chrono').html(secondes)
        } else {
            clearInterval(chrono)
        }
    }, 1000)
})
// Démarrer la partie difficile
$("#lancerPartieD").click(function() {

    prixMax = 7000
    // Afficher le prix maximum du container
    $('#prixMax').html(prixMax)
    nb = Math.floor(Math.random()* prixMax)
    // Afficher le numéro aléatoire dans la console
    console.log(nb)
    $('#lancerPartieF').hide()
    $('#lancerPartieM').hide()
    $('#lancerPartieD').hide()
    $('#formulaire, #astuce h2').show()
    // Décompte du chrono de 30s à 0s
    let chrono = setInterval(function() {
        if (secondes == 0) {
            // Perdu chrono à 0s
            clearInterval(chrono)
            $('#imgBas, #imgHaut, #imgBravo, #formulaire, #astuce h2').hide()
            $('#nouvellePartie, #imgGO').show();
        } else if (gagné == false) {
            secondes--
            $('#chrono').html(secondes)
        } else {
            clearInterval(chrono)
        }
    }, 1000)
})
// Comparaison entre le numéro tapé et le numéro aléatoire
$('#formulaire').submit(function (event) {
    const nbVal = $("#valeurTapée").val() 
    if (nbVal != '' & nbVal < nb) {
        // Le numéro est plus grand que celui tapé
            $('#imgBas, #imgBravo, #imgGO, #nouvellePartie').hide()
            $('#imgHaut').show();
        } else if (nbVal != '' & nbVal > nb) {
        // Le numéro est plus petit que celui tapé
            $('#imgHaut, #imgBravo, #imgGO, #nouvellePartie').hide()
            $('#imgBas').show()
        } else if (nbVal != '' & nbVal == nb) {
        // Lorsque tu trouve le bon numéro
            gagné = true
            $('#imgBas, #imgHaut, #imgGO, #formulaire, #astuce h2').hide()
            $('#nouvellePartie, #imgBravo').show();
            music.play()
    }
    $("#valeurTapée").val('') 
    event.preventDefault()
})

// Permet de rafraîchir la page
$("#nouvellePartie").click(function() {
    window.location.reload(1)
})
