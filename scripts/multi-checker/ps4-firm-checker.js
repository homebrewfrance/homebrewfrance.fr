document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const resultat = document.getElementById('resultat');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const majorVersion = parseInt(document.querySelector('select[name="major-version"]').value, 10);
        const minorVersion = parseInt(document.querySelector('select[name="minor-version"]').value, 10);
        const warning_incompatible = 'ATTENTION\nVotre console n\'est actuellement pas compatible avec le jailbreak!';
        if (majorVersion === 11) {
            if (minorVersion === 0) {
                window.location = 'https://homebrewfrance.fr/docs/ps4/11.00';
            }
            else {
                alert(warning_incompatible)
            }
        }
        else if (majorVersion === 9) {
            if (minorVersion === 0) {
                window.location = 'https://homebrewfrance.fr/docs/ps4/9.00';
            }
            else {
                window.location = 'https://homebrewfrance.fr/docs/ps4/11.00';
            }
        }
        else if (majorVersion < 9) {
            window.location = 'https://homebrewfrance.fr/docs/ps4/9.00';
        }
        else if (majorVersion === 10) {
            window.location = 'https://homebrewfrance.fr/docs/ps4/11.00';
        }
        else if (majorVersion === 12) {
            if (minorVersion <= 2) {
                window.location = 'https://homebrewfrance.fr/docs/ps4/12.02';
            }
        }
        else {
            alert(warning_incompatible);
        }
    });
    resultat.innerHTML = "<img src=\"https://cdn.homebrew-france.fun/generic/lumia-guides.png\" width=\"18px\" height=\"18px\"><p>Lumia Checker v0.5.1b</p>";
});
