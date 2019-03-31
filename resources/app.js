// English
// Let us not forget the actual brain behind this translation, Max.
if (navigator.language.startsWith('en')) {
    let motivational = document.querySelector('h1');

    motivational.innerHTML = `
        You are a 🎁
        <br class="sm:hidden">
        for the <span class="inline-block rotate">🌍</span>
    `;

    motivational.title = "Yes, it's YOU I'm talking about❗";
}

// French
// Thanks to the fantastic Margot who helped to make this possible.
if (navigator.language.startsWith('fr')) {
    let motivational = document.querySelector('h1');

    motivational.innerHTML = `
        Tu es un 🎁
        <br class="sm:hidden">
        pour le <span class="inline-block rotate">🌍</span>
    `;

    motivational.title = "Oui, c'est bien de TOI dont je parle❗";
}
