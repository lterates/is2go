<template>
  <v-dialog v-model="dialog1" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn
        v-show ="$store.getters.checkLogged === false"
        class="text-capitalize"
        style="font-family: lato; font-weight: 900; margin-right: 25px"
        color="#FFE138"
        rounded
        v-on="on"
      >Login</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Início de Sessão</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="username"
                  prepend-icon="mdi-account-circle"
                  label="username*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  prepend-icon="mdi-lock"
                  append-icon="mdi-eye-off"
                  v-model="password"
                  label="Password*"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
        <small>*Campos Obrigatórios</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="black" text @click="dialog1 = false">Fechar</v-btn>
        <v-btn color="black" text @click="submit">Iniciar Sessão</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
export default {
  name: "login",
  data: () => ({
    username: "",
    password: "",
    dialog1: false
  }),

  methods: {
    submit() {
     
      if (this.$refs.form.validate()) {
        
        this.dialog1 = false;
        this.$store.commit("LOGIN", {
          username: this.username,
          password: this.password
        });
        if (this.$store.getters.checkLogged === true) {
          this.$router.push({ path: "/homeLogged" });
        }
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
        password: this.password
      };
    }
  }
};
</script>