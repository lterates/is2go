<template>
  <div class="perfil">
    <v-row>
      <v-col style="margin-left:5%">
        <v-card class="mt-12" max-width="350" height="auto">
          <v-img height="250" :src="require('@/assets/tiago.jpg')"></v-img>

          <v-card-title style="font-family:lato; font-weight: 500; font-size: 18px; margin-left: 3%; padding-bottom: 0;">Administrador</v-card-title>
          <v-card-text style="font-family:lato; margin-top; min-height: 130px">
            <div style="font-weight: 500; margin-left:3%; height: 80px" class="text-left">
              {{ userBio }}
            </div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
           <!-- Botão de Alterar o Perfil -->
          <v-dialog v-model="dialog" width="300">
            <template v-slot:activator="{ on }">
              <v-btn class="ma-4" outlined style="margin-left: 32%;font-weight: 500; font-family:lato" color="black"
                v-on="on">Editar Descrição</v-btn>
            </template>
            <v-card height="auto">
              <v-textarea v-model="userBio" solo flat no-resize height="300px" full-width label="Nova Descrição..."></v-textarea>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="dialog = false;">Sim</v-btn>
                <v-btn text @click="dialog = false">Não</v-btn>
              </v-card-actions>
              </v-card>
          </v-dialog>
        </v-card>
      </v-col>
      <v-col>

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
  userBio:"",
  components: {},
  historic: this.$store.getters.getHistoric,

data() {
  return{
  dishes: [
        { name: "Arroz de Pato à Antiga", image: require('@/assets/pato.jpg'), info: "Um prato clássico composto por arroz solto, pato desfiado e um sabor que brilha pela simplicidade.", tags: "#tradicional" },
        { name: "Arroz de Tamboril com Camarão", image: require('@/assets/tamboril.jpg'), info: "Um prato que encanta. Suculento como se quer, saboroso e fresco, graças aos coentros e à hortelã, este arroz de tamboril vai deliciá-lo.", tags: "#peixe" },
        { name: "Arroz de Tomate com Tofu", image: require('@/assets/arroz de tomate.jpg'), info: "Simples, saudável e delicioso. Direto da panela para o coração.", tags: "#vegan #vegetariano #saudável" },
      ],
    }
  }
};

</script>