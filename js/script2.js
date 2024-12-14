if (window.location.pathname.includes('accueil.html')) {
    // Check if the welcome message should be shown
    const shouldShowMessage = sessionStorage.getItem('showWelcomeMessage') === 'true';

    if (shouldShowMessage) {
        const userName = localStorage.getItem('userName') || 'Cher utilisateur';
        const isNewUser = localStorage.getItem('isNewUser');

        const welcomeMessage = document.createElement('div');
        welcomeMessage.classList.add('welcome-message');

        if (isNewUser === 'true') {
            welcomeMessage.innerHTML = `
                <h1>Bienvenue, ${userName}!</h1>
                <p>Merci de rejoindre Daisy Crochet Co! Nous sommes ravis de vous accueillir 🌼</p>
            `;
        } else {
            welcomeMessage.innerHTML = `
                <h1>Bienvenue de retour, ${userName}!</h1>
                <p>Nous sommes ravis de vous revoir 🌸</p>
            `;
        }

        document.body.prepend(welcomeMessage);

        setTimeout(() => {
            if (welcomeMessage) {
                welcomeMessage.classList.add('fade-out');
                setTimeout(() => welcomeMessage.remove(), 1000);
            }
        }, 5000);

        // Clear the flag after showing the message
        sessionStorage.setItem('showWelcomeMessage', 'false');
    }
}
