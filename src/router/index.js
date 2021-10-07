import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "../views/Layout.vue";
import Home from "../views/pages/Home.vue";
import Conferences from "../views/pages/Conferences.vue";
import Calendar from "../views/pages/Calendar.vue";
import Guests from "../views/pages/Guests.vue";
import Reservations from "../views/pages/Reservations.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home-Page",
        components: { default: Home }
      },
      {
        path: "Conferencias",
        name: "Conferences",
        components: { default: Conferences }
      },
      {
        path: "Calendario",
        name: "Calendar",
        components: { default: Calendar }
      },
      {
        path: "Invitados",
        name: "Guests",
        components: { default: Guests }
      },
      {
        path: "Registro",
        name: "Registration",
        components: { default: Reservations }
      },

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
