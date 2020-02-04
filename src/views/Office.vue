<template>
    <v-app id="office">
        <v-card style="margin-left: 20%; margin-top:8% ;max-width: 58%; height:40%" >
            <v-card class="mb-12" flat color="white" height="320px" style="font-family: lato;">
                <v-row>
                    <v-col class="text-center">
                        <v-btn depressed color="white" height="170px" width="99%" x-large>
                            <v-icon x-large>mdi-account-check</v-icon>
                            <v-card-subtitle>Verificar Contas</v-card-subtitle>
                        </v-btn>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col class="text-center">
                        <v-btn depressed color="white" height="170px" width="99%" x-large>
                            <v-icon x-large>mdi-home-edit</v-icon>
                            <v-card-subtitle>Verificar Restaurantes</v-card-subtitle>
                        </v-btn>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col class="text-center">
                        <v-btn depressed color="white" height="170px" width="99%" x-large>
                            <v-icon x-large>mdi-account-check</v-icon>
                            <v-card-subtitle>Verificar Contas</v-card-subtitle>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                    <v-col class="text-center">
                        <v-btn depressed color="white" height="170px" width="99%" x-large>
                            <v-icon x-large>mdi-account-check</v-icon>
                            <v-card-subtitle>Verificar Contas</v-card-subtitle>
                        </v-btn>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col class="text-center">
                        <v-btn depressed color="white" height="170px" width="100%" x-large>
                            <v-icon x-large>mdi-account-check</v-icon>
                            <v-card-subtitle>Verificar Contas</v-card-subtitle>
                        </v-btn>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col class="text-center">
                        <v-btn depressed color="white" height="170px" width="99%" x-large>
                            <v-icon x-large>mdi-account-check</v-icon>
                            <v-card-subtitle>Verificar Contas</v-card-subtitle>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
            
        </v-card>
        <!-- Botão de Cancelar o Pedido -->
            <v-dialog v-model="dialog" width="300">
                <template v-slot:activator="{ on }">
                <v-btn class="mb-2" outlined style="margin-left: 41%;font-weight: 500; font-family:lato; margin-top: 3%" color="black" max-width="300px"
                    v-on="on">Voltar à página de Início</v-btn>
                </template>
                <v-card>
                <v-card-title style="font-family:lato; font-size: 18px" primary-title>
                    Sair da zona de Administrador?
                </v-card-title>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <router-link to="/"><v-btn text>Sim</v-btn></router-link>
                    <v-btn text @click="dialog = false">Não</v-btn>
                </v-card-actions>
                </v-card>
            </v-dialog>
    </v-app>
</template>