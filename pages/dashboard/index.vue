<template>
  <div class="pa-4">
    <v-layout>
      <v-flex>
        <v-card>
          <v-card-text> Totals {{ totals }} </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    totals: {}
  }),
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get("totals").then(response => {
        this.totals = response.data;
      });
    }
  }
};
</script>

<style></style>
