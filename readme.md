# Digi Quiz

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Conexão de Internet

- Você precisará ter o Docker instalado `<https://www.docker.com/products/docker-desktop>`. Todos os sistemas operacionais são compatíveis.

## 🚀 Instalando <Desenvolvimento>

Para instalar o projeto em ambiente de desenvolvimento, siga estas etapas:

- Na raiz do projeto iremos executar o docker-compose para criar uma imagem/container do postgres:

```
<docker-compose -f docker-compose-dev.yml up -d>
```

- Após ter instalado o postgres, iremos executar as migrations e seeds. No diretório backend execute os seguintes comandos:

```
<yarn migration:run>
<yarn seed:run>
```

- Setup finalizado com sucesso, agora iremos executar os seguintes comandos nos diretorios 'frontend' e 'backend' para rodarmos o projeto:

```
<yarn dev>
```

- Se tudo ocorreu bem, o projeto estará disponível no seguinte URL: http://localhost:3001/

## 🚀 Instalando <Produção>

Para instalar o projeto em ambiente de produção, siga estas etapas:

- Na raiz do projeto iremos executar o docker-compose para criar uma imagem/container do postgres:

```
<docker-compose up -d --build postgres>
```

- Após ter instalado o postgres, iremos executar as migrations e seeds. No diretório backend execute os seguintes comandos:

```
<yarn migration:run>
<yarn seed:run>
```

- Setup finalizado com sucesso, agora iremos executar novamente o docker-compose para iniciarmos o projeto:

```
<docker-compose up -d>
```

- Se tudo ocorreu bem, o projeto estará disponível no seguinte URL: http://localhost