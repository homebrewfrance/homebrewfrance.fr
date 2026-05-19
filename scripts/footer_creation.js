/* 
	Homebrew France Web V6.0.0
    Copyright (C) 2026  Homebrew France

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

var bodyElement = document.querySelector('body');

var footer = document.createElement('footer');
footer.className = 'footer-container';
footer.innerHTML = `

    <div class="footer-first-row">
        <div class="left-footer">
            <div class="hbf-logo-container" style="cursor: pointer;">
                <div style="display:flex;flex-direction:row;"><img src="https://homebrewfrance.github.io/cdn/generic/beta_website-icon.png" style="width: 22px; height: 22px; aspect-ratio: 1 / 1;" id="footer-logo"><p style="font-family: Sora; font-size: 24px;">&nbsp;<span style="font-weight: 300;">Homebrew</span><strong>France</strong></p></div>
                <p id="slogan-hbf">Homemade by community</p>
                <!--a href="https://github.com/homebrewfrance/homebrewfrance.fr"><div class="hbf-version">Version : 6.0.0-BETA2-052026</div></a-->
                <!--div class="hbf-version">GUIDE-UPDATEB2</div-->
            </div>
        </div>
        <div class="right-footer">   
            <div class="footer-column" style="margin-right: 25px;">
                <a title="Plan du site" href="https://homebrewfrance.fr/navigation/">Plan du site</a>
                <a title="Mentions Légales"  href="https://homebrewfrance.fr/mentions-legales">Mentions légales</a>
                <a title="Règles de confidentialité"  href="https://homebrewfrance.fr/confidentialite/">Confidentialité</a>
            </div>
            
            <div class="footer-column" style="margin-right: 25px;">
                <a title="Guides" href="https://homebrewfrance.fr/docs/">Guides</a>
                <a title="Checkers"  href="https://homebrewfrance.fr/checker/">Checkers</a>
                <a title="Faire un don"  href="https://homebrewfrance.fr/donation/">Faire un don</a>
            </div>

            <div class="footer-column">
                <a title="Contester un bannissement" href="https://homebrewfrance.fr/deban/">Débannissement</a>
                <a title="Recrutements" href="https://homebrewfrance.fr/recrutements">Recrutements</a>
                <div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
                        <a href="https://github.com/homebrewfrance/" title="Notre organisation GitHub"><i class="fa-brands fa-github"></i></a>
                        <a href="https://homebrewfrance.fr/discord/" title="Notre serveur Discord"><i class="fa-brands fa-discord"></i></a>
                        <a href="https://instagram.com/unlockd_media" title="Notre compte Instagram"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/homebrewfrance" title="Notre page LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://tiktok.com/@unlockd_media" title="Notre compte TikTok"><i class="fa-brands fa-tiktok"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-second-row">
        <div class="footer-bottom">
            <small><a class="alcool" href="https://homebrewfrance.fr/multi-checker/alcoolemie">©</a> 2021 - 2026&nbsp;<span style="color: rgb(173, 173, 173)">・</span> Homebrew France</small>    
            <div class="hbf-version">Version : 6.0.0b</div> 
        </div>
    </div>
`;

bodyElement.appendChild(footer);
