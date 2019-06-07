<template>
  <div class="home container">
    <BugForm />
    <BugList />
  </div>
</template>

<script>
  import BugList from '@/components/BugList.vue';
  import BugForm from '@/components/BugForm.vue'

  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch('getBugs')
    },
    components: {
      BugList,
      BugForm
    }
  }
</script>