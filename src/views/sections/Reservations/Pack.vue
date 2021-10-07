<template>
  <div class="paquetes" id="paquetes">
            <h3>Elige el Número de Boletos *</h3>
            <ul class="lista-precios clearfix">
                <li v-for="item in tickets" :key="item.price">
                    <div class="tabla-precio">
                        <h3>{{item.title}} <span v-if="item.length > 0">(<span  v-for="day in item.days" :key="day.id">  {{day.day}}<span v-if="item.length > 1 && day.id < item.length">, </span> </span> )</span></h3>
                        <p class="numero">{{item.price}}$</p>
                        <ul>
                            <li><i class="fas fa-check"></i>Bocadillos Gratis</li>
                            <li><i class="fas fa-check"></i>Todas las Conferencias</li>
                            <li><i class="fas fa-check"></i>Todos los Talleres</li>
                        </ul>
                        <div class="orden">
                            <label for="pase">Boletos Deseados:</label>
                            <input type="number" name="pase" @input="selectTickets" v-model="item.bought" min="0" :id="'pase'+item.days_number" size="3" placeholder="0">
                        </div>
                    </div>
                </li>
            </ul>
        </div><!-- Paquetes -->
</template>

<script>
export default {
    name: "Pack",
    props:{
        tickets: Array,
    },
    mounted(){
    },
    methods:{
        selectTickets(){
            this.$emit("selectTickets", { pase : event.target.id, value: event.data})
        },
    }

}
</script>

<style>

</style>