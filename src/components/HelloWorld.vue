<template>
    <v-layout text-center>
      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CAROUSSEL ~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <v-card id="caroussel" width="100%" height="845" flat color="white" class="mx-auto">
        <v-row dense justify="space-between">
          <v-col style="width:100%">
            <div style="margin:auto; max-width: 60%; padding-top: 20%">
              <v-card-text style="text-align:left; font-weight: 700; color: black; font-size: 280%;">Os melhores</v-card-text>
              <v-card-text style="text-align:left; font-weight: 700; color: black; font-size: 280%;">restaurantes à</v-card-text>
              <v-card-text style="text-align:left; font-weight: 700; color: black; font-size: 280%;">distância de um clique!</v-card-text>
              <v-card-subtitle style="text-align: left; font-weight: 300; margin-top: 2%;">Na is2go pode explorar diferentes restaurantes e pratos, escolher o seu preferido e marcar uma reserva para uma almoçarada com os amigos!</v-card-subtitle>
              <router-link to="/restaurantes"><v-btn color="#FFE138" class="text-capitalize" style="float: left; margin-left: 3%; font-weight: 900; margin-top: 10%;" x-large width="300px" depressed rounded>Explorar Restaurantes</v-btn></router-link>
            </div>
          </v-col>
          <v-col style="max-width:1000px; height:730px;">
            <v-carousel height="840" style="min-height: 500px" :show-arrows="showArrows" vertical vertical-delimiters hide-delimiter-background cycle>
            <v-carousel-item style="min-height: 1000px" v-for="image in images" :key="image" :src="image.src">
            </v-carousel-item>
          </v-carousel>
          </v-col>
        </v-row>
        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEARCH BAR~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
      <v-card id="search" class="pa-4" flat color="transparent">
        <v-toolbar style="font-size:1vw; max-width: 60%" class="mx-auto" id="toolbar" height="60%" elevation="10">

          <v-btn icon>
            <v-icon>mdi-crosshairs-gps</v-icon>
          </v-btn>

          <router-link to="/pratos">
          <v-text-field hide-details color="yellow" append-icon="mdi-magnify" placeholder="Encontre o seu prato..." solo flat single-line></v-text-field></router-link>
          <v-btn rounded outlined small style="margin-left: 1%; font-weight: 300" color="grey">Populares</v-btn>
          <v-btn style="margin-left: 1%; font-weight: 300" rounded outlined small color="grey">Destaques</v-btn>
          <v-btn style="margin-left: 1%; font-weight: 300" rounded outlined small color="grey">Fast Food</v-btn>
          <v-btn style="margin-left: 1%; font-weight: 300" rounded outlined small color="grey">Vegan</v-btn>
          <v-btn style="margin-left: 1%; font-weight: 300" rounded outlined small color="grey">Vegetariano</v-btn>
          <v-btn style="margin-left: 1%; font-weight: 300" rounded outlined small color="grey">Pastelaria</v-btn>
          <v-btn style="margin-left: 1%; font-weight: 300" rounded outlined small color="grey">Tudo</v-btn>
          <v-btn color="#FFE138" style="margin-left: 1%; height: 75%; border-radius: 5px" depressed x-small dark>
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      images: [
        {
          src:
            require('@/assets/main.jpg')
        },
        {
          src:
            require('@/assets/beterraba.jpg')
        },
        {
          src:
            require('@/assets/bife.jpg')
        },
        {
          src:
            require('@/assets/burgers.jpg')
        },
        {
          src:
            require('@/assets/francesinha.jpg')
        }
      ],
      showArrows: false
    };
  },
};
</script>

<style>
  #search {
    font-family: lato;
  }

  #caroussel {
    font-family: lato;
  }
</style>