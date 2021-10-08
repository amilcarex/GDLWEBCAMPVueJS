<template>
  <section class="seccion contenedor">
    <h2>Registro de Usuarios</h2>
    <form
      action="validar_registro.php"
      method="POST"
      id="registro"
      class="registro"
      @submit.prevent="payout"
    >
      <PersonalData :user="user" />

      <Pack :tickets="tickets" @selectTickets="selectTickets" />

      <Events :totalEvents="totalEvents" />

      <Total
        @selectCamisas="selectCamisas"
        @selectEtiquetas="selectEtiquetas"
        @selectRegalo="selectRegalo"
        @calculate="calculate"
      />
    </form>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';
import moment from "moment";
moment.locale("es");
import PersonalData from "../sections/Reservations/PersonalData.vue";
import Pack from "../sections/Reservations/Pack.vue";
import Events from "../sections/Reservations/Events.vue";
import Total from "../sections/Reservations/Total.vue";
export default {
  name: "Reservations",
  components: {
    PersonalData: PersonalData,
    Pack: Pack,
    Events: Events,
    Total: Total,
  },
  data() {
    return {
      user: {
        nombre: null,
        apellido: null,
        email: null,
      },
      tickets: [
        {
          days_number: 1,
          days: [
            {
              id: 1,
              day: moment(new Date().getFullYear() + "-12-10").format("dddd"),
            },
          ],
          title: "Pase por Día",
          price: 30,
          bought: 0,
          length: 1,
        },
        {
          days_number: 3,
          title: "Todos los Días",
          price: 50,
          bought: 0,
          length: 0,
        },
        {
          days_number: 2,
          days: [
            {
              id: 1,
              day: moment(new Date().getFullYear() + "-12-10").format("dddd"),
            },
            {
              id: 2,
              day: moment(new Date().getFullYear() + "-12-11").format("dddd"),
            },
          ],
          title: "Pase por 2 Días",
          price: 40,
          bought: 0,
          length: 2,
        },
      ],
      boletos_1dia: 0,
      boletos_2dias: 0,
      boletos_3dias: 0,
      camisas: 0,
      etiquetas: 0,
      regalo: null,
      subtotal: 0,
      total: 0,
      totalEvents: [
        {
          day: 1,
          week: moment(new Date().getFullYear() + "-12-10").format("dddd"),
          events: [
            {
              tittle: "Talleres",
              class: "talleres",

              events: [
                {
                  evento_id: 1,
                  nombre_evento: "Responsive Web Design",
                  hora_evento: "10:00",
                  nombre_invitado: "Rafael",
                  apellido_invitado: "Bautista",
                  selected: false,
                },
                {
                  evento_id: 2,
                  nombre_evento: "Flexbox",
                  hora_evento: "12:00",
                  nombre_invitado: "Shari",
                  apellido_invitado: "Herrera",
                  selected: false,
                },
                {
                  evento_id: 3,
                  nombre_evento: "HTML5 y CSS3",
                  hora_evento: "14:00",
                  nombre_invitado: "Gregorio",
                  apellido_invitado: "Sanchez",
                  selected: false,
                },
                {
                  evento_id: 4,
                  nombre_evento: "Drupal",
                  hora_evento: "17:00",
                  nombre_invitado: "Susana",
                  apellido_invitado: "Rivera",
                  selected: false,
                },
                {
                  evento_id: 5,
                  nombre_evento: "WordPress",
                  hora_evento: "19:00",
                  nombre_invitado: "Harold",
                  apellido_invitado: "Garcia",
                  selected: false,
                },
              ],
            },
            {
              tittle: "Conferencias",
              class: "conferencias",
              events: [
                {
                  evento_id: 6,
                  nombre_evento: "Como ser freelancer",
                  hora_evento: "10:00",
                  nombre_invitado: "Susan",
                  apellido_invitado: "Sanchez",
                  selected: false,
                },
                {
                  evento_id: 7,
                  nombre_evento: "Tecnologías del Futuro",
                  hora_evento: "17:00",
                  nombre_invitado: "Rafael",
                  apellido_invitado: "Bautista",
                  selected: false,
                },
                {
                  evento_id: 8,
                  nombre_evento: "Seguridad en la Web",
                  hora_evento: "19:00",
                  nombre_invitado: "Shari",
                  apellido_invitado: "Herrera",
                  selected: false,
                },
              ],
            },
            {
              tittle: "Seminarios",
              class: "seminarios",
              events: [
                {
                  evento_id: 29,
                  nombre_evento: "Creando una App en iOS en una tarde",
                  hora_evento: "12:00",
                  nombre_invitado: "Rafael",
                  apellido_invitado: "Bautista",
                  selected: false,
                },
              ],
            },
          ],
        },
        {
          day: 2,
          week: moment(new Date().getFullYear() + "-12-11").format("dddd"),
          events: [
            {
              tittle: "Talleres",
              class: "talleres",
              events: [
                {
                  evento_id: 9,
                  nombre_evento: "AngularJS",
                  hora_evento: "10:00",
                  nombre_invitado: "Rafael",
                  apellido_invitado: "Bautista",
                  selected: false,
                },
                {
                  evento_id: 10,
                  nombre_evento: "PHP y MySQL",
                  hora_evento: "12:00",
                  nombre_invitado: "Shari",
                  apellido_invitado: "Herrera",
                  selected: false,
                },
                {
                  evento_id: 11,
                  nombre_evento: "JavaScript Avanzado",
                  hora_evento: "14:00",
                  nombre_invitado: "Gregorio",
                  apellido_invitado: "Sanchez",
                  selected: false,
                },
                {
                  evento_id: 12,
                  nombre_evento: "SEO en Google",
                  hora_evento: "17:00",
                  nombre_invitado: "Susana",
                  apellido_invitado: "Rivera",
                  selected: false,
                },
                {
                  evento_id: 13,
                  nombre_evento: "De Photoshop a HTML5 y CSS3",
                  hora_evento: "19:00",
                  nombre_invitado: "Harold",
                  apellido_invitado: "Garcia",
                  selected: false,
                },
                {
                  evento_id: 14,
                  nombre_evento: "PHP Intermedio y Avanzado",
                  hora_evento: "21:00",
                  nombre_invitado: "Susan",
                  apellido_invitado: "Sanchez",
                  selected: false,
                },
              ],
            },
            {
              tittle: "Conferencias",
              class: "conferencias",
              events: [
                {
                  evento_id: 15,
                  nombre_evento:
                    "Como crear una tienda online que venda millones en pocos días",
                  hora_evento: "10:00",
                  nombre_invitado: "Susan",
                  apellido_invitado: "Sanchez",
                  selected: false,
                },
                {
                  evento_id: 16,
                  nombre_evento: "Los mejores lugares para encontrar trabajo",
                  hora_evento: "17:00",
                  nombre_invitado: "Rafael",
                  apellido_invitado: "Bautista",
                  selected: false,
                },
                {
                  evento_id: 17,
                  nombre_evento: "Pasos para crear un negocio rentable ",
                  hora_evento: "19:00",
                  nombre_invitado: "Shari",
                  apellido_invitado: "Herrera",
                  selected: false,
                },
              ],
            },
            {
              tittle: "Seminarios",
              class: "seminarios",
              events: [
                {
                  evento_id: 18,
                  nombre_evento: "Aprende a Programar en una mañana",
                  hora_evento: "10:00",
                  nombre_invitado: "Gregorio",
                  apellido_invitado: "Sanchez",
                  selected: false,
                },
                {
                  evento_id: 19,
                  nombre_evento: "Diseño UI y UX para móviles",
                  hora_evento: "17:00",
                  nombre_invitado: "Harold",
                  apellido_invitado: "Garcia",
                  selected: false,
                },
              ],
            },
          ],
        },
        {
          day: 3,
          week: moment(new Date().getFullYear() + "-12-12").format("dddd"),
          events: [
            {
              tittle: "Talleres",
              class: "talleres",
              events: [
                {
                  evento_id: 20,
                  nombre_evento: "Laravel",
                  hora_evento: "10:00",
                  nombre_invitado: "Rafael",
                  apellido_invitado: "Bautista",
                  selected: false,
                },
                {
                  evento_id: 21,
                  nombre_evento: "Crea tu propia API",
                  hora_evento: "12:00",
                  nombre_invitado: "Shari",
                  apellido_invitado: "Herrera",
                  selected: false,
                },
                {
                  evento_id: 22,
                  nombre_evento: "JavaScript y jQuery",
                  hora_evento: "14:00",
                  nombre_invitado: "Gregorio",
                  apellido_invitado: "Sanchez",
                  selected: false,
                },
                {
                  evento_id: 23,
                  nombre_evento: "Creando Plantillas para WordPress",
                  hora_evento: "17:00",
                  nombre_invitado: "Susana",
                  apellido_invitado: "Rivera",
                  selected: false,
                },
                {
                  evento_id: 24,
                  nombre_evento: "Tiendas Virtuales en Magento",
                  hora_evento: "19:00",
                  nombre_invitado: "Harold",
                  apellido_invitado: "Garcia",
                  selected: false,
                },
              ],
            },
            {
              tittle: "Conferencias",
              class: "conferencias",
              events: [
                {
                  evento_id: 25,
                  nombre_evento: "Como hacer Marketing en línea",
                  hora_evento: "10:00",
                  nombre_invitado: "Susan",
                  apellido_invitado: "Sanchez",
                  selected: false,
                },
                {
                  evento_id: 26,
                  nombre_evento: "¿Con que lenguaje debo empezar?",
                  hora_evento: "17:00",
                  nombre_invitado: "Shari",
                  apellido_invitado: "Herrera",
                  selected: false,
                },
                {
                  evento_id: 27,
                  nombre_evento: "Frameworks y librerias Open Source",
                  hora_evento: "19:00",
                  nombre_invitado: "Gregorio",
                  apellido_invitado: "Sanchez",
                  selected: false,
                },
              ],
            },
            {
              tittle: "Seminarios",
              class: "seminarios",
              events: [
                {
                  evento_id: 28,
                  nombre_evento: "Creando una App en Android en una mañana",
                  hora_evento: "10:00",
                  nombre_invitado: "Susana",
                  apellido_invitado: "Rivera",
                  selected: false,
                },
                {
                  evento_id: 29,
                  nombre_evento: "Creando una App en iOS en una tarde",
                  hora_evento: "17:00",
                  nombre_invitado: "Rafael",
                  apellido_invitado: "Bautista",
                  selected: false,
                },
              ],
            },
          ],
        },
      ],
      subtotals:{
        camisas: 0,
        etiquetas: 0,
        boletos_1dia: 0,
        boletos_2dias: 0,
        boletos_3dias: 0,
      }
    };
  },
  created(){
  },
  methods: {
    selectTickets(data) {
      const firstDay = document.querySelector("#day" + 1);
      const secondDay = document.querySelector("#day" + 2);
      const thirdDay = document.querySelector("#day" + 3);
      let ticket1 = this.tickets[0].bought;
      let ticket2 = this.tickets[2].bought;
      let ticket3 = this.tickets[1].bought;

      if (data.pase == "pase1") {
        if (parseInt(data.value) > 0) {
          this.boletos_1dia = parseInt(data.value);
          firstDay.classList.replace("none", "grid");
        } else {
          if (parseInt(data.value) == 0 && ticket2 == 0 && ticket3 == 0) {
            firstDay.classList.replace("grid", "none");
              this.boletos_1dia = 0;
          }
        }
      }
      if (data.pase == "pase2") {
        if (parseInt(data.value) > 0) {
          this.boletos_2dias = parseInt(data.value);
          firstDay.classList.replace("none", "grid");
          secondDay.classList.replace("none", "grid");
        } else {
          if (parseInt(data.value) == 0 && ticket1 > 0 && ticket3 == 0) {
            secondDay.classList.replace("grid", "none");
              this.boletos_2dias = 0;
          } else {
            if (parseInt(data.value) == 0 && ticket1 == 0 && ticket3 == 0) {
              firstDay.classList.replace("grid", "none");
              secondDay.classList.replace("grid", "none");
              
              this.boletos_1dia = 0;
              this.boletos_2dias = 0;
            }
          }
        }
      }
      if (data.pase == "pase3") {
        if (parseInt(data.value) > 0) {
          this.boletos_3dias = parseInt(data.value);
          firstDay.classList.replace("none", "grid");
          secondDay.classList.replace("none", "grid");
          thirdDay.classList.replace("none", "grid");
        } else {
          if (parseInt(data.value) == 0 && ticket1 > 0 && ticket2 == 0) {
            secondDay.classList.replace("grid", "none");
            thirdDay.classList.replace("grid", "none");
            this.boletos_2dias = 0;
            this.boletos_3dias = 0;
          } else {
            if (parseInt(data.value) == 0 && ticket1 == 0 && ticket2 > 0) {
              thirdDay.classList.replace("grid", "none");
              this.boletos_3dias = 0;
            } else {
              firstDay.classList.replace("grid", "none");
              secondDay.classList.replace("grid", "none");
              thirdDay.classList.replace("grid", "none");

              this.boletos_1dia = 0;
              this.boletos_2dias = 0;
              this.boletos_3dias = 0;
            }
          }
        }
      }
      
      if(this.boletos_1dia == 0 && this.boletos_2dias == 0 && this.boletos_3dias == 0 ){
        this.total = 0;
        let total = $("#suma-total");
        total.html(this.total);
      }
    },
    selectCamisas(data) {
      this.camisas = data;
    },
    selectEtiquetas(data) {
      this.etiquetas = data;
    },
    selectRegalo(data) {
      if(data == 1){
        this.regalo = 'Pulsera'
      }
      if(data == 2){
        this.regalo = 'Etiquetas'
      }
      if(data == 3){
        this.regalo = 'Plumas'
      }
    },
    calculate() {
      if (
        this.user.nombre == null ||
        this.user.apellido == null ||
        this.user.email == null
      ) {
        
      this.$swal({
        title: "Error",
        html: "<p>Debes Llenar todos tus datos</p>",
        icon: 'error',
        confirmButtonClass: "button-alerta",
        confirmButtonText: "<span class='alerta'>Entiendo <i class='fas fa-thumbs-up'></i> </span>",
        });
        return;
      }
      if (this.user.email.indexOf("@") == -1) {
          
        this.$swal({
          title: "Error",
          html: "<p>Debe ser un Correo Válido</p>",
          icon: 'error',
        confirmButtonClass: "button-alerta",
          confirmButtonText: "<span class='alerta'>Entiendo <i class='fas fa-thumbs-up'></i> </span>",
          });
        return;
      }
      if (
        this.boletos_1dia == 0 &&
        this.boletos_2dias == 0 &&
        this.boletos_3dias == 0
      ) {
        
      this.$swal({
        title: "Error",
        html: "<p>Debes comprar al menos un Boleto</p>",
        icon: 'error',
        confirmButtonClass: "button-alerta",
        confirmButtonText: "<span class='alerta'>Entiendo <i class='fas fa-thumbs-up'></i> </span>",
        });
        return;
      }
      if (this.regalo == null || this.regalo == "") {
      this.$swal({
        title: "Error",
        html: "<p>Debes Elegir un Regalo</p>",
        icon: 'error',
        confirmButtonClass: "button-alerta",
        confirmButtonText: "<span class='alerta'>Entiendo <i class='fas fa-thumbs-up'></i> </span>",
        });
        return;
      }
      this.subtotals.camisas = ((this.camisas * 10 ) * 0.93);
      this.subtotals.etiquetas =(this.etiquetas * 2);
      this.subtotals.boletos_1dia = (this.boletos_1dia * 30 );
      this.subtotals.boletos_2dias = ( this.boletos_2dias * 40);
      this.subtotals.boletos_3dias = (this.boletos_3dias * 50);
      this.subtotal = (this.boletos_1dia * 30 )+( this.boletos_2dias * 40) +(this.boletos_3dias * 50);
      const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
      this.total = sumValues(this.subtotals);
      let total = $("#suma-total");
      total.html(this.total+'$');
    },
    sendMail(){
      let data = {
        to_name : this.user.nombre,
        to_email: this.user.email,
        tickets1: this.boletos_1dia,
        price_tickets1 : this.subtotals.boletos_1dia,
        tickets2: this.boletos_2dias,
        price_tickets2 : this.subtotals.boletos_2dias,
        tickets3: this.boletos_3dias,
        price_tickets3 : this.subtotals.boletos_3dias,
        camisas: this.camisas,
        price_camisas: this.subtotals.camisas,
        etiquetas: this.etiquetas,
        price_etiquetas: this.subtotals.etiquetas,
        subtotal: this.subtotal,
        total: this.total,
        regalo: this.regalo,
      }
      emailjs.send('service_ac8z5co', 'template_mncet7w', data, 'user_rvdrnYx1xlC2PLDxWcyaL')
      .then(response => {
        this.$swal({
        title: "Enviado",
        html: "<p>Su recibo será envíado al correo indicado</p>",
        icon: 'success',
        confirmButtonClass: "button-alerta",
        confirmButtonText: "<span class='alerta'>Entiendo <i class='fas fa-thumbs-up'></i> </span>",
        });
      },
      error => {
        this.$swal({
        title: "Error",
        html: "<p>Su compra no pudo ser realizada</p>",
        icon: 'error',
        confirmButtonClass: "button-alerta",
        confirmButtonText: "<span class='alerta'>Entiendo <i class='fas fa-thumbs-up'></i> </span>",
        });
      })
    },
    payout() {
      if (this.total == 0 || this.total == null) {
      this.$swal({
        title: "Error",
        html: "<p>Primero debes calcular el monto a pagar</p>",
        icon: 'error',
        confirmButtonClass: "button-alerta",
        confirmButtonText: "<span class='alerta'>Entiendo <i class='fas fa-thumbs-up'></i> </span>",
        });
        return;
      }
      if(this.camisas > 0 && this.subtotals.camisas == 0  || this.etiquetas > 0 &&  this.subtotals.etiquetas == 0){
        this.$swal({
        title: "Atención",
        html: "<p>Estás realizando un pago sin calcular los costos de camisas o etiquetas</p><br><p>¿Deseas pagar de igual forma?</p>",
        icon: 'error',
        showCancelButton:true,
        cancelButtonText: "<span class='alerta cancel'>No <i class='fas fa-backspace'></i> </span>",
        cancelButtonClass:"button-alerta-cancel",
        confirmButtonClass: "button-alerta",
        confirmButtonText: "<span class='alerta'>Si <i class='fas fa-thumbs-up'></i> </span>",
        }).then(result =>{
          if(result.isConfirmed){ 
            this.subtotals.camisas = ((this.camisas * 10 ) * 0.93);
            this.subtotals.etiquetas =(this.etiquetas * 2);
            const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
            this.total = sumValues(this.subtotals);
            this.sendMail();
          }
        });
        return;
      }else{
        this.sendMail();
      }


    },
  },
};
</script>

<style>
</style>