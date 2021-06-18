<template>

<div class="container">
    <h1 class="title">Bienvenido al Dataset de Datos de Afiliados al Seguro Integral de Salud en Estado Activo</h1>
    <a href="https://www.datosabiertos.gob.pe/dataset/datos-de-afiliados-al-seguro-integral-de-salud-en-estado-activo-seguro-integral-de-salud" target="_blank" class="link">Link del dataset</a>
    
    <router-link to="/dataset"><button class="btn41-43 btn-43">Ir al dataset</button></router-link>

</div>

</template>

<script>

// import Dataset from './components/Dataset.vue'

export default {
  name: 'Home',
 
}
</script>

<style scoped>
.container {
  display: grid;
  margin-top: 15%;
  /* place-items: center; */
  grid-template-rows: 100%;
}

.btn41-43 {
    align-self: center;
    justify-self: center;
  padding: 10px 25px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.btn-43 {
    align-self: center;
    justify-self: center;
  border: 2px solid rgb(0, 0, 0);
  z-index: 1;
  color: black;
}

.btn-43:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  top: 0;
  left: 0;
  z-index: -1;
  background: rgb(0, 0, 0);
  transition: all 0.3s ease;
}

.btn-43:hover {
  color: rgb(255, 255, 255);
}

.btn-43:hover:after {
  top: auto;
  bottom: 0;
  height: 100%;
}
.title{
    font-size: 50;
}
.link{
    padding-bottom: 3rem;
    font-size: 35;
}

</style>