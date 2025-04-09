


// script.js
// Define translations
const translations = {
    en: {
        home: "Home",
        about: "About Me",
        resume: "Resume",
        projects: "Projects",
        contact: "Contact Information",
        latest: "Latest",
        popular: "Popular",
        oldest: "Oldest",
        topics: "Topics",
        clickToSeeAllTopics: "Click to See All Topics",
        aboutMe: "About Me",
        contactInformation: "Contact Information",
        fullName: "Full Name",
        gender: "Gender",
        dateOfBirth: "Date of Birth",
        nationality: "Nationality",
        domicile: "Domicile",
        currentResidency: "Current Residency",
        languages: "Languages",
        mainEmail: "Main Email",
        secondaryEmail: "Secondary Email",
        phoneNumber: "Phone Number",
        resume: "Resume",
	seemylinkedin:"See my Linkedin",
	male:"Male",
	birthday:"November 1st, 2001",
	nazionalità:"Italian",
	wohnsitz:"Milano 20147, MI, Italia",
	sprachen:"Italian, English (C1), German (B1)",
	generalità:"Information",
	about_me_description:"I should talk about myself and describe my profile, but programming this website has taken away my soul so I will update it later",

    experience: "Experience",
    exp_deloitte: "<strong>Deloitte, Milan, Italy</strong><br>Intern, Financial Services Industry, Audit & Assurance Division",
    exp_delo_dates: "Sept 2023 - March 2024",
    delo_1: "<strong>Financial Auditing</strong>: Conducted meticulous financial audits to ensure accuracy, compliance, and adherence to IAS/IFRS standards; evaluated internal control reliability, fraud risk, and historical misstatements to establish performance materiality.",
    delo_2: "<strong>Derivative Valuation</strong>: Conducted aspects of hedge accounting under IFRS 9, including tests of details using a sampling approach for hedging relationships designated as cash flow hedges, fair value hedges, and hedges of a net investment; evaluate whether the previously held equity interest has been remeasured in accordance with the applicable financial reporting framework.",
    delo_3: "<strong>Risk Assessment</strong>: Testing both control reliance and ABCOTDs, with a focus on Banking & Capital Markets and Investment Managements, i.e., variability in the pricing/rate structure; changes in the composition of underlying portfolio; Presence and extent of redemption/withdrawal limits. Complexity related to the fee calculation model and its implementation and ongoing execution.",
  


    education: "Education",
    master: "<strong>Master in Finance (M.Sc.)</strong><br>Universität Liechtenstein, Vaduz, FL",
    "master-dates": "Sept 2024 - Jun 2026",
    mastr_1: "<strong>Empirical Asset Pricing</strong>: Exploring modeling on equilibrium and arbitrage: Comparative Statics of Optimal Portfolios, State Prices and Risk-Neutral Probabilities, Arbitrage and Positive Pricing. Focused on Fama-Macbeth regressions, CRSP sample, momentum, reversal, skewness.",
    mastr_2: "<strong>Machine Learning</strong>: Optimizing for training Deep Models with Parameter Initialization Strategies and Algorithms with Adaptive Learning Rates. Modeling with Convolution and Pooling as an Infinitely Strong Prior and Efficient Convolution Algorithms.",
    bachelor: "<strong>Bachelor in Economics and Finance (B.Sc.)</strong><br>Bocconi, Milan, Italy",
    "bachelor-dates": "Sept 2020 - Jun 2024",
    bsc_1: "<strong>Corporate Finance</strong>: Studied IPOs, Control Acquisition, Mergers/Demergers, Leveraged Buyouts, Bankruptcy/Restructuring. Strong background in management of Working Capital, Cash Flow, and financial risks.",
    bsc_2: "<strong>Financial Macroeconomics</strong>: Explored integrating macroeconomics and finance post-financial crisis, focusing on credit and market imperfections’ impact on policy and economic activity. Analyzed financial crisis causes, policy tools, and case studies like the European sovereign crisis and lockdown effects.",
    techskills: "Technical Skills",
    progr_languages: "Programming Languages: Python, C/C++, R, LaTeX",
    tools: "Tools: PowerBI, Bloomberg, Refinitiv",
    cv_sprachen: "Languages: Italian (native), English (C1), German (B1)",
    caption_titolo: "Bocconi Graduate, M.Sc. Student at Universität Liechtenstein",
    caption_descrizione: "Research Interests: Quantitative Finance and Computational Modeling, focusing on Stochastic Volatility Models and Monte Carlo Simulations; developing and testing models using Python and C++.",
    },


    de: {
        home: "Startseite",
        about: "Über Mich",
        resume: "Lebenslauf",
        projects: "Projekte",
        contact: "Kontaktinformation",
        latest: "Neueste",
        popular: "Beliebt",
        oldest: "Älteste",
        topics: "Themen",
        clickToSeeAllTopics: "Klicken Sie hier, um alle Themen anzuzeigen",
        aboutMe: "Über Mich",
        contactInformation: "Kontaktinformation",
        fullName: "Vollständiger Name",
        gender: "Geschlecht",
        dateOfBirth: "Geburtsdatum",
        nationality: "Staatsangehörigkeit",
        domicile: "Wohnsitz",
        currentResidency: "Aktueller Wohnsitz",
        languages: "Sprachen",
        mainEmail: "Haupt-E-Mail",
        secondaryEmail: "Zweit-E-Mail",
        phoneNumber: "Telefonnummer",
        resume: "Lebenslauf",
	seemylinkedin:"zu meinem Linkedin gehen",
	male:"Männlich",
	birthday:"1. November 2001",
	nazionalità:"Italienisch",
	wohnsitz:"Mailand 20147, MI, Italien",
	sprachen:"Italienisch, Englisch (C1), Deutsch (B1)",
	generalità:"Allgemeine Informationen",
	about_me_description:"Ich sollte etwas über mich erzählen und mein Profil beschreiben, aber die Programmierung dieser Website hat mir die Seele geraubt, also werde ich sie später aktualisieren",
	// 
   

    experience: "Berufserfahrung",
    exp_deloitte: "<strong>Deloitte, Mailand, Italien</strong><br>Praktikant, Finanzdienstleistungsbranche, Prüfungs- und Bestätigungsabteilung",
    exp_delo_dates: "Sept 2023 - März 2024",
    delo_1: "<strong>Finanzprüfung</strong>: Durchführung sorgfältiger Finanzprüfungen zur Sicherstellung der Genauigkeit, Einhaltung und Übereinstimmung mit IAS/IFRS-Standards; Bewertung der Zuverlässigkeit interner Kontrollen, des Betrugsrisikos und historischer Fehler zur Festlegung der Wesentlichkeit.",
    delo_2: "<strong>Derivatebewertung</strong>: Durchführung von Aspekten der Hedge-Bilanzierung nach IFRS 9, einschließlich Detailtests mithilfe eines Stichprobenansatzes für Sicherungsbeziehungen, die als Cashflow-Hedges, Fair-Value-Hedges und Nettoinvestitionssicherungen ausgewiesen sind; Bewertung, ob das zuvor gehaltene Eigenkapital gemäß dem geltenden Rechnungslegungsrahmen neu bewertet wurde.",
    delo_3: "<strong>Risikobewertung</strong>: Prüfung sowohl der Kontrolle als auch der ABCOTDs, mit Schwerpunkt auf Bank- und Kapitalmärkte und Investmentmanagements, d. h. Variabilität der Preis-/Zinsstruktur; Änderungen in der Zusammensetzung des zugrunde liegenden Portfolios; Vorhandensein und Umfang von Rücknahme-/Abhebungslimits. Komplexität im Zusammenhang mit dem Gebührenberechnungsmodell sowie dessen Implementierung und laufender Ausführung.",
  
    education: "Ausbildung",
    master: "<strong>Master in Finance (M.Sc.)</strong><br>Universität Liechtenstein, Vaduz, FL",
    "master-dates": "Sept 2024 - Juni 2026",
    mastr_1: "<strong>Empirische Asset Pricing</strong>: Untersuchung von Modellierungen im Gleichgewicht und Arbitrage: Vergleichende Statik optimaler Portfolios, Staatspreise und risikoneutrale Wahrscheinlichkeiten, Arbitrage und positive Preisbildung. Fokus auf Fama-Macbeth-Regressionsanalysen, CRSP-Stichproben, Momentum, Reversal, Schiefe.",
    mastr_2: "<strong>Maschinelles Lernen</strong>: Optimierung des Trainings tiefer Modelle durch Parameter-Initialisierungsstrategien und Algorithmen mit adaptiven Lernraten. Modellierung mit Faltung und Pooling als extrem starke Priorisierung und effiziente Faltungsalgorithmen.",
    bachelor: "<strong>Bachelor in Economics and Finance (B.Sc.)</strong><br>Bocconi, Mailand, Italien",
    "bachelor-dates": "Sept 2020 - Juni 2024",
    bsc_1: "<strong>Unternehmensfinanzierung</strong>: Studium von IPOs, Kontrollübernahmen, Fusionen/Spaltungen, Leveraged Buyouts, Insolvenzen/Restrukturierungen. Starke Kenntnisse im Management von Working Capital, Cashflow und finanziellen Risiken.",
    bsc_2: "<strong>Finanzielle Makroökonomie</strong>: Integration von Makroökonomie und Finanzen nach der Finanzkrise, mit Schwerpunkt auf die Auswirkungen von Kredit- und Marktunvollkommenheiten auf Politik und wirtschaftliche Aktivität. Analyse der Ursachen von Finanzkrisen, politischer Instrumente und Fallstudien wie der europäischen Staatsschuldenkrise und den Auswirkungen von Lockdowns.",
    techskills: "Technische Fähigkeiten",
    progr_languages: "Programmiersprachen: Python, C/C++, R, LaTeX",
    tools: "Werkzeuge: PowerBI, Bloomberg, Refinitiv",
    cv_sprachen: "Sprachen: Italienisch (Muttersprache), Englisch (C1), Deutsch (B1)",
    caption_titolo: "Bocconi-Absolvent, M.Sc. Student an der Universität Liechtenstein",
    caption_descrizione:"Forschungsinteressen: Quantitative Finance und Computermodellierung, mit Schwerpunkt auf stochastischen Volatilitätsmodellen und Monte-Carlo-Simulationen; Entwicklung und Testen von Modellen mit Python und C++.",
    }
};

