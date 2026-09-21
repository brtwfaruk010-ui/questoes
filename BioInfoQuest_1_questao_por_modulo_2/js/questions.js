const Questions = {
  data: [
  {
    "id": "BIO_M1_01",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Transcrição",
    "subtopic": "Pareamento",
    "difficulty": "easy",
    "statement": "Durante o sequenciamento genético de um patógeno respiratório, um pesquisador isola a fita molde de DNA no sentido 3'→5' e identifica a trinca 'TAC'. Qual será o códon transcrito no RNA mensageiro (mRNA) e sua respectiva função biológica?",
    "options": {
      "A": "5' ATG 3', atuando como códon de parada (stop codon).",
      "B": "5' UAC 3', correspondente a um RNA transportador.",
      "C": "5' AUG 3', atuando como códon de iniciação (codifica Metionina).",
      "D": "5' GCA 3', atuando como região promotora.",
      "E": "5' TAC 3', demonstrando uma transcrição idêntica à fita molde."
    },
    "answer": "C",
    "explanation": "Na transcrição, a fita de DNA molde pareia com bases complementares de RNA: a Adenina (A) pareia com Uracila (U), a Timina (T) com Adenina (A), e a Citosina (C) com Guanina (G). Portanto, a trinca TAC gera o códon AUG, conhecido universalmente como Start Codon.",
    "optionExplanations": {
      "A": "Incorreta. O RNA não possui a Timina (T), e ATG não atua como códon de parada.",
      "B": "Incorreta. UAC representa o anticódon do RNAt correspondente, não o transcrito do mRNA.",
      "C": "Correta. O pareamento segue a regra de Watson-Crick, gerando AUG (Metionina).",
      "D": "Incorreta. A sequência não obedece à complementariedade de bases.",
      "E": "Incorreta. A transcrição gera uma fita complementar antiparalela, e não uma cópia idêntica."
    },
    "concept": "Dogma Central",
    "mainReference": "Módulo 1"
  },
  {
    "id": "BIO_M2_01",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "Recursos Clínicos",
    "subtopic": "ClinVar",
    "difficulty": "easy",
    "statement": "Durante o planejamento terapêutico de um paciente em reabilitação neurológica, o laudo genético acusa a presença de uma variante específica. Qual de dados pública do NCBI é projetada para fornecer a classificação de patogenicidade e as evidências clínicas de variantes humanas?",
    "options": {
      "A": "PubMed Central.",
      "B": "Sequence Read Archive (SRA).",
      "C": "GenBank.",
      "D": "ClinVar.",
      "E": "OMIM."
    },
    "answer": "D",
    "explanation": "O ClinVar é o arquivo público central do NCBI dedicado a registrar e curar a relação entre variantes genéticas humanas e o status fenotípico (patogênico, benigno ou de significado incerto).",
    "optionExplanations": {
      "A": "Incorreta. PubMed Central é voltado para literatura biomédica, não para classificação de variantes.",
      "B": "Incorreta. O SRA armazena dados brutos de sequenciamento de nova geração (arquivos FASTQ).",
      "C": "Incorreta. GenBank é um repositório de sequências de nucleotídeos de todas as espécies.",
      "D": "Correta. O ClinVar é a ferramenta padrão-ouro em genética clínica para consulta de patogenicidade.",
      "E": "Incorreta. OMIM é um catálogo de doenças mendelianas, não classificando diretamente cada variante molecular."
    },
    "concept": "Repositórios Clínicos (ClinVar)",
    "mainReference": "Módulo 4"
  },
  {
    "id": "BIO_M3_01",
    "module": 3,
    "moduleName": "BLAST e Anotações",
    "topic": "Suíte BLAST",
    "subtopic": "Aplicações de Tradução",
    "difficulty": "easy",
    "statement": "Um projeto analisou amostras ambientais e obteve fragmentos brutos de DNA de origem desconhecida. O objetivo é inferir o papel funcional das proteínas que esses genes poderiam expressar. Para que o sistema traduza dinamicamente o DNA inserido antes de alinhá-lo ao banco mundial de proteínas (nr), deve-se utilizar o:",
    "options": {
      "A": "blastn.",
      "B": "blastp.",
      "C": "blastx.",
      "D": "tblastn.",
      "E": "AlphaFold."
    },
    "answer": "C",
    "explanation": "A ferramenta blastx preenche o vácuo entre nucleotídeos brutos e a função proteica. O algoritmo converte in silico a cadeia de DNA nos 6 quadros de leitura (frames) possíveis e busca homologias estruturais e funcionais diretamente nos bancos de proteínas estabelecidos do NCBI.",
    "optionExplanations": {
      "A": "Incorreta. O blastn compara DNA apenas com bancos de DNA.",
      "B": "Incorreta. O blastp exige que o próprio dado fornecido pelo usuário já seja uma sequência proteica.",
      "C": "Correta. O input é nucleotídeo e o banco é de aminoácidos (tradução in silico).",
      "D": "Incorreta. O tblastn realiza o processo inverso: compara input de proteína contra um genoma (DNA) banco.",
      "E": "Incorreta. O AlphaFold prevê o dobramento 3D, e não o alinhamento em bancos textuais estruturais."
    },
    "concept": "Ferramentas Básicas (blastx)",
    "mainReference": "Módulo 5"
  },
  {
    "id": "BIO_M4_01",
    "module": 4,
    "moduleName": "DATASUS e Saúde Pública",
    "topic": "Saúde Pública e Tabulações",
    "subtopic": "Plataforma TABNET",
    "difficulty": "easy",
    "statement": "Uma gestão municipal de saúde pública requer relatórios semanais de letalidade estratificados por faixa etária, visando alocação rápida de leitos em surtos. A equipe, composta por gestores de logística sem domínio em programação analítica Python, pode empregar de forma imediata e eficaz qual plataforma pública gerencial provida pelo Ministério da Saúde?",
    "options": {
      "A": "Criação de scripts na biblioteca Pandas em Jupyter Notebook em servidor cloud municipal isolado.",
      "B": "O módulo tabular interativo e cidadão do TABNET (DATASUS), que oferta ambiente intuitivo via navegador para cruzar e compilar ativamente as matrizes brutas e indicadores sanitários hospitalares do brasileiro.",
      "C": "A ferramenta preditiva BLAST focada em alinhamento biomolecular do NCBI internacional.",
      "D": "A interface do SRA Toolkit no terminal puro do Linux para extração populacional bruta isolada das notificações estaduais de.",
      "E": "A genômica relacional isolada de pesquisa global do repositório dbGaP humano celular."
    },
    "answer": "B",
    "explanation": "O portal TABNET do DATASUS é a joia da saúde pública cidadã: transforma enormes volumes de dados burocráticos engessados (SIM, SINAN, SIH) em cruzamentos simples com uma interface intuitiva, gerando tabelas, gráficos e painéis vitais para o monitoramento da morbidade e logística hospitalar municipal sem qualquer custo em infraestrutura técnica, e de forma rápida civil e cidadã.",
    "optionExplanations": {
      "A": "Incorreta. A implantação de Data Science Python exige domínio de linguagens de programação e conhecimento arquitetural analítico estrutural local ausente na equipe gerencial de logística municipal sem especialização na área técnica.",
      "B": "Correta. O TABNET atende primordial e exclusivamente ao gestor em busca de visualização de tabelas e gráficos imediatos civis do SUS nacional.",
      "C": "Incorreta. BLAST não é um tabulador do IBGE e SUS humano civil; é uma plataforma in silico molecular celular biológica atômica NCBI.",
      "D": "Incorreta. SRA é uma aplicação de terminais UNIX analíticos genômicos crua que suga dados cru de nucleotídeo celular isolado e mundial.",
      "E": "Incorreta. O dbGaP hospeda o banco mundial de fenótipos de consentimento moral e restrito molecular mundial celular."
    },
    "concept": "Integração do Sistema MS e TABNET para Monitoramento Civil",
    "mainReference": "Módulo 8"
  },
  {
    "id": "BIO_M5_01",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Privacidade de Dados Genéticos",
    "subtopic": "Anonimização na Era Computacional e Bio Ética Civil",
    "difficulty": "easy",
    "statement": "Uma clínica propõe disponibilizar livremente na nuvem de pesquisa atômica pública um banco CSV de polimorfismos e variantes estruturais VCF limpos mutacionais exômicos brutais de todos os exomas isolados estáticos de pacientes e analíticos da ala local de traumatismo crânio encefálico do município de Jequié municipal sem de preenchimento do crivo local legal TCLE. O coordenador garante em ata que apagou ativamente o CPF tabular do cidadão civil, as idades civis demográficas passivas tabulares limpas do prontuário tabular e até os nomes reais da civil relacional Python. Seguindo os dogmas cívicos éticos analíticos atuais da genômica computacional moderna e o código da biologia in silico legal da de proteção judicial, esse VCF arquivo é seguro limpo para liberação pública civil sem risco analítico relacional ?",
    "options": {
      "A": "Sim, a LGPD trata de banco isolado civil bancário isolado e financeiro municipal isolado e civil de pautas demográficas tabulares sem aplicar na vida biológica atômica isolada de um laudo celular unida.",
      "B": "A restrição isolada dependerá se a fita celular no SRA do Linux isolado terminal foi passada no E-value preditor analítico do NCBI mundial isolado.",
      "C": "Não; Genomas e Variantes pontuais atômicas de genômica atômica mutacional no NCBI e na VCF carregam a assinatura biológica inalterável forense do humano na família. Dados genéticos nunca faticamente são 'anonimizados' com deleção de tabelas, sendo bioética reidentificável por pareamentos estáticos genéticos em árvore e forense.",
      "D": "Sim, com a remoção da tabular municipal da tabela de Pandas civil e a formatação Python do IBGE civil da de relacional o arquivo mutacional atômico fica nulo limpo para análise global cidadã de SRA NCBI limpa celular e municipal isolada.",
      "E": "O impeditivo isolado do laudo será a restrição de tabulação estática IBGE no Tabnet web municipal atestando a limitação cidadã isolada do VCF analítico preditor DATASUS da gestão civil e municipal estadual isolada e do Brasil isolada em civil do censo demográfico."
    },
    "answer": "C",
    "explanation": "No século 21 da Ciência in silico, o seu DNA é você. Excluir CPF ou Nome num Excel Data Science relacional e atirar o VCF genético na Amazon web não anonimiza o laudo atômico. Hoje, parentes deixam seu código num banco de ancestrais; detetives pegam o arquivo VCF '' do paciente e acham a árvore genealógica na nuvem, expondo de novo as patologias ocultas. Então, as regras da LGPD da nacional judicial baseiam que genoma é um DADO BIOLÓGICO SENSÍVEL supremo e não passível de simples anonimização boba de data cleaning na sintaxe pandas tabular de estatística de planilha. Restrição e ética na de tudo.",
    "optionExplanations": {
      "A": "Incorreta. Lei trata abertamente do DNA cidadão isolado civil e bio ético da biometria biológica civil do povo.",
      "B": "Incorreta. O alinhamento NCBI estático limpo in silico com métricas estatísticas heurísticas limpas não extirpa, censura ou processa sigilo penal de dados de amostra unida cívica isolada.",
      "C": "Correta. Define o alicerce e o dilema ético penal moral moderno do uso do VCF na biologia genômica celular in silico local de laudo no prontuário.",
      "D": "Incorreta. Mistura e amalgama termos estatístico tabulares sem conexão e propõe erro crasso de liberar sensível em irreal de Data Science municipal.",
      "E": "Incorreta. O IBGE civil cidadão TABNET não arquiva genomas VCF ou SRA genéticos estáticos limpos em nuvens para censo estatístico e tabulação cidadã e secretarial de Datasus."
    },
    "concept": "Reidentificação Algorítmica da Informação, LGPD e o VCF Molecular Forense como Impressão Digital Única de Censo Fático Celular",
    "mainReference": "Módulo 11 (A Ética na Nuvem)"
  },
  {
    "id": "BIO_M6_01",
    "module": 6,
    "moduleName": "Integração e Revisão",
    "topic": "Morfologia Operacional FASTA MS Pura in Silico Ativa MS Geral Unida Fática Textual e Formato Matriz NCBI",
    "subtopic": "O Formato MS Fático Textual MS Linear",
    "difficulty": "easy",
    "statement": "No laboratório in silico atômico e celular, você abre faticamente um arquivo de pauta limpa de texto. Na primeira linha, o símbolo '>' lidera a tag atômica de nome de espécie, seguida de um Enter. Abaixo, blocos gigantes contínuos puros de A, T, C e G celularem estáticos puros se esparramam puros na tela. O formato atômico linear descrito é o padrão sagrado mundial de input isolado NCBI atômico chamado :",
    "options": {
      "A": "VCF isolado.",
      "B": "FASTA e atômico estático puro.",
      "C": "TABNET estadual cidadão de isolado ibge.",
      "D": "SRA Toolkit terminal atômico.",
      "E": "CSV relacional de Data Science de dados Pandas municipal."
    },
    "answer": "B",
    "explanation": "O FASTA é a pedra angular textual limpa in silico de todos os repositórios atômicos NCBI globais de pautas. É um txt que exige a setinha (>) no topo estático de nomenclatura atômica, abrindo o caminho puro na segunda estática limpa linha para os aminoácidos ou as bases nitrogenadas cruas e de biologia.",
    "optionExplanations": {
      "A": "Incorreta. O VCF estático atesta as posições isoladas de mutação variante e as notas atreladas clínicas do gene alterado do de doença humana, e não joga a fita linear estática ATCG.",
      "B": "Correta. Define o documento de fita celular de laboratório e simples e universal.",
      "C": "Incorreta. Portal de planilhas de gestão municipal IBGE estatística.",
      "D": "Incorreta. Programa de Linux de extração celular de FASTQ de bruta e SRA web atômico mundial.",
      "E": "Incorreta. CSV é planilha civil de secretarias com colunas demográficas Pandas isoladas estatísticas e de saúde pública unida cidadã de rotina."
    },
    "concept": "FASTA: Formato Linear Base Genômica",
    "mainReference": "Revisões Iniciais e Práticas NCBI"
  }
],

  init() {},
  getAll() { return this.data; },
  getByModule(moduleId) { return this.data.filter(q => q.module === moduleId); },
  getByDifficulty(diff) { return this.data.filter(q => q.difficulty === diff); },
  getRandom(n) {
    const shuffled = [...this.data].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(n, this.data.length));
  },
  getById(id) { return this.data.find(q => q.id === id); },
  getModules() {
    const seen = new Set();
    const modules = [];
    this.data.forEach(q => {
      if (!seen.has(q.module)) {
        seen.add(q.module);
        modules.push({ id: q.module, name: q.moduleName });
      }
    });
    return modules.sort((a, b) => a.id - b.id);
  }
};

