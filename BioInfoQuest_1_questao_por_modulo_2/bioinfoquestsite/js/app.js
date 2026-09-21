/**
 * BioInfoQuest - Main Application Controller
 */
const App = {
    currentRoute: 'dashboard',

    init() {
        const settings = Storage.getSettings();
        if (settings.theme === 'dark') {
            document.body.classList.replace('light-theme', 'dark-theme');
            const btn = document.getElementById('theme-toggle');
            if (btn) btn.querySelector('ion-icon').setAttribute('name', 'sunny-outline');
        }
        this.setupNavigation();
        this.setupThemeToggle();
        if (typeof Questions !== 'undefined') Questions.init();
        this.navigate('dashboard');
    },

    setupNavigation() {
        document.querySelectorAll('.nav-links li').forEach(link => {
            link.addEventListener('click', e => {
                const route = e.currentTarget.dataset.route;
                if (route) this.navigate(route);
            });
        });
    },

    setupThemeToggle() {
        const btn = document.getElementById('theme-toggle');
        if (!btn) return;
        btn.addEventListener('click', () => {
            const newTheme = Storage.toggleTheme();
            if (newTheme === 'dark') {
                document.body.classList.replace('light-theme', 'dark-theme');
                btn.querySelector('ion-icon').setAttribute('name', 'sunny-outline');
                btn.querySelector('span').textContent = 'Modo Claro';
            } else {
                document.body.classList.replace('dark-theme', 'light-theme');
                btn.querySelector('ion-icon').setAttribute('name', 'moon-outline');
                btn.querySelector('span').textContent = 'Modo Escuro';
            }
        });
    },

    navigate(route) {
        if (!['dashboard', 'study', 'exam', 'review'].includes(route)) return;
        this.currentRoute = route;

        document.querySelectorAll('.nav-links li').forEach(link => {
            link.classList.toggle('active', link.dataset.route === route);
        });

        const area = document.getElementById('content-area');
        switch (route) {
            case 'dashboard': if (typeof Dashboard !== 'undefined') Dashboard.render(area); break;
            case 'study':     if (typeof Study !== 'undefined') Study.render(area); break;
            case 'exam':      if (typeof Exam !== 'undefined') Exam.render(area); break;
            case 'review':    if (typeof Review !== 'undefined') Review.render(area); break;
        }
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
