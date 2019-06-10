<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">By</th>
          <th scope="col">Status</th>
          <th scope="col">Date/Time</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bug in bugs" :key="bug._id">
          <td>{{bug.title}}</td>
          <td>{{bug.creator}}</td>
          <td>{{bug.closed}}</td>
          <td>{{new Date(bug.createdAt).toLocaleDateString()}}</td>
          <td>
            <router-link class="btn btn-success btn-sm" :to="{ name: 'BugDetails', params: { id: bug._id } }">Details
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "BugList",
    data() {
      return {};
    },
    computed: {
      bugs() {
        return this.$store.state.bugs;
      }
    }
  };
</script>

<style>
  .table tbody {
    color: white;
    background-color: rgba(0, 0, 0, 0.459);
  }

  .table thead {
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.794);
  }
</style>