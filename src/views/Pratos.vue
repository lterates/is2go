<template>
  <v-app style="background-color: white" class="pratos">
    <v-layout text-center>
      <v-card width="100%">
        <!-- ~~~~~~~~~~~~~~~~~ SEARCH ~~~~~~~~~~~~~~~~ -->
        <v-card id="search" flat color="transparent">
          <v-toolbar
            style="font-size:1vw; margin: auto; margin-top:2%;"
            id="toolbar"
            height="60%"
            max-width="75%"
            elevation="10"
          >
            <v-text-field
              type="text"
              v-model="search"
              solo
              flat
              color="yellow"
              hide-details
              append-icon="mdi-magnify"
              placeholder="Pesquisa"
              single-line
            ></v-text-field>
            <v-divider vertical inset class="mx-5"></v-divider>
            <v-overflow-btn :items="organize" item-text="name" hide-details label="Organizar" v-model="organizedRestaurants" solo flat color="yellow lighten-3"></v-overflow-btn>
            <v-divider vertical inset class="mx-5"></v-divider>
            <v-text-field
              color="yellow"
              hide-details
              solo
              flat
              append-icon="mdi-map-marker"
              placeholder="Localização"
              single-line
            ></v-text-field>
          </v-toolbar>
        </v-card>
        <v-row>
          <!-- ~~~~~~~~~~~~~~~~~ FILTROS ~~~~~~~~~~~~~~~~ -->
          <v-col style="max-width: 25%; font-family:lato;">
            <div
              style="background-color: #F9FAFB; height:100%; margin-bottom: 0px"
            >
              <br />
              <br />
              <v-card-text
                class="text-left"
                style="font-weight: 700; font-family:lato; margin-left: 48%; font-size: 18px;"
                >Filtros</v-card-text
              >
              <v-treeview
                style="font-weight: 300; font-size: 13px; margin-left: 43%"
                class="text-left"
                rounded
                selectable
                selected-color="yellow"
                :items="items"
              ></v-treeview>
            </div>
          </v-col>
          <!-- ~~~~~~~~~~~~~~~~~ GRID ~~~~~~~~~~~~~~~~ -->
          <v-col style="max-width: 65%; min-width:65%; padding-bottom: 0px">
            <v-layout row wrap class="ma-6">
              <v-flex
                xs12
                sm6
                md4
                lg4
                v-for="dish in filteredDishes"
                :key="dish.name"
              >
                <v-card class="mx-auto ma-6" max-width="350" min-width="350">
                  <v-img height="250" v-bind:src= dish.photo>></v-img>

                  <v-card-title
                    style="font-family:lato; font-weight: 500; font-size: 18px; margin-left: 3%; padding-bottom: 0;"
                    >{{ dish.name }}</v-card-title
                  >

                  <v-card-text style="font-family:lato; margin-top">
                    <div
                      style="font-weight: 300; text-align: left; margin-left: 3%; margin-bottom: 8%"
                    >
                      {{ dish.tags }}
                    </div>

                    <div
                      style="font-weight: 500; margin-left:3%; height: 80px"
                      class="text-left"
                    >
                      {{ dish.info }}
                    </div>
                  </v-card-text>

                  <v-divider class="mx-4"></v-divider>

                  <v-card-actions>
                    <router-link to="/reservas">
                      <v-btn style="margin-left: 100%" color="black" outlined text @click="reserve"
                        >Reservar</v-btn
                      ></router-link
                    >
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-col>
        </v-row>
      </v-card>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: "Pratos",
  data() {
    return {
      search: "",
      items: [
        { id: 1, name: "Todos" },
        { id: 2, name: "Fast Food" },
        { id: 3, name: "Vegetariano" },
        { id: 4, name: "Vegan" },
        { id: 5, name: "Saudável" },
        { id: 6, name: "Tradicional" },
        { id: 7, name: "Peixe" },
        { id: 8, name: "Carne" },
        { id: 9, name: "Indiana" },
        { id: 10, name: "Japonês" },
        { id: 11, name: "Sobremesas" }
      ],
      dishes: this.$store.getters.getDishes,

      organize: [{
            name: "A-Z",
            callback: () => this.dishes.sort((a, b) => a.name - b.name )
          },
          {
            name: "Z-A",
            function: ""
          },
          {
            name: "Popularidade",
            function: ""
          },
          {
            name: "Classificação",
            function: ""
          }
        ]
    };
  },

  computed: {
    filteredDishes() {
      return this.dishes.filter(dish => {
        return dish.name.match(this.search);
      });
    }
  }
};
</script>
