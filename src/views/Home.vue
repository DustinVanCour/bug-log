<template>
  <div class="home container">
    <bug-form />
    <bug-list />
  </div>
</template>

<script>
  import BugList from "@/components/BugList.vue";
  import BugForm from "@/components/BugForm.vue";

  export default {
    name: "home",
    mounted() {
      this.$store.dispatch("getBugs");
    },
    components: {
      BugList,
      BugForm
    }
  };
</script>

<style>
  body {
    background-image: url('../assets/grid.gif');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
  }
</style>