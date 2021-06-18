<template>
  <div id="app">
        <table border="1">
            <tr>
                <th>Cluster</th>
                <th>Edad</th>
                <th>Total Afiliados</th>
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
                <th>Sexo</th>
                <th>Régimen Finan.</th>
                <th>Plan Seguro</th>
                <th>Cobertura Finan.</th>
                
            </tr>
            <tr v-for="(kmean, kindex) in kmeans" v-bind:key="kindex" >
                <td >{{ kmean.group_id }}</td>
                <td>{{ kmean.edad }}</td>
                <td>{{ kmean.total_afiliados }}</td>
                <td>{{ kmean.fecha_corte }}</td>
                <td>{{ kmean.region }}</td>
                <td>{{ kmean.provincia }}</td>
                <td>{{ kmean.distrito }}</td>
                <td>{{ kmean.cod_unidad_ejecutora }}</td>
                <td>{{ kmean.unidad_ejecutora }}</td>
                <td>{{ kmean.ambito_inei }}</td>
                <td>{{ kmean.codigo_ipress }}</td>
                <td>{{ kmean.ipress }}</td>
                <td>{{ kmean.vraem }}</td>
                <td>{{ kmean.nacional_extranjero }}</td>
                <td>{{ kmean.pais_extranjero }}</td>
                <td>{{ kmean.documento_identidad }}</td>
                <td>{{ kmean.sexo }}</td>
                <td>{{ kmean.regimen_financiamiento }}</td>
                <td>{{ kmean.plan_de_seguro }}</td>
                <td>{{ kmean.cobertura_financiera }}</td>
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
  name: 'KMeans',
  data: ()=> {
            return{
                kmeans: []
            }
        },
    mounted() {
       
        axios.get(baseURL + 'json/afiliados/edad')
            .then(response =>{
                
                this.kmeans = response.data;
                // this.datos.shift();
                console.log(response)
                
            })
    },
   
  
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>