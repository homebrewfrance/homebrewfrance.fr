/* 
	Homebrew France Web V4.0.0
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

$(document).ready(function() {
    var switchVer = $(".switchVer");
    var switchFirmName = $(".switchFirmName");
  
    var repoOwner = "THZoria";
    var repoName = "NX_Firmware";
    var apiUrl = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/releases/latest";
  
    $.ajax({
      url: apiUrl,
      method: "GET",
      success: function(data) {
        var latestRelease = data.tag_name;
        for (var i = 0; i < switchVer.length; i++) {
            if (latestRelease.length === 7) {
                switchVer[i].innerHTML = latestRelease.slice(0,-1);
            }
            else {
                switchVer[i].innerHTML = latestRelease;
            }
        }
        let switchFWName = latestRelease.substring(0, 2) + latestRelease.substring(3, 4) + latestRelease.substring(5);
        for (var i = 0; i < switchFirmName.length; i++) {
            if (latestRelease.length === 7) {
                switchFirmName[i].innerHTML = switchFWName.slice(0,-1);
            }
            else {
                switchFirmName[i].innerHTML = switchFWName;
            }
        }
      },
      error: function() {
        for (var i = 0; i < switchVer.length; i++) {
          switchVer[i].innerHTML = "Echec de la récupération du firmware actuel";
        }
        for (var i = 0; i < switchFirmName.length; i++) {
          switchFirmName[i].innerHTML = "Echec de la récupération du firmware actuel";
        }
      }
    });
  });