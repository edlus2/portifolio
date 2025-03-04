const themeSwitch = document.getElementById('theme-switch');
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-theme');
            themeSwitch.checked = true;
        }
        themeSwitch.addEventListener('change', function () {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        });