<template>
  <div>welcome to covid app</div>
</template>
<script>
export default {
  created() {
    this.$router.replace({ name: "dashboard" });
  }
};
</script>
