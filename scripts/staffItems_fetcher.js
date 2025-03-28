/* 
	Homebrew France Web V4
    Copyright (C) 2025  Homebrew France

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

const staffElements = document.getElementById('staff-elements');
const chargementApropos = document.getElementsByClassName('chargementApropos')[0];
const gridContainer = document.getElementsByClassName('grid-container')[0];
var bodyElement = document.getElementsByTagName('body')[0];

gridContainer.removeChild(chargementApropos);
function createItemStaff(staff) {
    for (var itemIndex = 0; itemIndex < staff.length; itemIndex++) {
        var gridStaff = document.createElement('div');
        gridStaff.className = 'grid-staff';
        var nameValue = staff[itemIndex].name;
        var crownIcon = "&nbsp;<i class=\"fa-solid fa-crown\"></i>";

        var avatar = document.createElement('img');
        
        if (nameValue.includes(crownIcon)) {
            var avatarLink = 'https://cdn.homebrew-france.fun/a-propos/staff/' + staff[itemIndex].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(crownIcon, '') + '.png';
        }
        else if (staff[itemIndex].avatarFormat == '') {
            var avatarLink = 'https://cdn.homebrew-france.fun/a-propos/staff/default.png';
        }
        else {
            var avatarLink = 'https://cdn.homebrew-france.fun/a-propos/staff/' + staff[itemIndex].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") + '.png';
        }
        

        avatar.src = avatarLink;
        avatar.width = '100';
        avatar.height = '100';
        gridStaff.appendChild(avatar);

        var name = document.createElement('h3'); 
        name.innerHTML = nameValue;
        gridStaff.appendChild(name);

        if (staff[itemIndex].admin) {
            name.className = "fondator";
        }

        var description = document.createElement('div');
        description.className = 'staff-desc-container';
        if (staff[itemIndex].role2) {
            description.innerHTML = `
            <div class="role ${staff[itemIndex].role.toLowerCase()}">${staff[itemIndex].role}</div>
            <div class="role ${staff[itemIndex].role2.toLowerCase()}">${staff[itemIndex].role2}</div>
            `;
        }
        else {
            description.innerHTML = `<div class="role ${staff[itemIndex].role.toLowerCase()}">${staff[itemIndex].role}</div>`;
        }

        gridStaff.appendChild(description);

        var btnContainer = document.createElement('div');
        btnContainer.className = 'btn-container';
        
        for (var itemIndex2=0; itemIndex2 < staff[itemIndex].socials.length; itemIndex2++) {
            var socialLink = document.createElement('a');
            var socialBtn = document.createElement('button');
            if (staff[itemIndex].socials[itemIndex2].name == 'youtube') {
                socialBtn.className = 'yt-button';
                socialLink.href = staff[itemIndex].socials[itemIndex2].link;
                socialBtn.innerHTML = '<i class="fa-brands fa-youtube"></i>&nbsp;' + staff[itemIndex].socials[itemIndex2].username;
            }
            else if (staff[itemIndex].socials[itemIndex2].name == 'x') {
                socialBtn.className = 'twitter-button';
                socialLink.href = staff[itemIndex].socials[itemIndex2].link;
                socialBtn.innerHTML = '<i class="fa-brands fa-x-twitter"></i>&nbsp;' + staff[itemIndex].socials[itemIndex2].username;
            }
            else if (staff[itemIndex].socials[itemIndex2].name == 'twitch') {
                socialBtn.className = 'twitch-button';
                socialLink.href = staff[itemIndex].socials[itemIndex2].link;
                socialBtn.innerHTML = '<i class="fa-brands fa-twitch"></i>&nbsp;' + staff[itemIndex].socials[itemIndex2].username;
            }
            else if (staff[itemIndex].socials[itemIndex2].name == 'tiktok') {
                socialBtn.className = 'tiktok-button';
                socialLink.href = staff[itemIndex].socials[itemIndex2].link;
                socialBtn.innerHTML = '<i class="fa-brands fa-tiktok"></i>&nbsp;' + staff[itemIndex].socials[itemIndex2].username;
            }
            else if (staff[itemIndex].socials[itemIndex2].name == 'discord') {
                socialBtn.className = 'ds-button';
                socialLink.href = staff[itemIndex].socials[itemIndex2].link;
                socialBtn.innerHTML = '<i class="fa-brands fa-discord"></i>&nbsp;' + staff[itemIndex].socials[itemIndex2].username;
            }
            else if (staff[itemIndex].socials[itemIndex2].name == 'github') {
                socialBtn.className = 'git-button';
                socialLink.href = staff[itemIndex].socials[itemIndex2].link;
                socialBtn.innerHTML = '<i class="fa-brands fa-github"></i>&nbsp;' + staff[itemIndex].socials[itemIndex2].username;
            }
            else if (staff[itemIndex].socials[itemIndex2].name == 'linkedin') {
                socialBtn.className = 'linkedin-button';
                socialLink.href = staff[itemIndex].socials[itemIndex2].link;
                socialBtn.innerHTML = '<i class="fa-brands fa-linkedin"></i>&nbsp;' + staff[itemIndex].socials[itemIndex2].username;
            }
            else if (staff[itemIndex].socials[itemIndex2].name == 'website') {
                socialBtn.className = 'default-button';
                socialLink.href = staff[itemIndex].socials[itemIndex2].link;
                socialBtn.innerHTML = '<i class="fa fa-globe"></i>&nbsp;' + staff[itemIndex].socials[itemIndex2].username;
            }
            socialLink.appendChild(socialBtn);
            btnContainer.appendChild(socialLink);
        }
        gridStaff.appendChild(btnContainer);


        if (staff[itemIndex].musicLink && staff[itemIndex].musicLink !== "") {
            var musicLink = document.createElement('a');
            musicLink.className = "music-link";
            var musicName = document.createElement('small');
            var popup = document.createElement('div');
            var popupID = staff[itemIndex].name + "MusicPopup";
            musicLink.id = staff[itemIndex].name + "MusicLink";
            musicLink.style.marginBottom = '8px';
 
            musicName.innerHTML = '<i class="fa-solid fa-music"></i>&nbsp;' + staff[itemIndex].musicName;
            musicLink.appendChild(musicName);
                        
            popup.className = 'popup';
            popup.id = popupID;

            var closeBtn = document.createElement('div');
            if (staff[itemIndex].name.includes(crownIcon)) {
                staff[itemIndex].name = staff[itemIndex].name.replace(crownIcon, "");
                closeBtn.id = staff[itemIndex].name + "MusicBtn";
            }
            else {
                closeBtn.id = staff[itemIndex].name + "MusicBtn";
            }
            
            closeBtn.className = 'close-btn';
            closeBtnInner = document.createElement('p');
            closeBtnInner.innerHTML = '<i class="fas fa-window-close"></i>&nbsp;&nbsp;Fermer';
            closeBtn.appendChild(closeBtnInner);
            popup.appendChild(closeBtn);
            var html = document.getElementsByTagName('html')[0];
            html.appendChild(popup);
            gridStaff.appendChild(musicLink);
        }

        gridContainer.appendChild(gridStaff);
    } 
}

function createMusicEmbed(staff) {
    for (let itemIndex3 = 0; itemIndex3 < staff.length; itemIndex3++) {
        var musicLinkVal = staff[itemIndex3].musicLink;

        if (musicLinkVal === "") continue; 
        
        setTimeout(function() {  
            var findPopupId = document.getElementById(staff[itemIndex3].name + "MusicPopup");
            var findMusicLinkId = document.getElementById(staff[itemIndex3].name + "MusicLink");
            var findBtnId = document.getElementById(staff[itemIndex3].name + "MusicBtn");
            var musicPlatform = staff[itemIndex3].musicPlatform;

            console.log(findPopupId, findBtnId, findMusicLinkId);

            if (findPopupId && findBtnId && findMusicLinkId) {
                
                if (musicLinkVal && musicPlatform == 'spotify') {
                    var iframe = document.createElement('iframe');
                    iframe.style.borderRadius = '12px';
                    iframe.src = staff[itemIndex3].musicLink.replace("track", 'embed/track').replace("intl-fr/", "");
                    iframe.width = '100%';
                    iframe.height = '352';
                    iframe.frameBorder = '0';
                    iframe.allowFullscreen = true;
                    iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
                    iframe.loading = 'lazy';
                    findPopupId.prepend(iframe); 
                    var musicStaffName = document.createElement('h3');
                    musicStaffName.innerHTML = "Musique de <strong>" + staff[itemIndex3].name + "</strong>";
                    musicStaffName.style.color = 'white';
                    musicStaffName.style.textAlign = 'center';
                    musicStaffName.style.fontFamily = 'Sora';
                    musicStaffName.style.marginBottom = '11px';
                    findPopupId.prepend(musicStaffName);

                    findMusicLinkId.addEventListener('click', function() {
                        findPopupId.classList.add('show');
                        bodyElement.classList.add('blurred');
                    });

                    findBtnId.addEventListener('click', function() {
                        findPopupId.classList.remove('show');
                        bodyElement.classList.remove('blurred');
                    });
                } else if (musicLinkVal && musicPlatform == 'youtube') {
                    findMusicLinkId.href = staff[itemIndex3].musicLink;
                }
            }
        }, 0); 
    }
}


document.addEventListener('DOMContentLoaded', function() {
    fetch('https://homebrewfrance.fr/json/staff-items.json')
    .then(response => response.json())
    .then(data => {
        const staff = data.staff;

        createItemStaff(staff);
        createMusicEmbed(staff);
    })
    .catch(error => console.error('Erreur:', error));
});