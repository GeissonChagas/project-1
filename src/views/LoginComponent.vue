<template>
    <div class="container">
        <div>
            <img class="image" src="../../public/img/zapprostor.jpg" alt="">
        </div>
        <div class="login">
            <div class="title">
                <h3>Bem-vindo!</h3>
                <h1>Faça seu login</h1>
            </div>
            <div class="login">
                <label>E-mail</label>
                <input type="text">
                <label>Senha</label>
                <input type="password">
            </div>
            <div>
                <button class="button"><router-link to="/app" class="link">Entrar</router-link></button>
            </div>
            <div class="redefinir">
                <router-link to="/redefinir-senha">Esqueceu a senha?</router-link>
            </div>
            <div class="cadastro">
                <p>Ainda não é cadastrado? crie seu cadastro clicando <router-link to="/cadastro">aqui.</router-link></p>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'login-component',
    }
</script>

<style>
    .container{
        display: flex;
        justify-content: space-around;
        background: #f4f4f4;
        height: 100vh;
    }

    .image {
        height: 100vh;
        width: 35vw;
        box-shadow: 0px 0px 50px rgba(0, 0, 0, 1);
    }

    .login{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
    }

    input{
        width: 80%;
        height: 24px;
        border: 1px solid #a0a0a0;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }

    label{
        margin: 5px;
    }

    .button {
        width: 180px;
        height: 50px;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        text-decoration: none;
        background-color: #219603;
        color: #fff;
        border: none;
        cursor: pointer;
        margin: 1rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    .button:hover {
        background-color: #00b336;
    }

    a{
        text-decoration: none;
    }

    .link{
        text-decoration: none;
        color: #fff;
    }
</style>