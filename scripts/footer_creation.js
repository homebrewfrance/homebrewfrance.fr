/* © 2024 - Le Homebrew France
Auteur : Dhalian
Fonction : Création du pied de page (footer) de manière dynamique.
*/

var bodyElement = document.querySelector('body');

var footer = document.createElement('footer');
footer.className = 'footer-container';

var leftFooter = document.createElement('div');
leftFooter.className = 'left-footer';

var hbfLogoFooter = document.createElement('p');
hbfLogoFooter.style.fontFamily = 'Sora';
hbfLogoFooter.style.fontSize = "24px";
hbfLogoFooter.style.color = 'white';
hbfLogoFooter.style.padding = '0';
hbfLogoFooter.style.margin = '0';
hbfLogoFooter.style.cursor = 'pointer';
hbfLogoFooter.innerHTML = '<span style="font-weight: 300;">Homebrew</span><strong>France</strong>';
hbfLogoFooter.onclick = function() {
    window.location = 'https://github.com/homebrewfrance';
};
leftFooter.appendChild(hbfLogoFooter);

var smallText = document.createElement('small');
smallText.style.color = 'rgb(210, 210, 210)';
smallText.innerHTML = '&copy; 2021 - ' + new Date().getFullYear() + '&nbsp;<span style="color: rgb(173, 173, 173)">|</span>&nbsp;' + 'Distribué sous licence <a href="https://www.gnu.org/licenses/gpl-3.0.fr.html">GNU GPLv3</a>';
leftFooter.appendChild(smallText);

footer.appendChild(leftFooter);

var rightFooter = document.createElement('div');
rightFooter.className = 'right-footer';

var navigationLink = document.createElement('a');
navigationLink.href = 'https://homebrew-france.fr/navigation/';
navigationLink.innerHTML = '<u>Navigation</u>';
rightFooter.appendChild(navigationLink);

var separatorSpan1 = document.createElement('span');
separatorSpan1.className = 'separator';
separatorSpan1.style.color = 'rgb(173, 173, 173)';
separatorSpan1.innerHTML = '&nbsp;•&nbsp;';
rightFooter.appendChild(separatorSpan1);

var legalLink = document.createElement('a');
legalLink.href = 'https://homebrew-france.fr/mentions-legales';
legalLink.innerHTML = '<u>Mentions légales</u>';
rightFooter.appendChild(legalLink);

var separatorSpan2 = document.createElement('span');
separatorSpan2.className = 'separator';
separatorSpan2.style.color = 'rgb(173, 173, 173)';
separatorSpan2.innerHTML = '&nbsp;•&nbsp;';
rightFooter.appendChild(separatorSpan2);

var confidential = document.createElement('a');
confidential.href = 'https://homebrew-france.fr/confidentialite/';
confidential.innerHTML = '<u>Confidentialité</u>';
rightFooter.appendChild(confidential);

var separatorSpan3 = document.createElement('span');
separatorSpan3.className = 'separator';
separatorSpan3.style.color = 'rgb(173, 173, 173)';
separatorSpan3.innerHTML = '&nbsp;•&nbsp;';
rightFooter.appendChild(separatorSpan3);

var supportUkraineLink = document.createElement('a');
supportUkraineLink.href = 'https://war.ukraine.ua/support-ukraine/';
supportUkraineLink.innerHTML = '<u><img class="ua-flag" src="https://homebrew-france.fr/style/assets/generic/ukraine.png"> Support Ukraine</u>';
rightFooter.appendChild(supportUkraineLink);

footer.appendChild(rightFooter);

bodyElement.appendChild(footer);
