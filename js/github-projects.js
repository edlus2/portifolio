document.addEventListener('DOMContentLoaded', async () => {
    const githubUsername = 'edlus2'; // **SUBSTITUA PELO SEU NOME DE USUÁRIO DO GITHUB**
    const githubApiUrl = `https://api.github.com/users/${githubUsername}/repos?sort=pushed&per_page=6`;
    
    const carouselSlide = document.getElementById('github-projects-carousel');
    const prevButton = document.getElementById('carousel-prev-btn');
    const nextButton = document.getElementById('carousel-next-btn');
    const carouselDotsContainer = document.getElementById('carousel-dots-container');

    let projectCards = [];
    let currentIndex = 0;
    let totalSlides = 0;

    function getTranslation(key) {
        const currentLang = localStorage.getItem('selectedLang') || 'pt';
        // Certifica-se que 'translations' existe e tem a chave
        return (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang][key]) ? translations[currentLang][key] : key;
    }

    function updateCarousel() {
        if (totalSlides === 0) return;

        const offset = -currentIndex * 100;
        carouselSlide.style.transform = `translateX(${offset}%)`;
        updateDots();
    }

    function createDots() {
        carouselDotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('carousel-dot');
            if (i === currentIndex) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateCarousel();
            });
            carouselDotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    nextButton.addEventListener('click', () => {
        if (totalSlides === 0) return;
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        if (totalSlides === 0) return;
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    async function fetchGithubProjects() {
        carouselSlide.innerHTML = `<p class="loading-message">${getTranslation('loadingProjects')}</p>`;
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
        carouselDotsContainer.innerHTML = '';

        try {
            const response = await fetch(githubApiUrl);
            if (!response.ok) {
                throw new Error(`GitHub API error! Status: ${response.status}`);
            }
            const repos = await response.json();

            if (repos.length === 0) {
                carouselSlide.innerHTML = `<p class="loading-message">${getTranslation('errorLoadingProjects')}</p>`;
                return;
            }

            carouselSlide.innerHTML = '';
            projectCards = [];

            repos.forEach((repo, index) => {
                const card = document.createElement('div');
                card.classList.add('project-card');
                card.classList.add('animate-on-scroll');
                if (index < 6) card.classList.add(`delay-${index + 1}`);

                card.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || getTranslation('noDescription')}</p>
                    <a href="${repo.html_url}" target="_blank" class="btn">${getTranslation('viewDetails')}</a>
                `;
                carouselSlide.appendChild(card);
                projectCards.push(card);
            });

            totalSlides = projectCards.length;
            if (totalSlides > 1) {
                prevButton.style.display = 'block';
                nextButton.style.display = 'block';
                createDots();
            } else {
                prevButton.style.display = 'none';
                nextButton.style.display = 'none';
                carouselDotsContainer.innerHTML = '';
            }
            
            updateCarousel();
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        obs.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            projectCards.forEach(element => {
                element.classList.add('hidden');
                observer.observe(element);
            });

        } catch (error) {
            console.error('Erro ao carregar projetos do GitHub:', error);
            carouselSlide.innerHTML = `<p class="error-message-github">${getTranslation('errorLoadingProjects')}</p>`;
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
            carouselDotsContainer.innerHTML = '';
        }
    }

    fetchGithubProjects();
});