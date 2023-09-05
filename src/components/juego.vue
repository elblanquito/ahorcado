

<template>
    <div class="cont">
      <p class="tittle">aqui va el juego xd</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue"
  
  function jugar(){
    location.href='d'
  }
  
  </script>
  
  <style scoped>
  *{
    margin: 0;
    font-size: large;
    font-family: 'Press Start 2P', cursive;
    text-align: center;
  }
  
  .cont{
    background: linear-gradient(-15deg, #8c00ff, #00f7ff);
    background-size: 200%;
    height: 100vh;
    animation: fondo 5s ease-in infinite;
    overflow: hidden;
  }
  
  @keyframes fondo {
    0%{
      background-position: 0% 50%;
    }
    50%{
      background-position: 100% -50%;
    }
    100%{
      background-position: -0% 50%;
    }
  }
  
  .tittle{
    position: relative;
    font-size: 70px;
    top: 27vh;
    transform: translate(0,-27%);
    font-weight: bold;
    text-shadow: -1px -1px 1px rgb(255, 255, 255);
    animation: palpitar 2s ease-in-out infinite;
  }
  
  @keyframes palpitar {
    0%{
      transform: scale(1) rotate(0deg);
    }
    50%{
      transform: scale(1.05) rotate(0deg);
    }
    100%{
      transform: scale(1) rotate(0deg);
    }
  }
  
  .jugar{
    position: relative;
    font-size: 40px;
    top: 45vh;
    transform: translate(0,-45%);
    padding: 10px;
    border: solid 4px black;
    border-radius: 15px;
    transition: transform 0.5s ease-out;
  }
  
  .jugar:hover{
    background-color: rgb(204, 255, 146);
    transform: scale(1.2) translate(0,-35%) rotate(-5deg);
    color: #22c91ca2;
    border: solid 4px #22c91ca2;
    box-shadow: -10px 0px 20px #22c91c70,
     10px 0px 20px #22c91c70;
  }
  </style>