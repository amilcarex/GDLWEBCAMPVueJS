<template>
  <div class="body-home">
    <!-- Summary -->
    <Welcome-Summary />
    <!-- End Summary -->

    <!-- Program Content -->
    <Program-Content :Categories="Categories" />
    <!-- End Program Content -->

    <!-- Guests -->
    <Guests :Guests="Guests" />
    <!-- End Guests -->

    <!-- Counter Parallax -->
    <Counter-Parallax v-on:scroll.native="counterAnimation" />
    <!-- End Counter Parallax-->

    <!-- Prices -->
    <Prices />
    <!-- End Prices -->

    <!-- Map -->
    <LeafletMap />
    <!-- End Map -->

    <!-- Testimonials -->
    <Testimonials />
    <!-- End Testimonials -->

    <!-- Testimonials -->
    <Newsletter />
    <!-- End Testimonials -->

    <!-- Countdown -->
    <Countdown />
    <!-- End Countdown -->


  </div>
</template>

<script>
import Summary from "../sections/Summary.vue";
import ProgramContent from "../sections/Home/ProgramContent.vue";
import Guests from "../sections/Guests.vue";
import CounterParallax from "../sections/Home/CounterParallax.vue";
import Prices from "../sections/Home/Prices.vue";
import LeafletMap from '../sections/Home/LeafletMap.vue';
import Testimonials from "../sections/Home/Testimonials.vue";
import Newsletter from '../sections/Home/Newsletter.vue';
import Countdown from '../sections/Home/Countdown.vue';
export default {
  name: "Home",
  components: {
    "Welcome-Summary": Summary,
    "Program-Content": ProgramContent,
    "Guests": Guests,
    "Counter-Parallax": CounterParallax,
    "Prices" : Prices,
    "LeafletMap": LeafletMap,
    "Testimonials": Testimonials,
    "Newsletter" : Newsletter,
    "Countdown" : Countdown,
  },
  data() {
    return {
      Categories: [
        {
          id_categoria: 3,
          cat_evento: "Talleres",
          eventos: [
            {
              evento_id: 1,
              nombre_evento: "Responsive Web Design",
              fecha_evento: "2021-12-10",
              hora_evento: "10:00:00",
              nombre_invitado: "Rafael Bautista",
              clave: "taller_01",
            },
            {
              evento_id: 2,
              nombre_evento: "Flexbox",
              fecha_evento: "2021-12-10",
              hora_evento: "12:00:00",
              nombre_invitado: "Shari Herrera",
              clave: "taller_02",
            },
            {
              evento_id: 3,
              nombre_evento: "HTML5 y CSS3",
              fecha_evento: "2021-12-10",
              hora_evento: "14:00:00",
              nombre_invitado: "Gregorio Sanchez",
              clave: "taller_03",
            },
            {
              evento_id: 4,
              nombre_evento: "Drupal",
              fecha_evento: "2021-12-10",
              hora_evento: "17:00:00",
              nombre_invitado: "Susana Rivera",
              clave: "taller_04",
            },
            {
              evento_id: 5,
              nombre_evento: "WordPress",
              fecha_evento: "2021-12-10",
              hora_evento: "19:00:00",
              nombre_invitado: "Harold Garcia",
              clave: "taller_05",
            },
            {
              evento_id: 9,
              nombre_evento: "AngularJS",
              fecha_evento: "2021-12-11",
              hora_evento: "10:00:00",
              nombre_invitado: "Rafael Bautista",
              clave: "taller_06",
            },
            {
              evento_id: 10,
              nombre_evento: "PHP y MySQL",
              fecha_evento: "2021-12-11",
              hora_evento: "12:00:00",
              nombre_invitado: "Shari Herrera",
              clave: "taller_07",
            },
            {
              evento_id: 11,
              nombre_evento: "JavaScript Avanzado",
              fecha_evento: "2021-12-11",
              hora_evento: "14:00:00",
              nombre_invitado: "Gregorio Sanchez",
              clave: "taller_08",
            },
            {
              evento_id: 12,
              nombre_evento: "SEO en Google",
              fecha_evento: "2021-12-11",
              hora_evento: "17:00:00",
              nombre_invitado: "Susana Rivera",
              clave: "taller_09",
            },
            {
              evento_id: 13,
              nombre_evento: "De Photoshop a HTML5 y CSS3",
              fecha_evento: "2021-12-11",
              hora_evento: "19:00:00",
              nombre_invitado: "Harold Garcia",
              clave: "taller_10",
            },
            {
              evento_id: 14,
              nombre_evento: "PHP Intermedio y Avanzado",
              fecha_evento: "2021-12-11",
              hora_evento: "21:00:00",
              nombre_invitado: "Susan Sanchez",
              clave: "taller_11",
            },
            {
              evento_id: 20,
              nombre_evento: "Laravel",
              fecha_evento: "2021-12-12",
              hora_evento: "10:00:00",
              nombre_invitado: "Rafael Bautista",
              clave: "taller_12",
            },
            {
              evento_id: 21,
              nombre_evento: "Crea tu propia API",
              fecha_evento: "2021-12-12",
              hora_evento: "12:00:00",
              nombre_invitado: "Shari Herrera",
              clave: "taller_13",
            },
            {
              evento_id: 22,
              nombre_evento: "JavaScript y jQuery",
              fecha_evento: "2021-12-12",
              hora_evento: "14:00:00",
              nombre_invitado: "Gregorio Sanchez",
              clave: "taller_14",
            },
            {
              evento_id: 23,
              nombre_evento: "Creando Plantillas para WordPress",
              fecha_evento: "2021-12-12",
              hora_evento: "17:00:00",
              nombre_invitado: "Susana Rivera",
              clave: "taller_15",
            },
            {
              evento_id: 24,
              nombre_evento: "Tiendas Virtuales en Magento",
              fecha_evento: "2021-12-12",
              hora_evento: "19:00:00",
              nombre_invitado: "Harold Garcia",
              clave: "taller_16",
            },
          ],
          icono: "code",
        },
        {
          id_categoria: 2,
          cat_evento: "Conferencias",
          eventos: [
            {
              evento_id: 6,
              nombre_evento: "Como ser freelancer",
              fecha_evento: "2021-12-10",
              hora_evento: "10:00:00",
              nombre_invitado: "Susan Sanchez",
              clave: "conf_01",
            },
            {
              evento_id: 7,
              nombre_evento: "Tecnologías del Futuro",
              fecha_evento: "2021-12-10",
              hora_evento: "17:00:00",
              nombre_invitado: "Rafael Bautista",
              clave: "conf_02",
            },
            {
              evento_id: 8,
              nombre_evento: "Seguridad en la Web",
              fecha_evento: "2021-12-10",
              hora_evento: "19:00:00",
              nombre_invitado: "Shari Herrera",
              clave: "conf_03",
            },
            {
              evento_id: 15,
              nombre_evento:
                "Como crear una tienda online que venda millones en pocos días",
              fecha_evento: "2021-12-11",
              hora_evento: "10:00:00",
              nombre_invitado: "Susan Sanchez",
              clave: "conf_04",
            },
            {
              evento_id: 16,
              nombre_evento: "Los mejores lugares para encontrar trabajo",
              fecha_evento: "2021-12-11",
              hora_evento: "17:00:00",
              nombre_invitado: "Rafael Bautista",
              clave: "conf_05",
            },
            {
              evento_id: 17,
              nombre_evento: "Pasos para crear un negocio rentable ",
              fecha_evento: "2021-12-11",
              hora_evento: "19:00:00",
              nombre_invitado: "Shari Herrera",
              clave: "conf_06",
            },
            {
              evento_id: 25,
              nombre_evento: "Como hacer Marketing en línea",
              fecha_evento: "2021-12-12",
              hora_evento: "10:00:00",
              nombre_invitado: "Susan Sanchez",
              clave: "conf_07",
            },
            {
              evento_id: 26,
              nombre_evento: "¿Con que lenguaje debo empezar?",
              fecha_evento: "2021-12-12",
              hora_evento: "17:00:00",
              nombre_invitado: "Shari Herrera",
              clave: "conf_08",
            },
            {
              evento_id: 27,
              nombre_evento: "Frameworks y librerias Open Source",
              fecha_evento: "2021-12-12",
              hora_evento: "19:00:00",
              nombre_invitado: "Gregorio Sanchez",
              clave: "conf_09",
            },
          ],
          icono: "comment",
        },
        {
          id_categoria: 1,
          cat_evento: "Seminarios",
          eventos: [
            {
              evento_id: 18,
              nombre_evento: "Aprende a Programar en una mañana",
              fecha_evento: "2021-12-11",
              hora_evento: "10:00:00",
              nombre_invitado: "Gregorio Sanchez",
              clave: "sem_02",
            },
            {
              evento_id: 19,
              nombre_evento: "Diseño UI y UX para móviles",
              fecha_evento: "2021-12-11",
              hora_evento: "17:00:00",
              nombre_invitado: "Harold Garcia",
              clave: "sem_03",
            },
            {
              evento_id: 28,
              nombre_evento: "Creando una App en Android en una mañana",
              fecha_evento: "2021-12-12",
              hora_evento: "10:00:00",
              nombre_invitado: "Susana Rivera",
              clave: "sem_04",
            },
            {
              evento_id: 29,
              nombre_evento: "Creando una App en iOS en una tarde",
              fecha_evento: "2021-12-12",
              hora_evento: "17:00:00",
              nombre_invitado: "Rafael Bautista",
              clave: "sem_05",
            },
          ],
          icono: "university",
        },
      ],
      Guests: [
        {
          invitado_id: 1,
          nombre_invitado: "Rafael",
          apellido_invitado: "Bautista",
          descripcion:
            "   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quas quidem minus sequi quo quam ab at nobis autem saepe incidunt ea, beatae corrupti, delectus dolorum veritatis itaque quibusdam quos.",
          url_imagen: "invitado1.jpg",
        },
        {
          invitado_id: 2,
          nombre_invitado: "Shari",
          apellido_invitado: "Herrera",
          descripcion:
            "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi expedita soluta nostrum odit rem tenetur porro repellendus minima a asperiores tempore, explicabo, dolore iste esse aspernatur? At beatae eveniet sequi.",
          url_imagen: "invitado2.jpg",
        },
        {
          invitado_id: 3,
          nombre_invitado: "Gregorio",
          apellido_invitado: "Sanchez",
          descripcion:
            "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi expedita soluta nostrum odit rem tenetur porro repellendus minima a asperiores tempore, explicabo, dolore iste esse aspernatur? At beatae eveniet sequi.",
          url_imagen: "invitado3.jpg",
        },
        {
          invitado_id: 4,
          nombre_invitado: "Susana",
          apellido_invitado: "Rivera",
          descripcion:
            "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi expedita soluta nostrum odit rem tenetur porro repellendus minima a asperiores tempore, explicabo, dolore iste esse aspernatur? At beatae eveniet sequi.",
          url_imagen: "invitado4.jpg",
        },
        {
          invitado_id: 5,
          nombre_invitado: "Harold",
          apellido_invitado: "Garcia",
          descripcion:
            "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi expedita soluta nostrum odit rem tenetur porro repellendus minima a asperiores tempore, explicabo, dolore iste esse aspernatur? At beatae eveniet sequi.",
          url_imagen: "invitado5.jpg",
        },
        {
          invitado_id: 6,
          nombre_invitado: "Susan",
          apellido_invitado: "Sanchez",
          descripcion:
            "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi expedita soluta nostrum odit rem tenetur porro repellendus minima a asperiores tempore, explicabo, dolore iste esse aspernatur? At beatae eveniet sequi.",
          url_imagen: "invitado6.jpg",
        },
      ],
    };
  },
  methods: {
    },
};
</script>

<style>
</style>