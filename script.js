// Funzione per aprire e chiudere i menu
function toggleMenu(menuId) {
    // Nasconde tutti i menu
    const allMenus = document.querySelectorAll('.menu');
    allMenus.forEach(menu => {
        menu.classList.add('hidden');
    });

    // Mostra il menu selezionato
    const menuToShow = document.getElementById(menuId);
    menuToShow.classList.remove('hidden');
}

// Funzione per tornare alla home
function goHome() {
    // Nasconde tutti i menu e mostra la home
    const allMenus = document.querySelectorAll('.menu');
    allMenus.forEach(menu => {
        menu.classList.add('hidden');
    });

    // Mostra il menu principale
    const mainMenu = document.getElementById('main-menu');
    mainMenu.classList.remove('hidden');
}

// Aggiungi gli eventi ai pulsanti per il navigare tra le sezioni
document.addEventListener('DOMContentLoaded', function () {
    // Pulsante Home
    const homeButton = document.querySelectorAll('.home-button');
    homeButton.forEach(button => {
        button.addEventListener('click', goHome);
    });

    // Pulsanti per i continenti
    const europeButton = document.getElementById('europe-button');
    europeButton.addEventListener('click', function () {
        toggleMenu('europe-menu');
    });

    const northAmericaButton = document.getElementById('north-america-button');
    northAmericaButton.addEventListener('click', function () {
        toggleMenu('north-america-menu');
    });

    const southAmericaButton = document.getElementById('south-america-button');
    southAmericaButton.addEventListener('click', function () {
        toggleMenu('south-america-menu');
    });

    // Pulsante per il ritorno al menu principale
    const backButtonMain = document.getElementById('back-button-main');
    backButtonMain.addEventListener('click', goHome);

    // Pulsante per tornare al menu delle leghe
    const backButtonLeague = document.getElementById('back-button-league');
    backButtonLeague.addEventListener('click', function () {
        toggleMenu('league-menu');
    });

    // Pulsante per tornare al menu delle squadre
    const backButtonTeam = document.getElementById('back-button-team');
    backButtonTeam.addEventListener('click', function () {
        toggleMenu('team-menu');
    });
});
