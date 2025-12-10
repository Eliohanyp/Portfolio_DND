// --- DADOS DOS PRODUTOS DEXCO ---
var productsData = [
    {
        id: "dx-forest",
        category: "Inteligência Geográfica / Machine Learning",
        title: "DX AI - Forest Vision",
        tagline: "Monitoramento Inteligente de Qualidade Florestal",
        description: "Plataforma completa de inteligência geográfica para monitoramento de qualidade e sobrevivência florestal com visão computacional avançada.",
        fullDescription: "Solução Web GIS completa para o ciclo de qualidade florestal, desde o backend FastAPI até o frontend com Leaflet, além de todos os pipelines de visão computacional. A plataforma permite inputar talhão, recortar ortomosaicos, rodar todo o processamento (detecção de plantas, análise de heterogeneidade, falhas, linhas/entrelinhas e matocompetição), editar manualmente os resultados no mapa e analisar indicadores em dashboard, com possibilidade de compartilhamento via relatórios PDF. Todo o fluxo – talhão -> recortar -> processar -> editar -> analisar -> compartilhar – foi desenhado e implementado, integrando banco de dados espacial, algoritmos geométricos e modelos de deep learning.",
        technicalSolution: "Arquitetura **FastAPI** com **SQLite/SpatiaLite** para dados espaciais, utilizando **SQLAlchemy + GeoAlchemy2** para modelagem de Unidades/Fazendas/Talhões e camadas derivadas. No frontend, aplicação **HTML/JavaScript** usando **Leaflet** e **Turf.js** para visualização e edição vetorial em mapas interativos. Pipelines de visão computacional com **YOLOv8 (Ultralytics)** para detecção censitária de plantas, modelos de segmentação em **PyTorch/Segmentation Models** para detecção e segmentação de linhas e entrelinhas, e rotinas com **GeoPandas/Rasterio/Shapely** para: análise de heterogeneidade das plantas (variação de copa/densidade), cálculo de falhas de plantio ao longo das linhas (gaps vs espaçamento esperado) e mapeamento de matocompetição, removendo previamente a copa das árvores para isolar apenas o mato. Todo o processamento pesado roda em tarefas assíncronas via **BackgroundTask** do Starlette, garantindo responsividade da API mesmo em grandes ortomosaicos.",
        image: "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/dxforestvision_thumb_5.png",
        images: [
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/dxforestvision_thumb_2.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/dxforestvision_thumb_3.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/dxforestvision_thumb.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/dxforestvision_thumb_5.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/dxforestvision_thumb_7.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/dxforestvision_thumb_6.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/dxforestvision_thumb_8.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/dxforestvision_thumb_4.png"
        ],
        imageTitles: [
            "Tela de Login",
            "Visualização de Mapas",
            "Análise e Estatisticas Gerais",
            "Detecção de Plantas, Falhas e Heterogeneidade",
            "Detecção de Matocompetição",
            "Detecção de Linhas de Plantio",
            "Distinção das Linhas e Entrelinhas",
            "Resultados em PDF"
        ],
        features: [
            "Detecção automática de plantas com YOLOv8",
            "Análise de heterogeneidade e falhas de plantio",
            "Mapeamento de matocompetição em linhas/entrelinhas",
            "Edição manual de resultados em mapas interativos",
            "Dashboards com indicadores em tempo real",
            "Geração automática de relatórios PDF",
            "Processamento assíncrono de grandes ortomosaicos",
            "Integração com bancos de dados espaciais"
        ],
        benefits: [
            "Redução de 80% no tempo de análise de qualidade",
            "Padronização completa do processo técnico",
            "Insights acionáveis em poucos cliques",
            "Rastreabilidade completa do ciclo de qualidade",
            "Escalável para grandes volumes de dados"
        ],
        useCases: [
            "Monitoramento de sobrevivência florestal",
            "Análise de qualidade de plantio",
            "Detecção de falhas e heterogeneidade",
            "Mapeamento de matocompetição",
            "Geração de relatórios técnicos automatizados"
        ],
        results: "Consolidação, em um único produto, de todo o processo de análise de qualidade florestal que antes era manual e fragmentado em diversas ferramentas. A automação da contagem de plantas, da análise de heterogeneidade, da detecção de falhas e da matocompetição em linhas/entrelinhas reduziu drasticamente o tempo de análise e padronizou o processo técnico, permitindo que qualquer analista parta diretamente de ortomosaicos brutos até insights acionáveis e relatórios formais em poucos cliques.",
        architecture: "Sistema monolítico com **backend FastAPI** expondo APIs REST para gestão de usuários, unidades, fazendas, talhões, uploads de ortomosaicos e camadas derivadas, usando **SQLite/SpatiaLite** como banco espacial local (com opção de migração para **Databricks SQL** em produção). O frontend é um cliente **HTML/JS** estático que consome essas APIs, com **Leaflet** para renderização de ortomosaicos (GeoTIFF/COG), vetores (talhões, linhas, deteções, falhas, matocompetição) e ferramentas de desenho/edição. Implementado todo o pipeline assíncrono (clipping de talhão em grids, detecção de plantas, segmentação de linhas, análise de falhas, geração de máscaras de matocompetição e cálculo de estatísticas) em funções Python orquestradas por **BackgroundTask**, além da geração de relatórios PDF customizados com gráficos e mapas.",
        technologies: {
            "Backend": ["FastAPI", "Python", "SQLite", "SpatiaLite", "SQLAlchemy", "GeoAlchemy2", "Pydantic", "Starlette BackgroundTask"],
            "Frontend": ["HTML5", "JavaScript", "Leaflet", "Leaflet.Draw", "Turf.js"],
            "ML/AI & Geoespacial": ["YOLOv8 (Ultralytics)", "PyTorch", "Segmentation Models PyTorch", "GeoPandas", "Rasterio", "rioxarray", "Shapely", "PyProj", "scikit-image", "OpenCV"],
            "Relatórios & Utilitários": ["ReportLab", "Matplotlib", "NumPy", "SciPy", "NetworkX", "python-dotenv"],
            "DevOps / Integrações": ["boto3 (AWS S3)", "Databricks SQL Connector"]
        },
        tags: ["Web GIS","Python","JavaScript","OpenCV","PyTorch","scikit-image", "FastAPI", "YOLOv8", "Leaflet", "PostGIS", "GeoPandas","Matplotlib","SQLAlchemy"]
    },
    {
        id: "monitoring-adult-forests",
        category: "Análise Geoespacial / Monitoramento",
        title: "Sistema de Classificação de Florestas Adultas",
        tagline: "Monitoramento Inteligente de Saúde Florestal",
        description: "Plataforma completa de inteligência geoespacial para monitoramento e classificação de saúde florestal em florestas adultas com análise estatística multivariada.",
        fullDescription: "Solução Web GIS completa para monitoramento contínuo de florestas adultas, desde o pipeline de processamento de dados de satélite Sentinel-2 até a interface web interativa com mapas e dashboards. A plataforma permite filtrar talhões por múltiplos critérios (Unidade, Fazenda, Quadra, Material Genético, Solo, período), visualizar classificações em mapas interativos com camadas de satélite, analisar indicadores de conformidade em dashboards com gráficos de séries históricas e distribuições, e explorar dados detalhados de cada talhão. Todo o fluxo – aquisição de dados Sentinel-2 -> pré-processamento -> análise PCA -> geração de benchmarks hierárquicos -> classificação estatística -> visualização interativa – foi desenhado e implementado, integrando processamento de big data geoespacial, análise estatística multivariada e visualização web interativa.",
        technicalSolution: "Arquitetura **Streamlit** para frontend web com **Folium** e **streamlit-folium** para renderização de mapas interativos com múltiplas camadas (CartoDB, Google Satellite, Esri Satellite) e ferramentas de visualização geoespacial. No backend, pipeline completo de análise estatística usando **Pandas** e **GeoPandas** para manipulação de dados geoespaciais massivos (centenas de milhares de registros), **scikit-learn** para **PCA (Análise de Componentes Principais)** para reduzir multicolinearidade entre índices de vegetação (NDVI, EVI, SAVI, etc.) e extrair componentes de Vigor (PC1) e Variabilidade (PC2), e **SciPy** para cálculos estatísticos avançados (distribuição-t, margem de erro). Sistema hierárquico de 4 níveis de benchmarks estatísticos com fallback automático: Nível 1 (Solo + Material Genético + Sazonalidade), Nível 2 (Solo + Sazonalidade), Nível 3 (Material Genético + Sazonalidade) e Nível 4 (Global Sazonal), garantindo 100% de cobertura mesmo com dados limitados. O sistema processa dados históricos completos de ciclos e rotações, vinculando cada imagem de satélite à sua rotação vigente correta, e classifica talhões em 4 categorias (Superávit, Conforme, Alerta, Crítico) baseado em resíduos estatísticos e detecção de quedas significativas de performance.",
        image: "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/moni_adult_thumb_3.png",
        images: [
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/moni_adult_thumb_10.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/moni_adult_thumb_3.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/moni_adult_thumb_9.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/moni_adult_thumb_4.png"
        ],
        imageTitles: [
            "Tela Principal",
            "Visualização das Classificações",
            "Estatisticas Gerais",
            "Dados Detalhados"
        ],
        features: [
            "Processamento de dados Sentinel-2 em tempo real",
            "Análise PCA para redução de multicolinearidade",
            "Sistema hierárquico de benchmarks adaptativos",
            "Classificação em 4 categorias (Superávit, Conforme, Alerta, Crítico)",
            "Dashboards interativos com séries históricas",
            "Mapas interativos com múltiplas camadas",
            "Processamento de mais de 136 mil registros históricos",
            "Fallback automático para garantir 100% de cobertura"
        ],
        benefits: [
            "Monitoramento contínuo de saúde florestal",
            "Detecção precoce de problemas",
            "Classificações estatisticamente robustas",
            "Visualizações interativas e intuitivas",
            "Processamento eficiente de big data geoespacial"
        ],
        useCases: [
            "Monitoramento de florestas adultas",
            "Análise de conformidade florestal",
            "Detecção de quedas de performance",
            "Análise de séries temporais",
            "Gestão de qualidade florestal"
        ],
        results: "Consolidação, em um único produto web, de todo o processo de monitoramento de florestas adultas que antes era fragmentado e manual. A automação da análise estatística multivariada, da geração de benchmarks hierárquicos adaptativos e da classificação baseada em resíduos reduziu drasticamente o tempo de análise e padronizou o processo técnico, permitindo que qualquer analista parta diretamente de dados brutos de satélite até insights acionáveis e visualizações interativas em poucos cliques. O sistema processa mais de 136 mil registros históricos, vinculando corretamente cada imagem à sua rotação vigente, e gera classificações estatisticamente robustas mesmo para talhões com dados limitados, graças ao sistema de fallback hierárquico.",
        architecture: "Sistema monolítico com **frontend Streamlit** expondo interface web interativa com filtros dinâmicos (Unidade, Fazenda, Quadra, Classificação, Material Genético, Solo, Ano-Mês), mapas Folium com múltiplas camadas de tiles e visualização de geometrias classificadas por cor, e dashboards com **Plotly** para gráficos de barras empilhadas, gráficos de pizza e séries históricas. O backend processa dados massivos em **Parquet/GeoParquet** (mais de 400MB de dados geoespaciais), utilizando **GeoPandas** para manipulação espacial e **Pandas** para agregações complexas. Implementado todo o pipeline de análise estatística (unificação de dados históricos, filtragem por janela de idade, PCA, geração de benchmarks hierárquicos com margem de erro estatística, classificação baseada em resíduos e detecção de quedas) em funções Python modulares, além de relatórios de validação automáticos e visualizações de insights do PCA (scree plots, heatmaps de loadings).",
        technologies: {
            "Frontend": ["Streamlit", "Folium", "streamlit-folium", "Plotly Express", "HTML/CSS"],
            "Backend & Processamento": ["Python", "Pandas", "GeoPandas", "NumPy", "SciPy"],
            "Machine Learning & Estatística": ["scikit-learn (PCA, StandardScaler)", "SciPy.stats (distribuição-t)"],
            "Geoespacial": ["GeoPandas", "Shapely", "WKT", "Parquet/GeoParquet"],
            "Visualização": ["Plotly", "Matplotlib", "Seaborn"],
            "Dados": ["Parquet", "GeoParquet", "CSV", "Sentinel-2 (COPERNICUS/S2_SR_HARMONIZED)"],
            "DevOps": ["Streamlit Cloud/Server"]
        },
        tags: [
            "Web GIS",
            "Streamlit",
            "PCA",
            "Folium",
            "GeoPandas",
            "Monitoramento Florestal",
            "Análise Estatística",
            "Sentinel-2",
            "Benchmarks Hierárquicos",
            "Classificação de Saúde Florestal",
            "Análise de Séries Temporais"
        ]
    },
    {
        id: "sujidade-cargas",
        category: "Visão Computacional / IoT / Analytics",
        title: "Sistema de AI para Monitoramento de Sujidade",
        tagline: "Controle Inteligente de Qualidade de Cargas",
        description: "Solução de visão computacional e IoT para monitoramento automático de sujidade (folhas, galhos e cascas) em caminhões de madeira, integrando hardware na portaria e processamento em nuvem.",
        fullDescription: "Sistema Full-Stack de monitoramento da qualidade da madeira na entrada da fábrica. O projeto automatizou a detecção dos principais ofensores de qualidade (folhas, galhos e cascas), que antes eram avaliados de forma subjetiva ou manual. A solução captura imagens dos caminhões por meio de um pórtico instrumentado, processa a segmentação das toras e resíduos utilizando modelos de Deep Learning e disponibiliza os dados em uma plataforma web para gestão logística e de qualidade. O sistema garante a rastreabilidade da carga desde a fazenda até a linha de produção, permitindo correlacionar a qualidade da madeira com as paradas de fábrica.",
        technicalSolution: "Arquitetura de hardware consiste em um poste equipado com **câmeras**, iluminação LED dedicada e sensores de gatilho (trigger) conectados a um **Computador** local. No backend, o processamento ocorre em servidor **AWS**, onde algoritmos de segmentação analisam a carga entre 30 a 90 segundos. Para a validação estatística, modelo de **Regressão Multivariada** que captura relações não lineares em dados dispersos, elevando a explicabilidade (R²) do modelo de 27% para 73% e reduzindo o erro médio. O sistema integra dados de pesagem e classificação visual para calibração contínua.",
        image: "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/sujidade_thumb_3.png",
        images: [
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/sujidade_thumb_7.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/sujidade_thumb_9.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/sujidade_thumb_3.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/sujidade_thumb_8.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/sujidade_thumb_2.jpg",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/sujidade_thumb_4.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/sujidade_thumb_5.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/sujidade_thumb_6.png"
        ],
        imageTitles: [
            "Fluxo Visual",
            "Infraestrutura Simples na Portaria",
            "Exemplo de Detecção da Sujidade",
            "Carga Diurna",
            "Carga Noturna",
            "Power BI (Visualização da Detecção)",
            "Power BI (Entrada de Sujeira nas Linhas de Produção)",
            "Power BI (Análise de Sujidade por Fazenda e Talhão)"
        ],
        features: [
            "Captura automática de imagens de caminhões",
            "Segmentação de toras e resíduos com Deep Learning",
            "Processamento em nuvem (AWS) em 30-90 segundos",
            "Regressão multivariada com R² de 73%",
            "Rastreabilidade completa da carga",
            "Dashboards em Power BI para análise estratégica",
            "Correlação com paradas de fábrica",
            "Calibração contínua com dados de pesagem"
        ],
        benefits: [
            "91,6% de rastreabilidade completa das cargas",
            "Melhoria de 46% na explicabilidade do modelo",
            "Redução de paradas de fábrica",
            "Gerenciamento otimizado de pátio",
            "Decisões baseadas em dados reais"
        ],
        useCases: [
            "Monitoramento de qualidade na entrada da fábrica",
            "Controle de sujidade em cargas de madeira",
            "Análise de correlação com paradas de produção",
            "Gestão logística e de qualidade",
            "Auditoria física de cargas"
        ],
        results: "A solução validou a premissa de 'Melhor madeira no melhor momento', atingindo 91,6% rastreabilidade completa das cargas pelo sistema. A mudança na abordagem estatística para regressão multivariada resultou em uma melhoria de 46% na explicabilidade da variável de sujidade. O sistema processou milhares de toneladas e com as aberturas de carga (921 toneladas em auditoria física), provamos a correlação entre a imagem processada e a realidade física, permitindo um gerenciamento de pátio otimizado baseado na qualidade real da matéria-prima.",
        architecture: "Sistema opera em uma arquitetura de Borda-Nuvem (Edge-to-Cloud). Na borda (Edge), a infraestrutura de portaria captura e pré-processa os eventos de entrada de caminhões. Os dados são transmitidos para a nuvem **AWS**, onde reside o pipeline de **Visão Computacional** e a base de dados. A camada de apresentação é feita através da plataforma web para operação em tempo real e **Dashboards em Power BI** para análise estratégica (Séries temporais de sujidade, análise por fazenda/talhão e correlação com paradas de fábrica). O sistema prevê integração via API com sistemas legados de gestão florestal (INFLOR).",
        technologies: {
            "Hardware & IoT": ["Câmeras IP", "Sensores Trigger", "Iluminação LED"],
            "Backend & Cloud": ["AWS (Amazon Web Services)", "Python", "Processamento de Imagens", "APIs REST"],
            "Machine Learning & Estatística": ["Regressão Multivariada", "Segmentação de Imagens (Deep Learning)", "Análise de Dispersão"],
            "Frontend & Visualização": ["Plataforma Web", "Power BI / Dashboards"],
            "Integrações": ["INFLOR (Planejado)", "Sistemas de Balança"]
        },
        tags: [
            "Visão Computacional",
            "Monitoramento Logístico",
            "Indústria 4.0",
            "Machine Learning",
            "AWS",
            "Gestão de Pátio",
            "Controle de Qualidade",
            "IoT",
            "Regressão Estatística",
            "Inovação Florestal"
        ]
    },
    {
        id: "melhoramento-genetico",
        category: "Análise Estatística / Geoespacial",
        title: "Sistema de Análise de Melhoramento Genético",
        tagline: "Análise Avançada de Experimentos Florestais",
        description: "Plataforma completa de análise estatística e geoespacial para experimentos de melhoramento genético florestal com visualizações interativas avançadas.",
        fullDescription: "Solução web completa para análise de experimentos de melhoramento genético florestal, desde o processamento de dados brutos de campo até análises estatísticas avançadas e visualizações geoespaciais interativas. A plataforma permite fazer upload de dados experimentais (DAP, Altura, Idade, Códigos de qualidade), processar e calcular automaticamente volumes (CC e SC), Incremento Médio Anual (IMA), percentuais de códigos de qualidade (A, B, F, I, L, M, Q), ganho relativo por material genético comparado à testemunha, e gerar múltiplas bases de dados processadas. O sistema integra análise geoespacial através de croqui de campo, mapeando parcelas experimentais em coordenadas espaciais, permitindo visualização do layout do campo, análise por parcela com filtros dinâmicos, e visualização individual de árvores dentro de cada parcela usando grids customizáveis (3x3, 5x1, 10x4, etc.).",
        technicalSolution: "Arquitetura **Streamlit** para frontend web com interface interativa para upload de arquivos Excel, processamento de dados e visualizações. No backend, pipeline completo de análise estatística usando **Pandas** para manipulação de dados experimentais massivos, **NumPy** para cálculos vetorizados de volumes florestais (fórmulas específicas para Volume CC e SC baseadas em DAP e Altura), e agregações complexas por Material e Bloco. Funções especializadas para cálculo de volumes usando equações alométricas específicas, cálculo de IMA (Incremento Médio Anual) considerando espaçamento e idade, e processamento de códigos de qualidade florestal (A, B, F, I, L, M, Q) com cálculo de percentuais. Sistema de processamento de croqui espacial que lê arquivos Excel com layout de campo, identifica automaticamente blocos e parcelas, mapeia coordenadas espaciais (x, y) para cada parcela, e determina o bloco de cada parcela baseado em posição espacial.",
        image: "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_4.png",
        images: [
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_2.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_3.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_4.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_5.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_6.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_7.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_8.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_9.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_10.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_11.png"
        ],
        imageTitles: [
            "Interface Principal e Upload de Dados",
            "Preview CROQUI e Input de Dados da Testemunha",
            "Download dos Dados Processados, Estatisticas Básicas e Gráfico IMA",
            "Ganho Relativo à Testemunha e HotSpot de IMA por Bloco",
            "Grafico Interativo deMétricas Médias e Radar de Qualidade",
            "Visualização da Distribuição de Variáveis por Histograma",
            "Visualização da Distribuição de Variáveis por Dispersão",
            "Visualização da Distribuição de Variáveis por BoxPlot",
            "Visualização dos Dados em Croqui Espacial",
            "Croqui Interativo com Grid Customizável",
            "Comparação dos Resultados de Forma Interativa e Visual"
        ],
        features: [
            "Processamento automático de dados experimentais",
            "Cálculo de volumes CC e SC com equações alométricas",
            "Cálculo de IMA (Incremento Médio Anual)",
            "Análise de códigos de qualidade florestal",
            "Cálculo de ganho relativo à testemunha",
            "Visualização geoespacial com croqui de campo",
            "Grids customizáveis para análise intra-parcela",
            "Geração de múltiplas bases processadas"
        ],
        benefits: [
            "Redução de 90% no tempo de análise",
            "Padronização completa do processo",
            "Visualizações interativas avançadas",
            "Análise detalhada intra-parcela",
            "Identificação de padrões espaciais de performance"
        ],
        useCases: [
            "Análise de experimentos de melhoramento genético",
            "Comparação de materiais genéticos",
            "Análise de performance por parcela",
            "Visualização geoespacial de experimentos",
            "Geração de relatórios técnicos"
        ],
        results: "Consolidação, em um único produto web, de todo o processo de análise de experimentos de melhoramento genético que antes era fragmentado e manual. A automação do processamento estatístico, do cálculo de volumes e IMA, da análise de códigos de qualidade, e da integração geoespacial reduziu drasticamente o tempo de análise e padronizou o processo técnico, permitindo que qualquer analista parta diretamente de dados brutos de campo até insights acionáveis e visualizações interativas em poucos cliques. A visualização geoespacial avançada com grids customizáveis permite análise detalhada intra-parcela, identificando padrões espaciais de performance que não seriam visíveis em análises tradicionais.",
        architecture: "Sistema monolítico com **frontend Streamlit** expondo interface web interativa com upload de arquivos Excel (dados experimentais e croqui), seleção dinâmica de testemunha a partir dos materiais únicos do arquivo, e processamento on-demand com validação de inputs. O backend processa dados em **Pandas DataFrames**, utilizando funções especializadas para cada etapa: adicionar colunas de códigos de qualidade, calcular fustes válidos, calcular volumes CC e SC usando equações alométricas, calcular IMA considerando espaçamento e idade, agregar dados por Material e Bloco, calcular percentuais e métricas por hectare, e calcular ganho relativo comparado à testemunha. Implementado processamento de croqui espacial que lê Excel com layout de campo, identifica blocos e parcelas, mapeia coordenadas espaciais, e integra com dados experimentais via merge por Parcela.",
        technologies: {
            "Frontend": ["Streamlit", "Plotly Express", "Plotly Graph Objects", "HTML/CSS"],
            "Backend & Processamento": ["Python", "Pandas", "NumPy"],
            "Análise Estatística": ["NumPy (cálculos vetorizados)", "Pandas (agregações complexas)", "Regressão Linear (np.polyfit)"],
            "Visualização": ["Plotly Express", "Plotly Graph Objects", "Matplotlib", "Seaborn"],
            "Dados": ["Excel (xlsxwriter)", "CSV", "BytesIO"],
            "Geoespacial": ["Processamento de Croqui", "Mapeamento de Coordenadas", "Análise Espacial"],
            "DevOps": ["Streamlit Server"]
        },
        tags: [
            "Melhoramento Genético",
            "Streamlit",
            "Análise Experimental",
            "Análise Geoespacial",
            "Plotly",
            "Pandas",
            "Análise Florestal",
            "Volume Florestal",
            "IMA",
            "Cálculo Alométrico",
            "Visualização Interativa"
        ]
    },
    {
        id: "florestal-microplanejamento",
        category: "Plataforma Web&Mobile / Offline-First",
        title: "Sistema de Microplanejamento Florestal",
        tagline: "Planejamento Florestal Offline e Multi-Dispositivo",
        description: "Plataforma completa de microplanejamento florestal com arquitetura híbrida WEB (React) e MOBILE OFFLINE (React + Capacitor + IndexedDB), backend FastAPI com PostgreSQL/PostGIS, sistema de sincronização incremental multi-dispositivo com resolução de conflitos.",
        fullDescription: "Plataforma completa de microplanejamento florestal para florestas, com um painel web (React + FastAPI) para administradores/planejadores e um app mobile offline (React + Capacitor + IndexedDB) para equipes de campo. O backend em FastAPI expõe APIs REST com JWT, usa PostgreSQL/PostGIS para dados geoespaciais em grande escala, versionamento de projetos e fila assíncrona (Redis) para geração de PDFs. O front web traz mapas interativos (Leaflet), desenho e edição de features, filtros por região/fazenda/quadra, estilos de mapeamento e suporte a PWA. O app mobile é offline-first, com sincronização incremental baseada em log de operações, detecção e resolução de conflitos multi-dispositivo e cache de tiles de satélite.",
        technicalSolution: "Arquitetura multi-camada separando backend em Python, frontend em React (compartilhado entre Web e Mobile) e camada de dados centralizada. No backend, APIs organizadas por domínio (autenticação, projetos, sincronização, exportação, dados), com segurança em múltiplas camadas, controle de acesso por perfil (admin/usuário) e trilha de auditoria de todas as operações feitas nos projetos. Os projetos são armazenados em banco relacional com suporte geoespacial e campos flexíveis para geometrias, nomes, filtros e observações, sempre versionados para permitir histórico e sincronização confiável. A sincronização incremental permite que várias equipes e dispositivos trabalhem offline em campo e, depois, enviem suas alterações, com detecção de conflitos entre versões e ferramentas para resolvê-los de forma segura.",
        image: "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_9.png",
        images: [
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_4.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_3.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_2.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_5.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_1.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_6.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_11.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_7.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_8.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_9.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_10.png"
        ],
        imageTitles: [
            "Tela Login",
            "Tela de Projetos",
            "Seleção de Subáreas",
            "Galeria de Estilos",
            "Tela de Edição de Projeto",
            "Modal de Estilos",
            "Extração dePDF",
            "Login Mobile",
            "Tela de Projetos Mobile",
            "Tela de Edição de Projeto Mobile",
            "Visualização de Legenda e Mapa Mobile",
            "Modal de Estilos Mobile"
        ],
        features: [
            "Aplicativo mobile offline-first para campo",
            "Sincronização incremental multi-dispositivo",
            "Detecção e resolução automática de conflitos",
            "Cache de tiles de satélite para uso offline",
            "Mapas interativos com Leaflet",
            "Geração assíncrona de relatórios PDF",
            "Versionamento completo de projetos",
            "Trilha de auditoria de todas as operações"
        ],
        benefits: [
            "Trabalho offline por dias ou semanas",
            "Sincronização eficiente (apenas deltas)",
            "Múltiplos dispositivos editando simultaneamente",
            "Experiência nativa-like no mobile",
            "Processamento otimizado de grandes volumes"
        ],
        useCases: [
            "Microplanejamento florestal em campo",
            "Mapeamento de subáreas (Segurança, Meio Ambiente, Estradas)",
            "Edição offline de features geoespaciais",
            "Geração de relatórios técnicos",
            "Gestão de projetos florestais"
        ],
        results: "Consolidação, em uma única plataforma unificada, de todo o fluxo de microplanejamento florestal que antes era fragmentado entre sistemas desktop, planilhas Excel e processos manuais. A arquitetura offline-first do mobile permite que equipes de campo trabalhem completamente desconectadas por dias ou semanas, mapeando subáreas, desenhando features geoespaciais (pontos de segurança, estradas, áreas de preservação, etc.), completando categorias, e adicionando observações, tudo persistido localmente com garantia de não-perda de dados mesmo em caso de crash ou bateria descarregada. Quando há conectividade, a sincronização incremental envia apenas as operações realizadas (deltas), não o projeto completo, reduzindo drasticamente uso de banda e tempo de sync mesmo para projetos com milhares de features.",
        architecture: "Arquitetura **híbrida cliente-servidor** com separação clara de responsabilidades. **BACKEND**: FastAPI rodando em uvicorn (ou Gunicorn + UvicornWorker em produção) expondo APIs RESTful na porta 8000, estrutura modular com routers separados (autenticação, projetos, sincronização, exportação, dados), services layer com lógica de negócio, database layer com pool de conexões thread-safe e circuit breaker, e background workers processando fila de jobs Redis para PDFs pesados. **FRONTEND WEB**: Build estático React servido por Nginx com SPA routing, Service Worker para cache de assets (PWA), proxy reverso no Nginx para /api/* apontando para backend FastAPI. **FRONTEND MOBILE**: Build React idêntico ao web com flag `REACT_APP_BUILD_TARGET=MOBILE` ativando comportamentos offline, empacotado via Capacitor gerando projeto Android nativo. O IndexedDB (Dexie) persiste dados localmente com schema versionado permitindo migrações automáticas, transações ACID para operações atômicas, queries indexadas para performance.",
        technologies: {
            "Backend": ["FastAPI (async web framework)", "Python 3.10+", "PostgreSQL 12+ com PostGIS", "Redis (job queue)", "JWT (autenticação)"],
            "Frontend Web": ["React 18.2", "React Router DOM 7.9", "Zustand 5.0 (state management)", "Leaflet 1.9.4 (mapas)", "Service Worker (PWA)"],
            "Frontend Mobile": ["React 18.2", "Capacitor 7.4 (wrapper nativo)", "Dexie.js 4.2 (IndexedDB wrapper)", "leaflet.offline 3.1 (cache de tiles)", "Android SDK"],
            "Processamento de Dados": ["Pandas", "GeoPandas", "NumPy", "Shapely"],
            "Geração de PDFs": ["ReportLab", "Matplotlib", "GeoPandas"],
            "Banco de Dados": ["PostgreSQL 12+", "PostGIS", "JSONB", "Índices GIST"],
            "Infraestrutura": ["Docker & Docker Compose", "Nginx", "Redis", "Let's Encrypt (SSL/TLS)"],
            "Segurança": ["JWT", "bcrypt", "CORS", "Rate Limiting", "HTTPS/TLS"]
        },
        tags: [
            "FastAPI",
            "React",
            "PostgreSQL",
            "PostGIS",
            "IndexedDB",
            "Dexie.js",
            "Capacitor",
            "Leaflet",
            "Offline-First",
            "Sincronização Multi-Dispositivo",
            "GIS",
            "Microplanejamento Florestal"
        ]
    }
];

