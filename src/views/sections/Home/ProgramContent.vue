<template>
    <section class="programa">
      <div class="contenedor contenido-video">
        <video autoplay="autoplay" muted loop poster="img/bg-talleres.jpg">
          <source src="video/video.mp4" type="video/mp4" />
          <source src="video/video.webm" type="video/webm" />
          <source src="video/video.ogv" type="video/ogg" />
        </video>
      </div>
      <!--Contenedor Video-->

      <div class="contenido-programa">
        <div class="contenedor">
          <div class="programa-evento">
            <h2>Programa del Evento</h2>

            <nav class="menu-programa">
              <a
                v-on:click.prevent="selectProgram"
                :href="'#' + item.cat_evento"
                v-for="item in Categories"
                :key="item.id_categoria"
                ><font-awesome-icon :icon="item.icono" />
                {{ item.cat_evento }}</a
              >
            </nav>
            <div
              v-for="item in Categories"
              :key="item.id_categoria"
              :id="item.cat_evento"
              class="info-curso none clearfix"
            >
              <div
                v-for="item in item.eventos.slice(0,2)"
                :key="item.evento_id"
                class="detalle-evento"
              >
                <h3>{{ item.nombre_evento }}</h3>
                <p><i class="fas fa-clock"></i>{{item.hora_evento}}</p>
                <p><i class="fas fa-calendar"></i>{{item.fecha_evento}}</p>
                <p><i class="fas fa-user"></i>{{item.nombre_invitado}}</p>
              </div>
              <a href="" class="button float-right">Ver Todos</a>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "Program-Content",
  props: {
    Categories: Array,
  },
  data() {
    return {};
  },
  mounted() {
    this.showProgram();
  },
  methods: {
    showProgram(){
      window.$('.programa-evento .info-curso:first').show();
      window.$('.menu-programa a:first').addClass('activo');
    },
    selectProgram(event){
          let link = event.target;
          window.$('.menu-programa a').removeClass('activo');
          window.$(link).addClass('activo');
          window.$('.none').hide();
          let enlace = $(link).attr('href');
          window.$(enlace).fadeIn(1000);
          return false;
    }
  },
  
};
</script>

<style>
</style>