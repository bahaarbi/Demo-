// Attendre que le DOM (HTML) soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {
    console.log('Le fichier script.js est bien chargé !');

    // Exemple 1 : Modifier le texte du titre principal h1
    const titre = document.querySelector('h1');
    if (titre) {
        titre.style.color = '#2c3e50';
    }

    // Exemple 2 : Interaction simple (décommente pour tester)
    // alert('Bienvenue sur mon site !');
});     