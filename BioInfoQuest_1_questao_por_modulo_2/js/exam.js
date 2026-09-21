/**
 * BioInfoQuest - Simulado Cronometrado
 */
const Exam = {
    session: null,
    timer: null,
    DURATION: 30 * 60, // 30 minutos

    render(container) {
        if (!this.session || this.session.finished) {
            this.renderSetup(container);
        } else {
            this.renderExam(container);
        }
    },

    renderSetup(container) {
        container.innerHTML = `
            <h2 style="margin-bottom:8px;">Simulado Cronometrado</h2>
            <p style="color:var(--text-muted);margin-bottom:32px;">Responda todas as questões em 30 minutos, sem feedback imediato. O gabarito é mostrado ao final.</p>

            <div class="card" style="max-width:560px;">
                <h3 style="margin-bottom:20px;">⚙️ Configurar Simulado</h3>
                <div style="margin-bottom:20px;">
                    <label style="font-weight:600;display:block;margin-bottom:8px;">Número de Questões</label>
                    <select id="exam-count" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-surface);color:var(--text-main);font-size:15px;">
                        <option value="10">10 questões (~10 minutos)</option>
                        <option value="15" selected>15 questões (~15 minutos)</option>
                        <option value="20">20 questões (simulado completo)</option>
                    </select>
                </div>
                <div style="margin-bottom:24px;">
                    <label style="font-weight:600;display:block;margin-bottom:8px;">Módulo</label>
                    <select id="exam-module" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-surface);color:var(--text-main);font-size:15px;">
                        <option value="all">Todos os Módulos (Misturado)</option>
                        ${typeof Questions !== 'undefined' ? Questions.getModules().map(m =>
                            `<option value="${m.id}">Módulo ${m.id}: ${m.name}</option>`
                        ).join('') : ''}
                    </select>
                </div>
                <button class="btn btn-primary" style="width:100%;" onclick="Exam.start()">
                    <ion-icon name="timer-outline"></ion-icon> Iniciar Simulado
                </button>
            </div>
        `;
    },

    start() {
        const count = parseInt(document.getElementById('exam-count').value);
        const moduleVal = document.getElementById('exam-module').value;

        let pool = typeof Questions !== 'undefined' ? Questions.getAll() : [];
        if (moduleVal !== 'all') pool = pool.filter(q => q.module === parseInt(moduleVal));

        const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, count);

        this.session = {
            questions: shuffled,
            answers: {},
            startTime: Date.now(),
            finished: false,
            currentIndex: 0
        };

        App.navigate('exam');
        this.startTimer();
    },

    startTimer() {
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => {
            const el = document.getElementById('exam-timer');
            if (!el) { clearInterval(this.timer); return; }
            const elapsed = Math.floor((Date.now() - this.session.startTime) / 1000);
            const remaining = this.DURATION - elapsed;
            if (remaining <= 0) { clearInterval(this.timer); this.finish(); return; }
            const m = Math.floor(remaining / 60).toString().padStart(2, '0');
            const s = (remaining % 60).toString().padStart(2, '0');
            el.textContent = `${m}:${s}`;
            el.className = 'exam-timer' + (remaining < 300 ? ' warning' : '') + (remaining < 60 ? ' danger' : '');
        }, 1000);
    },

    renderExam(container) {
        const { questions, answers, currentIndex } = this.session;
        const q = questions[currentIndex];
        const stmtHtml = q.statement.replace(/\n/g, '<br>');

        container.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:12px;">
                <div>
                    <span style="font-weight:700;font-size:18px;">Simulado</span>
                    <span style="color:var(--text-muted);font-size:14px;margin-left:12px;">Questão ${currentIndex+1}/${questions.length}</span>
                </div>
                <div id="exam-timer" class="exam-timer">30:00</div>
                <button class="btn btn-outline" style="padding:6px 14px;font-size:13px;color:var(--error);border-color:var(--error);" onclick="Exam.finish()">
                    <ion-icon name="stop-circle-outline"></ion-icon> Finalizar
                </button>
            </div>

            <div class="progress-container" style="margin-bottom:28px;">
                <div class="progress-bar" style="width:${Math.round(((currentIndex+1)/questions.length)*100)}%"></div>
            </div>

            <div class="card">
                <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;">
                    <span class="badge badge-${{easy:'easy',medium:'medium',hard:'hard'}[q.difficulty]}">${{easy:'Fácil',medium:'Média',hard:'Difícil'}[q.difficulty]}</span>
                    <span class="badge">${q.topic}</span>
                    <span class="badge" style="color:var(--primary);border-color:var(--primary)">${q.id}</span>
                </div>
                <p style="font-size:17px;line-height:1.6;margin-bottom:24px;font-weight:500;">${stmtHtml}</p>
                <div id="exam-options">
                    ${['A','B','C','D','E'].filter(o => q.options[o]).map(o => {
                        const sel = answers[q.id] === o;
                        return `<div class="option-item${sel ? ' selected' : ''}" onclick="Exam.selectOption('${o}')">
                            <div class="option-letter" style="${sel ? 'background:var(--primary);color:#fff;border-color:var(--primary)' : ''}">${o}</div>
                            <div class="option-text">${q.options[o]}</div>
                        </div>`;
                    }).join('')}
                </div>
            </div>

            <div style="display:flex;justify-content:space-between;margin-top:24px;">
                <button class="btn btn-outline" onclick="Exam.goTo(${currentIndex-1})" ${currentIndex===0?'disabled style="opacity:.4"':''}>
                    <ion-icon name="chevron-back-outline"></ion-icon> Anterior
                </button>
                ${currentIndex < questions.length-1
                    ? `<button class="btn btn-primary" onclick="Exam.goTo(${currentIndex+1})">Próxima <ion-icon name="chevron-forward-outline"></ion-icon></button>`
                    : `<button class="btn btn-primary" onclick="Exam.finish()"><ion-icon name="checkmark-done-outline"></ion-icon> Enviar Simulado</button>`
                }
            </div>
        `;
        this.startTimer();
    },

    selectOption(opt) {
        const q = this.session.questions[this.session.currentIndex];
        this.session.answers[q.id] = opt;
        App.navigate('exam');
    },

    goTo(index) {
        this.session.currentIndex = index;
        App.navigate('exam');
    },

    finish() {
        if (this.timer) clearInterval(this.timer);
        const { questions, answers } = this.session;

        let correct = 0;
        questions.forEach(q => {
            const sel = answers[q.id];
            const isCorrect = sel === q.answer;
            if (sel) { Storage.saveAnswer(q.id, sel, isCorrect); if (isCorrect) correct++; }
        });

        this.session.finished = true;
        this.renderResults(correct, questions.length, questions, answers);
    },

    renderResults(correct, total, questions, answers) {
        const pct = Math.round((correct / total) * 100);
        const color = pct >= 70 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--error)';
        const msg = pct >= 70 ? '🎉 Ótimo desempenho!' : pct >= 50 ? '📚 Continue estudando!' : '🔁 Revise os módulos de menor desempenho.';

        const contentArea = document.getElementById('content-area');
        contentArea.innerHTML = `
            <h2 style="margin-bottom:4px;">Resultado do Simulado</h2>
            <p style="color:var(--text-muted);margin-bottom:32px;">${msg}</p>
            <div style="text-align:center;padding:40px;background:var(--bg-surface);border-radius:16px;border:1px solid var(--border);margin-bottom:32px;">
                <div style="font-size:72px;font-weight:700;color:${color}">${pct}%</div>
                <div style="font-size:20px;color:var(--text-muted);margin-top:8px;">${correct} de ${total} acertos</div>
            </div>
            <h3 style="margin-bottom:16px;">Gabarito Comentado</h3>
            ${questions.map((q, i) => {
                const sel = answers[q.id];
                const ok = sel === q.answer;
                const stmtHtml = q.statement.replace(/\n/g, '<br>');
                return `
                <div class="card" style="margin-bottom:16px;border-left:4px solid ${ok ? 'var(--success)' : sel ? 'var(--error)' : 'var(--border)'};">
                    <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
                        <span style="font-weight:600;font-size:14px;color:var(--text-muted)">Q${i+1} · ${q.id}</span>
                        <span style="font-weight:700;color:${ok ? 'var(--success)' : sel ? 'var(--error)' : 'var(--text-muted)'}">
                            ${ok ? '✓ Acerto' : sel ? '✗ Erro' : '— Não respondida'}
                        </span>
                    </div>
                    <p style="font-size:14px;line-height:1.6;margin-bottom:12px;">${stmtHtml}</p>
                    ${sel && !ok ? `<p style="font-size:13px;color:var(--error);">Sua resposta: <strong>${sel}</strong> · Correta: <strong>${q.answer}</strong></p>` : ''}
                    ${ok ? `<p style="font-size:13px;color:var(--success);">Sua resposta: <strong>${sel}</strong> ✓</p>` : ''}
                    <details style="margin-top:12px;">
                        <summary style="cursor:pointer;font-size:13px;font-weight:600;color:var(--primary)">Ver explicação</summary>
                        <p style="font-size:13px;line-height:1.6;margin-top:10px;">${q.explanation}</p>
                    </details>
                </div>`;
            }).join('')}
            <button class="btn btn-primary" onclick="Exam.session=null;App.navigate('exam');" style="margin-top:16px;">
                <ion-icon name="refresh-outline"></ion-icon> Novo Simulado
            </button>
        `;
    }
};
