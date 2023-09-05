

<template>
  <div class="main">
    <div class="cont-opciones">
      <div class="cont-dif">
        <p class="tittle">Elige la tematica</p>
        <form action="" class="cont-nivel">
          <input class="input-btn" type="radio" id="tema-1" name="tematica" checked="" value="valueIs-1" />
          <label style="margin-bottom: 50px; margin-top: 200px" class="neon-btn" for="tema-1">
            <span class="span"></span>
            <span class="txt">Animales</span>
          </label>

          <input class="input-btn" type="radio" id="tema-2" name="tematica" value="valueIs-2" />
          <label style="margin-bottom: 50px" class="neon-btn" for="tema-2">
            <span class="span"></span>
            <span class="txt">Colores</span>
          </label>

          <input class="input-btn" type="radio" id="tema-3" name="tematica" value="valueIs-3" />
          <label style="margin-bottom: 50px" class="neon-btn" for="tema-3">
            <span class="span"></span>
            <span class="txt">Paises</span>
          </label>

          <input class="input-btn" type="radio" id="tema-4" name="tematica" value="valueIs-3" />
          <label style="margin-bottom: 50px" class="neon-btn" for="tema-4">
            <span class="span"></span>
            <span class="txt">Frutas</span>
          </label>
        </form>
      </div>
      <div class="cont-dif">
        <p class="tittle">Elige un nivel</p>
        <form action="" class="cont-nivel">
          <input class="input-btn" type="radio" id="nivel-1" name="dificultad" checked="" value="valueIs-1" />
          <label style="margin-bottom: 50px; margin-top: 160px" class="neon-btn" for="nivel-1">
            <span class="span"></span>
            <span class="txt">FACIL</span>
          </label>

          <input class="input-btn" type="radio" id="nivel-2" name="dificultad" value="valueIs-2" />
          <label style="margin-bottom: 50px" class="neon-btn" for="nivel-2">
            <span class="span"></span>
            <span class="txt">MEDIO</span>
          </label>

          <input class="input-btn" type="radio" id="nivel-3" name="dificultad" value="valueIs-3" />
          <label style="margin-bottom: 50px" class="neon-btn" for="nivel-3">
            <span class="span"></span>
            <span class="txt">DIFICIL</span>
          </label>
        </form>
      </div>
      
    </div>
    <button class="play"> PLAY
    </button>
  </div>
</template>
  
<script setup>
import { ref } from "vue";

function jugar() {
  location.href = "d";
}
</script>

<style scoped src="./botones.css"></style>
  
<style scoped>
* {
  margin: 0;
  font-size: large;
  font-family: "Press Start 2P", cursive;
  text-align: center;
}

.main{
    background: linear-gradient(-15deg, #8c00ff, #00f7ff);
    background-size: 200%;
    animation: fondo 5s ease-in infinite;
}
.cont-opciones {
  display: flex;
  justify-content: center;
}
.cont-dif{
  margin-top: -11%;
}
.play{
  margin-bottom: 25px;
  cursor: pointer;
}

@keyframes fondo {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% -50%;
  }

  100% {
    background-position: -0% 50%;
  }
}

.tittle {
  position: relative;
  font-size: 70px;
  top: 27vh;
  transform: translate(0, -27%);
  font-weight: bold;
  text-shadow: -1px -1px 1px rgb(255, 255, 255);
  animation: palpitar 2s ease-in-out infinite;
}

@keyframes palpitar {
  0% {
    transform: scale(1) rotate(0deg);
  }

  50% {
    transform: scale(0.95) rotate(0deg);
  }

  100% {
    transform: scale(1) rotate(0deg);
  }
}
</style>