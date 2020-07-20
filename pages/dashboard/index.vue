<template>
  <div class="pa-4">
    <v-layout>
      <v-flex md1></v-flex>
      <v-flex md5 class="mr-4">
        <v-card>
          <v-img
            class="white--text align-end"
            height="200px"
            :src="require('~/assets/images/bg/3d-background.png')"
          >
            <v-card-title>
              <span class="font-weight-bold text-h3  primary-color">
                Totals</span
              >
            </v-card-title>
          </v-img>
          <v-card-text v-if="loadingTotals">
            <div class="text-center">
              <v-progress-circular
                indeterminate
                color="gred"
              ></v-progress-circular>
            </div>
          </v-card-text>
          <v-card-text v-else>
            <v-layout row class="px-4">
              <v-flex>
                <span class="text-h6 primary-color ">Confirmed</span></v-flex
              >
              <v-spacer></v-spacer>
              <v-flex text-right
                ><span class="text-h6 primary-color ">
                  {{ totals.confirmed }}</span
                ></v-flex
              >
            </v-layout>
            <v-layout row class="px-4">
              <v-flex>
                <span class="text-h6 blue--text ">Recovered</span></v-flex
              >
              <v-spacer></v-spacer>
              <v-flex text-right>
                <span class="text-h6 blue--text ">{{
                  totals.recovered
                }}</span></v-flex
              >
            </v-layout>
            <v-layout row class="px-4">
              <v-flex>
                <span class="text-h6 gred-color ">Critical</span></v-flex
              >
              <v-spacer></v-spacer>
              <v-flex text-right>
                <span class="text-h6 gred-color ">
                  {{ totals.critical }}
                </span></v-flex
              >
            </v-layout>
            <v-layout row class="px-4">
              <v-flex>
                <span class="text-h6 red--text text--darken-2 "
                  >Deaths</span
                ></v-flex
              >
              <v-spacer></v-spacer>
              <v-flex text-right>
                <span class="text-h6 red--text text--darken-2 ">
                  {{ totals.deaths }}
                </span></v-flex
              >
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <div>
              <v-icon class="grey--text" small>mdi-clock</v-icon>
              <span class="caption">
                {{ totals.lastUpdate | moment("DD-MM-YYYY HH:mm:ss") }}
              </span>
            </div>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex md5 class="mr-4">
        <v-card>
          <v-img
            class="white--text align-end"
            height="200px"
            :src="require('~/assets/images/bg/3d-background.png')"
          >
            <v-card-title>
              <span class="font-weight-bold text-h3  primary-color">
                Daily</span
              >
            </v-card-title>
          </v-img>
          <v-card-text v-if="loadingDaily">
            <div class="text-center">
              <v-progress-circular
                indeterminate
                color="gred"
              ></v-progress-circular>
            </div>
          </v-card-text>
          <v-card-text v-else>
            <v-layout row class="px-4">
              <v-flex>
                <span class="text-h6 primary-color ">Confirmed</span></v-flex
              >
              <v-spacer></v-spacer>
              <v-flex text-right
                ><span class="text-h6 primary-color ">
                  {{ daily.confirmed }}</span
                ></v-flex
              >
            </v-layout>
            <v-layout row class="px-4">
              <v-flex>
                <span class="text-h6 blue--text ">Recovered</span></v-flex
              >
              <v-spacer></v-spacer>
              <v-flex text-right>
                <span class="text-h6 blue--text ">{{
                  daily.recovered
                }}</span></v-flex
              >
            </v-layout>
            <v-layout row class="px-4">
              <v-flex> <span class="text-h6 gred-color ">Active</span></v-flex>
              <v-spacer></v-spacer>
              <v-flex text-right>
                <span class="text-h6 gred-color ">
                  {{ daily.active }}
                </span></v-flex
              >
            </v-layout>
            <v-layout row class="px-4">
              <v-flex>
                <span class="text-h6 red--text text--darken-2 "
                  >Deaths</span
                ></v-flex
              >
              <v-spacer></v-spacer>
              <v-flex text-right>
                <span class="text-h6 red--text text--darken-2 ">
                  {{ daily.deaths }}
                </span></v-flex
              >
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <div>
              <v-icon class="grey--text" small>mdi-clock</v-icon>
              <span class="caption">
                {{ daily.date ? daily.date : "-" | moment("DD-MM-YYYY") }}
              </span>
            </div>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex md1></v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    totals: {},
    loadingTotals: false,
    daily: {},
    loadingDaily: false
  }),
  created() {
    this.fetchTotal();
    this.fetchDaily();
  },
  methods: {
    fetchTotal() {
      this.loadingTotals = true;
      axios.get("totals").then(response => {
        if (response.data) {
          this.totals = response.data[0];
        }
        this.loadingTotals = false;
      });
    },
    fetchDaily() {
      this.loadingDaily = true;
      axios
        .get("report/totals?date=" + moment(new Date()).format("YYYY-MM-DD"))
        .then(response => {
          this.loadingDaily = false;
          if (response.data) {
            this.daily = response.data[0];
          }
        });
    }
  }
};
</script>

<style></style>
