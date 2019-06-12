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
          <li class="list-group-item">
            <strong>Mark as Complete:</strong>
            <button
              class="btn btn-success complete-btn"
              @click="markComplete(bug._id)"
              v-if="!bug.closed"
            >
              <i class="fas fa-clipboard-check"></i>
            </button>
            <h1 class="checkmark" v-else>
              <i class="fas fa-check"></i>
            </h1>
          </li>
        </ul>
      </div>
    </div>
    <br>
    <br>
    <div>
      <h4 class="add-note">Add Note</h4>
      <NotesForm/>
      <BugNotes/>
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
    this.$store.dispatch("getNotes", this.id);
  },
  computed: {
    bug() {
      return this.$store.state.bug;
    }
  },
  methods: {
    markComplete(id) {
      this.$store.dispatch("markComplete", id);
    }
  },
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

.complete-btn {
  margin-left: 1rem;
}

.checkmark {
  color: green;

  -webkit-animation: appear 3s ease 0s 1 normal;
  animation: appear 3s ease 0s 1 normal;
}

@-webkit-keyframes appear {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  32% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes appear {
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  40% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}
</style>