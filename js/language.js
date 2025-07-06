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
        aboutText: "Olá! Me chamo Edgar e tenho 28 anos. No ano de 2023, finalizei meu curso de tecnólogo em Análise e Desenvolvimento de Sistemas. Atualmente, estou trabalhando na área industrial, mas estou buscando novas oportunidades no campo da tecnologia. Tenho paixão por desenvolvimento de software e análise de sistemas, e estou animado para explorar novas possibilidades nesse setor. Estou pronto para aplicar minhas habilidades e conhecimentos adquiridos durante minha formação e experiência profissional anterior. Mal posso esperar para fazer parte de uma equipe inovadora e contribuir para projetos empolgantes no mundo da tecnologia.",
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
        contactTitle: "Contato",
        yourNamePlaceholder: "Seu Nome",
        yourEmailPlaceholder: "Seu Email",
        yourMessagePlaceholder: "Sua Mensagem",
        sendMessageButton: "Enviar Mensagem",
        footerText: "&copy; 2025 Edgar Peixoto. Todos os direitos reservados."
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
        aboutText: "Hello! My name is Edgar and I'm 28 years old. In 2023, I completed my degree in Analysis and Systems Development. Currently, I am working in the industrial sector, but I am seeking new opportunities in the technology field. I have a passion for software development and systems analysis, and I am excited to explore new possibilities in this sector. I am ready to apply my skills and knowledge acquired during my education and previous professional experience. I can't wait to be part of an innovative team and contribute to exciting projects in the world of technology.",
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
        contactTitle: "Contact",
        yourNamePlaceholder: "Your Name",
        yourEmailPlaceholder: "Your Email",
        yourMessagePlaceholder: "Your Message",
        sendMessageButton: "Send Message",
        footerText: "&copy; 2025 Edgar Peixoto. All rights reserved."
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
    // Atualiza o atributo lang do HTML para acessibilidade
    document.documentElement.lang = lang;
    // Salva o idioma selecionado no localStorage
    localStorage.setItem('selectedLang', lang);

    // Atualiza a classe 'active' nos botões de idioma
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

    // Carrega o idioma preferido do usuário ou define como português
    const savedLang = localStorage.getItem('selectedLang') || 'pt';
    applyLanguage(savedLang);
});