/* 
	Script généré par intelligence artificielle et modifié par Homebrew France (chatgpt.com)
*/

var head = document.head || document.getElementsByTagName('head')[0];
var bodyElement = document.querySelector('body');
var html = document.querySelector('html');
var pageDocu = document.getElementsByClassName('page-docu')[0];
var pageID = bodyElement.getAttribute("data-page-id");

let cookiesAcceptes = localStorage.getItem("cookiesAcceptes");
console.log(cookiesAcceptes);
if (cookiesAcceptes == 'accepted') {

}
else if (cookiesAcceptes == 'declined') {

}
else {
    var cookieBox = document.createElement('div');
    cookieBox.className  = 'cookie-box';
    cookieBox.innerHTML = `
        <div style="display:flex; flex-direction: column;">
            <!--img src="https://homebrewfrance.fr/hbf-web.png" width="170px"-->
            <div style="font-family: 'Sora'; font-size: 21px;">Homebrew<strong>France</strong> Web</div>
            <div style="color: #aaaaaa;">Ce site utilise des cookies tiers afin d’optimiser votre expérience de navigation et d’améliorer la qualité de nos services.</div>
        </div>
        <div style="display: flex; flex-direction: row">
            <div id="accepterCookies" class="cookie-button">Accepter</div>
            <div id="refuserCookies" class="cookie-button">Refuser</div>
            <div id="enSavoirPlus" class="cookie-button">En savoir plus</div>
        </div>
    `;
	console.log(pageID);
	bodyElement.appendChild(cookieBox);
    
    
    var refuserCookies = document.getElementById('refuserCookies');
    var accepterCookies = document.getElementById('accepterCookies');
    var enSavoirPlus = document.getElementById('enSavoirPlus');
    
    accepterCookies.addEventListener('click', function() {
        localStorage.setItem("cookiesAcceptes", "accepted");
        var cookieBoxDetect = document.getElementsByClassName('cookie-box')[0];
        cookieBoxDetect.style.display = 'none';
		loadGoogleTagManager();
    })
    refuserCookies.addEventListener('click', function() {
        localStorage.setItem("cookiesAcceptes", "declined");
        var cookieBoxDetect = document.getElementsByClassName('cookie-box')[0];
        cookieBoxDetect.style.display = 'none';
    })
    enSavoirPlus.addEventListener('click', function() {
        window.location = 'https://homebrewfrance.fr/mentions-legales/';
    })
}


function loadGoogleTagManager() {
	var gtagScript = document.createElement('script');
	gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-68CMDJM124';
	gtagScript.async = true;
	
	head.appendChild(gtagScript);
	
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-68CMDJM124');
	console.log('Google Tag Manager Loaded');
}

function isLocalhost() {
    const hostname = window.location.hostname;
    return (
        hostname === "localhost" || 
        hostname === "127.0.0.1" || 
        window.location.protocol === "file:"
    );
}

if (isLocalhost()) {
    console.log("Le site est exécuté en local !");
} else {

}


document.addEventListener('DOMContentLoaded', function() {
	isLocalhost();
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        event.preventDefault(); 
        window.location = 'https://homebrewfrance.fr/multi-checker/alcoolemie';
    }
});