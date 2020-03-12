<template id="info">
 <v-footer padless >
      <v-card class="flex" flat tile>
        <v-card-title class="subtitle-2" style="background-color: #F4F5F7; font-family: lato; font-weight: 700">
          &copy; {{ new Date().getFullYear() }} —
          <strong>Designed by Grupo 7 for ESMAD</strong>

          <v-spacer></v-spacer>
          <v-title style="text-decoration: underline; font-weight: 700; margin-right:10px">Contacts</v-title>•
          <v-title style="text-decoration: underline; font-weight: 700; margin-right:10px; margin-left:10px">About</v-title>•
          <v-title style="text-decoration: underline; font-weight: 700; margin-right:10px; margin-left:10px">Privacy</v-title>•
          <v-title style="text-decoration: underline; font-weight: 700; margin-left:10px">Terms and Conditions</v-title>
          <v-spacer></v-spacer>
        </v-card-title>
      </v-card>
      <v-btn icon style="margin-left:6%">
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn icon style="margin-right:1%">
        <v-icon>mdi-youtube</v-icon>
      </v-btn>
    </v-footer>
</template>

<script>
export default {
  name: "Info"
}

</script>

<style>
</style>