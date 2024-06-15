# CRM Seguradora

Este é um projeto de CRM para uma seguradora, desenvolvido com Flask, SQLAlchemy, PostgreSQL, Python, Bootstrap e JavaScript.

## Índice

- [Introdução](#introdução)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Introdução

Este projeto é um sistema de CRM (Customer Relationship Management) para uma seguradora, que permite gerenciar informações de clientes, apólices, sinistros e muito mais. O objetivo é facilitar o acompanhamento e a administração dos relacionamentos com os clientes, oferecendo uma interface amigável e funcionalidades robustas.

## Funcionalidades

- Cadastro e gerenciamento de clientes
- Registro de apólices de seguro
- Gestão de sinistros
- Dashboard com estatísticas
- Busca avançada e filtros
- Autenticação e autorização de usuários

## Tecnologias

- [Flask](https://flask.palletsprojects.com/) - Micro framework web para Python
- [SQLAlchemy](https://www.sqlalchemy.org/) - ORM para interagir com o banco de dados
- [PostgreSQL](https://www.postgresql.org/) - Sistema de gerenciamento de banco de dados relacional
- [Bootstrap](https://getbootstrap.com/) - Framework CSS para design responsivo
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Linguagem de programação para interatividade no front-end

## Instalação

### Pré-requisitos

Certifique-se de ter o [Python](https://www.python.org/downloads/) (versão 3.6+), [PostgreSQL](https://www.postgresql.org/download/) e [pip](https://pip.pypa.io/en/stable/installation/) instalados em sua máquina.

### Passos para instalação

1. Clone o repositório:

    ```bash
    git clone git@github.com:Alvesflstk/CRM-SEGURADORA.git
    cd CRM-SEGURADORA
    ```

2. Crie um ambiente virtual e ative:

    ```bash
    python -m venv venv
    source venv/bin/activate  # No Windows: venv\Scripts\activate
    ```

3. Instale as dependências:

    ```bash
    pip install -r requirements.txt
    ```

4. Configure o banco de dados PostgreSQL. Crie um banco de dados:

    ```sql
    CREATE DATABASE crm_seguradora;
    ```

5. Configure as variáveis de ambiente (crie um arquivo `.env`):

    ```
    FLASK_APP=app.py
    FLASK_ENV=development
    DATABASE_URL=postgresql://usuario:senha@localhost:5432/crm_seguradora
    ```

6. Execute as migrações do banco de dados:

    ```bash
    flask db upgrade
    ```

7. Inicie a aplicação:

    ```bash
    flask run
    ```

## Configuração

Antes de rodar a aplicação, configure as variáveis de ambiente conforme mencionado na seção de instalação. Isso inclui configurar a URL do banco de dados e qualquer outra configuração específica do projeto.

## view do projeto
<img src="https://github.com/Alvesflstk/CRM-SEGURADORA/assets/111323514/6ac429f4-384f-4b3b-bdd3-068c99ee97c9">



