<template>
  <div class="perfil">
    <v-row>
  <v-col class="pa-0" style="margin-left:6%; max-width:15%;">
    <v-image>
      <v-img style="margin-top: 19%" height="300" :src="require('@/assets/tiago.jpg')"></v-img>
    </v-image>
  </v-col>
  <v-col class="pa-0" style="max-width:73%;">
    <v-card outlined style="margin-left:3%; margin-top: 4%" height="300px">
    <v-card-text style="margin-top: 10%; text-align:left; font-weight: 700; color: black; font-size: 200%; margin-left: 10%">Olá {{ $store.getters.getLoggedUserName }}!</v-card-text>
    </v-card>
  </v-col>
  </v-row>

  <v-row class="pa-5">
    <v-card style=" margin-top: 3%; margin-left: 5%" width="90%" height="700px">
    <v-card-text style="margin-left: 10%; margin-top: 2%; text-align:left; font-weight: 700; color: black; font-size: 200%;">Sugerimos... </v-card-text>
     <v-col style="margin-left: 5%; max-width: 90%; padding-bottom: 0px">
            <v-layout row wrap class="ma-6">
              <v-flex xs12 sm6 md4 lg4 v-for="dish in dishes" :key="dish.name">
                <v-card class="mx-auto ma-6" max-width="350">
                  <v-img height="250" :src="dish.image"></v-img>

                  <v-card-title
                    style="font-family:lato; font-weight: 500; font-size: 18px; margin-left: 3%; padding-bottom: 0;"
                  >{{ dish.name }}</v-card-title>

                  <v-card-text style="font-family:lato; margin-top">
                    <div
                      style="font-weight: 300; text-align: left; margin-left: 3%; margin-bottom: 8%"
                    >{{ dish.tags }}</div>

                    <div style="font-weight: 500; margin-left:3%; height: 80px" class="text-left">{{ dish.info }}</div>
                  </v-card-text>

                  <v-divider class="mx-4"></v-divider>

                  <v-card-actions>
                    <v-btn color="yellow accent-4" text @click="reserve">Reservar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-col>
    </v-card>
  </v-row>
  </div>
   
</template>

<script>
export default {
  name: "Perfil",
  components: {},

data() {
  return{
  dishes: [
        { name: "Arroz de Pato à Antiga", image: require('@/assets/pato.jpg'), info: "Um prato clássico composto por arroz solto, pato desfiado e um sabor que brilha pela simplicidade.", tags: "#tradicional" },
        { name: "Codorniz à Valenciana", image: require('@/assets/codorniz.jpg'), info: "Uma twist orginal num prato tão conhecido do nosso país vizinho.", tags: "Internacional" },
        { name: "Arroz de Tamboril com Camarão", image: require('@/assets/tamboril.jpg'), info: "Um prato que encanta. Suculento como se quer, saboroso e fresco, graças aos coentros e à hortelã, este arroz de tamboril vai deliciá-lo.", tags: "#peixe" },
      ],
    }
  }
};

</script>