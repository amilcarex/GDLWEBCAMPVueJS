<template>
   <div id="datos_usuario" class="registro  grid">
            <div class="campo campo-nombre flex">
                <label for="nombre">* Nombre:</label>
                <input type="text" name="nombre" id="nombre"  v-model="user.nombre" placeholder="Tu Nombre">
            </div>
            <div class="campo campo-apellido flex">
                <label for="apellido">* Apellido:</label>
                <input type="text" name="apellido" id="apellido"  v-model="user.apellido" placeholder="Tu Apellido">
            </div>
            <div class="campo campo-email flex">
                <label for="email">* E-mail:</label>
                <input type="email" name="email" id="email" v-model="user.email" placeholder="Tu E-mail">
            </div>
            <div id="error" class="errores"></div>

        </div>
        <!--Datos Usuario-->
</template>

<script>
export default {
    name: "Personal-Data",
    props:{
        user: Object,
    },
    methods:{
    }
}
</script>

<style>

</style>