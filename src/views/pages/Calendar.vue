<template>
  <section class="seccion contenedor">
    <h2>Calendario de Eventos</h2>
    <div class="calendario">
      <div class="fechas-evento" v-for="item in events" :key="item.id">
        <h3 class="dia-evento">
          <i class="fa fa-calendar"></i> {{ item.dia_evento }},
          {{ item.mes_evento }} {{ item.fecha_evento }}, {{ item.año_evento }}
        </h3>
        <div class="dia" v-for="item in item.events" :key="item.evento_id">
          <p class="titulo">{{ item.nombre_evento }}</p>

          <p class="hora">
            <i class="fa fa-clock" aria-hidden=""></i> {{ item.fecha_evento }}
            {{ item.hora_evento }}
          </p>
          <p>
            <i :class="'fa ' + item.icono" aria-hidden="true"></i>
            {{ item.tipo }}
          </p>
          <p>
            <i class="fa fa-user" aria-hidden="true"></i>
            {{ item.nombre_invitado }} {{ item.apellido_invitado }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from "moment";
moment.locale("es");
export default {
  name: "Calendar",
  data() {
    return {
      events: [
        {
          id: 1,
          dia_evento: moment(new Date().getFullYear() + "-12-10").format(
            "dddd"
          ),
          fecha_evento: moment(new Date().getFullYear() + "-12-10").format(
            "DD"
          ),
          mes_evento: moment(new Date().getFullYear() + "-12-10").format(
            "MMMM"
          ),
          año_evento: moment(new Date().getFullYear() + "-12-10").format(
            "YYYY"
          ),
          events: [
            {
              evento_id: 6,
              nombre_evento: "Como ser freelancer",
              hora_evento: "10:00:00",
              fecha_evento: new Date().getFullYear() + "-12-10",
              tipo: "Conferencias",
              icono: "fa-comment",
              nombre_invitado: "Susan",
              apellido_invitado: "Sanchez",
              clave: "conf_01",
            },
            {
              evento_id: 7,
              nombre_evento: "Tecnologías del Futuro",
              fecha_evento: new Date().getFullYear() + "-12-10",
              hora_evento: "17:00:00",
              tipo: "Conferencias",
              icono: "fa-comment",
              nombre_invitado: "Rafael",
              apellido_invitado: "Bautista",
              clave: "conf_02",
            },
            {
              evento_id: 8,
              nombre_evento: "Seguridad en la Web",
              fecha_evento: new Date().getFullYear() + "-12-10",
              hora_evento: "19:00:00",
              tipo: "Conferencias",
              icono: "fa-comment",
              nombre_invitado: "Shari",
              apellido_invitado: "Herrera",
              clave: "conf_03",
            },
            {
              evento_id: 1,
              nombre_evento: "Responsive Web Design",
              fecha_evento: new Date().getFullYear() + "-12-10",
              hora_evento: "10:00:00",
              tipo: "Talleres",
              icono: "fa-code",
              nombre_invitado: "Rafael",
              apellido_invitado: "Bautista",
              clave: "taller_01",
            },
            {
              evento_id: 2,
              nombre_evento: "Flexbox",
              fecha_evento: new Date().getFullYear() + "-12-10",
              hora_evento: "12:00:00",
              tipo: "Talleres",
              icono: "fa-code",
              nombre_invitado: "Shari",
              apellido_invitado: "Herrera",
              clave: "taller_02",
            },
            {
              evento_id: 3,
              nombre_evento: "HTML5 y CSS3",
              fecha_evento: new Date().getFullYear() + "-12-10",
              hora_evento: "14:00:00",
              tipo: "Talleres",
              icono: "fa-code",
              nombre_invitado: "Gregorio",
              apellido_invitado: "Sanchez",
              clave: "taller_03",
            },
            {
              evento_id: 4,
              nombre_evento: "Drupal",
              fecha_evento: new Date().getFullYear() + "-12-10",
              hora_evento: "17:00:00",
              tipo: "Talleres",
              icono: "fa-code",
              nombre_invitado: "Susana",
              apellido_invitado: "Rivera",
              clave: "taller_04",
            },
            {
              evento_id: 5,
              nombre_evento: "WordPress",
              fecha_evento: new Date().getFullYear() + "-12-10",
              hora_evento: "19:00:00",
              tipo: "Talleres",
              icono: "fa-code",
              nombre_invitado: "Harold",
              apellido_invitado: "Garcia",
              clave: "taller_05",
            },
          ],
        },
        {
          id: 2,
          dia_evento: moment(new Date().getFullYear() + "-12-11").format(
            "dddd"
          ),
          fecha_evento: moment(new Date().getFullYear() + "-12-11").format(
            "DD"
          ),
          mes_evento: moment(new Date().getFullYear() + "-12-11").format(
            "MMMM"
          ),
          año_evento: moment(new Date().getFullYear() + "-12-11").format(
            "YYYY"
          ),
          events: [
            {
              evento_id: 18,
              nombre_evento: "Aprende a Programar en una mañana",
              fecha_evento: new Date().getFullYear() + "-12-11",
              hora_evento: "10:00:00",
              tipo: "Seminarios",
              icono: "fa-university",
              nombre_invitado: "Gregorio",
              apellido_invitado: "Sanchez",
              clave: "sem_02",
            },
            {
              evento_id: 19,
              nombre_evento: "Diseño UI y UX para móviles",
              fecha_evento: new Date().getFullYear() + "-12-11",
              hora_evento: "17:00:00",
              tipo: "Seminarios",
              icono: "fa-university",
              nombre_invitado: "Harold",
              apellido_invitado: "Garcia",
              clave: "sem_03",
            },
            {
              evento_id: 15,
              nombre_evento:
                "Como crear una tienda online que venda millones en pocos días",
              fecha_evento: new Date().getFullYear() + "-12-11",
              hora_evento: "10:00:00",
              tipo: "Conferencias",
              icono: "fa-comment",
              nombre_invitado: "Susan",
              apellido_invitado: "Sanchez",
              clave: "conf_04",
            },
            {
              evento_id: 16,
              nombre_evento: "Los mejores lugares para encontrar trabajo",
              fecha_evento: new Date().getFullYear() + "-12-11",
              hora_evento: "17:00:00",
              tipo: "Conferencias",
              icono: "fa-comment",
              nombre_invitado: "Rafael",
              apellido_invitado: "Bautista",
              clave: "conf_05",
            },
            {
              evento_id: 17,
              nombre_evento: "Pasos para crear un negocio rentable ",
              fecha_evento: new Date().getFullYear() + "-12-11",
              hora_evento: "19:00:00",
              tipo: "Conferencias",
              icono: "fa-comment",
              nombre_invitado: "Shari",
              apellido_invitado: "Herrera",
              clave: "conf_06",
            },
            {
              evento_id: 9,
              nombre_evento: "AngularJS",
              fecha_evento: new Date().getFullYear() + "-12-11",
              hora_evento: "10:00:00",
              tipo: "Talleres",
              icono: "fa-code",
              nombre_invitado: "Rafael",
              apellido_invitado: "Bautista",
              clave: "taller_06",
            },
            {
              evento_id: 10,
              nombre_evento: "PHP y MySQL",
              fecha_evento: new Date().getFullYear() + "-12-11",
              hora_evento: "12:00:00",
              tipo: "Talleres",
              icono: "fa-code",
              nombre_invitado: "Shari",
              apellido_invitado: "Herrera",
              clave: "taller_07",
            },
            {
              evento_id: 11,
              nombre_evento: "JavaScript Avanzado",
              fecha_evento: new Date().getFullYear() + "-12-11",
              hora_evento: "14:00:00",
              tipo: "Talleres",
              icono: "fa-code",
              nombre_invitado: "Gregorio",
              apellido_invitado: "Sanchez",
              clave: "taller_08",
            },
            {
              evento_id: 12,
              nombre_evento: "SEO en Google",
              fecha_evento: new Date().getFullYear() + "-12-11",
              hora_evento: "17:00:00",
              tipo: "Talleres",
              icono: "fa-code",
              nombre_invitado: "Susana",
              apellido_invitado: "Rivera",
              clave: "taller_09",
            },
            {
              evento_id: 13,
              nombre_evento: "De Photoshop a HTML5 y CSS3",
              fecha_evento: new Date().getFullYear() + "-12-11",
              hora_evento: "19:00:00",
              tipo: "Talleres",
              icono: "fa-code",
              nombre_invitado: "Harold",
              apellido_invitado: "Garcia",
              clave: "taller_10",
            },
            {
              evento_id: 14,
              nombre_evento: "PHP Intermedio y Avanzado",
              fecha_evento: new Date().getFullYear() + "-12-11",
              hora_evento: "21:00:00",
              tipo: "Talleres",
              icono: "fa-code",
              nombre_invitado: "Susan",
              apellido_invitado: "Sanchez",
              clave: "taller_11",
            },
          ],
        },
        {
          id: 3,
          dia_evento: moment(new Date().getFullYear() + "-12-12").format(
            "dddd"
          ),
          fecha_evento: moment(new Date().getFullYear() + "-12-12").format(
            "DD"
          ),
          mes_evento: moment(new Date().getFullYear() + "-12-12").format(
            "MMMM"
          ),
          año_evento: moment(new Date().getFullYear() + "-12-12").format(
            "YYYY"
          ),
          events: [
            {
              evento_id: 28,
              nombre_evento: "Creando una App en Android en una mañana",
              fecha_evento: new Date().getFullYear() + "-12-12",
              hora_evento: "10:00:00",
              tipo: "Seminarios",
              icono: "fa-university",
              nombre_invitado: "Susana",
              apellido_invitado: "Rivera",
              clave: "sem_04",
            },
            {
              evento_id: 29,
              nombre_evento: "Creando una App en iOS en una tarde",
              fecha_evento: new Date().getFullYear() + "-12-12",
              hora_evento: "17:00:00",
              tipo: "Seminarios",
              icono: "fa-university",
              nombre_invitado: "Rafael",
              apellido_invitado: "Bautista",
              clave: "sem_05",
            },
            {
              evento_id: 25,
              nombre_evento: "Como hacer Marketing en línea",
              fecha_evento: new Date().getFullYear() + "-12-12",
              hora_evento: "10:00:00",
              tipo: "Conferencias",
              icono: "fa-comment",
              nombre_invitado: "Susan",
              apellido_invitado: "Sanchez",
              clave: "conf_07",
            },
            {
              evento_id: 26,
              nombre_evento: "¿Con que lenguaje debo empezar?",
              fecha_evento: new Date().getFullYear() + "-12-12",
              hora_evento: "17:00:00",
              tipo: "Conferencias",
              icono: "fa-comment",
              nombre_invitado: "Shari",
              apellido_invitado: "Herrera",
              clave: "conf_08",
            },
            {
              evento_id: 27,
              nombre_evento: "Frameworks y librerias Open Source",
              fecha_evento: new Date().getFullYear() + "-12-12",
              hora_evento: "19:00:00",
              tipo: "Conferencias",
              icono: "fa-comment",
              nombre_invitado: "Gregorio",
              apellido_invitado: "Sanchez",
              clave: "conf_09",
            },
            {
              evento_id: 20,
              nombre_evento: "Laravel",
              fecha_evento: new Date().getFullYear() + "-12-12",
              hora_evento: "10:00:00",
              tipo: "Talleres",
              icono: "fa-code",
              nombre_invitado: "Rafael",
              apellido_invitado: "Bautista",
              clave: "taller_12",
            },
            {
              evento_id: 21,
              nombre_evento: "Crea tu propia API",
              fecha_evento: new Date().getFullYear() + "-12-12",
              hora_evento: "12:00:00",
              tipo: "Talleres",
              icono: "fa-code",
              nombre_invitado: "Shari",
              apellido_invitado: "Herrera",
              clave: "taller_13",
            },
            {
              evento_id: 22,
              nombre_evento: "JavaScript y jQuery",
              fecha_evento: new Date().getFullYear() + "-12-12",
              hora_evento: "14:00:00",
              tipo: "Talleres",
              icono: "fa-code",
              nombre_invitado: "Gregorio",
              apellido_invitado: "Sanchez",
              clave: "taller_14",
            },
            {
              evento_id: 23,
              nombre_evento: "Creando Plantillas para WordPress",
              fecha_evento: new Date().getFullYear() + "-12-12",
              hora_evento: "17:00:00",
              tipo: "Talleres",
              icono: "fa-code",
              nombre_invitado: "Susana",
              apellido_invitado: "Rivera",
              clave: "taller_15",
            },
            {
              evento_id: 24,
              nombre_evento: "Tiendas Virtuales en Magento",
              fecha_evento: new Date().getFullYear() + "-12-12",
              hora_evento: "19:00:00",
              tipo: "Talleres",
              icono: "fa-code",
              nombre_invitado: "Harold",
              apellido_invitado: "Garcia",
              clave: "taller_16",
            },
          ],
        },
      ],
    };
  },
  mounted() {},
};
</script>

<style>
</style>