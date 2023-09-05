

<template>
  <div class="main">
    <div class="cont-dif">
      <p class="tittle">Elige la Dificultad</p>
      <form action="" class="container">
        <input class="input-btn" type="radio" id="valueIs-1" name="valueIs-radio" checked="" value="valueIs-1">
        <label style="margin-bottom: 50px; margin-top:160px"  class="neon-btn" for="valueIs-1">
          <span class="span"></span>
          <span class="txt">FACIL</span>
        </label>

        <input class="input-btn" type="radio" id="valueIs-2" name="valueIs-radio" value="valueIs-2">
        <label style="margin-bottom: 50px;"  class="neon-btn" for="valueIs-2">
          <span class="span"></span>
          <span class="txt">MEDIO</span>
        </label>

        <input class="input-btn" type="radio" id="valueIs-3" name="valueIs-radio" value="valueIs-3">
        <label style="margin-bottom: 50px;"  class="neon-btn" for="valueIs-3">
          <span class="span"></span>
          <span class="txt">DIFICIL</span>
        </label>
      </form>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from "vue"

function jugar() {
  location.href = 'd'
}

</script>
  
<style scoped>
.container {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: italic;
  font-weight: bold;
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.container input[type=radio] {
  display: none;
}
.input-btn:is(:checked)+.neon-btn .span {
  inset: 2px;
  background-color: #4090b5;
  background: repeating-linear-gradient(to bottom, transparent 0%, #4090b5 1px, #4090b5 3px, #4090b5 5px, #4090b5 4px, transparent 0.5%), repeating-linear-gradient(to left, hsl(295, 60%, 12%) 100%, hsl(295, 60%, 12%) 100%);
  box-shadow: inset 0 40px 20px hsl(296, 59%, 10%);
}

.input-btn:is(:checked)+.neon-btn .txt {
  text-shadow: 2px 4px 1px #9e30a9, 2px 2px 1px #4090b5, 0 0 20px rgba(255, 255, 255, 0.616);
  color: rgb(255, 255, 255);
  animation: colorchange 0.3s ease;
}

.input-btn:is(:checked)+.neon-btn::before {
  animation-duration: 0.6s;
}

.input-btn:is(:checked)+.neon-btn::after {
  animation-duration: 0.6s;
}

.neon-btn {
  width: 300px;
  height: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 5em;
  text-align: right;
  background: transparent;
  position: relative;
  overflow: hidden;
  transition: all 2s ease-in-out;
  -webkit-clip-path: polygon(6% 0, 93% 0, 100% 8%, 100% 86%, 90% 89%, 88% 100%, 5% 100%, 0% 85%);
  clip-path: polygon(6% 0, 93% 0, 100% 8%, 100% 86%, 90% 89%, 88% 100%, 5% 100%, 0% 85%);
}

.neon-btn .span {
  display: flex;
  -webkit-clip-path: polygon(6% 0, 93% 0, 100% 8%, 100% 86%, 90% 89%, 88% 100%, 5% 100%, 0% 85%);
  clip-path: polygon(6% 0, 93% 0, 100% 8%, 100% 86%, 90% 89%, 88% 100%, 5% 100%, 0% 85%);
  position: absolute;
  inset: 1px;
  background-color: #212121;
  z-index: 1;
}

.neon-btn .txt {
  text-align: right;
  position: relative;
  z-index: 2;
  color: aliceblue;
  font-size: 1em;
  transition: all ease-in-out 2s linear;
  text-shadow: 0px 0px 1px #4090b5, 0px 0px 1px #9e30a9, 0 0 1px white;
}

.neon-btn::before {
  content: "";
  position: absolute;
  height: 300px;
  aspect-ratio: 1.5/1;
  box-shadow: -17px -19px 20px #9e30a9;
  background-image: conic-gradient(#9e30a9, transparent, transparent, transparent, transparent, transparent, transparent, #9e30a9);
  animation: rotate 4s linear infinite -2s;
}

.neon-btn::after {
  content: "";
  position: absolute;
  height: 300px;
  aspect-ratio: 1.5/1;
  box-shadow: -17px -19px 10px #4090b5;
  background-image: conic-gradient(#4090b5, transparent, transparent, transparent, transparent, transparent, transparent, transparent, #4090b5);
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes colorchange {
  0% {
    text-shadow: 0px 0px 0px #9e30a9, 0px 0px 0px #4090b5, 0 0 0px rgba(255, 255, 255, 0.616);
  }

  50% {
    text-shadow: -6px 5px 1px #9e30a9, 5px 11px 1px #4090b5, 0 0 20px rgba(255, 255, 255, 0.616);
  }

  to {
    text-shadow: 2px 4px 1px #9e30a9, 2px 2px 1px #4090b5, 0 0 20px rgba(255, 255, 255, 0.616);
  }
}

@keyframes backgroundchange {
  0% {
    background-color: transparent;
  }

  50% {
    background-color: #4090b5;
  }

  to {
    background-color: transparent;
  }
}

* {
  margin: 0;
  font-size: large;
  font-family: 'Press Start 2P', cursive;
  text-align: center;
}

.main {
  background: linear-gradient(-15deg, #8c00ff, #00f7ff);
  background-size: 200%;
  height: 100vh;
  animation: fondo 5s ease-in infinite;
  overflow: hidden;
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
    transform: scale(1.05) rotate(0deg);
  }

  100% {
    transform: scale(1) rotate(0deg);
  }
}

.jugar {
  position: relative;
  font-size: 40px;
  top: 45vh;
  transform: translate(0, -45%);
  padding: 10px;
  border: solid 4px black;
  border-radius: 15px;
  transition: transform 0.5s ease-out;
}

.jugar:hover {
  background-color: rgb(204, 255, 146);
  transform: scale(1.2) translate(0, -35%) rotate(-5deg);
  color: #22c91ca2;
  border: solid 4px #22c91ca2;
  box-shadow: -10px 0px 20px #22c91c70,
    10px 0px 20px #22c91c70;
}</style>