let currentLanguage = 'en'; // default language

// Switch language
function switchLanguage(language) {
    currentLanguage = language;

    // Switch paragraphs (span.lang-en / span.lang-de)
    const enElements = document.querySelectorAll('.lang-en');
    const deElements = document.querySelectorAll('.lang-de');

    if (language === 'en') {
        enElements.forEach(el => el.style.display = 'inline');
        deElements.forEach(el => el.style.display = 'none');
    } else {
        enElements.forEach(el => el.style.display = 'none');
        deElements.forEach(el => el.style.display = 'inline');
    }

    // Switch navigation/menu/sort buttons and sections
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(el => {
        const key = el.getAttribute('data-translate');
        const translation = translations[language][key];
        if (translation !== undefined) {
            el.innerHTML = translation; // ✅ Always innerHTML
        } else {
            console.warn(`Missing translation for key: ${key} in language: ${language}`);
        }
    });

    // --- New Part ---

    // Update "Topics" button if exists
    const topicsButton = document.getElementById('sort-topics');
    if (topicsButton && translations[language]['topics']) {
        topicsButton.innerHTML = translations[language]['topics'];
    }

    // If user is already inside a topic (topics-list is open), update button to "Click to See All Topics"
    const topicsList = document.getElementById('topics-list');
    if (topicsList && topicsList.style.display === 'flex') {
        if (topicsButton && translations[language]['clickToSeeAllTopics']) {
            topicsButton.innerHTML = translations[language]['clickToSeeAllTopics'];
        }
    }


}

