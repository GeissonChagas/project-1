<template>
    <div class="container">
        <form class="box">
            <div>
                <img src="../../public/img/LOGO1.png" alt="logo" class="logo">
            </div>
            <label for="nome">Nome</label>
            <input type="text" v-model="nome">
            <label for="email">E-mail</label>
            <input type="email" v-model="email">
            <label for="senha">Senha</label>
            <input type="password" v-model="senha">
            <label for="senha">Confirme a senha</label>
            <input type="password" v-model="confirmarSenha">
            <label>Código de acesso</label>
            <input type="number" v-model="codigoDeAcesso">
            <button type="submit" class="button">Cadastrar</button>
        </form>
    </div>
</template>

<script>

export default{
    name: 'cadastro-component'
}

</script>

<style>

    .logo{
        margin: 50px 0;
        width: 200px;
        height: 150px;
        box-shadow: 0 0 40px rgba(0,0,0, 0.5);
    }

    .container{
        height: 100vh;
        display: flex;
        margin: auto;

    }
    .box{
        display: flex;
        flex-direction: column;
        background: #f5f5f5;
        width: 60vw;
        align-items: center;
        justify-content: center;
        margin: auto;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        height: 90vh;
    }

    .box input{
        width: 80%;
        height: 24px;
        border: 1px solid #a0a0a0;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
    .box input:focus{
        width: 80%;
        height: 24px;
        border: 1px solid #555;
    }
    
    label{
        margin: 5px;
    }

    .button {
        padding: 12px 50px;
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

</style>