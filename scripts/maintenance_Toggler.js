const warningsList = [
    "Cette version du site est une version Beta, certains éléments et certaines pages peuvent ne pas fonctionner comme prévu.",
];

var bodyElement = document.querySelector('body');
var html = document.querySelector('html');
const pageID = bodyElement.getAttribute("page_id");

var page = document.getElementsByClassName('page')[0];
var pageDocu = document.getElementsByClassName('page-docu')[0];
var warningText = document.createElement('div');

for (i = 0; i < warningsList.length; i++) {
    if (warningsList.length >= 1) {
        var warning = document.createElement('div');
        warning.className = "warning";
        warningText.innerHTML = "<i class=\"fa fa-exclamation-triangle\"></i>&nbsp;" + warningsList[i];
        warning.appendChild(warningText);
    }
}

if (!pageID.startsWith('DOC')) {
    page.prepend(warning);
} 

else {
    pageDocu.prepend(warning);

    var kofiscript = document.createElement('script');
    kofiscript.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";

    kofiscript.onload = function () {
        if (typeof kofiWidgetOverlay !== 'undefined' && typeof kofiWidgetOverlay.draw === 'function') {
            kofiWidgetOverlay.draw('homebrewfrance', {
                'type': 'floating-chat',
                'floating-chat.donateButton.text': 'Tip',
                'floating-chat.donateButton.background-color': '#303236cb',
                'floating-chat.donateButton.text-color': '#fff',
            });
        } else {
            console.warn("La fonction kofiWidgetOverlay.draw n'est pas disponible après le chargement du script.");
        }
    };

    document.body.appendChild(kofiscript);
}


