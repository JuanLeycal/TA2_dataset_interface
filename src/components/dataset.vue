<template>
  <div id="app">
      <div>
          <h1 class="title">Dataset de Datos de Afiliados al Seguro Integral de Salud en Estado Activo</h1>
          <h2 class="desc">Realizar el Algoritmo KMeans usando las columnas "Edad" y "Total de Afiliados"</h2>
          <router-link to="/dataset/kmeans"><button class="btn41-43 btn-43">KMEANS</button></router-link>
      </div>
        <table border="1">
            <tr>
                <th>Fecha Corte</th>
                <th>Region</th>
                <th>Provincia</th>
                <th>Distrito</th>
                <th>Cod. Unidad Ejec.</th>
                <th>Unidad Ejec.</th>
                <th>Ámbito INEI</th>
                <th>Cod. IPRESS</th>
                <th>IPRESS</th>
                <th>VRAEM</th>
                <th>Nacional o extranj.</th>
                <th>País extranj.</th>
                <th>Documento Identidad</th>
                <th>Edad</th>
                <th>Sexo</th>
                <th>Régimen Finan.</th>
                <th>Plan Seguro</th>
                <th>Cobertura Finan.</th>
                <th>Total Afiliados</th>
            </tr>
            <tr v-for="(dato, index) in datos" v-bind:key="index">
                <td>{{ dato.fecha_corte }}</td>
                <td>{{ dato.region }}</td>
                <td>{{ dato.provincia }}</td>
                <td>{{ dato.distrito }}</td>
                <td>{{ dato.cod_unidad_ejecutora }}</td>
                <td>{{ dato.unidad_ejecutora }}</td>
                <td>{{ dato.ambito_inei }}</td>
                <td>{{ dato.codigo_ipress }}</td>
                <td>{{ dato.ipress }}</td>
                <td>{{ dato.vraem }}</td>
                <td>{{ dato.nacional_extranjero }}</td>
                <td>{{ dato.pais_extranjero }}</td>
                <td>{{ dato.documento_identidad }}</td>
                <td>{{ dato.edad }}</td>
                <td>{{ dato.sexo }}</td>
                <td>{{ dato.regimen_financiamiento }}</td>
                <td>{{ dato.plan_de_seguro }}</td>
                <td>{{ dato.cobertura_financiera }}</td>
                <td>{{ dato.total_afiliados }}</td>
            </tr>
        </table>
        <!-- <p>{{JSON.stringify(datos)}}</p> -->
    </div>
</template>
<script src="https://unpkg.com/vue@2.5.13/dist/vue.js"></script>
<script src="https://unpkg.com/axios@0.17.1/dist/axios.min.js"></script>


<script>
import { baseURL } from '@/baseURL';
import axios from 'axios'
export default {
  name: 'Dataset',
  data: ()=> {
            return{
                datos: []
            }
        },
    mounted() {
       
        axios.get(baseURL + 'json')
            .then(response =>{
                
                this.datos = response.data;
                this.datos.shift();
                console.log(response)
                
            })
    },
   
  
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
    font-size: 50;
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
</style>
