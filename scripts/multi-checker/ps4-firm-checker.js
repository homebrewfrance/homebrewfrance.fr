document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const resultat = document.getElementById('resultat');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const majorVersion = parseInt(document.querySelector('select[name="major-version"]').value, 10);
        const minorVersion = parseInt(document.querySelector('select[name="minor-version"]').value, 10);

        if ((majorVersion <= 11) && (majorVersion > 9)) {
            if (minorVersion === 0) {
                window.location = 'https://homebrewfrance.fr/docs/ps4/11.00';
            }
        }
        else if (majorVersion <= 9) {
            window.location = 'https://homebrewfrance.fr/docs/ps4/9.00';
        }
        else {
            alert('ATTENTION\nVotre console n\'est actuellement pas compatible avec le jailbreak!');
        }
    });
    resultat.innerHTML = "<img src=\"https://cdn.homebrew-france.fun/generic/lumia-guides.png\" width=\"18px\" height=\"18px\"><p>Lumia Checker v0.4b</p>";
});
