<template>
  <v-app>
       <v-progress-linear
      :active="topLoader"
      :indeterminate="topLoader"
      absolute
      top
      color="white"
      style="z-index: 9;"
      height="3"
    ></v-progress-linear>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      app
      :width="245"
    >
      <v-list class="pa-0">
        <v-list-item router class="pl-0 primary">
          <v-list-item-action class="ma-0 ">
            <img
              src="~/assets/images/ahoy.png"
              alt
              width="50"
              :class="miniVariant ? '' : ''"
            />
          </v-list-item-action>
          <v-list-item-content class="py-0 ">
            <v-list-item-title
              ><div class="pt-1 ">
                <span class="white--text" style="font-size: 20px;">
                  AHOY
                </span>
              </div></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list shaped class="main-navigation">
        <v-tooltip
          right
          v-for="(item, i) in menuItems"
          :key="`main-nav-item-${i}`"
          :disabled="!miniVariant"
        >
          <template v-slot:activator="{ on }">
            <v-list-item v-on="on" :to="item.to" router color="primary">
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </template>
          <span>{{ item.title }}</span>
        </v-tooltip>
      </v-list>
      <v-spacer />

      <v-flex class="mini-variant-wrap" :class="!miniVariant ? 'close' : ''">
        <v-btn small icon @click.stop="miniVariant = !miniVariant">
          <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
        </v-btn>
      </v-flex>

      <v-flex class="mini-variant-wrap2" v-if="!miniVariant">
        <v-list-item-subtitle
          class="caption grey--text text-center"
          style="font-family: 'Montserrat', sans-serif !important;"
          >AHOY © 2020</v-list-item-subtitle
        >
      </v-flex>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="primary"
      dark
      :height="50"
    >
      <v-app-bar-nav-icon
        v-if="!drawer"
        @click="drawer = !drawer"
        color="white"
      ></v-app-bar-nav-icon>

      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>

      <div class="body-2 mr-2">
        Hassan Mehmood
      </div>

      <v-avatar :size="35" class="gred">
        <span>H</span>
      </v-avatar>
    </v-app-bar>
    <v-content>
      <v-container fluid class="pt-0" id="page-wrapper">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    clipped: false,
    drawer: true,
    fixed: false,
    miniVariant: false,
    userprofileMenu: false,
    right: true,
    rightDrawer: false,
    title: "Covid-19",
    notificationsCount: 0
  }),
  head() {
    return {
      titleTemplate: "Covid-19"
    };
  },
  computed: {
    menuItems() {
      return this.$pluginsData.mainMenu;
    }
    ,topLoader() {
      return this.$store.getters["pageHeader/getTopLoader"];
    }
  },
  created() {
    // Register the events
  },
  mounted() {},
  methods: {},
  watch: {
    $route() {
      const container = document.querySelector("#page-wrapper");
      container.scrollTop = 0;
    }
  }
};
</script>
<style lang="scss">
.main-navigation {
  a:hover {
    text-decoration: none;
  }
}
.hover:hover {
  background: #fefefe;
  cursor: pointer;
  width: 97%;
}
.mini-variant-wrap {
  position: absolute !important;
  bottom: 30px !important;
  left: 22px;

  &.close {
    left: 15px;
  }
}

.mini-variant-wrap2 {
  position: absolute !important;
  bottom: 10px !important;
  left: 22px;
}

.mini-variant-wrap3 {
  position: absolute !important;
  bottom: 60px !important;
}

.scroll-area {
  height: calc(100vh - 102px);
}
.notification-badge {
  .v-badge__badge {
    font-size: 10px !important;
    left: -15px !important;
  }
}
</style>
