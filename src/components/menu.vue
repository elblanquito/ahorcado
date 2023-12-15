<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();



</script>

<template>
  <div class="cont">
    <div class="subcont">
      <p class="tittle">El Ahorcado</p>

      <router-link to="/juego" class="ingresarcont">
        <button class="jugar">Empezar</button>
      </router-link>

      <router-link to="/desarrollo" class="ingresarcont">
        <button class="jugar">desarrollo</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
* {
  user-select: none;
  margin: 0;
  font-size: large;
  font-family: "Press Start 2P", cursive;
  text-align: center;
}

.cont {
  display: grid;
  align-items: center;
  height: 100vh;
  background: linear-gradient(-15deg, #8c00ff, #00f7ff);
  background-size: 200%;
  animation: fondo 5s ease-in infinite;
  overflow: hidden;
}

.subcont {
  margin-top: 10px;
  margin-bottom: 20vh;
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
  margin-bottom: 20px;
  font-size: 70px;
  font-weight: bold;
  text-shadow: -1px -1px 1px rgb(255, 255, 255);
  animation: palpitar 2s ease-in-out infinite;
}

@media screen and (min-width: 1300px) {
  .tittle {
    font-size: 90px;
  }
}

@media screen and (max-width: 600px) {
  .tittle {
    font-size: 12vw;
  }
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

.jugar {
  margin-top: 10vh;
  font-size: 40px;
  padding: 10px;
  border: solid 4px black;
  border-radius: 15px;
  transition: transform 0.2s ease-in-out;
  transition: transform 0.5s ease-out;
}

@media screen and (min-width: 1300px) {
  .jugar {
    font-size: 60px;
  }
}

@media screen and (max-width: 600px) {
  .jugar {
    font-size: 30px;
  }
}

.jugar:hover {
  background-color: rgb(255, 255, 255);
  transform: scale(1.1) translate(0, -35%) rotate(-2deg);
  color: #22c91ca2;
  border: solid 4px #22c91ca2;
  box-shadow: -10px 0px 20px #22c91c70, 10px 0px 20px #22c91c70;
  animation: palpitar 0.5s ease-out infinite;
}
</style>
