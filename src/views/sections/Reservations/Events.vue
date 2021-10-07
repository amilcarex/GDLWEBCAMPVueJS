<template>

        
        <div id="eventos" class="eventos clearfix">
            <h3>Elige tus talleres *</h3>
            <div class="caja">

                <div v-for="item in totalEvents" :key="item.day" :id="'day'+item.day" class="contenido-dia none clearfix">
                    <h4>{{item.week}}</h4>
                    <div v-for="day in item.events" :key="day.class" :class="day.class">
                        <p>{{day.tittle}}</p>
                        <label v-for="event in day.events" :key="event.evento_id" :for="'evento'+event.evento_id">
                            <input type="checkbox" :name="'evento'+event.evento_id" :id="'evento'+event.evento_id" v-model="event.selected"><time>{{event.hora_evento}}</time> {{event.nombre_evento}}
                        </label>

                    </div>
                </div>
            </div>
            <!--.caja-->
        </div>
</template>

<script>
export default {
    name: "Events",
    props:{
        totalEvents: Array,
    },
    mounted(){
    }

}
</script>

<style>

</style>