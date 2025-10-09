document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const resultat = document.getElementById('resultat');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const majorVersion = parseInt(document.querySelector('select[name="major-version"]').value, 10);
        const minorVersion = parseInt(document.querySelector('select[name="minor-version"]').value, 10);

        if (majorVersion === 3) {
            if (minorVersion === 60) {
                window.location = 'https://homebrewfrance.fr/docs/psvita/3.60';
            } else if (minorVersion === 65) {
                window.location = 'https://homebrewfrance.fr/docs/psvita/henlo';
            } else if (minorVersion === 74) {
                window.location = 'https://homebrewfrance.fr/docs/psvita/henlo';
            } else {
                window.location = 'https://homebrewfrance.fr/docs/psvita/update-3.74';
            }

        } else {
            window.location = 'https://homebrewfrance.fr/docs/psvita/update-3.74';
        }
    });
    resultat.innerHTML = "<img src=\"https://cdn.homebrew-france.fun/generic/lumia-guides.png\" width=\"18px\" height=\"18px\"><p>Lumia Checker v1.0</p>";
});
