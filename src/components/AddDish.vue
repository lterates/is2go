<template>
    <v-col class="text-center">
            <v-dialog v-model="dialogDish" width="500">
              <template v-slot:activator="{ on }">
                <v-btn
                  depressed
                  v-on="on"
                  color="white"
                  height="170px"
                  width="99%"
                  x-large
                >
                  <v-icon x-large>mdi-plus-circle</v-icon>
                  <v-card-subtitle>Adicionar Pratos</v-card-subtitle>
                </v-btn>
              </template>
              <v-card>
                <v-container>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-card-subtitle
                      class="ma-4"
                      style="font-weight: 500; font-size: 22px; text-align: center"
                      >Novo Prato</v-card-subtitle
                    >
                    <v-text-field
                      class="mx-auto"
                      style="max-width:80%;"
                      outlined
                      color="yellow darken-1"
                      type="text"
                      label="Nome"
                      required
                      v-model="name"
                    ></v-text-field>
                    <v-text-field
                      class="mx-auto"
                      style="max-width:80%;"
                      color="yellow darken-1"
                      outlined
                      type="text"
                      label="Descrição"
                      required
                      v-model="info"
                    ></v-text-field>
                    <v-text-field
                      class="mx-auto"
                      style="max-width:80%;"
                      color="yellow darken-1"
                      outlined
                      type="text"
                      label="Tags"
                      required
                      v-model="tags"
                    ></v-text-field>
                    <v-file-input
                      class="mx-auto mb-6"
                      accept="image/*"
                      prepend-icon="mdi-image-outline"
                      style="max-width: 80%"
                      color="yellow darken-1"
                      label="Imagem do Prato"
                      v-model="photo"
                    ></v-file-input>
                  </v-form>
                </v-container>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn color="black" text @click="submit">Adicionar</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
</template>
<script>
export default {
  name: "AddDish",
   data: () => ({
    dialog: false,
    name: "",
    info: "",
    tags: "",
    id: 0
  }),

  methods: {
    submit() {      
      if (this.$refs.form.validate()) {
        this.dialog = false;
        this.$store.commit("ADD_DISH", {
          id: this.$store.getters.getLastDishId,
          name: this.name,
          info: this.info,
          tags: this.tags
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
        username: this.username,
        password: this.password,
        email: this.email,
        dialog: this.dialog
      };
    }
  }
};
</script>