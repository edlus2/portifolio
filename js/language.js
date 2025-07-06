// Objeto com as traduções para cada idioma
const translations = {
    pt: {
        home: "Início",
        about: "Sobre",
        formacao: "Formação",
        skills: "Skills/Habilidade",
        portfolio: "Portfólio",
        contact: "Contato",
        heroTitle: "Olá, eu sou Edgar",
        heroSubtitle: "Desenvolvedor Web | Designer Criativo 3D",
        heroButton: "Ver Projetos",
        aboutTitle: "Sobre Mim",
        aboutText: "Olá! Me chamo Edgar, sou tecnólogo em Análise e Desenvolvimento de Sistemas, com formação concluída em 2023. Tenho uma base sólida em tecnologia e uma vivência prática na área administrativa e industrial, o que me permite atuar com organização, proatividade e pensamento estratégico. Sou apaixonado por soluções tecnológicas que otimizam processos e sempre busco aprender e evoluir, seja desenvolvendo sistemas, analisando dados ou apoiando equipes administrativas. Acredito na importância da colaboração, da eficiência e da inovação no ambiente de trabalho.",
        formacaoTitle: "Formação",
        adsTitle: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        adsInstitution: "Instituição: Nome da Faculdade",
        adsPeriod: "Período: 2021 - 2023",
        adsHighlights: "Destaques: Desenvolvimento de sistemas web, banco de dados, engenharia de software.",
        webCourseTitle: "Curso de Desenvolvimento Web Full Stack",
        webCoursePlatform: "Plataforma: Rocketseat",
        webCourseWorkload: "Carga horária: 100 horas",
        webCourseCompletion: "Conclusão: 2023",
        awsTitle: "Certificação AWS Cloud Practitioner",
        awsInstitution: "Instituição: Amazon Web Services",
        awsCompletion: "Conclusão: 2022",
        skillsSectionTitle: "Skills",
        jsSkill: "JavaScript",
        htmlSkill: "HTML5",
        cssSkill: "CSS3",
        pythonSkill: "Python",
        abilitiesSectionTitle: "Habilidades",
        dataAnalysis: "Análise de Dados",
        "3dPrint": "Impressão 3D",
        "3dModeling": "Modelagem 3D",
        teamWork: "Trabalho em Equipe",
        portfolioTitle: "Portfólio",
        viewDetails: "Ver Detalhes",
        testimonialsTitle: "O que dizem sobre mim",
        testimonial1Text: "\"Edgar demonstrou grande proatividade e uma capacidade impressionante de aprender novas tecnologias rapidamente. Sua dedicação ao projeto foi notável!\"",
        testimonial1Author: "- Professor João Silva",
        testimonial1Role: "Orientador de TCC, Faculdade X",
        testimonial2Text: "\"Trabalhar com Edgar foi uma experiência fantástica. Ele é um excelente membro de equipe, sempre contribuindo com ideias inovadoras e soluções eficientes.\"",
        testimonial2Author: "- Ana Costa",
        testimonial2Role: "Colega de Projeto, Curso Y",
        testimonial3Text: "\"A habilidade do Edgar em transformar conceitos complexos em designs funcionais e intuitivos é realmente impressionante. Recomendo fortemente seu trabalho!\"",
        testimonial3Author: "- Pedro Almeida",
        testimonial3Role: "Líder Técnico, Empresa Z",
        contactTitle: "Contato",
        yourNamePlaceholder: "Seu Nome",
        yourEmailPlaceholder: "Seu Email",
        yourMessagePlaceholder: "Sua Mensagem",
        sendMessageButton: "Enviar Mensagem",
        footerText: "&copy; 2025 Edgar Peixoto. Todos os direitos reservados.",
        loadingProjects: "Carregando projetos do GitHub...",
        errorLoadingProjects: "Não foi possível carregar os projetos. Por favor, tente novamente mais tarde.",
        noDescription: "Nenhuma descrição disponível."
    },
    en: {
        home: "Home",
        about: "About",
        formacao: "Education",
        skills: "Skills/Abilities",
        portfolio: "Portfolio",
        contact: "Contact",
        heroTitle: "Hello, I'm Edgar",
        heroSubtitle: "Web Developer | Creative 3D Designer",
        heroButton: "View Projects",
        aboutTitle: "About Me",
        aboutText: "Hello! My name is Edgar, and I hold a degree in Systems Analysis and Development, which I completed in 2023. I have a solid foundation in technology and hands-on experience in both administrative and industrial environments, allowing me to work with organization, proactivity, and strategic thinking. I’m passionate about technological solutions that optimize processes and am always eager to learn and grow—whether by developing systems, analyzing data, or supporting administrative teams. I believe in the importance of collaboration, efficiency, and innovation in the workplace.",
        formacaoTitle: "Education",
        adsTitle: "Technologist in Analysis and Systems Development",
        adsInstitution: "Institution: University Name",
        adsPeriod: "Period: 2021 - 2023",
        adsHighlights: "Highlights: Web system development, databases, software engineering.",
        webCourseTitle: "Full Stack Web Development Course",
        webCoursePlatform: "Platform: Rocketseat",
        webCourseWorkload: "Workload: 100 hours",
        webCourseCompletion: "Completion: 2023",
        awsTitle: "AWS Cloud Practitioner Certification",
        awsInstitution: "Institution: Amazon Web Services",
        awsCompletion: "Completion: 2022",
        skillsSectionTitle: "Skills",
        jsSkill: "JavaScript",
        htmlSkill: "HTML5",
        cssSkill: "CSS3",
        pythonSkill: "Python",
        abilitiesSectionTitle: "Abilities",
        dataAnalysis: "Data Analysis",
        "3dPrint": "3D Printing",
        "3dModeling": "3D Modeling",
        teamWork: "Team Work",
        portfolioTitle: "Portfolio",
        viewDetails: "View Details",
        testimonialsTitle: "What people say about me",
        testimonial1Text: "\"Edgar demonstrated great proactivity and an impressive ability to quickly learn new technologies. His dedication to the project was remarkable!\"",
        testimonial1Author: "- Professor João Silva",
        testimonial1Role: "Advisor, University X",
        testimonial2Text: "\"Working with Edgar was a fantastic experience. He is an excellent team member, always contributing innovative ideas and efficient solutions.\"",
        testimonial2Author: "- Ana Costa",
        testimonial2Role: "Project Colleague, Course Y",
        testimonial3Text: "\"Edgar's ability to transform complex concepts into functional and intuitive designs is truly impressive. I highly recommend his work!\"",
        testimonial3Author: "- Pedro Almeida",
        testimonial3Role: "Tech Lead, Company Z",
        contactTitle: "Contact",
        yourNamePlaceholder: "Your Name",
        yourEmailPlaceholder: "Your Email",
        yourMessagePlaceholder: "Your Message",
        sendMessageButton: "Send Message",
        footerText: "&copy; 2025 Edgar Peixoto. All rights reserved.",
        loadingProjects: "Loading GitHub projects...",
        errorLoadingProjects: "Could not load projects. Please try again later.",
        noDescription: "No description available."
    }
};

// Função para aplicar as traduções
function applyLanguage(lang) {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    document.documentElement.lang = lang;
    localStorage.setItem('selectedLang', lang);

    document.querySelectorAll('.lang-button').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
}

// Event Listeners para os botões de idioma
document.addEventListener('DOMContentLoaded', () => {
    const langPtButton = document.getElementById('lang-pt');
    const langEnButton = document.getElementById('lang-en');

    if (langPtButton) {
        langPtButton.addEventListener('click', () => applyLanguage('pt'));
    }
    if (langEnButton) {
        langEnButton.addEventListener('click', () => applyLanguage('en'));
    }

    const savedLang = localStorage.getItem('selectedLang') || 'pt';
    applyLanguage(savedLang);
});