<template>
  <div class="pa-4">
    <v-layout>
      <v-flex md3 class="mr-3">
        <v-combobox
          label="Select Country"
          :items="['United Arab Emirates', 'Pakistan']"
        ></v-combobox>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <v-data-table
          class="custom-data-table elevation-1"
          :items-per-page="-1"
          hide-default-footer
          :loading="fetchingLoader"
          :headers="headers"
          :items="data"
        >
          <!-- name -->
          <template v-slot:item.title="{ item }">
            <h4
              class="font-weight-medium black--text text-truncate hover-underline"
            >
              {{ item.name }}
            </h4>
          </template>
          <!-- confirmed -->
          <template v-slot:item.confirmed="{ item }">
            {{ item.confirmed }}
          </template>

          <!-- critical -->
          <template v-slot:item.critical="{ item }">
            {{ item.critical }}
          </template>

          <!-- Deaths -->
          <template v-slot:item.deaths="{ item }">
            {{ item.deaths }}
          </template>

          <!-- lastupdated -->
          <template v-slot:item.lastupdated="{ item }">
            {{ item.lastupdated }}
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: "Name",
        align: "left",
        sortable: false,
        value: "name",
        width: "40%"
      },
      {
        text: "Confirmed",
        align: "left",
        sortable: false,
        value: "confirmed",
        width: "10%"
      },
      {
        text: "Critical",
        align: "left",
        sortable: false,
        value: "critical",
        width: "20%"
      },
      {
        text: "Deaths",
        align: "left",
        sortable: false,
        value: "deaths",
        width: "15%"
      },
      {
        text: "Last Updated",
        align: "right",
        sortable: false,
        value: "lastupdated",
        width: "15%"
      }
    ],
    fetchingLoader: false,
    data: [],
    defaultData: [
      {
        name: "United Arab Emirates",
        confirmed: 1500,
        critical: 1000,
        deaths: 850,
        lastupdated: "20-07-2020"
      }
    ]
  }),
  created() {
    this.fetchCountryData();
  },
  methods: {
    fetchCountryData() {
      this.fetchingLoader = true;
      axios
        .get("country/all")
        .then(response => {
          if (response.status == 200) {
            debugger;
            this.data = response.data;
          } else {
            this.data = this.defaultData;
          }
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.fetchingLoader = false;
        });
    }
  }
};
</script>

<style></style>
