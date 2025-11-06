document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('resultat').innerHTML = "<img src=\"https://cdn.homebrew-france.fun/generic/lumia-guides.png\" width=\"18px\" height=\"18px\"><p>Lumia Checker v1.0</p>";

    fetch('https://homebrewfrance.fr/json/ps5-uart-codes.json')
    .then(response => response.json())
    .then(data => {
        const items = data.items;

        const form = document.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            createErrors(items);
        });
    })
    .catch(error => console.error('Error loading navigation data:', error));
});

function createErrors(items) {
    const inputCode = document.querySelector('input[name="errorInput"]').value;
    var resultat = document.getElementById('resultat');

    let found = false; 

    for (var index = 0; index < items.length; index++) {
        if (inputCode == items[index].code) {
            found = true;
            resultat.innerHTML = `
                <div class="incompatible-container">
                    <div class="incompatible">
                        <i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;<strong>Code erreur : ${items[index].code}</strong>
                    </div>
                    <div class="infos" style="padding-bottom: 8px;">
                        <p>${items[index].description}</p>
                    </div>
                </div>                
            `;
            break;
        }
    }

    if (!found) {
        alert('Le code que vous avez fourni est incorrect.');
    }
}
