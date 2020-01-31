<template>
  <v-app class="reservas">
    <div style="margin-top:3%; margin-left: 44%">
      <v-card-title style="font-family:lato; font-weight: 700" class="text-center">
        Planeie a sua Reserva!
      </v-card-title>
    </div>
    <v-form ref="form" v-model="valid" lazy-validation>
    <v-stepper style="margin-left: 18%; margin-top: 1%; max-width: 65%; margin-bottom: 2%" v-model="e1">
      <v-stepper-header style="font-family:lato; font-weight: 500">
        <v-stepper-step editable color="#FFE138" :complete="e1 > 1" step="1">Restaurante</v-stepper-step>

        <v-divider></v-divider>
        <v-stepper-step editable color="#FFE138" :complete="e1 > 2" step="2">Prato</v-stepper-step>

        <v-divider></v-divider>
        <v-stepper-step editable color="#FFE138" :complete="e1 > 3" step="3">Data</v-stepper-step>

        <v-divider></v-divider>
        <v-stepper-step editable color="#FFE138" :complete="e1 > 4" step="4">Observações</v-stepper-step>

        <v-divider></v-divider>
        <v-stepper-step editable color="#FFE138" step="5">Conclusão</v-stepper-step>
      </v-stepper-header>

      <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CONTEÚDO DOS STEPPERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
      <v-stepper-items>
        <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 1 - RESTAURANTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
        <v-stepper-content step="1">
          <v-card class="mb-12" flat height="auto">
            <div class="text-center" style="font-family:lato; font-weight: 700">
              Escolha o Restaurante
              <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg4 v-for="restaurant in restaurants" :key="restaurant.name">
                  <v-hover v-slot:default="{ hover }">
                    <v-card class="mx-auto ma-3" max-width="350" min-width="350" :elevation="hover ? 8: 2">
                      <v-img height="250" :src="restaurant.photo"></v-img>

                      <v-card-title
                        style="font-family:lato; font-weight: 500; font-size: 18px; margin-left: 3%; padding-bottom: 0;">
                        {{ restaurant.name }}</v-card-title>

                      <v-row style="font-family:lato; font-weight: 500; font-size: 12px; color: hsla(0, 0%, 0%, 0.4)"
                        class="mx-0">
                        <v-rating v-model="restaurant.rating" background-color="yellow accent-4" color="yellow accent-4"
                          style="margin-left: 6%" dense half-increments readonly size="18">
                        </v-rating>({{ restaurant.rating }})
                      </v-row>

                      <v-row style="font-family:lato; font-weight: 500; font-size: 12px; color: hsla(0, 0%, 0%, 0.4)"
                        class="mx-0">
                        <div style="margin-left: 7%">
                          <v-icon x-small>mdi-map-marker</v-icon> {{ restaurant.address }}
                        </div>
                        <div style="margin-left: 16%">
                          <v-icon x-small>mdi-phone hangup</v-icon> {{ restaurant.contacts }}
                        </div>
                      </v-row>

                      <v-card-text style="font-family:lato; margin-top; min-height: 130px">
                        <div style="font-weight: 300; text-align: left; margin-left: 4%; margin-bottom: 8%">
                          {{ restaurant.tags }}</div>

                        <div style="font-weight: 500; margin-left:3%; height: 80px" class="text-left">
                          {{ restaurant.desc }}</div>
                      </v-card-text>

                      <v-divider class="mx-4"></v-divider>

                      <v-card-actions>
                          <v-btn style="margin: auto" color="black" outlined text
                            @click="e1 = 2, getPickedRestaurantName(restaurant.name)">Escolher</v-btn>
                        </v-card-actions>
                    </v-card>
                  </v-hover>
                </v-flex>
              </v-layout>
            </div>
          </v-card>
          <v-dialog v-model="dialog" width="300">
            <template v-slot:activator="{ on }">
              <v-btn class="mb-2" outlined style="margin-left: 41%;font-weight: 500; font-family:lato" color="black"
                v-on="on">Cancelar a Reserva</v-btn>
            </template>
            <v-card>
              <v-card-title style="font-family:lato; font-size: 18px" primary-title>
                Cancelar o pedido de Reserva?
              </v-card-title>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="e1=1; dialog = false">Sim</v-btn>
                <v-btn text @click="dialog = false">Não</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-stepper-content>

        <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 2 - PRATOS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
        <v-stepper-content step="2">
          <v-card flat class="mb-12" height="auto">
            <div class="text-center" style="font-family:lato; font-weight: 700">
              Escolha o Prato
              <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg4 v-for="dish in dishes" :key="dish.name">
                  <v-hover v-slot:default="{ hover }">
                    <v-card class="mx-auto ma-3" max-width="350" min-width="350" :elevation="hover ? 8: 2">

                      <v-img height="250" :src="dish.photo"></v-img>

                      <v-card-title
                        style="font-family:lato; font-weight: 500; font-size: 18px; margin-left: 3%; padding-bottom: 0;">
                        {{ dish.name }}</v-card-title>

                      <v-card-text style="font-family:lato; margin-top">
                        <div style="font-weight: 300; text-align: left; margin-left: 3%; margin-bottom: 8%">
                          {{ dish.tags }}</div>

                        <div style="font-weight: 500; margin-left:3%; height: 80px" class="text-left">{{ dish.info }}
                        </div>
                      </v-card-text>

                      <v-divider class="mx-4"></v-divider>

                      <v-card-actions>
                        <v-btn style="margin: auto" color="black" outlined text
                          @click="e1 = 3, getPickedDishName(dish.name)">Escolher</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-hover>
                </v-flex>
              </v-layout>
            </div>
          </v-card>
           <!-- Botão de Cancelar o Pedido -->
          <v-dialog v-model="dialog" width="300">
            <template v-slot:activator="{ on }">
              <v-btn class="mb-2" outlined style="margin-left: 41%;font-weight: 500; font-family:lato" color="black"
                v-on="on">Cancelar a Reserva</v-btn>
            </template>
            <v-card>
              <v-card-title style="font-family:lato; font-size: 18px" primary-title>
                Cancelar o pedido de Reserva?
              </v-card-title>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="e1=1; dialog = false">Sim</v-btn>
                <v-btn text @click="dialog = false">Não</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-stepper-content>

        <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 3 - DATA E HORA DA RESERVA~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
        <v-stepper-content step="3">
          <v-card flat class="mb-12" height="auto">
            <v-row>
              <v-col align="center">
                <v-date-picker header-color="black" color="yellow" scrollable v-model="reservationDate"></v-date-picker>
              </v-col>
              <v-col align="center">
                  <v-time-picker scrollable ampm-in-title header-color="black" color="yellow" v-model="reservationTime"></v-time-picker>
              </v-col>
            </v-row>
          </v-card>
           <!-- Botão de Cancelar o Pedido -->
          <v-dialog v-model="dialog" width="300">
            <template v-slot:activator="{ on }">
              <v-btn color="#FFE138" class="ml-4 mb-2" style="font-weight: 700; font-family:lato" @click="e1 = 4">Continuar</v-btn>
              <v-btn class="mb-2" outlined style="margin-left: 33%;font-weight: 500; font-family:lato" color="black"
                v-on="on">Cancelar a Reserva</v-btn>
            </template>
            <v-card>
              <v-card-title style="font-family:lato; font-size: 18px" primary-title>
                Cancelar o pedido de Reserva?
              </v-card-title>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="e1=1; dialog = false;">Sim</v-btn>
                <v-btn text @click="dialog = false">Não</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-stepper-content>

        <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 4 - OBSERVAÇÕES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
        <v-stepper-content step="4">
          <v-card class="mb-12" flat height="260px">
            <v-row>
              <v-col>
                <v-text-field 
                  color="black" 
                  solo flat
                  label="Observações:" 
                  v-model="observations" 
                  placeholder="Observações relativas ao seu pedido de reserva">
                </v-text-field>
              </v-col>
              <v-divider class="mx-4" vertical/>
              <v-col align="center">
                <v-card flat>
                  <v-card-title style="font-family:lato; font-size: 20px; font-weight:500; margin-left:32%">Número de Pessoas:</v-card-title>
                  <v-btn @click="numPeople += 1" class="ma-4" fab dark color="yellow"> <v-icon x-large dark>mdi-plus</v-icon></v-btn>
                  <div style="font-family:lato; font-size: 18px; font-weight: 700"> {{ numPeople }}</div>
                  <v-btn @click="numPeople -= 1" class="ma-4" fab dark color="yellow"><v-icon x-large dark>mdi-minus</v-icon></v-btn>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
          <!-- Botão de Cancelar o Pedido -->
          <v-dialog v-model="dialog" width="300">
            <template v-slot:activator="{ on }">
              <v-btn color="#FFE138" class="ml-4 mb-2" style="font-weight: 700; font-family:lato" @click="e1 = 5">Continuar</v-btn>
              <v-btn class="mb-2" outlined style="margin-left: 32%;font-weight: 500; font-family:lato" color="black"
                v-on="on">Cancelar a Reserva</v-btn>
            </template>
            <v-card>
              <v-card-title style="font-family:lato; font-size: 18px" primary-title>
                Cancelar o pedido de Reserva?
              </v-card-title>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="e1=1; dialog = false;">Sim</v-btn>
                <v-btn text @click="dialog = false">Não</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-stepper-content>
        <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 5 - CONCLUSÃO ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

        <v-stepper-content step="5" color="white">
          <v-card class="mb-12" flat color="white" height="320px" style="font-family: lato;">
              <v-row>
                <v-col class="text-center">
                  <v-card-title style="text-decoration: underline #FFE138 1px">Restaurante escolhido:</v-card-title>
                  <v-card-subtitle class="ma-4">{{this.pickedRestaurantName}}</v-card-subtitle>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col class="text-center">
                  <v-card-title style="text-decoration: underline #FFE138 1px">Prato selecionado:</v-card-title>
                  <v-card-subtitle class="ma-4">{{this.pickedDishName}}</v-card-subtitle>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col class="text-center">
                  <v-card-title style="text-decoration: underline #FFE138 1px">Hora da Reserva:</v-card-title>
                  <v-card-subtitle class="ma-4">{{this.reservationTime}}</v-card-subtitle>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row>
                <v-col class="text-center">
                  <v-card-title style="text-decoration: underline #FFE138 1px">Número de Pessoas:</v-card-title>
                  <v-card-subtitle class="ma-4">{{ numPeople }}</v-card-subtitle>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col class="text-center">
                  <v-card-title style="text-decoration: underline #FFE138 1px">Observações:</v-card-title>
                  <v-card-subtitle class="ma-4">{{observations}}</v-card-subtitle>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col class="text-center">
                  <v-card-title style="text-decoration: underline #FFE138 1px">Data da Reserva:</v-card-title>
                  <v-card-subtitle class="ma-4">{{this.reservationDate}}</v-card-subtitle>
                </v-col>
              </v-row>
          </v-card>
          <!-- Botão de Cancelar o Pedido -->
          <v-dialog v-model="dialog" width="300">
            <template v-slot:activator="{ on }">
              <v-btn color="#FFE138" class="ml-4 mb-2" style="font-weight: 700; font-family:lato" @click="submit">Confirmar a Reserva</v-btn>
              <v-btn class="mb-2" outlined style="margin-left: 32%;font-weight: 500; font-family:lato" color="black"
                v-on="on">Cancelar a Reserva</v-btn>
            </template>
            <v-card>
              <v-card-title style="font-family:lato; font-size: 18px" primary-title>
                Cancelar o pedido de Reserva?
              </v-card-title>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="e1=1; dialog = false;">Sim</v-btn>
                <v-btn text @click="dialog = false">Não</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    </v-form>
  </v-app>
