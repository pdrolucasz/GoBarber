<div align="center" ><img src="../github/logo.png" height="150"/></div>

# <h1 align="center">✂️ Gobarber API</h1>

<br />
<br />
<br />

# 🔖 Sobre

<p>Está é a api usada para organizar os agendamentos entre barbeiros e clientes.</p>
<p>Clientes podem escolher o horário de acordo com a agenda do barbeiro e barbeiros podem gerenciar seus agendamentos.</p>
<p>Qualquer usuário pode alterar seus dados, seja ele email, foto de perfil e senha.</p>

<p>Cheque a versão Web: <a href="https://github.com/pdrolucasz/GoBarber/tree/master/web">GoBarber Web</a></p>
<p>Cheque a versão Mobile: <a href="https://github.com/pdrolucasz/GoBarber/tree/master/mobile">GoBarber Mobile</a></p>

<br />

# 🚀 Tecnologias

<ul>
    <li>NodeJS</li>
    <li>TypeScript</li>
    <li>Express</li>
    <li>TypeORM</li>
    <li>PostgreSQL</li>
    <li>MongoDB</li>
    <li>Redis</li>
    <li>Multer</li>
    <li>token JWT</li>
    <li>Jest</li>
    <li>uuidv4</li>
    <li>bcrypt.js</li>
    <li>date-fns</li>
</ul>

<br />

# Instalação

<strong>Será necessários algumas ferramentas:</strong>
<ul>
    <li><a href="https://git-scm.com/">Git</a></li>
    <li><a href="https://nodejs.org/en/">Node.js</a></li>
    <li><a href="https://www.npmjs.com/">Npm</a> ou <a href="https://yarnpkg.com/">Yarn</a></li>
    <li>
        Irei utilizar os bancos de dados
        <a href="https://www.postgresql.org/">PostgreSQL</a>,
        <a href="https://www.mongodb.com/">MongoDB</a>,
        <a href="https://redis.io/">Redis</a>. Recomendo criar instâncias deles com
        <a href="https://www.docker.com/">Docker</a>, abaixo deixarei uma parte de como criar essas instâncias.
    </li>
</ul>

<br />

<strong>Clone o repositório e logo após acesse a pasta da api</strong>

<pre>
    git clone https://github.com/pdrolucasz/GoBarber.git
    #
    cd backend
</pre>

<strong>Instale as dependências</strong>

<pre>
    yarn
    # ou
    npm install
</pre>

<strong>Faça uma cópia de .env.example para .env</strong>

<pre>
    # Defina suas variáveis de ambiente
    # lembrando que variáveis aws não precisam ser preenchidas para ambiente de desenvolvimento
    cp .env.example .env
</pre>

<strong>Criar instâncias dos bancos de dados</strong>

<pre>
    # PostgreSQL
    docker run --name some-postgres -e POSTGRES_PASSWORD=senha -e POSTGRES_DB=gostack_gobarber -p 5432:5432 -d postgres

    # MongoDB
    docker run --name mongodb -p 27017:27017 -d -t mongo

    # Redis
    docker run --name redis -p 6379:6379 -d -t redis:alpine
</pre>

<strong>Com as instâncias criadas, agora basta executar as migrations e rodar a api</strong>

<pre>
    yarn typeorm migration:run
    #
    yarn dev:server
</pre>

#

<h3 align="center">Made with 💜 by <a href="https://www.linkedin.com/in/pedro-lucas-4b2941199/">Pedro Lucas</a></h3>
