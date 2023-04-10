<template>
    <form>
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
    </form>
</template>

<script>

export default{
    name: 'cadastro-component'
}

</script>

<style scoped>

</style>