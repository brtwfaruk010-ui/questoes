/**
 * BioInfoQuest - Study Mode
 */
const Study = {
    currentModule: null,
    currentIndex: 0,
    questions: [],

    render(container) {
        if (!this.currentModule) {
            this.renderModuleSelection(container);
        } else {
            this.renderQuestion(container);
        }
    },

    startModule(moduleId) {
        this.currentModule = moduleId;
        this.questions = typeof Questions !== 'undefined' ? Questions.getByModule(moduleId) : [];
        this.currentIndex = 0;
    },

    renderModuleSelection(container) {
        if (typeof Questions === 'undefined') { container.innerHTML = '<p>Questões não carregadas.</p>'; return; }
        const modules = Questions.getModules();
        const userData = Storage.getUserData();

        let html = `<h2 style="margin-bottom:8px;">Modo Estudo</h2>
        <p style="color:var(--text-muted);margin-bottom:32px;">Responda questão por questão com feedback imediato e gabarito comentado.</p>
        <div class="dashboard-grid">`;

        modules.forEach(m => {
            const qs = Questions.getByModule(m.id);
            const answered = qs.filter(q => userData.answers[q.id]).length;
            html += `
                <div class="topic-card" onclick="Study.startModule(${m.id});App.navigate('study');">
                    <h3 style="font-size:16px;margin-bottom:6px;">Módulo ${m.id}</h3>
                    <p style="font-size:13px;color:var(--text-muted);flex-grow:1;margin-bottom:12px;">${m.name}</p>
                    <div style="display:flex;justify-content:space-between;align-items:center;">
                        <span class="badge">${qs.length} questões</span>
                        <span style="font-size:12px;color:var(--text-muted)">${answered} respondidas</span>
                    </div>
                </div>`;
        });

        html += `</div>`;
        container.innerHTML = html;
    },

    renderQuestion(container) {
        if (!this.questions.length) {
            container.innerHTML = `<p>Nenhuma questão neste módulo.</p>
                <button class="btn btn-outline" onclick="Study.currentModule=null;App.navigate('study')">← Voltar</button>`;
            return;
        }

        const q = this.questions[this.currentIndex];
        const userData = Storage.getUserData();
        const prev = userData.answers[q.id];
        const isBookmarked = Storage.isBookmarked(q.id);
        const pct = Math.round(((this.currentIndex + 1) / this.questions.length) * 100);

        const diffLabel = { easy: 'Fácil', medium: 'Média', hard: 'Difícil' }[q.difficulty];
        const diffClass = { easy: 'easy', medium: 'medium', hard: 'hard' }[q.difficulty];

        // Format statement: if it contains \n, convert to <br>
        const stmtHtml = q.statement.replace(/\n/g, '<br>');

        let html = `
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:12px;">
                <button class="btn btn-outline" onclick="Study.currentModule=null;App.navigate('study');" style="padding:6px 14px;font-size:13px;">
                    <ion-icon name="arrow-back-outline"></ion-icon> Módulos
                </button>
                <div style="font-weight:600;color:var(--text-muted);font-size:14px;">
                    Questão ${this.currentIndex + 1} / ${this.questions.length}
                </div>
                <button class="btn btn-outline" onclick="Study.toggleBookmark('${q.id}')" style="padding:6px 14px;font-size:13px;${isBookmarked ? 'color:var(--warning);border-color:var(--warning)' : ''}">
                    <ion-icon name="${isBookmarked ? 'bookmark' : 'bookmark-outline'}"></ion-icon>
                    ${isBookmarked ? 'Salvo' : 'Salvar'}
                </button>
            </div>

            <div class="progress-container" style="margin-bottom:28px;">
                <div class="progress-bar" style="width:${pct}%"></div>
            </div>

            <div class="card">
                <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;">
                    <span class="badge badge-${diffClass}">${diffLabel}</span>
                    <span class="badge">${q.topic}</span>
                    <span class="badge" style="background:rgba(30,120,80,0.08);border-color:var(--primary);color:var(--primary);">${q.id}</span>
                </div>

                <p style="font-size:17px;line-height:1.6;margin-bottom:24px;font-weight:500;">${stmtHtml}</p>

                <div id="options-area">
        `;

        ['A', 'B', 'C', 'D', 'E'].forEach(opt => {
            if (!q.options[opt]) return;
            const isSelected = prev?.selected === opt;
            const isCorrect = opt === q.answer;

            let cls = 'option-item';
            let letterStyle = '';
            if (prev) {
                if (isCorrect) { cls += ' correct'; letterStyle = 'background:var(--success);color:#fff;border-color:var(--success);'; }
                else if (isSelected) { cls += ' incorrect'; letterStyle = 'background:var(--error);color:#fff;border-color:var(--error);'; }
            }

            html += `
                <div class="${cls}" ${!prev ? `onclick="Study.select('${opt}')"` : ''}>
                    <div class="option-letter" style="${letterStyle}">${opt}</div>
                    <div class="option-text">${q.options[opt]}</div>
                </div>`;
        });

        html += `</div>`; // close options-area

        if (prev) {
            const isRight = prev.correct;
            html += `
                <div class="explanation-box" style="display:block;border-color:${isRight ? 'var(--success)' : 'var(--error)'};">
                    <h4 style="color:${isRight ? 'var(--success)' : 'var(--error)'};">
                        <ion-icon name="${isRight ? 'checkmark-circle' : 'close-circle'}"></ion-icon>
                        ${isRight ? 'Resposta Correta!' : 'Resposta Incorreta'}
                    </h4>
                    <p><strong>Gabarito: Alternativa ${q.answer}.</strong></p>
                    <p style="line-height:1.7;">${q.explanation}</p>
                    ${q.optionExplanations ? `
                    <div style="margin-top:16px;padding:16px;background:var(--bg-main);border-radius:8px;">
                        <p style="font-weight:600;font-size:13px;margin-bottom:10px;text-transform:uppercase;letter-spacing:.5px;color:var(--text-muted);">Análise das Alternativas</p>
                        ${['A','B','C','D','E'].filter(o => q.optionExplanations[o]).map(o =>
                            `<p style="font-size:14px;margin-bottom:8px;line-height:1.5;"><strong>${o})</strong> ${q.optionExplanations[o]}</p>`
                        ).join('')}
                    </div>` : ''}
                    <div class="reference-list">📖 ${q.mainReference}</div>
                </div>`;
        }

        html += `
            </div><!-- close card -->
            <div style="display:flex;justify-content:space-between;margin-top:24px;">
                <button class="btn btn-outline" onclick="Study.prev()" ${this.currentIndex === 0 ? 'disabled style="opacity:.4;cursor:not-allowed"' : ''}>
                    <ion-icon name="chevron-back-outline"></ion-icon> Anterior
                </button>
                <button class="btn btn-primary" onclick="Study.next()" ${this.currentIndex === this.questions.length - 1 ? 'disabled style="opacity:.4;cursor:not-allowed"' : ''}>
                    Próxima <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
            </div>
        `;

        container.innerHTML = html;
    },

    select(opt) {
        const q = this.questions[this.currentIndex];
        Storage.saveAnswer(q.id, opt, opt === q.answer);
        App.navigate('study');
    },

    next() {
        if (this.currentIndex < this.questions.length - 1) { this.currentIndex++; App.navigate('study'); }
    },

    prev() {
        if (this.currentIndex > 0) { this.currentIndex--; App.navigate('study'); }
    },

    toggleBookmark(qId) {
        Storage.toggleBookmark(qId);
        App.navigate('study');
    }
};
