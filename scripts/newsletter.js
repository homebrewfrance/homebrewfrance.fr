var bodyIndex = document.getElementsByClassName('page')[0];

var newsletter = document.createElement('div');
newsletter.className = 'newsletter';
newsletter.innerHTML = `
    <div style="display: flex; flex-direction: row; margin-bottom: 12px"><img src="https://cdn.homebrew-france.fun/generic/beta_website-icon.png" class="newslettericon"><h1 style="font-family: 'Sora', sans-serif;">Newsletter - Homebrew France mars-avril 2025 </h1></div>
    <h2 style="margin-top: 12px"> 🌐 Mise à jour du site internet (version 4) </h2>
    - Nouveaux Checker ! <br>
    - PS4 et PSVita : permet de rediriger vers le bon guide en fonction du firmware installé.<br>
    - PS5 : permet de vérifier les codes d’erreur UART. <br>

    <h2 style="margin-top: 12px"> 📖 Nouvelles Docs ! </h2>
    - YTLitePlus : un guide d’installation pour le tweak YouTubeLite Plus sur iOS/iPad OS.<br>
    - PlayStation 1 : un guide d’installation pour FreePSXBoot via une PlayStation 2 moddée. <br>
    - PlayStation 4 - 11.0 : un guide d’installation pour les console en firmware 11.0. <br>

    <h2 style="margin-top: 12px"> 🖼️ Changements graphiques : </h2>
    - Unification et amélioration de l’interface. <br>
    - Optimisation avancée pour le mode mobile et tablette. <br>
    - Ajout d’une fonctionnalité de téléchargement des guides au format PDF pour les lire partout! <br>

    <h2 style="margin-top: 12px"> 🖥️ Avancées sur la scène Homebrew et technologique : </h2>
    - Nouveau softmod Xbox 360 : permet d’installer un hack sur Xbox 360 sans le besoin d’une puce ! Uniquement via un jeu spécifique et une clé USB. <br>
    - Annonce imminente de la Nintendo Switch 2 d’ici Avril. <br>
    - Sortie du nouvel iPhone 16e, une version allégée de l’iPhone 16. <br>
    - Rumeurs sur iOS 19, un changement de design massif et un support du RCS encrypté. <br>
    - Annonce des nouveaux Nothing Phone 3a et 3a Pro. 
    - Un nouvel émulateur 3DS pour PC : Azahar, une fusion des excellents Citra et Lime3DS a été réalisé.<br>
`;

/*bodyIndex.prepend(newsletter);*/