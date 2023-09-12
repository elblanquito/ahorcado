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
                            <img src="../assets/brazo izquierdo.png" class="persona brazoiz">
                            <img src="../assets/brazo derecho.png" class="persona brazode">
                            <img src="../assets/pie izquerdo.png" class="persona pieiz">
                            <img src="../assets/pie derecho.png" class="persona piede">
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
    tema:<input type="number" id="tema" v-model="tema"><br>
    dificultad:<input type="number" id="dificultad" v-model="dificultad"><br>
    <button @click="empezar()">empezar</button> <br>
    {{ tema }}
    {{ dificultad }}
  </div>
</template>

<script setup>
import { ref } from "vue";

let letras = [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],['z', 'x', 'c', 'v', 'b', 'n', 'm']]

let animal = [
  ['o', 'v', 'e', 'j', 'a'],
  ['p', 'e', 'r', 'r', 'o'],
  ['g', 'a', 't', 'o'],
  ['t', 'i', 'g', 'r', 'e'],
  ['l', 'e', 'ó', 'n']]
let color = [
  ['r', 'o', 'j', 'o'],
  ['a', 'z', 'u', 'l'],
  ['v', 'e', 'r', 'd', 'e'],
  ['a', 'm', 'a', 'r', 'i', 'l', 'l', 'o'],
  ['n', 'a', 'r', 'a', 'n', 'j', 'a'],
  ['m', 'o', 'r', 'a', 'd', 'o']]
let pais = [
  ['E', 's', 'p', 'a', 'ñ', 'a'],
  ['F', 'r', 'a', 'n', 'c', 'i', 'a'],
  ['A', 'l', 'e', 'm', 'a', 'n', 'i', 'a'],
  ['I', 't', 'a', 'l', 'i', 'a'],
  ['E', 's', 't', 'a', 'd', 'o', 's', ' ', 'U', 'n', 'i', 'd', 'o', 's'],
  ['C', 'a', 'n', 'a', 'd', 'á']]
let fruta = [
  ['m', 'a', 'n', 'z', 'a', 'n', 'a'],
  ['p', 'e', 'r', 'a'],
  ['p', 'l', 'á', 't', 'a', 'n', 'o'],
  ['u', 'v', 'a'],
  ['n', 'a', 'r', 'a', 'n', 'j', 'a'],
  ['l', 'i', 'm', 'ó', 'n']]

  let temas = [animal,color,pais,fruta]


let tema = ref(3)
let dificultad = ref(1)

function tecla(x){
  console.log ('tecla oprimida: '+ x)

  if (tema === 1){grupo = animal}
  else if (tema === 2) {grupo = color}
  else if (tema === 3) {grupo = pais}
  else if (tema === 4) {grupo = pais}
}

function empezar(){
  console.log('es el: ' + temas[tema.value][1])
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
</style>