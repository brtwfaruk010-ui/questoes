/**
 * BioInfoQuest - Dashboard
 */
const Dashboard = {
    render(container) {
        const stats = Storage.getStats();
        const total = typeof Questions !== 'undefined' ? Questions.getAll().length : 0;
        const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

        container.innerHTML = `
            <div style="margin-bottom:32px;">
                <h2 style="font-size:28px; margin-bottom:4px;">Olá, Pedro Faruk 👋</h2>
                <p style="color:var(--text-muted);">Bioinformática · UNEX Jequié · Prova se aproximando — bora revisar!</p>
            </div>

            <div class="dashboard-grid">
                <div class="card stat-card">
                    <div class="icon-wrapper"><ion-icon name="documents-outline"></ion-icon></div>
                    <div class="stat-value">${total}</div>
                    <div class="stat-label">Questões no Banco</div>
                </div>
                <div class="card stat-card">
                    <div class="icon-wrapper" style="background:rgba(145,60,42,0.1);color:var(--success);"><ion-icon name="checkmark-circle-outline"></ion-icon></div>
                    <div class="stat-value" style="color:var(--success)">${stats.correct}</div>
                    <div class="stat-label">Acertos no Total</div>
                </div>
                <div class="card stat-card">
                    <div class="icon-wrapper" style="background:rgba(220,50,50,0.1);color:var(--error);"><ion-icon name="close-circle-outline"></ion-icon></div>
                    <div class="stat-value" style="color:var(--error)">${stats.wrong}</div>
                    <div class="stat-label">Erros no Total</div>
                </div>
                <div class="card stat-card">
                    <div class="icon-wrapper" style="background:rgba(38,90,55,0.1);color:var(--accent);"><ion-icon name="trophy-outline"></ion-icon></div>
                    <div class="stat-value" style="color:${accuracy >= 70 ? 'var(--success)' : accuracy >= 50 ? 'var(--warning)' : 'var(--error)'}">${accuracy}%</div>
                    <div class="stat-label">Taxa de Acerto</div>
                </div>
            </div>

            <div class="card" style="margin-bottom:32px;">
                <h3 style="margin-bottom:16px;">📚 Módulos de Estudo</h3>
                <p style="color:var(--text-muted);margin-bottom:24px;">Clique em um módulo para estudar as questões com feedback imediato.</p>
                <div class="dashboard-grid">
                    ${Dashboard.renderModuleCards()}
                </div>
            </div>

            <div class="card">
                <h3 style="margin-bottom:12px;">🚀 Ação Rápida</h3>
                <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:16px;">
                    <button class="btn btn-primary" onclick="App.navigate('exam')">
                        <ion-icon name="timer-outline"></ion-icon> Iniciar Simulado Cronometrado
                    </button>
                    <button class="btn btn-outline" onclick="App.navigate('review')">
                        <ion-icon name="sync-outline"></ion-icon> Revisar Erros e Salvos
                    </button>
                    <button class="btn btn-outline" onclick="Storage.clearAll();App.navigate('dashboard');" style="color:var(--error);border-color:var(--error)">
                        <ion-icon name="trash-outline"></ion-icon> Zerar Progresso
                    </button>
                </div>
            </div>
        `;
    },

    renderModuleCards() {
        if (typeof Questions === 'undefined') return '';
        const modules = Questions.getModules();
        const userData = Storage.getUserData();

        return modules.map(m => {
            const qs = Questions.getByModule(m.id);
            const answered = qs.filter(q => userData.answers[q.id]).length;
            const correct = qs.filter(q => userData.answers[q.id]?.correct).length;
            const pct = qs.length > 0 ? Math.round((answered / qs.length) * 100) : 0;

            const icons = ['dna-outline', 'server-outline', 'search-outline', 'bar-chart-outline', 'shield-checkmark-outline', 'layers-outline'];
            const icon = icons[(m.id - 1) % icons.length];

            return `
                <div class="topic-card" onclick="Study.startModule(${m.id});App.navigate('study');">
                    <ion-icon name="${icon}" class="topic-icon"></ion-icon>
                    <h4 style="font-size:15px;margin-bottom:6px;">Módulo ${m.id}</h4>
                    <p style="font-size:13px;color:var(--text-muted);flex-grow:1;margin-bottom:12px;">${m.name}</p>
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                        <span class="badge">${qs.length} questões</span>
                        <span style="font-size:12px;color:var(--text-muted)">${answered}/${qs.length} respondidas</span>
                    </div>
                    <div class="progress-container" style="margin:0;">
                        <div class="progress-bar" style="width:${pct}%"></div>
                    </div>
                </div>
            `;
        }).join('');
    }
};