</template>

<script>
  export default {
    name: "Reservas",

    data() {
      return {
        e1: 0,
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
        dialog: false,
        time: new Date(),
        name: "",
        pickedRestaurantName: "",
        pickedDishName: "",
        reservationTime: "",        
        reservationDate: "",
        observations: "",
        numPeople: 1,     

        restaurants: this.$store.getters.getRestaurants,
        dishes: this.$store.getters.getDishes,
      };
    },
    methods: {
       getPickedRestaurantName(restaurantName) {
        this.pickedRestaurantName = restaurantName
      },
      getPickedDishName(dishName) {
        this.pickedDishName = dishName
      },
      submit() {
        if (this.$refs.form.validate()) {
          this.dialog = false;

          this.$store.commit("ADD_RESERVATION", {
            reservationId: this.$store.getters.getLastReservationId,
            userId: this.$store.getters.getLoggedUserId,
            pickedRestaurantName: this.pickedRestaurantName,
            pickedDishName: this.pickedDishName,
            name: this.$store.getters.getLoggedUserName,
            reservationTime: this.reservationTime,
            reservationDate: this.reservationDate,
            observations: this.observations,
            numPeople: this.numPeople,
          });
        }
      },
      reset() {
        this.$refs.form.reset();
      }
    },
    computed: {
      form() {
        return {
          pickedRestaurantName: this.pickedRestaurantName,
          pickedDishName: this.pickedDishName,
          reservationTime: this.reservationTime,
          reservationDate: this.reservationDate,
          observations: this.observations,
          numPeople: this.numPeople,
        }
      }
    }
  }
</script>