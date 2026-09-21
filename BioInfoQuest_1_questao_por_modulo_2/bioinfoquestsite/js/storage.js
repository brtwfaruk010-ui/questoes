/**
 * BioInfoQuest - Storage & State Management (localStorage)
 */
const Storage = {
    KEYS: {
        ANSWERS: 'biq_answers',
        BOOKMARKS: 'biq_bookmarks',
        SETTINGS: 'biq_settings',
        EXAM_SESSION: 'biq_exam_session'
    },

    getUserData() {
        return {
            answers: JSON.parse(localStorage.getItem(this.KEYS.ANSWERS) || '{}'),
            bookmarks: JSON.parse(localStorage.getItem(this.KEYS.BOOKMARKS) || '[]')
        };
    },

    saveAnswer(qId, selected, isCorrect) {
        const answers = JSON.parse(localStorage.getItem(this.KEYS.ANSWERS) || '{}');
        answers[qId] = { selected, correct: isCorrect, timestamp: Date.now() };
        localStorage.setItem(this.KEYS.ANSWERS, JSON.stringify(answers));
    },

    isBookmarked(qId) {
        const bm = JSON.parse(localStorage.getItem(this.KEYS.BOOKMARKS) || '[]');
        return bm.includes(qId);
    },

    toggleBookmark(qId) {
        let bm = JSON.parse(localStorage.getItem(this.KEYS.BOOKMARKS) || '[]');
        if (bm.includes(qId)) {
            bm = bm.filter(id => id !== qId);
        } else {
            bm.push(qId);
        }
        localStorage.setItem(this.KEYS.BOOKMARKS, JSON.stringify(bm));
        return bm.includes(qId);
    },

    getSettings() {
        return JSON.parse(localStorage.getItem(this.KEYS.SETTINGS) || '{"theme":"light"}');
    },

    toggleTheme() {
        const s = this.getSettings();
        s.theme = s.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(s));
        return s.theme;
    },

    getStats() {
        const answers = JSON.parse(localStorage.getItem(this.KEYS.ANSWERS) || '{}');
        const total = Object.keys(answers).length;
        const correct = Object.values(answers).filter(a => a.correct).length;
        const bookmarks = JSON.parse(localStorage.getItem(this.KEYS.BOOKMARKS) || '[]');
        return { total, correct, wrong: total - correct, bookmarksCount: bookmarks.length };
    },

    clearAll() {
        Object.values(this.KEYS).forEach(k => localStorage.removeItem(k));
    },

    saveExamSession(session) {
        localStorage.setItem(this.KEYS.EXAM_SESSION, JSON.stringify(session));
    },

    getExamSession() {
        return JSON.parse(localStorage.getItem(this.KEYS.EXAM_SESSION) || 'null');
    },

    clearExamSession() {
        localStorage.removeItem(this.KEYS.EXAM_SESSION);
    }
};
