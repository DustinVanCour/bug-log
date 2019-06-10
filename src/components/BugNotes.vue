<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">By</th>
        <th scope="col">Comment</th>
        <th scope="col">Created</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="note in notes" :key="note._id">
        <td>{{note.creator}}</td>
        <td>{{note.content}}</td>
        <td>{{new Date(note.createdAt).toLocaleDateString()}}</td>
        <!-- <td>
          <router-link
            class="btn btn-primary btn-sm"
            :to="{ name: 'BugDetails', params: { id: note._id } }"
          >Details</router-link>
        </td>-->
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "BugNotes",
  data() {
    return {};
  },
  computed: {
    notes() {
      return this.$store.state.notes;
    }
  }
};
</script>

<style>
</style>


