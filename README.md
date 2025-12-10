# Site Negócios Digitais

Site institucional da área de Negócios Digitais da DEXCO, especializada em tecnologia para o setor florestal.

## 🚀 Deploy Automático

Este projeto está configurado para fazer deploy automático no GitHub Pages sempre que houver um push na branch `main` ou `master`.

### Como ativar o GitHub Pages:

1. Vá até as **Settings** do seu repositório no GitHub
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione:
   - **Branch**: `main` (ou `master`)
   - **Folder**: `/ (root)`
4. Clique em **Save**

### Como funciona:

- O workflow do GitHub Actions (`.github/workflows/deploy.yml`) é acionado automaticamente quando você faz push na branch principal
- O site será publicado em: `https://[seu-usuario].github.io/[nome-do-repositorio]/`

### Estrutura do Projeto

```
.
├── index.html          # Página principal
├── style.css          # Estilos
├── script.js          # JavaScript principal
├── productsData.js    # Dados dos produtos
├── .github/
│   └── workflows/
│       └── deploy.yml # Workflow de deploy automático
└── README.md
```

### Desenvolvimento Local

Para visualizar o site localmente, basta abrir o arquivo `index.html` em um navegador ou usar um servidor local:

```bash
# Com Python
python -m http.server 8000

# Com Node.js
npx serve
```

## 📝 Notas

- Certifique-se de que todos os arquivos necessários (imagens, vídeos, etc.) estão commitados no repositório
- O deploy pode levar alguns minutos após o push
- Você pode verificar o status do deploy na aba **Actions** do GitHub

