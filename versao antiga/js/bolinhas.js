const bolinhasContainer = document.querySelector('.bolinhas');

        function criarBolinhas() {
            const numBolinhas = 100; // Número de bolinhas
            for (let i = 0; i < numBolinhas; i++) {
                const bolinha = document.createElement('div');
                bolinha.classList.add('bolinha');
                bolinha.style.top = `${Math.random() * 100}%`;
                bolinha.style.left = `${Math.random() * 100}%`;
                bolinha.style.animationDelay = `${Math.random() * 2}s`;
                bolinhasContainer.appendChild(bolinha);
            }
        }

        criarBolinhas();