// When page loads
document.addEventListener('DOMContentLoaded', function() {
    const langEn = document.getElementById('lang-en');
    const langDe = document.getElementById('lang-de');

    langEn.addEventListener('click', () => {
        langEn.classList.add('active');
        langDe.classList.remove('active');
        localStorage.setItem('preferredLanguage', 'en');
        switchLanguage('en');
    });

    langDe.addEventListener('click', () => {
        langDe.classList.add('active');
        langEn.classList.remove('active');
        localStorage.setItem('preferredLanguage', 'de');
        switchLanguage('de');
    });

    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage === 'de') {
        langDe.classList.add('active');
        langEn.classList.remove('active');
        switchLanguage('de');
    } else {
        langEn.classList.add('active');
        langDe.classList.remove('active');
        switchLanguage('en');
    }
});


const video = document.getElementById('background-video');

// Ensure the video plays after enough data has loaded
function playVideo() {
    video.play().catch(error => {
        console.error('Error playing the video:', error);
    });
}

// Play video once some data is loaded (safe point to start)
video.addEventListener('loadeddata', playVideo);

// Try again when user focuses window
window.addEventListener('focus', playVideo);

// Adjust video zoom on window resize
function resizeVideo() {
    const windowAspectRatio = window.innerWidth / window.innerHeight;
    const videoAspectRatio = video.videoWidth / video.videoHeight;

    if (windowAspectRatio < videoAspectRatio) {
        video.style.width = '100vw';
        video.style.height = 'auto';
    } else {
        video.style.width = 'auto';
        video.style.height = '100vh';
    }
}

// Adjust on load and resize
window.addEventListener('resize', resizeVideo);
window.addEventListener('load', resizeVideo);
