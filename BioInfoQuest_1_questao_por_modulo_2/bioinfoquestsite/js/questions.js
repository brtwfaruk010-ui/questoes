const Questions = {
  data: [
  {
    "id": "BIO_000",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no Hospital Santa Casa, um paciente com fibrose pulmonar é diagnosticado com Fibrose Cística (associada ao gene CFTR). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_001",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Cardiomiopatia Hipertrófica em amostras do Hospital Prado Valadares, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene MYBPC3 em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_002",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no Clínica Escola UNEX realizou um Exoma Clínico Completo (WES), que retornou normal para Fibrose Cística. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_003",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do Hospital Geral de Jequié reporta uma variante missense recém-detectada no gene MYBPC3. Diante do quadro gravíssimo de Cardiomiopatia Hipertrófica, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 15%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 15% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_004",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no LACEN-BA, o patologista revela que o painel para Doença de Huntington retornou uma VUS (Variante de Significado Incerto) no gene HTT. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_005",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do Chikungunya isolado na UTI do LACEN-BA. O resultado do BLAST mostra E-value 2e-50, Identidade 99%, mas Cobertura (Query Coverage) de míseros 6%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 2e-50), apenas 6% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo Chikungunya.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_006",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do NUPREJ percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_007",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o LACEN-BA de ter letalidade elevada por SARS-CoV-2 baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do LACEN-BA cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o LACEN-BA parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_008",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de H1N1 nas imediações do Hospital Prado Valadares, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_009",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do Hospital Geral de Jequié suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Disferlinopatia antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_010",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de HIV-1 no Hospital Geral de Jequié foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_011",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de HIV-1 em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene DMD. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_012",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no Hospital Prado Valadares, um paciente com fibrose pulmonar é diagnosticado com Fibrose Cística (associada ao gene CFTR). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_013",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Atrofia Muscular Espinhal em amostras do Hospital Prado Valadares, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene SMN1 em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_014",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no LACEN-BA realizou um Exoma Clínico Completo (WES), que retornou normal para Cardiomiopatia Hipertrófica. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_015",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do LACEN-BA reporta uma variante missense recém-detectada no gene BRCA1. Diante do quadro gravíssimo de Câncer de Mama Hereditário, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 5%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 5% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_016",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no NUPREJ, o patologista revela que o painel para Fibrose Cística retornou uma VUS (Variante de Significado Incerto) no gene CFTR. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_017",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do H1N1 isolado na UTI do NUPREJ. O resultado do BLAST mostra E-value 5e-80, Identidade 99%, mas Cobertura (Query Coverage) de míseros 12%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 5e-80), apenas 12% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo H1N1.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_018",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do Hospital Santa Casa percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_019",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o Hospital Santa Casa de ter letalidade elevada por Zikavirus baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do Hospital Santa Casa cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o Hospital Santa Casa parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_020",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de Chikungunya nas imediações do Hospital Geral de Jequié, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_021",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do Vigilância Epidemiológica da Bahia suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Atrofia Muscular Espinhal antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_022",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de Chikungunya no LACEN-BA foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_023",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de HIV-1 em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene HTT. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_024",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no Hospital Geral de Jequié, um paciente com hipotonia flácida é diagnosticado com Atrofia Muscular Espinhal (associada ao gene SMN1). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_025",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Distrofia de Duchenne em amostras do Hospital Santa Casa, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene DMD em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_026",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no Hospital Geral de Jequié realizou um Exoma Clínico Completo (WES), que retornou normal para Cardiomiopatia Hipertrófica. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_027",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do Clínica Escola UNEX reporta uma variante missense recém-detectada no gene CFTR. Diante do quadro gravíssimo de Fibrose Cística, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 18%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 18% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_028",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no Hospital Geral de Jequié, o patologista revela que o painel para Cardiomiopatia Hipertrófica retornou uma VUS (Variante de Significado Incerto) no gene MYBPC3. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_029",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do H1N1 isolado na UTI do Clínica Escola UNEX. O resultado do BLAST mostra E-value 2e-50, Identidade 99%, mas Cobertura (Query Coverage) de míseros 6%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 2e-50), apenas 6% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo H1N1.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_030",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do LACEN-BA percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_031",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o Hospital Prado Valadares de ter letalidade elevada por SARS-CoV-2 baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do Hospital Prado Valadares cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o Hospital Prado Valadares parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_032",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de Chikungunya nas imediações do LACEN-BA, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_033",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do Hospital Santa Casa suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Câncer de Mama Hereditário antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_034",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de HIV-1 no Hospital Santa Casa foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_035",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de HIV-1 em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene MYBPC3. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_036",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no Hospital Santa Casa, um paciente com mutações oncológicas é diagnosticado com Câncer de Mama Hereditário (associada ao gene BRCA1). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_037",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Câncer de Mama Hereditário em amostras do LACEN-BA, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene BRCA1 em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_038",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no Hospital Prado Valadares realizou um Exoma Clínico Completo (WES), que retornou normal para Fibrose Cística. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_039",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do LACEN-BA reporta uma variante missense recém-detectada no gene SMN1. Diante do quadro gravíssimo de Atrofia Muscular Espinhal, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 15%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 15% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_040",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no LACEN-BA, o patologista revela que o painel para Doença de Huntington retornou uma VUS (Variante de Significado Incerto) no gene HTT. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_041",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do Chikungunya isolado na UTI do Hospital Geral de Jequié. O resultado do BLAST mostra E-value 0.0, Identidade 99%, mas Cobertura (Query Coverage) de míseros 12%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 0.0), apenas 12% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo Chikungunya.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_042",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do Clínica Escola UNEX percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_043",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o Hospital Santa Casa de ter letalidade elevada por SARS-CoV-2 baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do Hospital Santa Casa cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o Hospital Santa Casa parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_044",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de HIV-1 nas imediações do Hospital Geral de Jequié, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_045",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do Vigilância Epidemiológica da Bahia suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Atrofia Muscular Espinhal antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_046",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de SARS-CoV-2 no Clínica Escola UNEX foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_047",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de HIV-1 em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene SMN1. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_048",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no LACEN-BA, um paciente com arritmia letal é diagnosticado com Cardiomiopatia Hipertrófica (associada ao gene MYBPC3). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_049",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Fibrose Cística em amostras do Hospital Prado Valadares, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene CFTR em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_050",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no NUPREJ realizou um Exoma Clínico Completo (WES), que retornou normal para Atrofia Muscular Espinhal. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_051",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do Vigilância Epidemiológica da Bahia reporta uma variante missense recém-detectada no gene DMD. Diante do quadro gravíssimo de Distrofia de Duchenne, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 5%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 5% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_052",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no Vigilância Epidemiológica da Bahia, o patologista revela que o painel para Fibrose Cística retornou uma VUS (Variante de Significado Incerto) no gene CFTR. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_053",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do Dengue tipo 2 isolado na UTI do Hospital Prado Valadares. O resultado do BLAST mostra E-value 5e-80, Identidade 99%, mas Cobertura (Query Coverage) de míseros 8%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 5e-80), apenas 8% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo Dengue tipo 2.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_054",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do Vigilância Epidemiológica da Bahia percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_055",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o Vigilância Epidemiológica da Bahia de ter letalidade elevada por H1N1 baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do Vigilância Epidemiológica da Bahia cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o Vigilância Epidemiológica da Bahia parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_056",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de Zikavirus nas imediações do NUPREJ, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_057",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do Hospital Geral de Jequié suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Distrofia de Duchenne antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_058",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de Chikungunya no Hospital Santa Casa foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_059",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de Zikavirus em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene CFTR. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_060",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no Hospital Geral de Jequié, um paciente com fraqueza proximal é diagnosticado com Disferlinopatia (associada ao gene DYSF). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_061",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Distrofia de Duchenne em amostras do LACEN-BA, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene DMD em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_062",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no Vigilância Epidemiológica da Bahia realizou um Exoma Clínico Completo (WES), que retornou normal para Distrofia de Duchenne. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_063",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do Hospital Santa Casa reporta uma variante missense recém-detectada no gene CFTR. Diante do quadro gravíssimo de Fibrose Cística, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 15%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 15% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_064",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no Hospital Geral de Jequié, o patologista revela que o painel para Disferlinopatia retornou uma VUS (Variante de Significado Incerto) no gene DYSF. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_065",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do HIV-1 isolado na UTI do LACEN-BA. O resultado do BLAST mostra E-value 1e-120, Identidade 99%, mas Cobertura (Query Coverage) de míseros 8%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 1e-120), apenas 8% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo HIV-1.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_066",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do Hospital Prado Valadares percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_067",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o Clínica Escola UNEX de ter letalidade elevada por Dengue tipo 2 baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do Clínica Escola UNEX cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o Clínica Escola UNEX parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_068",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de SARS-CoV-2 nas imediações do NUPREJ, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_069",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do LACEN-BA suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Câncer de Mama Hereditário antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_070",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de Dengue tipo 2 no Vigilância Epidemiológica da Bahia foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_071",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de SARS-CoV-2 em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene CFTR. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_072",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no Clínica Escola UNEX, um paciente com fibrose pulmonar é diagnosticado com Fibrose Cística (associada ao gene CFTR). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_073",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Atrofia Muscular Espinhal em amostras do NUPREJ, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene SMN1 em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_074",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no Hospital Geral de Jequié realizou um Exoma Clínico Completo (WES), que retornou normal para Cardiomiopatia Hipertrófica. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_075",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do NUPREJ reporta uma variante missense recém-detectada no gene HTT. Diante do quadro gravíssimo de Doença de Huntington, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 15%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 15% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_076",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no Hospital Geral de Jequié, o patologista revela que o painel para Câncer de Mama Hereditário retornou uma VUS (Variante de Significado Incerto) no gene BRCA1. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_077",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do HIV-1 isolado na UTI do Vigilância Epidemiológica da Bahia. O resultado do BLAST mostra E-value 2e-50, Identidade 99%, mas Cobertura (Query Coverage) de míseros 14%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 2e-50), apenas 14% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo HIV-1.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_078",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do Hospital Geral de Jequié percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_079",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o Hospital Geral de Jequié de ter letalidade elevada por Zikavirus baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do Hospital Geral de Jequié cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o Hospital Geral de Jequié parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_080",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de Dengue tipo 2 nas imediações do LACEN-BA, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_081",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do Hospital Santa Casa suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Disferlinopatia antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_082",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de H1N1 no Vigilância Epidemiológica da Bahia foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_083",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de H1N1 em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene BRCA1. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_084",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no NUPREJ, um paciente com hipotonia flácida é diagnosticado com Atrofia Muscular Espinhal (associada ao gene SMN1). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_085",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Atrofia Muscular Espinhal em amostras do NUPREJ, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene SMN1 em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_086",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no LACEN-BA realizou um Exoma Clínico Completo (WES), que retornou normal para Fibrose Cística. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_087",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do Vigilância Epidemiológica da Bahia reporta uma variante missense recém-detectada no gene DMD. Diante do quadro gravíssimo de Distrofia de Duchenne, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 11%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 11% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_088",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no Clínica Escola UNEX, o patologista revela que o painel para Doença de Huntington retornou uma VUS (Variante de Significado Incerto) no gene HTT. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_089",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do Dengue tipo 2 isolado na UTI do NUPREJ. O resultado do BLAST mostra E-value 5e-80, Identidade 99%, mas Cobertura (Query Coverage) de míseros 6%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 5e-80), apenas 6% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo Dengue tipo 2.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_090",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do Clínica Escola UNEX percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_091",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o Clínica Escola UNEX de ter letalidade elevada por H1N1 baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do Clínica Escola UNEX cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o Clínica Escola UNEX parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_092",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de H1N1 nas imediações do Hospital Prado Valadares, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_093",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do NUPREJ suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Cardiomiopatia Hipertrófica antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_094",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de Chikungunya no Hospital Prado Valadares foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_095",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de Dengue tipo 2 em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene BRCA1. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_096",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no Hospital Geral de Jequié, um paciente com fibrose pulmonar é diagnosticado com Fibrose Cística (associada ao gene CFTR). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_097",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Câncer de Mama Hereditário em amostras do Hospital Prado Valadares, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene BRCA1 em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_098",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no Vigilância Epidemiológica da Bahia realizou um Exoma Clínico Completo (WES), que retornou normal para Fibrose Cística. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_099",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do LACEN-BA reporta uma variante missense recém-detectada no gene HTT. Diante do quadro gravíssimo de Doença de Huntington, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 8%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 8% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_100",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no Clínica Escola UNEX, o patologista revela que o painel para Fibrose Cística retornou uma VUS (Variante de Significado Incerto) no gene CFTR. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_101",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do SARS-CoV-2 isolado na UTI do Hospital Prado Valadares. O resultado do BLAST mostra E-value 0.0, Identidade 99%, mas Cobertura (Query Coverage) de míseros 12%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 0.0), apenas 12% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo SARS-CoV-2.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_102",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do Vigilância Epidemiológica da Bahia percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_103",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o NUPREJ de ter letalidade elevada por Dengue tipo 2 baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do NUPREJ cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o NUPREJ parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_104",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de Zikavirus nas imediações do Hospital Geral de Jequié, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_105",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do Hospital Santa Casa suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Fibrose Cística antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_106",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de Zikavirus no Vigilância Epidemiológica da Bahia foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_107",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de HIV-1 em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene CFTR. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_108",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no Hospital Santa Casa, um paciente com mutações oncológicas é diagnosticado com Câncer de Mama Hereditário (associada ao gene BRCA1). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_109",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Doença de Huntington em amostras do NUPREJ, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene HTT em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_110",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no Vigilância Epidemiológica da Bahia realizou um Exoma Clínico Completo (WES), que retornou normal para Distrofia de Duchenne. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_111",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do Clínica Escola UNEX reporta uma variante missense recém-detectada no gene SMN1. Diante do quadro gravíssimo de Atrofia Muscular Espinhal, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 22%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 22% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_112",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no Hospital Prado Valadares, o patologista revela que o painel para Distrofia de Duchenne retornou uma VUS (Variante de Significado Incerto) no gene DMD. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_113",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do Dengue tipo 2 isolado na UTI do Hospital Prado Valadares. O resultado do BLAST mostra E-value 2e-50, Identidade 99%, mas Cobertura (Query Coverage) de míseros 4%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 2e-50), apenas 4% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo Dengue tipo 2.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_114",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do NUPREJ percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_115",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o Hospital Geral de Jequié de ter letalidade elevada por Dengue tipo 2 baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do Hospital Geral de Jequié cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o Hospital Geral de Jequié parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_116",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de Zikavirus nas imediações do Vigilância Epidemiológica da Bahia, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_117",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do NUPREJ suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Cardiomiopatia Hipertrófica antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_118",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de Dengue tipo 2 no NUPREJ foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_119",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de H1N1 em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene BRCA1. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_120",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no NUPREJ, um paciente com arritmia letal é diagnosticado com Cardiomiopatia Hipertrófica (associada ao gene MYBPC3). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_121",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Disferlinopatia em amostras do Hospital Geral de Jequié, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene DYSF em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_122",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no Vigilância Epidemiológica da Bahia realizou um Exoma Clínico Completo (WES), que retornou normal para Distrofia de Duchenne. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_123",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do NUPREJ reporta uma variante missense recém-detectada no gene DYSF. Diante do quadro gravíssimo de Disferlinopatia, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 5%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 5% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_124",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no Hospital Santa Casa, o patologista revela que o painel para Atrofia Muscular Espinhal retornou uma VUS (Variante de Significado Incerto) no gene SMN1. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_125",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do Chikungunya isolado na UTI do Hospital Geral de Jequié. O resultado do BLAST mostra E-value 2e-50, Identidade 99%, mas Cobertura (Query Coverage) de míseros 8%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 2e-50), apenas 8% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo Chikungunya.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_126",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do Hospital Prado Valadares percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_127",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o Hospital Prado Valadares de ter letalidade elevada por Chikungunya baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do Hospital Prado Valadares cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o Hospital Prado Valadares parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_128",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de H1N1 nas imediações do Hospital Santa Casa, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_129",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do Clínica Escola UNEX suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Fibrose Cística antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_130",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de Dengue tipo 2 no LACEN-BA foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_131",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de Zikavirus em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene HTT. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_132",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no NUPREJ, um paciente com mutações oncológicas é diagnosticado com Câncer de Mama Hereditário (associada ao gene BRCA1). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_133",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Distrofia de Duchenne em amostras do Hospital Geral de Jequié, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene DMD em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_134",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no NUPREJ realizou um Exoma Clínico Completo (WES), que retornou normal para Fibrose Cística. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_135",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do NUPREJ reporta uma variante missense recém-detectada no gene HTT. Diante do quadro gravíssimo de Doença de Huntington, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 8%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 8% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_136",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no Hospital Santa Casa, o patologista revela que o painel para Atrofia Muscular Espinhal retornou uma VUS (Variante de Significado Incerto) no gene SMN1. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_137",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do HIV-1 isolado na UTI do LACEN-BA. O resultado do BLAST mostra E-value 5e-80, Identidade 99%, mas Cobertura (Query Coverage) de míseros 8%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 5e-80), apenas 8% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo HIV-1.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_138",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do Hospital Geral de Jequié percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_139",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o Hospital Prado Valadares de ter letalidade elevada por Zikavirus baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do Hospital Prado Valadares cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o Hospital Prado Valadares parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_140",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de Dengue tipo 2 nas imediações do Hospital Geral de Jequié, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_141",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do NUPREJ suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Atrofia Muscular Espinhal antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_142",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de HIV-1 no Vigilância Epidemiológica da Bahia foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_143",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de Dengue tipo 2 em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene DYSF. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_144",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no Clínica Escola UNEX, um paciente com mutações oncológicas é diagnosticado com Câncer de Mama Hereditário (associada ao gene BRCA1). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_145",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Cardiomiopatia Hipertrófica em amostras do Hospital Santa Casa, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene MYBPC3 em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_146",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no Hospital Geral de Jequié realizou um Exoma Clínico Completo (WES), que retornou normal para Distrofia de Duchenne. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_147",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do NUPREJ reporta uma variante missense recém-detectada no gene MYBPC3. Diante do quadro gravíssimo de Cardiomiopatia Hipertrófica, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 22%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 22% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_148",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no LACEN-BA, o patologista revela que o painel para Fibrose Cística retornou uma VUS (Variante de Significado Incerto) no gene CFTR. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_149",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do SARS-CoV-2 isolado na UTI do Clínica Escola UNEX. O resultado do BLAST mostra E-value 1e-15, Identidade 99%, mas Cobertura (Query Coverage) de míseros 14%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 1e-15), apenas 14% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo SARS-CoV-2.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_150",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do Hospital Geral de Jequié percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_151",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o Hospital Geral de Jequié de ter letalidade elevada por H1N1 baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do Hospital Geral de Jequié cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o Hospital Geral de Jequié parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_152",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de H1N1 nas imediações do Clínica Escola UNEX, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_153",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do NUPREJ suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Distrofia de Duchenne antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_154",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de SARS-CoV-2 no LACEN-BA foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_155",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de Zikavirus em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene HTT. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_156",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no Hospital Prado Valadares, um paciente com fraqueza proximal é diagnosticado com Disferlinopatia (associada ao gene DYSF). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_157",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Atrofia Muscular Espinhal em amostras do LACEN-BA, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene SMN1 em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_158",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no LACEN-BA realizou um Exoma Clínico Completo (WES), que retornou normal para Disferlinopatia. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_159",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do Hospital Prado Valadares reporta uma variante missense recém-detectada no gene SMN1. Diante do quadro gravíssimo de Atrofia Muscular Espinhal, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 8%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 8% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_160",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no Hospital Prado Valadares, o patologista revela que o painel para Disferlinopatia retornou uma VUS (Variante de Significado Incerto) no gene DYSF. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_161",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do Chikungunya isolado na UTI do Clínica Escola UNEX. O resultado do BLAST mostra E-value 1e-15, Identidade 99%, mas Cobertura (Query Coverage) de míseros 14%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 1e-15), apenas 14% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo Chikungunya.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_162",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do LACEN-BA percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_163",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o Vigilância Epidemiológica da Bahia de ter letalidade elevada por Chikungunya baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do Vigilância Epidemiológica da Bahia cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o Vigilância Epidemiológica da Bahia parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_164",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de HIV-1 nas imediações do NUPREJ, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_165",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do Vigilância Epidemiológica da Bahia suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Cardiomiopatia Hipertrófica antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_166",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de H1N1 no Hospital Geral de Jequié foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_167",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de SARS-CoV-2 em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene BRCA1. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_168",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no LACEN-BA, um paciente com perda de marcha é diagnosticado com Distrofia de Duchenne (associada ao gene DMD). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_169",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Distrofia de Duchenne em amostras do NUPREJ, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene DMD em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_170",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no Clínica Escola UNEX realizou um Exoma Clínico Completo (WES), que retornou normal para Fibrose Cística. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_171",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do Clínica Escola UNEX reporta uma variante missense recém-detectada no gene CFTR. Diante do quadro gravíssimo de Fibrose Cística, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 5%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 5% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_172",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no Hospital Geral de Jequié, o patologista revela que o painel para Doença de Huntington retornou uma VUS (Variante de Significado Incerto) no gene HTT. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_173",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do Dengue tipo 2 isolado na UTI do Hospital Prado Valadares. O resultado do BLAST mostra E-value 0.0, Identidade 99%, mas Cobertura (Query Coverage) de míseros 6%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 0.0), apenas 6% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo Dengue tipo 2.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_174",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do LACEN-BA percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_175",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o Hospital Prado Valadares de ter letalidade elevada por Dengue tipo 2 baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do Hospital Prado Valadares cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o Hospital Prado Valadares parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_176",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de HIV-1 nas imediações do NUPREJ, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_177",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do Hospital Santa Casa suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Doença de Huntington antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_178",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de SARS-CoV-2 no LACEN-BA foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_179",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de Zikavirus em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene HTT. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_180",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no NUPREJ, um paciente com hipotonia flácida é diagnosticado com Atrofia Muscular Espinhal (associada ao gene SMN1). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_181",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Disferlinopatia em amostras do Vigilância Epidemiológica da Bahia, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene DYSF em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_182",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no NUPREJ realizou um Exoma Clínico Completo (WES), que retornou normal para Distrofia de Duchenne. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_183",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do LACEN-BA reporta uma variante missense recém-detectada no gene CFTR. Diante do quadro gravíssimo de Fibrose Cística, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 15%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 15% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_184",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no Clínica Escola UNEX, o patologista revela que o painel para Cardiomiopatia Hipertrófica retornou uma VUS (Variante de Significado Incerto) no gene MYBPC3. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_185",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do Dengue tipo 2 isolado na UTI do Vigilância Epidemiológica da Bahia. O resultado do BLAST mostra E-value 2e-50, Identidade 99%, mas Cobertura (Query Coverage) de míseros 4%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 2e-50), apenas 4% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo Dengue tipo 2.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_186",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do NUPREJ percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_187",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o NUPREJ de ter letalidade elevada por Dengue tipo 2 baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do NUPREJ cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o NUPREJ parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_188",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de SARS-CoV-2 nas imediações do Vigilância Epidemiológica da Bahia, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_189",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do NUPREJ suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Cardiomiopatia Hipertrófica antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_190",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de SARS-CoV-2 no Hospital Geral de Jequié foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_191",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de Chikungunya em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene HTT. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_192",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no LACEN-BA, um paciente com fraqueza proximal é diagnosticado com Disferlinopatia (associada ao gene DYSF). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_193",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Doença de Huntington em amostras do Clínica Escola UNEX, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene HTT em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_194",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no NUPREJ realizou um Exoma Clínico Completo (WES), que retornou normal para Cardiomiopatia Hipertrófica. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_195",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do Hospital Santa Casa reporta uma variante missense recém-detectada no gene MYBPC3. Diante do quadro gravíssimo de Cardiomiopatia Hipertrófica, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 22%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 22% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_196",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no Hospital Santa Casa, o patologista revela que o painel para Atrofia Muscular Espinhal retornou uma VUS (Variante de Significado Incerto) no gene SMN1. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_197",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do HIV-1 isolado na UTI do Hospital Prado Valadares. O resultado do BLAST mostra E-value 2e-50, Identidade 99%, mas Cobertura (Query Coverage) de míseros 8%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 2e-50), apenas 8% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo HIV-1.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_198",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do NUPREJ percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_199",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o Hospital Geral de Jequié de ter letalidade elevada por SARS-CoV-2 baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do Hospital Geral de Jequié cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o Hospital Geral de Jequié parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_200",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de SARS-CoV-2 nas imediações do LACEN-BA, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_201",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do LACEN-BA suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Disferlinopatia antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_202",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de HIV-1 no NUPREJ foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_203",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de Zikavirus em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene CFTR. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_204",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no Hospital Prado Valadares, um paciente com mutações oncológicas é diagnosticado com Câncer de Mama Hereditário (associada ao gene BRCA1). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_205",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Fibrose Cística em amostras do Clínica Escola UNEX, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene CFTR em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_206",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no Vigilância Epidemiológica da Bahia realizou um Exoma Clínico Completo (WES), que retornou normal para Fibrose Cística. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_207",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do Clínica Escola UNEX reporta uma variante missense recém-detectada no gene CFTR. Diante do quadro gravíssimo de Fibrose Cística, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 22%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 22% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_208",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no Vigilância Epidemiológica da Bahia, o patologista revela que o painel para Fibrose Cística retornou uma VUS (Variante de Significado Incerto) no gene CFTR. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_209",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do HIV-1 isolado na UTI do Hospital Geral de Jequié. O resultado do BLAST mostra E-value 0.0, Identidade 99%, mas Cobertura (Query Coverage) de míseros 14%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 0.0), apenas 14% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo HIV-1.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_210",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do Hospital Prado Valadares percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_211",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o Hospital Prado Valadares de ter letalidade elevada por HIV-1 baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do Hospital Prado Valadares cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o Hospital Prado Valadares parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_212",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de Zikavirus nas imediações do NUPREJ, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_213",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do Hospital Santa Casa suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Cardiomiopatia Hipertrófica antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_214",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de SARS-CoV-2 no Hospital Geral de Jequié foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_215",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de HIV-1 em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene MYBPC3. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_216",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no Hospital Prado Valadares, um paciente com mutações oncológicas é diagnosticado com Câncer de Mama Hereditário (associada ao gene BRCA1). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_217",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Câncer de Mama Hereditário em amostras do Hospital Geral de Jequié, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene BRCA1 em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_218",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no Vigilância Epidemiológica da Bahia realizou um Exoma Clínico Completo (WES), que retornou normal para Câncer de Mama Hereditário. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_219",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do LACEN-BA reporta uma variante missense recém-detectada no gene MYBPC3. Diante do quadro gravíssimo de Cardiomiopatia Hipertrófica, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 18%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 18% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_220",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no Hospital Geral de Jequié, o patologista revela que o painel para Distrofia de Duchenne retornou uma VUS (Variante de Significado Incerto) no gene DMD. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_221",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do Chikungunya isolado na UTI do LACEN-BA. O resultado do BLAST mostra E-value 0.0, Identidade 99%, mas Cobertura (Query Coverage) de míseros 4%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 0.0), apenas 4% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo Chikungunya.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_222",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do Vigilância Epidemiológica da Bahia percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_223",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o Hospital Santa Casa de ter letalidade elevada por SARS-CoV-2 baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do Hospital Santa Casa cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o Hospital Santa Casa parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_224",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de Zikavirus nas imediações do Hospital Prado Valadares, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_225",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do LACEN-BA suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Doença de Huntington antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_226",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de Dengue tipo 2 no Hospital Santa Casa foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_227",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de H1N1 em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene MYBPC3. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_228",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no NUPREJ, um paciente com fraqueza proximal é diagnosticado com Disferlinopatia (associada ao gene DYSF). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_229",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Cardiomiopatia Hipertrófica em amostras do NUPREJ, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene MYBPC3 em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_230",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no Hospital Santa Casa realizou um Exoma Clínico Completo (WES), que retornou normal para Cardiomiopatia Hipertrófica. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_231",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do Hospital Geral de Jequié reporta uma variante missense recém-detectada no gene CFTR. Diante do quadro gravíssimo de Fibrose Cística, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 22%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 22% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_232",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no Clínica Escola UNEX, o patologista revela que o painel para Fibrose Cística retornou uma VUS (Variante de Significado Incerto) no gene CFTR. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_233",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do H1N1 isolado na UTI do Hospital Geral de Jequié. O resultado do BLAST mostra E-value 0.0, Identidade 99%, mas Cobertura (Query Coverage) de míseros 14%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 0.0), apenas 14% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo H1N1.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_234",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do Hospital Prado Valadares percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_235",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o Hospital Prado Valadares de ter letalidade elevada por Zikavirus baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do Hospital Prado Valadares cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o Hospital Prado Valadares parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_236",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de SARS-CoV-2 nas imediações do Clínica Escola UNEX, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_237",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do Vigilância Epidemiológica da Bahia suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Fibrose Cística antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_238",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de HIV-1 no Hospital Prado Valadares foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_239",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de H1N1 em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene HTT. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_240",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Terapias RNA",
    "subtopic": "Splicing",
    "difficulty": "hard",
    "statement": "Durante o estágio clínico no NUPREJ, um paciente com fraqueza proximal é diagnosticado com Disferlinopatia (associada ao gene DYSF). O geneticista indica uma Terapia-Alvo com Oligonucleotídeo Antisense (ASO) focada em modular o splicing do gene parálogo funcional. Baseado nas leis do dogma central, o que o ASO realiza fisicamente no núcleo?",
    "options": {
      "A": "Induz mutação aleatória no DNA genômico celular.",
      "B": "Bloqueia o spliceossomo no núcleo, mascarando regiões inibitórias do pré-mRNA e forçando a inclusão de um éxon funcional vital.",
      "C": "Altera as subunidades ribossomais no citoplasma.",
      "D": "Cliva a fita viral RNA invasora.",
      "E": "Edita o DNA utilizando o complexo CRISPR-Cas9."
    },
    "answer": "B",
    "explanation": "Terapias de splicing (ex: Nusinersena para AME) atuam no núcleo mascarando regiões intrônicas, forçando a máquina de corte (spliceossomo) a montar o mRNA final com éxons que normalmente seriam silenciados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Splicing Alternativo Terapêutico",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_241",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "NGS",
    "subtopic": "Montagem e Leituras",
    "difficulty": "hard",
    "statement": "Tentando mapear as origens genéticas da Distrofia de Duchenne em amostras do Clínica Escola UNEX, o sequenciamento Illumina (Short-Read) produz artefatos e falha sistematicamente ao tentar reconstruir o gene DMD em uma região contendo longas Repetições em Tandem. Qual a justificativa computacional da falha e sua respectiva solução?",
    "options": {
      "A": "O Illumina sofre com viés térmico; a solução é o Microarranjo.",
      "B": "Ocorre viés de amplificação enzimática PCR; a solução é sorologia.",
      "C": "Leituras curtas não conseguem ultrapassar e 'ancorar' trechos gigantes repetitivos, causando ambiguidade na montagem. A solução é usar Sequenciamento de Leitura Longa (Long-read) como Nanopore/PacBio, que lê a repetição inteira em um fio ininterrupto.",
      "D": "O Exoma bloqueia a leitura.",
      "E": "Uso obrigatório de sequenciamento Sanger."
    },
    "answer": "C",
    "explanation": "O grande problema do short-read é a montagem genômica em áreas repetitivas (o algoritmo perde a ordem dos pedaços idênticos). Tecnologias de terceira geração (Long-read) superam isso atravessando a repetição em uma tacada só.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Long-read vs Short-read",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_242",
    "module": 1,
    "moduleName": "O Mundo Molecular",
    "topic": "Microarranjo",
    "subtopic": "Análise Estrutural",
    "difficulty": "medium",
    "statement": "Paciente pediátrico investigado no Hospital Prado Valadares realizou um Exoma Clínico Completo (WES), que retornou normal para Cardiomiopatia Hipertrófica. Um Microarranjo Cromossômico (CMA) subsequente diagnosticou uma deleção genômica extensa (500 mil pares de bases). Qual limitação intrínseca da máquina de Exoma gerou o falso-negativo inicial?",
    "options": {
      "A": "O Exoma sequencia RNA estrutural.",
      "B": "O Exoma clínico identifica perfeitamente SNPs (mutações pontuais), mas seu algoritmo falha frequentemente na detecção de Variações no Número de Cópias (CNVs) de grande magnitude, evento onde o Microarranjo é o padrão-ouro de hibridização.",
      "C": "O genoma do paciente continha RNA viral.",
      "D": "Foi utilizado o banco OMIM desatualizado.",
      "E": "A enzima transcriptase sofreu desnaturação."
    },
    "answer": "B",
    "explanation": "Exoma é para procurar erros pontuais em éxons. Microarranjo escaneia ganhos ou perdas de grandes blocos cromossômicos inteiros (Variações Estruturais/CNVs).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "WES vs CMA e CNVs",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_243",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "dbSNP",
    "subtopic": "Filtros de Frequência",
    "difficulty": "hard",
    "statement": "O bioinformata do Hospital Santa Casa reporta uma variante missense recém-detectada no gene DMD. Diante do quadro gravíssimo de Distrofia de Duchenne, ele analisa o dbSNP e constata uma Frequência Alélica Populacional (MAF) global de 15%. À luz da epidemiologia genômica, o que essa porcentagem significa para o laudo?",
    "options": {
      "A": "A doença será pandêmica.",
      "B": "O aminoácido destruiu a proteína alvo, causando a doença em {maf}% dos internados.",
      "C": "Dados de bancos mundiais não se aplicam a pacientes brasileiros.",
      "D": "Doenças monogênicas letais são raríssimas. Se uma variante ocorre naturalmente em 15% da população global saudável, é matematicamente impossível que ela seja a causa monogênica letal; portanto, trata-se de um polimorfismo benigno comum.",
      "E": "Significa Variedade de Significado Incerto (VUS)."
    },
    "answer": "D",
    "explanation": "Uma variante vista em uma parcela imensa da população geral (ex: 15%) não pode ser o gatilho exclusivo de uma doença que atinge apenas 1 a cada 50 mil pessoas.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Critério Epidemiológico na Genômica",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_244",
    "module": 2,
    "moduleName": "Bancos de Dados e NCBI",
    "topic": "VUS",
    "subtopic": "Conduta Ética",
    "difficulty": "medium",
    "statement": "Durante uma junta médica no Clínica Escola UNEX, o patologista revela que o painel para Disferlinopatia retornou uma VUS (Variante de Significado Incerto) no gene DYSF. Com base nas diretrizes internacionais da ACMG, a intervenção terapêutica correta determina que:",
    "options": {
      "A": "Procedimentos irreversíveis e intervenções drásticas nunca devem ser pautados numa incerteza (VUS). A conduta deve ser conservadora (vigilância) com revisões bibliográficas periódicas no ClinVar.",
      "B": "A VUS deve ser executada num BLAST para confirmar seu E-value e garantir intervenção aguda.",
      "C": "Intervenção cirúrgica imediata por precaução biológica.",
      "D": "O paciente possui imunidade cruzada confirmada pela VUS.",
      "E": "A amostra foi invalidada e exige refação de microarranjo."
    },
    "answer": "A",
    "explanation": "A conduta diante da VUS é observacional. Ela não confirma diagnóstico nem guia tratamentos extremos.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Conduta Clinica (VUS)",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_245",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Métricas Combinadas",
    "subtopic": "Cobertura Crítica",
    "difficulty": "hard",
    "statement": "Um epidemiologista alinha o genoma suspeito do Zikavirus isolado na UTI do Hospital Prado Valadares. O resultado do BLAST mostra E-value 5e-80, Identidade 99%, mas Cobertura (Query Coverage) de míseros 8%. Qual a leitura correta dos dados pelo pesquisador?",
    "options": {
      "A": "A proteína foi traduzida corretamente com 100% de sucesso.",
      "B": "Embora a correlação matemática seja real (E-value 5e-80), apenas 8% do tamanho da sequência achou par no banco. É apenas um pequeno domínio proteico compatível, insuficiente para atestar a mesma função macroscópica.",
      "C": "É um viés estatístico onde E-value muito baixo cancela a cobertura.",
      "D": "O paciente sofreu mutação agressiva pelo Zikavirus.",
      "E": "Houve contaminação com DNA endógeno humano."
    },
    "answer": "B",
    "explanation": "E-value indica se o trecho encontrado é acidente. Cobertura diz quão extenso é o trecho. Cobertura baixa e E-value baixo significa: 'achei uma parte muito pequena idêntica a você'.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "A Regra da Cobertura",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_246",
    "module": 3,
    "moduleName": "BLAST e Anotação",
    "topic": "Matrizes Evolutivas",
    "subtopic": "BLOSUM vs PAM",
    "difficulty": "medium",
    "statement": "Um orientador acadêmico do Clínica Escola UNEX percebe que seu aluno não consegue achar parentescos evolutivos de extremo longo prazo (Archaea oceânicas vs Bactérias modernas) na ferramenta blastp usando a configuração BLOSUM62. A justificativa técnica orientada seria:",
    "options": {
      "A": "Usar blastn.",
      "B": "Mudar a configuração para matrizes mais complacentes e severamente divergentes, como a BLOSUM45 ou PAM250, que penalizam menos as radicais trocas de aminoácidos pelo tempo.",
      "C": "Ajustar o E-value para 10.0.",
      "D": "Baixar os dados via TABNET do NCBI.",
      "E": "Matrizes numéricas não servem para Archaea."
    },
    "answer": "B",
    "explanation": "O salto evolutivo gigantesco exige o uso de matrizes que 'aceitam' e 'perdoam' muitas mutações radicais na proteína (BLOSUM de numeração baixa ou PAM de numeração alta).",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Substituição e Filogenia",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_247",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Epidemiologia Prática",
    "subtopic": "Viés de Simpson",
    "difficulty": "hard",
    "statement": "Uma reportagem acusa o Hospital Prado Valadares de ter letalidade elevada por Zikavirus baseada em totais do TABNET estadual. O epidemiologista refaz a análise baixando microdados no Pandas e aplicando estratificação por nível de comorbidade da vítima. Na estratificação fina, a letalidade do Hospital Prado Valadares cai para níveis de excelência, invertendo a tendência macro. O que explica o fenômeno?",
    "options": {
      "A": "Viés de Seleção de Consentimento.",
      "B": "Paradoxo de Simpson. Em dados agregados brutos o Hospital Prado Valadares parecia pior porque recebe a quase totalidade das urgências hipergraves do estado (variável oculta).",
      "C": "Alucinação da inteligência do TABNET.",
      "D": "Viés de Regressão Polinomial.",
      "E": "Erro na inserção do código FASTA no prontuário."
    },
    "answer": "B",
    "explanation": "O Paradoxo de Simpson exemplifica que dados brutos (agrupados) costumam mascarar quem assume o verdadeiro risco grave, parecendo que o melhor hospital mata mais, quando na verdade ele opera quem já chega pior.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Riscos de Tabelas Agregadas",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_248",
    "module": 4,
    "moduleName": "DATASUS e Python",
    "topic": "Ferramentas",
    "subtopic": "Pandas Merge",
    "difficulty": "medium",
    "statement": "Para avaliar a morte materno-infantil decorrente do surto de Zikavirus nas imediações do Hospital Santa Casa, o Data Scientist de saúde necessita cruzar as certidões de nascidos vivos e atestados de óbito. Em linguagem Python (Pandas), qual a estratégia algorítmica exata?",
    "options": {
      "A": "df.dropna(axis=0) seguido de AlphaFold.",
      "B": "Uso extensivo do TABNET local em nuvem SQL.",
      "C": "Importar DataFrames do SIM e do SINASC, em seguida acoplar as duas tabelas horizontalmente usando pd.merge() atrelado a uma chave-mestra comum (ex: Município ou ID_Mãe).",
      "D": "BLASTp nas colunas de evolução clínica textual.",
      "E": "sort_values() e concat()."
    },
    "answer": "C",
    "explanation": "A unificação de sistemas paralelos no SUS ocorre através de Dataframes e operações relacionais de Join (`pd.merge`), fundamental para gerar indicadores cruzados.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Merge de Bancos SUS",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_249",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Governança de Dados",
    "subtopic": "Singularidade Genômica",
    "difficulty": "hard",
    "statement": "Visando não ferir a LGPD, os técnicos do Hospital Santa Casa suprimem CPF e CEP de 1000 amostras exômicas de pacientes diagnosticados com Câncer de Mama Hereditário antes de hospedá-las no portal global dbGaP. Uma banca de Bioética condena a ação afirmando que os dados ainda são 'Dados Sensíveis e Identificáveis'. Por quê?",
    "options": {
      "A": "A LGPD considera VCF como documento cartorário público.",
      "B": "É crime exportar dados de brasileiros sob qualquer prerrogativa de pesquisa.",
      "C": "Porque o genoma humano completo é uma biometria singular e irreplicável. Através de algoritmos genealógicos modernos, a re-identificação cruzada por laços familiares expõe o indivíduo, impossibilitando a anonimização cibernética absoluta.",
      "D": "Porque exigia a conversão para PDF.",
      "E": "A falha está na falta de uso do formato FASTA."
    },
    "answer": "C",
    "explanation": "A anonimização em genética é frequentemente uma ilusão técnica. O DNA é seu RG absoluto. O trato legal sempre deve ser na esfera do alto rigor de dado pessoal sensível.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Identificação Genealógica e LGPD",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_250",
    "module": 5,
    "moduleName": "IA e Ética",
    "topic": "Responsabilidade e Redes",
    "subtopic": "IA Explicável (XAI)",
    "difficulty": "medium",
    "statement": "A implementação de Inteligência Artificial para gestão de leitos de SARS-CoV-2 no Hospital Prado Valadares foi judicialmente embargada. O magistrado e a diretoria médica apontaram o 'Efeito Caixa-Preta' inerente ao modelo convolucional do Deep Learning. Qual a ramificação corretiva aplicada pela engenharia biomédica para essa barreira legal?",
    "options": {
      "A": "Uso de Dataframes menores.",
      "B": "Aplicação de IA Explicável (XAI), utilizando algoritmos mapeadores (como valores SHAP/LIME) que abrem a rede neural traduzindo visualmente em quais exames vitais a máquina baseou matematicamente sua inferência.",
      "C": "Treinamento underfitting acelerado.",
      "D": "Cópia dos dados de treinamento do Hemisfério Norte para mitigar viés geográfico.",
      "E": "Troca por algoritmos do NCBI BLAST."
    },
    "answer": "B",
    "explanation": "Modelos profundos (Deep Learning) falham em explicar seus raciocínios. O setor de XAI surgiu para auditar essas inferências, dando base legal à recomendação clínica da IA.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Dilema Black Box",
    "mainReference": "Apostila"
  },
  {
    "id": "BIO_251",
    "module": 6,
    "moduleName": "Integração",
    "topic": "Fluxos Operacionais",
    "subtopic": "Ecossistema SUS vs NCBI",
    "difficulty": "easy",
    "statement": "Um estagiário recebe da supervisão uma pasta mista com 2 relatórios. Relatório 1: Série temporal em formato textual descrevendo altas de Zikavirus em 2026. Relatório 2: Arquivo em formato FASTA de 50 sequências do gene DMD. A diretriz de pipeline correto impõe que:",
    "options": {
      "A": "Ambos devem subir no TABNET do SUS.",
      "B": "Relatório 1 é formatado no Pandas/TABNET (Demografia da Saúde Pública). O Relatório 2 é operado no BLAST ou software de alinhamento em bancos do NCBI (Bioinformática Estrutural e Molecular).",
      "C": "Relatório 2 vai para o SIA-SUS.",
      "D": "O BLAST processa as altas temporais para traçar filogenia social.",
      "E": "O PySUS executa as sequências FASTA cruzando-as com o SRA."
    },
    "answer": "B",
    "explanation": "A segregação do ferramental: Bases de Saúde Pública usam Data Science e TABNET. Bases de Sequência Biomolecular usam BLAST, NCBI e Linux genômico.",
    "optionExplanations": {
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "concept": "Ferramentas Integradas",
    "mainReference": "Apostila"
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
