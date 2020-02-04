<template id="navBar">
  <v-app id="inspire">
    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~ NAVBAR ~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <v-app-bar id="toolbar" elevation="24" absolute height="80%" color="white" hide-on-scroll>
      <router-link to="/">
        <v-btn depressed height="75" color="white" x-large>
          <v-img max-width="50px" style="margin-left: 1%" :src="require('@/assets/is2go.png')"></v-img>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>

      <v-toolbar-items style="margin-left: 6%">
        <router-link to="/reservas">
          <v-btn
            v-show="$store.getters.checkLogged === true"
            class="text-capitalize"
            style="font-family: lato; font-weight: 500;"
            height="80"
            text
          >Reserva</v-btn>
        </router-link>
        <v-spacer></v-spacer>
        <router-link to="/restaurantes">
          <v-btn
            class="text-capitalize"
            style="font-family: lato; font-weight: 500;"
            height="80"
            text
          >Restaurantes</v-btn>
        </router-link>
        <v-spacer></v-spacer>
        <router-link to="/pratos">
          <v-btn
            class="text-capitalize"
            style="font-family: lato; font-weight: 500;"
            height="80"
            text
          >Pratos</v-btn>
        </router-link>
        <router-link to="/office">
          <v-btn
            v-show="$store.getters.checkLogged === true"
            class="text-capitalize"
            style="font-family: lato; font-weight: 500;"
            height="80"
            text
          >Administração</v-btn>
        </router-link>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-icon v-show="$store.getters.checkLogged === true"
        @click="userProfile()"
        color="black"
        size="180%"
        style="margin-right: 1%"
        >mdi-account-outline</v-icon>
      <div v-show="$store.getters.checkLogged ===true"> Bem vindo(a) {{ $store.getters.getLoggedUserName }}</div>
      <v-btn class="ma-4" depressed style="font-family: lato; font-weight: 900; margin-right: 25px"
        color="#FFE138"
        rounded v-show="$store.getters.checkLogged === true" @click="logout">Log Out</v-btn>
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~ MODAL LOGIN ~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <LogIn/>
      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~ MODAL REGISTO ~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <Register/>
    </v-app-bar>
  </v-app>
</template>

<script>
import LogIn from "@/components/LogIn.vue";
import Register from "@/components/Register.vue";

export default {
  name: "NavBar",
  components: {
    LogIn,
    Register
  },
  data: () => ({}),

  methods: {
    userProfile() {
      this.$router.push({ path: "/Perfil" });
    },
    logout() {
        this.$store.commit("LOGOUT");
        sessionStorage.removeItem("loggedUser");
        this.$router.replace('/');        
      }    
  }
};
</script>

<style>
v-btn {
  font-family: lato;
  font-weight: black 900;
  font-weight: 100;
}
</style>
