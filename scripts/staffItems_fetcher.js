var staffElements = document.getElementById('staff-elements');
var chargementApropos = document.getElementsByClassName('chargementApropos')[0];
var gridContainer = document.getElementsByClassName('grid-container')[0];
gridContainer.removeChild(chargementApropos);
function createItemStaff(staff) {
    for (var itemIndex = 0; itemIndex < staff.length; itemIndex++) {
        var gridStaff = document.createElement('div');
        gridStaff.className = 'grid-staff';
        var nameValue = staff[itemIndex].name;
        var crownIcon = "&nbsp;<i class=\"fa-solid fa-crown\"></i>";

        var avatar = document.createElement('img');
        
        if (nameValue.includes(crownIcon)) {
            var avatarLink = 'https://cdn.homebrew-france.site/a-propos/staff/' + staff[itemIndex].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(crownIcon, '') + '.' + staff[itemIndex].avatarFormat;
        }
        else if (staff[itemIndex].avatarFormat == '') {
            var avatarLink = 'https://cdn.homebrew-france.site/a-propos/staff/default.png';
        }
        else {
            var avatarLink = 'https://cdn.homebrew-france.site/a-propos/staff/' + staff[itemIndex].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") + '.' + staff[itemIndex].avatarFormat;
        }
        

        avatar.src = avatarLink;
        avatar.width = '100';
        avatar.height = '100';
        gridStaff.appendChild(avatar);

        var name = document.createElement('h3'); 
        name.innerHTML = nameValue;
        gridStaff.appendChild(name);

        var description = document.createElement('small');
        description.innerHTML = '<i>' + staff[itemIndex].description + '</i>';
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
            else if (staff[itemIndex].socials[itemIndex2].name == 'website') {
                socialBtn.className = 'default-button';
                socialLink.href = staff[itemIndex].socials[itemIndex2].link;
                socialBtn.innerHTML = '<i class="fa fa-globe"></i>&nbsp;' + staff[itemIndex].socials[itemIndex2].username;
            }
            socialLink.appendChild(socialBtn);
            btnContainer.appendChild(socialLink);
        }

        gridStaff.appendChild(btnContainer);
        gridContainer.appendChild(gridStaff);
    } 
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://homebrew-france.fr/json/staff-items.json')
    .then(response => response.json())
    .then(data => {
        const staff = data.staff;

        createItemStaff(staff);
    })
    .catch(error => console.error('Erreur:', error));
});