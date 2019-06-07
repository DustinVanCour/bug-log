<template>
  <form @submit.prevent="handleSubmit" class="NotesForm">
    <div class="form-group">
      <input class="form-control" type="text" placeholder="Bug Name" v-model="title">
      <input class="form-control" type="text" placeholder="Creator" v-model="creator">
      <input class="form-control" type="text" placeholder="Bug Description" v-model="description">
      <input class="btn btn-success btn-sm" type="submit" value="Submit">
    </div>
  </form>
</template>



<script>
export default {
  name: "NotesForm",
  data() {
    return {
      title: "",
      creator: "",
      description: ""
    };
  },

  methods: {
    handleSubmit() {
      let data = {
        creator: this.creator,
        description: this.description,
        title: this.title
      };
      this.$store.dispatch("createBug", data);
    }
  }
};
</script>