<template id="app">
  <v-app id="inspire">
    <navbar></navbar>

    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~ CONTEÚDO PÁGINA ~~~~~~~~~~~~~~~~~~~~~~~~~-->

    <v-content class="n12 pt-0" id="content" style="margin-top: -899px">
      <transition
        name="fade"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <router-view />
      </transition>
    </v-content>

    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~ FOOTER ~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <info id="info"></info>
  </v-app>
</template>


<script>
import NavBar from "./components/NavBar.vue";
import Info from "./components/Info.vue";

export default {
  name: "App",
  components: {
    navbar: NavBar,
    info: Info
  },
  data() {
    return {
      prevHeight: 0
    };
  },
  beforeCreate() {
    this.$store.commit("initializeStore");
  },

  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>