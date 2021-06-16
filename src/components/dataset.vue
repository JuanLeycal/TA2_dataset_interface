<template>
  <div id="app">
        <table>
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
       
        axios.get(baseURL)
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

</style>
