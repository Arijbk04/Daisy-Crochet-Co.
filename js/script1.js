// References to DOM elements
const loginIcon = document.getElementById('loginIcon');
const signupIcon = document.getElementById('signupIcon');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const closeLogin = document.getElementById('closelogin');
const closeSignup = document.getElementById('closeSignup');

// Show Login Form
loginIcon.addEventListener('click', () => {
    loginForm.style.display = 'flex';
});

// Show Signup Form
signupIcon.addEventListener('click', () => {
    signupForm.style.display = 'flex';
});

// Close Login Form
closeLogin.addEventListener('click', () => {
    loginForm.style.display = 'none';
});

// Close Signup Form
if (closeSignup) {
    closeSignup.addEventListener('click', () => {
        signupForm.style.display = 'none';
    });
}
// Handle Sign-Up Form Submission
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = signupForm.querySelector('input[name="first_name"]').value;
    const email = signupForm.querySelector('input[name="email"]').value;

    localStorage.setItem('userName', firstName || email.split('@')[0]);
    localStorage.setItem('isNewUser', 'true');
    sessionStorage.setItem('showWelcomeMessage', 'true'); // Set session flag

    // Redirect to the homepage
    window.location.href = 'accueil.html';
});

// Handle Login Form Submission
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = loginForm.querySelector('input[name="loginEmail"]').value;

    localStorage.setItem('userName', email.split('@')[0]);
    localStorage.setItem('isNewUser', 'false');
    sessionStorage.setItem('showWelcomeMessage', 'true'); // Set session flag

    // Redirect to the homepage
    window.location.href = 'accueil.html';
});
