<template>
  <div>
    <form @submit.prevent="handleSubmit" class="NotesForm" v-if="!bug.closed">
      <div class="form-group">
        <input class="form-control" type="text" placeholder="User" v-model="creator">
        <input class="form-control" type="text" placeholder="Message" v-model="content">
        <input class="btn btn-success btn-sm" type="submit" value="Submit">
      </div>
    </form>
    <h2 v-else>Closed!</h2>
  </div>
</template>



<script>
export default {
  name: "NotesForm",
  data() {
    return {
      creator: "",
      content: ""
    };
  },

  methods: {
    handleSubmit() {
      let data = {
        creator: this.creator,
        content: this.content
      };
      this.$store.dispatch("createNote", data);
    }
  },
  computed: {
    bug() {
      return this.$store.state.bug;
    }
  }
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>