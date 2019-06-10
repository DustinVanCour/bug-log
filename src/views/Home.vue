<template>
  <div class="home container">
    <bug-form/>
    <bug-list/>
  </div>
</template>

<script>
import BugList from "@/components/BugList.vue";
import BugForm from "@/components/BugForm.vue";

export default {
  name: "home",
  mounted() {
    debugger;
    this.$store.dispatch("getBugs");
  },
  components: {
    BugList,
    BugForm
  }
};
</script>