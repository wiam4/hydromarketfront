// JS
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
})
// Ajoutez en bas de votre JS
document.addEventListener('DOMContentLoaded', () => {
    // Pré-charge les images critiques
    const images = [
        'hydro-machine.png',
        'solar.png',
        'electrolysers.png'
    ];
    images.forEach(img => {
        new Image().src = img;
    });
});
// Mettre à jour le JS existant
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
    this.setAttribute('aria-expanded', nav.classList.contains('show'));
});
// Ajouter à votre JS
document.querySelector('.search-bar input').addEventListener('input', function(e) {
    if (e.target.value.length > 2) {
        // Exemple: requête API pour suggestions
        console.log("Recherche:", e.target.value);
    }
});