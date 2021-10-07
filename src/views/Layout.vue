<template>
  <div :class="current_page">
    <header class="site-header">
      <div class="hero">
        <div class="contenido-header">
          <nav class="redes-sociales">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-pinterest"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </nav>

          <div class="informacion-evento flex">
            <div class="datos-evento">
              <p class="fecha margin">
                <i class="fas fa-calendar-day"></i> 05-02-2021
              </p>
              <p class="ciudad margin">
                <i class="fas fa-map-marker-alt"></i> Anzoateguí, VE
              </p>
            </div>
            <div class="nombre-evento">
              <h1 class="nombre-sitio" v-lettering>GDLWEBCAMP</h1>
              <p class="slogan">
                El mejor lugar para <span>Desarrollar tus ideas.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Hero-->
    </header>
    <div class="barra">
      <div class="contenedor flex">
        <div class="logo">
          <router-link :to="{ name: 'Home-Page' }"
            ><img src="img/logo.svg" alt="logo"
          /></router-link>
        </div>
        <div class="menu-movil" @click="showNav">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav class="navegacion-principal" id="navegacion-principal">
          <router-link :to="{ name: 'Conferences' }" class="link"
            >Conferencia</router-link
          >
          <router-link :to="{ name: 'Calendar' }" class="link"
            >Calendario</router-link
          >
          <router-link :to="{ name: 'Guests' }" class="link"
            >Invitados</router-link
          >
          <router-link :to="{ name: 'Registration' }" class="link"
            >Reservaciones</router-link
          >
        </nav>
      </div>
      <!-- Contenedor -->
    </div>

    <fade-transition :duration="250" mode="out-in">
      <!-- your content here -->
      <router-view />
    </fade-transition>

    
    <!-- Barra -->
    <footer class="footer">
      <div id="mapa" class="mapa none"></div>
      <div class="footer-contenido">
        <div class="contenedor flex footer-contenido--alineacion">
          <div class="contenedor footer--contenido__segmento">
            <p class="titulo">Sobre <span>GA Devs</span></p>
            <p class="texto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              quis molestiae, ea eligendi vero debitis praesentium? Quae officia
              reprehenderit laudantium hic minus laboriosam est dignissimos
              ratione aliquid, consequuntur voluptas optio?
            </p>
          </div>
          <div class="contenedor footer--contenido__segmento">
            <p class="titulo">Últimos <span>Tweets</span></p>
            <p class="texto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <span>#justo</span> Autem quis molestiae, ea eligendi vero debitis
              praesentium? <span>@justo</span> officia reprehenderit laudantium
              minus laboriosam est dignissimos ratione aliquid, consequuntur
            </p>
          </div>

          <div class="contenedor footer--contenido__segmento">
            <p class="titulo">Redes <span>Sociales</span></p>
            <div class="footer--iconos">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-pinterest"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright contenedor">
        <p>Todos Los Derechos Reservados <span>GDLWEBCAMP. 2021</span></p>
      </div>
    </footer>
  </div>
</template>

<script>
import FadeTransition from 'vue2-transitions/src/Fade/FadeTransition.vue';
export default {
  components: { FadeTransition },
  name: "Layout",
  data() {
    return {
      current_page: null,
    };
  },
  mounted() {
    this.fixedNavegation();
  },
  methods: {
    fixedNavegation() {
      let windowHeight = window.$(window).height();
      let barraAltura = window.$(".barra").innerHeight();

      window.$(window).scroll(function () {
        let scroll = window.$(window).scrollTop();
        if (scroll > windowHeight) {
          $(".barra").addClass("fixed");
          $("body").css({ "margin-top": barraAltura + "px" });
        } else {
          $(".barra").removeClass("fixed");
          $("body").css({ "margin-top": "0px" });
        }
      });
    },
    showLinks(link, time) {
      setTimeout(link.setAttribute("style", "display:block"), time);
    },
    showNav() {
      window.$("#navegacion-principal").toggleClass("visible");

      let links = document.querySelectorAll(".link");
      var count = 500;
      for (let i = 0; i < links.length; i++) {
        let link = links[i];
        this.showLinks(link, count);
        count = count + 1000;
      }
    },
  },
};
</script>

<style>
</style>