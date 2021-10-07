<template>
  <Guests :Guests="Guests"/>
</template>

<script>
import Guests from '../sections/Guests.vue';
export default {
    name: "Guests-Page",
    components:{
        "Guests" : Guests
    },
    data(){
      return{
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
      }
    }
}
</script>

<style>

</style>