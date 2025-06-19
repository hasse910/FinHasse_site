# Projeto Finhasse

Este é o repositório do código-fonte para o projeto Finhasse.

**URL do Projeto**: https://finhasse.com.br/

## Como editar este projeto

Você pode editar o código-fonte localmente em seu computador usando seu editor de preferência (como o VS Code).

### Pré-requisitos

Para rodar este projeto localmente, a única exigência é ter o **Node.js** e o **npm** instalados.

* **Recomendado:** Instale através do site oficial do [Node.js](https://nodejs.org/) (versão LTS).

### Passos para o Ambiente de Desenvolvimento

Siga os passos abaixo para rodar o site em sua máquina.

```sh
# 1. Clone o repositório para o seu computador
git clone https://github.com/hasse910/FinHasse_site.git

# 2. Navegue até a pasta do projeto que foi criada
cd finhasse

# 3. Instale as dependências do projeto
# (Isso baixará todos os pacotes listados no package.json)
npm install

# 4. Inicie o servidor de desenvolvimento
# (Isso abrirá o site em seu navegador com recarregamento automático a cada alteração)
npm run dev
```

### Gerando os Arquivos para Produção (Build)
Quando você for publicar seu site na sua hospedagem, você não deve enviar o código-fonte, mas sim uma versão otimizada e compilada.

Use o seguinte comando para gerar esses arquivos:
```sh
# 5. Gere os arquivos de produção otimizados
npm run build
# Este comando criará uma nova pasta chamada dist no diretório do seu projeto. É o conteúdo desta pasta (index.html, pasta assets, etc.) que você deve enviar para o seu servidor de hospedagem (geralmente na pasta public_html).
```