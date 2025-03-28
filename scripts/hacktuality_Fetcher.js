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

var rssFeed = document.getElementById('rss-feed');
var nbArticles = 8;
var items = []; 

function fetchArticles(items) {
    for (let itemIndex = 0; itemIndex < Math.min(nbArticles, items.length); itemIndex++) {
        var nobuyoshiItem = document.createElement('div');
        nobuyoshiItem.className = 'nobuyoshi-item';
        nobuyoshiItem.setAttribute('title', decodeHTML(items[itemIndex].description));
        const rawDate = items[itemIndex].pubDate;
        const dateObject = new Date(rawDate);
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        const formattedDate = new Intl.DateTimeFormat('fr-FR', options).format(dateObject);
        nobuyoshiItem.innerHTML = `
            <div>
                <div class="article-image-container">
                    <img src="${items[itemIndex].enclosure.link}" class="article-image">
                </div>
                <div class="article-author">
                    <div class="article-date">
                        <small>${formattedDate}</small>
                    </div>
                    <div class="article-author-value">
                        &nbsp;<strong>Auteur :</strong>&nbsp; ${decodeHTML(items[itemIndex].author)}
                    </div>
                </div>
            </div>
            <div style="display: flex; flex-direction: column;">
                <h3 style="font-family: 'Sora', sans-serif; margin-bottom: 9px;">${decodeHTML(items[itemIndex].title)}</h3>
                <!--p style="color: #cecece; font-size: 15px!important;">${decodeHTML(items[itemIndex].description)}</p-->
            </div>
        `
        nobuyoshiItem.addEventListener('click', function () {
            window.location.href = items[itemIndex].link;
        });
        rssFeed.appendChild(nobuyoshiItem);
    }
}

function decodeHTML(html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

function fetchMore() {
    nbArticles += 5;
    rssFeed.innerHTML = "";
    fetchArticles(items); 
}

var refreshBtn = document.getElementsByClassName('refresh-btn')[0];
var plusBtn = document.getElementsByClassName('more-btn')[0];

document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://hacktuality.com/rss.xml')
        .then(response => response.json())
        .then(data => {
            items = data.items;
            fetchArticles(items);
        })
        .catch(error => generateError(error));
});

refreshBtn.addEventListener('click', function () {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://hacktuality.com/rss.xml')
        .then(response => response.json())
        .then(data => {
            items = data.items; 
            rssFeed.innerHTML = "";
            setTimeout(() => {
                fetchArticles(items);
            }, 900);
        })
        .catch(error => generateError(error));
});

function generateError(error) {
    var nobuyoshiItem = document.createElement('div');
    nobuyoshiItem.className = 'nobuyoshi-error';
    nobuyoshiItem.innerHTML = `
        <div style="display: flex; flex-direction: column; width: 80%; margin-left: 14px;">
            <span class="article-author" style="margin-bottom: 7px">
                <div class="article-error">
                    <small>Erreur</small>
                </div>
            </span>
            <h2 style="font-family: 'Sora', sans-serif; margin-bottom: 9px;">Impossible de récupérer les articles de Hacktuality.</h2>
            <p style="color: #cecece">Erreur: ${error}</p>
        </div>
        <div class="article-image-container">
            <img src="https://cdn.homebrew-france.fun/generic/hacktuality_error.png" class="article-image">
        </div>
    `
    nobuyoshiItem.addEventListener('click', function () {
        window.location.href = items[itemIndex].link;
    });
    rssFeed.appendChild(nobuyoshiItem);
}

plusBtn.addEventListener('click', function () {
    fetchMore();
});
