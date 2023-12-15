<script setup>
import audiourl from "../assets/song.mp3"

const audio = new Audio(audiourl);
audio.loop = true; // Establece la reproducción en bucle
audio.volume = 0.4

function reproducirCancion() {
  audio.play();
}
</script>

<template>
  <div class="container">
    se recomienda pulsar "f11" antes de continuar si se juega en pc
        <router-link to="/menu" class="ingresarcont">
          <button class="ingresar"  @click="reproducirCancion();">
            <img class="imgplay" src="../assets/play.png">
          </button>
        </router-link>
  </div>

</template>

  <style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .container {
    padding: 10px;
  }
  .ingresarcont{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: min-content;
    display: grid;
    border-radius: 20px;
  }
  .ingresar {
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background-color: #ffffff;
    border-radius: 20px;
    border: solid 2px black;
    transition: transform 1s ease-out; /* Agrega una transición suave */

  }

  .ingresar:hover{
    border: solid 2px rgb(25, 150, 0);
    box-shadow: 0 0 5px rgb(25, 150, 0);

    transform: rotate(360deg); /* Rota el cuadrado 45 grados al pasar el mouse sobre él */
  }


  </style>