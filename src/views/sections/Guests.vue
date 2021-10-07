<template>
 <section class="invitados contenedor seccion">
    <h2>Nuestros Invitados</h2>
    <ul class="lista-invitados clearfix">
        <li v-for="item in Guests" :key="item.invitado_id">
            <div class="invitado">
                <a :href="'#invitado'+item.invitado_id" class="invitado-info">
                    <img :src="'img/'+item.url_imagen" :alt="item.nombre_invitado+' '+item.apellido_invitado">
                    <p>{{item.nombre_invitado+' '+item.apellido_invitado}}</p>
                </a>
            </div>
        </li>
        <div class="none">
            <div class="invitado-info" v-for="item in Guests" :key="item.invitado_id" :id="'invitado'+item.invitado_id">
                <h2>{{ item.nombre_invitado }}</h2>
                    <img :src="'img/'+item.url_imagen" :alt="item.nombre_invitado">
                    <p> {{ item.descripcion }}</p>
            </div>
        </div>

    </ul>
</section>

</template>

<script>
export default {
    name: "Guests",
    props: {
        Guests: Array,
    },
    data(){
        return {

        }
    },
    mounted(){
        this.showGuest();
    },
    methods:{
        showGuest(){
            // $('.invitado-info').colorbox({inline:true, width:"50%"});
        }
    }
}
</script>

<style>

</style>