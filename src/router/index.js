import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pratos from "../views/Pratos.vue";
import Reservas from "../views/Reservas.vue";
import Office from "../views/Office.vue";
import HomeLogged from "../views/HomeLogged.vue";
import Perfil from "../views/Perfil.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/reservas",
    name: "reservas",
    component: Reservas,    
  },
  {
    path: "/office",
    name: "office",
    component: Office,    
  },
  {
    path: "/restaurantes",
    name: "restaurantes",
    component: () =>
      import("../views/Restaurantes.vue")
  },
  {
    path: "/pratos",
    name: "pratos",
    component: Pratos
    
  },
  {
    path: "/homeLogged",
    name: "homeLogged",
    component: HomeLogged
  },
  {
    path: "/perfil",
    name: "perfil",
    component: Perfil
  },
  {
    path: "*",
    name: "404",
    component: () =>
      import("../views/Secure.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
