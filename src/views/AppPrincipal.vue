<template>
    <div class="container-app">
        <div class="menu">
            <img src="../../public/img/LOGO1.png" class="logo">
        </div>
        <div class="coluna">
            <div class="div-coluna">
                <label for="uploadBtn" class="carregar">Carregar arquivo .xlsx</label>
                <input type="file" class="arquivo" id="uploadBtn">
            </div>
            <div class="div-coluna">
                <h3>QR code após o carregamento do arquivo aqui ....</h3>
                <img src="../../public/img/qrcode.png">
            </div>
            <div class="div-coluna">
                <label for="nomes" class="label">Mensagem:</label>
                <input type="textarea" class="textarea">
                <button type="submit" class="button">Botão</button>
            </div>
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
    padding: 2rem;
    margin: 0 auto;
}

.textarea {
    height: 30vh;
    width: 90%;
    display: flex;
    margin: 1em auto;
    box-shadow: 0 0 8px rgba(0,0,0, 0.25);
    border: none;
}

.label{
    font-weight: 700;
}

.arquivo{
    display: none;
}
.carregar {
  cursor: pointer; 
  padding: 10px 15px; /* Adiciona espaçamento interno para o rótulo */
  background-color: #f5f5f5; /* Define a cor de fundo do rótulo */
  color: #333; /* Define a cor do texto do rótulo */
  box-shadow: 0 0 10px rgba(0,0,0, 0.5);
}

.carregar:hover, .carregar:focus {
  background-color: #fff;
  transition: .5s;
}

.div-coluna{
    width: 100%;
    margin: 1em;
}


</style>