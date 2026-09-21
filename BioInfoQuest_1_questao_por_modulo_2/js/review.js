/**
 * BioInfoQuest - Review Mode (Erros e Salvos)
 */
const Review = {
    mode: 'errors', // 'errors' or 'bookmarks'

    render(container) {
        const userData = Storage.getUserData();
        const allQ = typeof Questions !== 'undefined' ? Questions.getAll() : [];

        const errors = allQ.filter(q => userData.answers[q.id] && !userData.answers[q.id].correct);
        const bookmarked = allQ.filter(q => userData.bookmarks.includes(q.id));

        container.innerHTML = `
            <h2 style="margin-bottom:8px;">Revisão</h2>
            <p style="color:var(--text-muted);margin-bottom:24px;">Reveja questões que você errou ou marcou para revisar depois.</p>

            <div style="display:flex;gap:12px;margin-bottom:32px;">
                <button class="btn ${this.mode==='errors'?'btn-primary':'btn-outline'}" onclick="Review.mode='errors';App.navigate('review')">
                    <ion-icon name="close-circle-outline"></ion-icon> Erros (${errors.length})
                </button>
                <button class="btn ${this.mode==='bookmarks'?'btn-primary':'btn-outline'}" onclick="Review.mode='bookmarks';App.navigate('review')">
                    <ion-icon name="bookmark-outline"></ion-icon> Salvos (${bookmarked.length})
                </button>
            </div>
        `;

        const list = this.mode === 'errors' ? errors : bookmarked;
        const label = this.mode === 'errors' ? 'erros' : 'questões salvas';

        if (list.length === 0) {
            container.innerHTML += `
                <div style="text-align:center;padding:60px;background:var(--bg-surface);border-radius:16px;border:1px solid var(--border);">
                    <ion-icon name="${this.mode==='errors'?'checkmark-circle-outline':'bookmark-outline'}" style="font-size:64px;color:var(--text-muted)"></ion-icon>
                    <h3 style="margin-top:16px;">Nenhum ${label} por enquanto</h3>
                    <p style="color:var(--text-muted);">
                        ${this.mode==='errors' ? 'Você ainda não respondeu questões ou acertou todas!' : 'Marque questões importantes no Modo Estudo clicando em "Salvar".'}
                    </p>
                </div>`;
            return;
        }

        list.forEach(q => {
            const userData2 = Storage.getUserData();
            const prev = userData2.answers[q.id];
            const stmtHtml = q.statement.replace(/\n/g, '<br>');

            container.innerHTML += `
                <div class="card" style="margin-bottom:20px;">
                    <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
                        <div style="display:flex;gap:8px;flex-wrap:wrap;">
                            <span class="badge badge-${{easy:'easy',medium:'medium',hard:'hard'}[q.difficulty]}">${{easy:'Fácil',medium:'Média',hard:'Difícil'}[q.difficulty]}</span>
                            <span class="badge">${q.topic}</span>
                            <span class="badge" style="color:var(--primary);border-color:var(--primary)">${q.id}</span>
                        </div>
                        <button class="btn btn-outline" style="padding:4px 10px;font-size:12px;" onclick="Storage.toggleBookmark('${q.id}');App.navigate('review');">
                            <ion-icon name="${Storage.isBookmarked(q.id)?'bookmark':'bookmark-outline'}"></ion-icon>
                        </button>
                    </div>

                    <p style="font-size:15px;line-height:1.6;margin-bottom:16px;font-weight:500;">${stmtHtml}</p>

                    ${['A','B','C','D','E'].filter(o => q.options[o]).map(o => {
                        const isCorrect = o === q.answer;
                        const isSelected = prev?.selected === o;
                        let cls = 'option-item';
                        let ls = '';
                        if (isCorrect) { cls += ' correct'; ls = 'background:var(--success);color:#fff;border-color:var(--success);'; }
                        else if (isSelected) { cls += ' incorrect'; ls = 'background:var(--error);color:#fff;border-color:var(--error);'; }
                        return `<div class="${cls}">
                            <div class="option-letter" style="${ls}">${o}</div>
                            <div class="option-text">${q.options[o]}</div>
                        </div>`;
                    }).join('')}

                    <div class="explanation-box" style="display:block;margin-top:16px;border-color:var(--primary);">
                        <p style="line-height:1.7;">${q.explanation}</p>
                        <div class="reference-list" style="margin-top:12px;">📖 ${q.mainReference}</div>
                    </div>
                </div>
            `;
        });
    }
};
