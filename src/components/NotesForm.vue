<template>
  <form @submit.prevent="handleSubmit" class="NotesForm">
    <div class="form-group">
      <input class="form-control" type="text" placeholder="User" v-model="creator">
      <input class="form-control" type="text" placeholder="Message" v-model="content">
      <input class="btn btn-success btn-sm" type="submit" value="Submit">
    </div>
  </form>
</template>



<script>
export default {
  name: "NotesForm",
  data() {
    return {
      creator: "",
      content: "",
      bug: this.$store.state.bug._id
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
  computed: {}
};
</script>