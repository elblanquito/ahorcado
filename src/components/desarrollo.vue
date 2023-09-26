<template>
  <div class="cont">
    <div class="colina">
        <div class="palo">
            <div class="palo2">
                <div class="palo2-"></div>
                <div class="cuerda">
                    <div class="cuerda2">
                        <div class="contpersona">
                            <img src="../assets/cabeza.png" class="persona cabeza">
                            <img src="../assets/brazoizquierdo.png" class="persona brazoiz">
                            <img src="../assets/brazoderecho.png" class="persona brazode">
                            <img src="../assets/pieizquerdo.png" class="persona pieiz">
                            <img src="../assets/piederecho.png" class="persona piede">
                            <img src="../assets/cuerpo.png" class="persona cuerpo">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="teclas_cont">

      <div class="tecla_fila" v-for="(fila, index) in letras" :key="index"
      :class="'tecla_'+ (index + 1)" >

        <button v-for="letra in fila" :key="letra" class="tecla"
        @click="tecla(letra)" :class="'tecla_'+letra" >
          {{ letra }}
        </button>
      </div>
    </div>
    tema:<input type="number" id="tema" v-model="temainput"><br>
    dificultad:<input type="number" id="dificultad" v-model="dificultadinput" ><br>
    <button @click="empezar()">empezar</button> <br>
    {{ temainput }}
    {{ dificultadinput }}
    <div class="tablero" :style="{ backgroundColor: tablero_color }" :class="{'error':error}">{{ tablero }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let letras = [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],['z', 'x', 'c', 'v', 'b', 'n', 'm']]

let temas = {
  animal: [
    ['o', 'v', 'e', 'j', 'a'],
    ['p', 'e', 'r', 'r', 'o'],
    ['g', 'a', 't', 'o'],
    ['t', 'i', 'g', 'r', 'e'],
    ['l', 'e', 'ó', 'n']
  ],
  color: [
    ['r', 'o', 'j', 'o'],
    ['a', 'z', 'u', 'l'],
    ['v', 'e', 'r', 'd', 'e'],
    ['a', 'm', 'a', 'r', 'i', 'l', 'l', 'o'],
    ['n', 'a', 'r', 'a', 'n', 'j', 'a'],
    ['m', 'o', 'r', 'a', 'd', 'o']
  ],
  pais: [
    ['E', 's', 'p', 'a', 'ñ', 'a'],
    ['F', 'r', 'a', 'n', 'c', 'i', 'a'],
    ['A', 'l', 'e', 'm', 'a', 'n', 'i', 'a'],
    ['I', 't', 'a', 'l', 'i', 'a'],
    ['C', 'o', 'l', 'o', 'm', 'b', 'i', 'a'],
    ['C', 'a', 'n', 'a', 'd', 'á']
  ],
  fruta: [
    ['m', 'a', 'n', 'z', 'a', 'n', 'a'],
    ['p', 'e', 'r', 'a'],
    ['p', 'l', 'á', 't', 'a', 'n', 'o'],
    ['u', 'v', 'a'],
    ['n', 'a', 'r', 'a', 'n', 'j', 'a'],
    ['l', 'i', 'm', 'o', 'n']
  ]
};

let tablero = ref('_ _ _ _ _ _ _ _')
let temainput = ref(3)
let dificultadinput = ref(1)
let letrasadivinadas = []
let palabra = ''
let tablero_color = 'white'
let error = ref(false)

function mostrarletras(palabra, letrasadivinadas){
  tablero.value = ""

  for (let i = 0; i < palabra.length; i++) {
      if (letrasadivinadas.includes(palabra[i])) {
          tablero.value += palabra[i] + " ";
      } else {
          tablero.value += "_ ";
      }
  }
}

function palabraramdom(categoria){
  let tema = ['animal', 'color', 'pais', 'fruta']
  return temas[tema[categoria]][Math.floor(Math.random() * temas[tema[categoria]].length)]
}

function tecla(letra){
  console.log ('tecla oprimida: '+ letra)
  if (palabra.includes(letra)){
    letrasadivinadas.push(letra)
    setTimeout(function() {
      tablero_color = 'rgb(32, 224, 42)'
      error.value = !error.value
      setTimeout(function() {
        error.value = false
        tablero_color = 'white'
      }, 300);
    }, 5);
  } else {
    setTimeout(function() {
      tablero_color = 'red'
      error.value = !error.value
      setTimeout(function() {
        error.value = false
        tablero_color = 'white'
      }, 300);
    }, 5);
  }
  if (new Set(palabra).size == letrasadivinadas.length){
    ganar()
  }
  mostrarletras(palabra, letrasadivinadas)
}

function empezar(){
  letrasadivinadas = []
  palabra = palabraramdom(temainput.value)
  console.log(palabra)
  mostrarletras(palabra, letrasadivinadas)
}

function ganar(){
  console.log('FELICIADES')
  tablero_color = 'rgb(32, 224, 42)'
}

function perder(){
  console.log('perderdiste')
  tablero_color = 'red'
}

</script>

<style scoped src="./ahorcado.css"></style>

<style scoped >

*{
  user-select: none;
  margin: 0;
  font-size: 20px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
}

@keyframes error {
  0%{
    transform: rotate(0deg) scale(1);
  }
  25%{
      transform: rotate(5deg) scale(0.9);
  }
  75%{
    transform: rotate(-5deg) scale(1);
  }
  100%{
    transform: rotate(0deg) scale(1);
  }
}

.error{
  animation: error 0.3s ease-in-out;
}

.cont{
  height: 100vh;
  background-color: rgba(63, 201, 255, 0.994);
}
.colina{
  width: 200px;
  height: 70px;
  top:50%;
  
}

.teclas_cont{
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: min-content;
  background-color: rgb(60, 60, 60);
  border: solid 4px white;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.488);
  padding: 2%;
}

.tecla_fila{
  display: flex;
  justify-content: center;
}

.tecla{
  font-size: 25px;
  padding: 5px 10px 5px 10px;
  margin: 1px;
  border: solid 2px rgb(165, 165, 165);
  color: rgb(165, 165, 165);
  background: rgb(0, 0, 0);
  transition: border 0.3s, 
  color 0.3s, 
  box-shadow 0.3s,
  transform 0.2s;
}

.tecla:hover{
  transform: scale(1.1);
  border: solid 2px rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  box-shadow: 0px 0px 10px rgb(255, 255, 255);
  z-index: 3;
}

#tema,#dificultad{
  width: 40px;
}

.tablero{
  width:fit-content;
  padding: 10px;
  font-size: 30px;
  margin: 30px;
  border: solid 5px black;
  transition: background-color 0.5s ;
}
</style>