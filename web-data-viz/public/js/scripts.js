const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === 'admin' && password === 'password') {
        alert('Login realizado com sucesso!');
        location.href = 'dashboard.html';
    } else {
        alert('Usuário ou senha inválidos!');
    }
});const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = registrationForm.username.value;
    const email = registrationForm.email.value;
    const password = registrationForm.password.value;
    const confirmPassword = registrationForm.confirmPassword.value;
    const game = registrationForm.game.value;
    const team = registrationForm.team.value;

    if (password!== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Send registration data to server
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            password,
            game,
            team
        })
    })
   .then(response => response.json())
   .then(data => {
        if (data.success) {
            alert('Registration successful!');
            location.href = '/login';
        } else {
            alert('Registration failed!');
        }
    })
   .catch(error => {
        console.error(error);
        alert('Registration failed!');
    });
});
