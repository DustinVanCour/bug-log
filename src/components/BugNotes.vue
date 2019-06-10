<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">By</th>
        <th scope="col">Comment</th>
        <th scope="col">Created</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="note in notes" :key="note._id">
        <td>{{note.creator}}</td>
        <td>{{note.content}}</td>
        <td>{{new Date(note.createdAt).toLocaleDateString()}}</td>
        <td>
          <button class="btn btn-danger" @click="deleteNote(note._id)">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
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
  },
  methods: {
    deleteNote(id) {
      this.$store.dispatch("deleteNoteById", id);
    }
  }
};
</script>

<style>
</style>


