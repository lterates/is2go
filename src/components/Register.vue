<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn
        v-show="$store.getters.checkLogged === false"
        class="text-capitalize"
        style="font-family: lato; font-weight: 900; margin-right: 1%;"
        color="#FFE138"
        rounded
        v-on="on"
      >Registo</v-btn>      
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Registo</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Nome*" v-model="username" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" v-model="email" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  hint="Mínimo de 8 caracteres"
                  v-model="password"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="date"
                      label="Data de Nascimento"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" color="#FFE138" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="black" @click="$refs.menu.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="[
                  'Pastelaria',
                  'Vegetariano',
                  'Vegan',
                  'Carne',
                  'Peixe',
                  'Japonesa',
                  'Chinesa',
                  'Fast Food',
                  'Italiana',
                  'Tradicional'
                ]"
                  label="Interesses"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
        <small>*Campos Obrigatórios</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="black" text @click="dialog = false">Fechar</v-btn>
        <v-btn color="black" text @click="submit">Registar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "register",

  data: () => ({
    dialog: false,
    username: "",
    password: "",
    email: "",
    id: 0
  }),

  methods: {
    submit() {      
      if (this.$refs.form.validate()) {
        this.dialog = false;
        this.$store.commit("ADD_USER", {
          id: this.$store.getters.getLastUserId,
          username: this.username,
          password: this.password,
          email: this.email
        });
        this.$router.replace("/");
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
