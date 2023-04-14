<template>
    <div class="container">
        <form class="box">
            <img src="../../public/img/LOGO1.png" alt="logo" class="logo">
            <h4>Digite seu e-mail e enviaremos um código para redefinir sua senha.</h4>
            <label for="redefinir">E-mail:</label>
            <input type="email">
            <button type="submit" class="button">Enviar</button>
        </form>
    </div>
</template>

<script>   
    export default{
        name: 'redefinir-senha'
    }

</script>

<style scoped>

</style>