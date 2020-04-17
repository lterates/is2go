import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    comments: [],
    restaurants: [{
        id: 0,
        name: "Casa Nanda",
        photo: require('@/assets/nanda.jpg'),
        desc: "Espaço caseiro com atendimento acolhedor e familiar.",
        address: "Rua da Alegria, 394, Porto",
        contacts: "22 5370575",
        times: "",
        rating: 3.9,
        tags: "Tradicional"
      },
      {
        id: 1,
        name: "Chimarrão Norteshopping",
        photo: require('@/assets/chimarrão.jpg'),
        desc: "A verdadeira tentação da carne.",
        address: "Norteshopping, Sra. da Hora",
        contacts: "21 0026651",
        times: "",
        rating: 3.9,
        tags: "#carne"
      },
      {
        id: 2,
        name: "Essência",
        photo: require('@/assets/essencia.jpg'),
        desc: "O restaurante Essência propõe, mais do que simples pratos saudáveis, apresentar verdadeiras iguarias.",
        address: "R. de Pedro Hispano 1196, Porto",
        contacts: "22 8301813",
        times: "",
        rating: 4.5,
        tags: "#esplanada #vegetariano #sobremesas #saudável"
      },
      {
        id: 3,
        name: "Adega São Nicolau",
        photo: require('@/assets/nicolau.jpg'),
        desc: "Casa típica, localizada na Ribeira, onde primam os pratos da cozinha tradicional portuguesa.",
        address: "R. de São Nicolau 1, Porto",
        contacts: "22 2008232",
        times: "",
        rating: 4.3,
        tags: "#mediterrâneo #tradicional"
      },
      {
        id: 4,
        name: "McDonald's Aliados",
        photo: require('@/assets/mac.jpg'),
        desc: "O restaurante está localizado no espaço anteriormente ocupado pelo famoso Café Imperial, aberto na cidade nos anos 1930.",
        address: "Praça da Liberdade 126, Porto",
        contacts: "22 2013248",
        times: "",
        rating: 4.2,
        tags: "#fastfood"
      },
      {
        id: 5,
        name: "O Buraco",
        photo: require('@/assets/buraco.jpg'),
        desc: "Uma refeição aqui é assim um verdadeiro ato de prazer e a empatia conseguida, excelentemente situada, junto a um dos rios mais bonitos do país.",
        address: "Rua do Bolhão 95, Porto",
        contacts: "22 2006717",
        times: "",
        rating: 4.3,
        tags: "#tradicional #informal"
      },
      {
        id: 6,
        name: "Puro 4050",
        photo: require('@/assets/puro4050.jpg'),
        desc: "Comida italiana e mediterrânica, com um ingrediente especial como elemento central: a eclética carta.",
        address: "Largo São Domingos 84, Porto ",
        contacts: "22 2011852",
        times: "",
        rating: 4.7,
        tags: "#vegan #vegetariano #italiano"
      },
      {
        id: 7,
        name: "Semea by Euskalduna",
        photo: require('@/assets/semea.jpg'),
        desc: "Todos nós temos memórias especiais criadas à mesa com aqueles que nos são mais queridos e estarão sempre ligados à gastronomia. O Semea tem por base a partilha",
        address: "Rua das Flores, 179 Porto",
        contacts: "938 566 766",
        times: "",
        rating: 4.2,
        tags: "#vegetariano #saudável #familiar"
      },
      {
        id: 8,
        name: "Early Cedofeita",
        photo: require('@/assets/earlycedofeita.jpg'),
        desc: "O ambiente é acolhedor, com decoração moderna e minimalista, com toques vintage aqui e ali. A carta também não é dada a grandes floreados. É simples, boa e eficaz.",
        address: "Rua dos Bragas, 374 Porto",
        contacts: "22 1124203",
        times: "",
        rating: 4.5,
        tags: "#brunch #coffee"
      },
      {
        id: 9,
        name: "MUU",
        photo: require('@/assets/muu.jpg'),
        desc: "Pela vida. Pelo que fazem. Por cada pessoa que recebem. Atentos a cada detalhe e apaixonados por cada chance de criar memórias diáriamente.",
        address: "Rua do Almada, 149A, Porto",
        contacts: "914 784 032",
        times: "",
        rating: 5.0,
        tags: "#carne #vinhos #vegetariano"
      },
      {
        id: 10,
        name: "Brick Clérigos",
        photo: require('@/assets/brick.jpg'),
        desc: "O Brick alia o conceito de mesas comunitárias, com comida genuína, simples, saudável e muito saborosa. Simplesmente brilhante!",
        address: "Campo Mártires da Pátria, 103",
        contacts: "22 3234735",
        times: "",
        rating: 4.6,
        tags: "#brunch #vegetariano #informal #tradicional"
      },
      {
        id: 11,
        name: "Typographia Progresso",
        photo: require('@/assets/typographiaprogresso.jpg'),
        desc: "A formidável atmosfera, carta original e staff amigável. Com um conceito novo e intrigante, viage o mundo com um toque portuense em cada prato.",
        address: "Rua do Dr. Sousa Viterbo, 89",
        contacts: "22 0997846",
        times: "",
        rating: 4.4,
        tags: "#vinhos #carne #esplanada"
      },
      {
        id: 12,
        name: "O Apego",
        photo: require('@/assets/apego.jpg'),
        desc: "Cozinha fantástica. Sofisticação mas sem perder o sentido da genuinidade. Pessoas que amam o que fazem e cuidam muito bem dos outros. Tudo com carinho.",
        address: "Rua de Santa Catarina 1198",
        contacts: "22 4029984",
        times: "",
        rating: 4.8,
        tags: "#gourmet #carne #peixe"
      },
      {
        id: 13,
        name: "Ikeda",
        photo: require('@/assets/ikeda.jpg'),
        desc: "A riqueza dos sabores, as diferentes texturas e as cores fortes são algumas das armas da gastronomia japonesa. O elogio da cozinha tradicional japonesa.",
        address: "Rua do Campo Alegre 416",
        contacts: "915 499 363",
        times: "",
        rating: 4.5,
        tags: "#japonês #peixe #vinhos #carne"
      },
      {
        id: 14,
        name: "Cantinho do Avillez",
        photo: require('@/assets/cantinhodoavillez.jpg'),
        desc: "O Cantinho do Avillez no Porto é um espaço simpático, acolhedor e descontraído. A qualidade é uma prioridade. A cozinha é de inspiração portuguesa com influências de viagens.",
        address: "Rua Mouzinho da Silveira, 166",
        contacts: "22 3227879",
        times: "",
        rating: 4.3,
        tags: "#tradicional #carne #peixe #vegetariano"
      },
    ],
    dishes: [{
        id: 0,
        name: "Arroz de Pato à Antiga",
        photo: require('@/assets/pato.jpg'),
        info: "Um prato clássico composto por arroz solto, pato desfiado e um sabor que brilha pela simplicidade.",
        tags: "#tradicional"
      },
      {
        id: 1,
        name: "Arroz de Tamboril com Camarão",
        photo: require('@/assets/tamboril.jpg'),
        info: "Um prato que encanta. Suculento como se quer, saboroso e fresco, graças aos coentros e à hortelã, este arroz de tamboril vai deliciá-lo.",
        tags: "#peixe"
      },
      {
        id: 2,
        name: "Arroz de Tomate com Tofu",
        photo: require('@/assets/arroz de tomate.jpg'),
        info: "Simples, saudável e delicioso. Direto da panela para o coração.",
        tags: "#vegan #vegetariano #saudável"
      },
      {
        id: 3,
        name: "Arroz à Valenciana",
        photo: require('@/assets/arroz-valenciana.jpg'),
        info: "O arroz à valenciana é um prato com origem na região de Valência. Rico na mistura de ingredientes e sabores que cozinham num só tacho.",
        tags: "#peixe"
      },
      {
        id: 4,
        name: "Arroz de Polvo",
        photo: require('@/assets/polvinho.jpg'),
        info: "Malandrinho, delicioso e reconfortante. Este é o prato que tanto procurava.",
        tags: "#peixe"
      },
      {
        id: 5,
        name: "Arroz Doce",
        photo: require('@/assets/arrozdoce.jpg'),
        info: "Doce das romarias e casamentos por todo o país, sempre polvilhado com canela. Um arroz-doce cremoso que sacia as memórias de qualquer um.",
        tags: "#sobremesas"
      },
      {
        id: 6,
        name: "Cozido à Portuguesa",
        photo: require('@/assets/cozido.jpg'),
        info: "Uma refeição tradicional portuguesa deliciosa para um almoço de domingo.",
        tags: "#tradicional #carne"
      },
      {
        id: 7,
        name: "Almofadinhas com alheira e legumes",
        photo: require('@/assets/almofadas.jpg'),
        info: "Perfeitas para uma refeição mais ligeira e acompanhadas de uma salada verde.",
        tags: "#carne #leve"
      },
      {
        id: 8,
        name: "Francesinha",
        photo: require('@/assets/francesinha.jpg'),
        info: "Tradicional do Porto, ideal com cerveja e boa companhia.",
        tags: "Tradicional"
      },
      {
        id: 9,
        name: "Brownies",
        photo: require('@/assets/brownies.jpg'),
        info: "Ideal para aconchegar o estômago numa tarde fria de inverno.",
        tags: "Sobremesa"
      },
      {
        id: 10,
        name: "Bife Com Legumes Salteados",
        photo: require('@/assets/bife.jpg'),
        info: "Perfeito para almoços em familia, o nosso bife da casa será ao gosto de todas as gerações.",
        tags: "Carne"
      },
      {
        id: 11,
        name: "Cheeseburger",
        photo: require('@/assets/burgers.jpg'),
        info: "Clássico americano e internacionalmente aclamado, o nosso cheeserburger é uma delicia intemporal.",
        tags: "Fast Food"
      },
      {
        id: 12,
        name: "Risotto de Cogumelos",
        photo: require('@/assets/cogumelos.jpg'),
        info: "Tipicamente italiano, o nosso risotto de cogumelos aquecer-lhe-à o estômago e o coração.",
        tags: "Italiano"
      },
      {
        id: 13,
        name: "Caldeirada de Vegetais",
        photo: require('@/assets/beterraba.jpg'),
        info: "Quente e cheia de sabor, direta da nossa cozinha ao seu coração.",
        tags: "Vegan"
      },
      {
        id: 14,
        name: "Codorniz à Valenciana",
        photo: require('@/assets/codorniz.jpg'),
        info: "Uma twist orginal num prato tão conhecido do nosso país vizinho.",
        tags: "Internacional"
      },

    ],
    loggedUser: [],
    reservations: [],
    existUser: false,
    historic: [],
    // userlogged check
    logged: false
  },
  getters: {
    // ################# USER #################
    checkLogged: state => state.logged,
    //get last user Id in array
    getLastUserId: (state) => {
      if (state.users.length) {
        return 1 + state.users[state.users.length - 1].id;
      } else {
        return 0;
      }
    },
    getLastDishId: (state) => {
      if (state.dishes.length) {
        return 1 + state.dishes[state.dishes.length - 1].id;
      } else {
        return 0;
      }
    },
    userInfo: state => state.users,
    getLoggedUserLocation: (state) => {
      return state.loggedUser[0].location
    },
    getLoggedUserName: state => state.loggedUser.username,
    checkAdmin: state => state.loggedUser.admin,
    getLoggedUserId: state => state.loggedUser.id,
    // #################  LOGGED USER #################
  ADD_CURRENT_LOCATION(state,payload){
    state.loggedUser[0].location = payload.location
    sessionStorage.setItem("loggedUser",JSON.stringify(state.loggedUser))
  },

    // ################# RESTAURANTES #################
    restaurantInfo: state => id => {
      return state.restaurants.find(restaurant => restaurant.id === id);
    },

    getRestaurantsById: (state) => {
      return state.restaurants.sort(function (a, b) {
        const idA = a.id
        const idB = b.id

        if (idA > idB) return 1;
        if (idB > idA) return -1;

        return 0
      })
    },  
    
    getRestaurants: state => state.restaurants,
    getLastRestaurantId: (state) => {
      if (state.restaurants.length) {
        return 1 + state.restaurants[state.restaurants.length - 1].id;
      } else {
        return 0;
      }
    },
    getDishes: state => state.dishes,

    getHistoric: state => state.historic,

    getLastHistoricId: (state) => {
      if (state.historic.length) {
        return 1 + state.historic[state.historic.length - 1].id;
      } else {
        return 0;
      }
    },
    getRestaurantByAlphOrder: (state) => {
      return state.restaurants.sort(function (a, b) {
        if (a.name > b.name) return 1;
        if (b.name > a.name) return -1;
      })
    },

    getRestaurantsByDistance: (state) => {
      return state.restaurants.sort(function (a, b) {
        const distanceA = a.distance
        const distanceB = b.distance

        if (distanceA > distanceB) return 1;
        if (distanceB > distanceA) return -1;

        return 0
      })
    },
    


  },


  mutations: {

    initializeStore(state) {
      if (localStorage.getItem('users')) {
        state.users = JSON.parse(localStorage.getItem("users"));
      } else {
        state.users = [{
            id: 0,
            username: "admin",
            password: "admin",
            email: "123@gmail.com",
            admin: true
          },
          {
            id: 1,
            username: "user",
            password: "user",
            email: "1234@gmail.com",
            admin: false
          }
        ]
        localStorage.setItem("users", JSON.stringify(state.users))
      }
      if (sessionStorage.getItem("loggedUser")) {
        state.loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
        state.logged = true;
      } else {
        state.logged = false;
      }
      /*
      if (localStorage.getItem("restaurants")) {
        state.restaurants = JSON.parse(localStorage.getItem("restaurants"))
      } else {
        state.restaurants = [{
          id: 0,
          name: "Chimarrão Norteshopping",
          photo: require("@/assets/chimarrão.jpg"),
          description: "A Ana gosta mt do Chimarrão",
          address: "Norteshopping, Sra. da Hora",
          contacts: "21 0026651",
          routerLink: "/restaurant",
          times: "", // oq é isto ? os horários mpt
          rating: 5,
          location: "Porto",
          distance: "5",
          comments: "",
          tags: "#tradicional #mediterrâneo"
        }]
        localStorage.setItem("restaurants", JSON.stringify(state.restaurants))
      }
      
      if (localStorage.getItem("dishes")) {
        state.dishes = JSON.parse(localStorage.getItem("dishes"))
      } else {
        state.dishes = [{
            id: 0,
            restaurantId: 0,
            name: "Arroz de Polvo",
            photo: require('@/assets/polvinho.jpg'),
            description: "Malandrinho, delicioso e reconfortante. Este é o prato que tanto procurava.",
            tags: "#peixe"
          },

        ]
        localStorage.setItem("dishes", JSON.stringify(state.dishes))
      }
      */
    },

    //    #### DISHES ####
    ADD_DISH(state, payload) {
      if (!state.dishes.some(dish => dish.name === payload.name)) {
        //adicionar novo prato ao array

        state.dishes.push({
          id: payload.id,
          name: payload.name,
          info: payload.info,
          tags: payload.tags,
          photo: payload.photo,
        });
        localStorage.setItem("dishes", JSON.stringify(state.dishes))

        alert("prato add")
      }
    },
    //    #### RESTAURANTS ####
    ADD_RESTAURANT(state, payload) {
      if (!state.restaurants.some(restaurant => restaurant.name === payload.name)) {
        state.restaurants.push({
          newRestaurantId: payload.newRestaurantId,
          name: payload.name,
          description: payload.description,
          location: payload.location,
          photo: payload.photo,
          contacts: payload.contacts,
          tags: payload.tags,

        });
        localStorage.setItem("restaurants", JSON.stringify(state.restaurants))
      }
    },

    ADD_RESERVATION(state, payload) {
      state.reservations.push({
        reservationId: payload.reservationId,
        userId: payload.userId,
        restaurantName: payload.pickedRestaurantName,
        dishName: payload.pickedDishName,
        name: payload.name,
        reservationTime: payload.reservationTime,
        reservationDate: payload.reservationDate,
        observations: payload.observations,
        numPeople: payload.numPeople,
        paymentMethod: payload.paymentMethod
      })

      localStorage.setItem("reservations", JSON.stringify(state.reservations))
    },

    ADD_HISTORY(state, payload) {
      state.historic.push({
        id: payload.id,
        userId: payload.userId,
        restaurantName: payload.pickedRestaurantName,
        dishName: payload.pickedDishName,
        reservationTime: payload.reservationTime,
        reservationDate: payload.reservationDate,
        numPeople: payload.numPeople,
        paymentMethod: payload.paymentMethod
      })
      localStorage.setItem("historic", JSON.stringify(state.historic))

    },

    // #### USERS ####
    ADD_USER(state, payload) {
      if (!state.users.some(user => user.email === payload.email)) {
        if (!state.users.some(user => user.username === payload.username)) {

          //adicionar novo user ao array
          state.users.push({
            id: payload.id,
            username: payload.username,
            password: payload.password,
            email: payload.email,
            admin: false
          });

          localStorage.setItem("users", JSON.stringify(state.users))

          alert("Registado");

        } else {
          alert("Username Já Utilizado")
        }
      } else {
        alert("E-MAIL JÁ REGISTADO");
      }
    },


    LOGIN(state, payload) {

      for (const user of state.users) {
        if (
          user.username === payload.username &&
          user.password === payload.password
        ) {
          state.loggedUser = {
            id: user.id,
            username: user.username,
            admin: user.admin
          }

          sessionStorage.setItem(
            "loggedUser",
            JSON.stringify(state.loggedUser)
          );
          alert("LOGIN");

          state.existUser = true;

        }
      }

      if (state.existUser === false) {
        alert("Credenciais Inválidas");

      } else if (state.existUser === true) {
        state.existUser = false;
        state.logged = true;
      }

    },

    LOGOUT(state) {
      state.loggedUser = [];
      state.logged = false;
      sessionStorage.setItem("loggedUser", JSON.stringify(state.loggedUser))
    },
    /*
    
    NEW_COMMENT(state, payload) {
      state.comments.push(payload);
      localStorage.setItem("comments", JSON.stringify(state.comments));
    },
    SET_COMMENTS(state, payload) {
      state.comments = payload.comments;
      localStorage.setItem("comments", JSON.stringify(state.comments));
    }
    */
  },
  actions: {},
  modules: {}
});