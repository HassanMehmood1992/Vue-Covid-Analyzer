import Vue from "vue";

const mainMenu = [
  {
    icon: "mdi-view-dashboard",
    title: "Dashboard",
    to: "/dashboard"
  },
  {
    icon: "mdi-web",
    title: "Country data",
    to: "/country-data"
  },
  {
    icon: "mdi-file-chart",
    title: "Daily Reports",
    to: "/reports"
  },
  {
    icon: "mdi-map-marker",
    title: "Map View",
    to: "/map"
  },
  {
    icon: "mdi-graph",
    title: "Analytics",
    to: "/analytics"
  }
];

const messages = {
  default_error:
    "An unexpected error has occurred. Please try again sometime later.",
  default_success: "The specified action has been performed.",
  remove: "The specified information has been removed."
};

let obj = {
  mainMenu,
  messages
};

export default obj;
Vue.prototype.$pluginsData = obj;
