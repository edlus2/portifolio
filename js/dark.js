const themeSwitch = document.getElementById('theme-switch');
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-theme');
            themeSwitch.checked = true;
        }
        themeSwitch.addEventListener('change', function () {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        });
//Descer tela gradualmente
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                const offset = 80;
        
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - offset,
                        behavior: 'smooth'
                    });
                }
            });
        });
//Barra de navegador hamburgue
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('menu-toggle').checked = false;
            });
        });