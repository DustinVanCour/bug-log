<template>
  <div class="BugDetails container">
    <div class="card-style">
      <div class="card" style="width: 40rem;">
        <div class="card-body">
          <h3 class="card-title">
            <strong>Bug Type:</strong>
            {{bug.title}}
          </h3>
          <p class="card-text">
            <strong>Creator:</strong>
            {{bug.creator}}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <strong>Description:</strong>
            {{bug.description}}
          </li>
          <li class="list-group-item">
            <strong>Date Created:</strong>
            {{new Date(bug.createdAt).toLocaleDateString()}}
          </li>
        </ul>
      </div>
    </div>
    <br>
    <br>
    <div>
      <h4 class="add-note">Add Note</h4>
      <NotesForm />
      <BugNotes />
    </div>
  </div>
</template>

<script>
  import BugNotes from "@/components/BugNotes.vue";
  import NotesForm from "@/components/NotesForm.vue";

  export default {
    name: "BugDetails",
    props: ["id"],
    mounted() {
      this.$store.dispatch("getBugById", this.id);
      this.$store.dispatch("getNotes");
    },
    computed: {
      bug() {
        return this.$store.state.bug;
      }
    },
    methods: {},
    components: {
      NotesForm,
      BugNotes
    }
  };
</script>

<style>
  .card-style {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .add-note {
    color: white;
  }
</style>