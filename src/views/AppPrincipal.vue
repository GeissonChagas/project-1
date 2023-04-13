<template>
    <div class="container-app">
        <div class="menu">
            <h2>App</h2>
        </div>
        <div class="coluna">
            <label for="nomes">Nomes</label>
            <input type="textarea">
            <button type="submit" class="button">Botão</button>
        </div>
        <div class="coluna">
            <label for="numeros">Números</label>
            <input type="textarea">
            <button type="submit" class="button">Botão</button>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'app-principal'
    }

</script>

<style scoped>
.container-app {
    display: flex; 
    background-color: #fffff9   ;
}

.button{
    width: 200px;
    margin: 1em auto;
}
.menu {
    flex-basis: 25vw; /* Largura da coluna menu */
    padding: 10px;
    background-color: #fffff9;
    box-shadow: 0 0 10px rgba(0,0,0, 0.5);
    height: 100vh;
}

.coluna {
    flex-basis: calc(50% - 20px); 
    display: flex;
    flex-direction: column;
    padding: 10px;
}

input{
    height: 80vh;
    width: 90%;
    display: flex;
    margin: 0 auto;
    box-shadow: 0 0 8px rgba(0,0,0, 0.25);
    border: none;
}

label{
    font-weight: bold;
    margin-bottom: 1em;
}

</style>