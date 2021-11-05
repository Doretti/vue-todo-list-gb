<template>
  <div class="todo-list">
    <form @submit="createTODOF" class="form">
      <h3 class="title">Add task:</h3>
      <input v-model="todo" type="text">
    </form>
    <form class="tasks">
      <h3 class="title">Uncomplited:</h3>
      <TODO v-for="todo in uncomplite" :fetch="fetch" :todo="todo" :key="todo.id"></TODO>
    </form>
    <form class="complited">
      <h3 class="title">Complited:</h3>
      <TODO v-for="todo in complite" :fetch="fetch" :todo="todo" :key="todo.id"></TODO>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { findTODOs } from '~/queries/findTODOs'
import { createTODO } from '~/queries/createTODO'
import TODO from '~/components/TODO/TODO.vue'
import axios from 'axios'
export default Vue.extend({
  mounted: function () {
    axios.post(
      'http://localhost:4000/graphql', {
      query: findTODOs
    }).then(res => {
      this.complite = res.data.data.findTODOS.items.filter((todo: any) => todo.complited)
      this.uncomplite = res.data.data.findTODOS.items.filter((todo: any) => !todo.complited)
    })
  },
  data: function() {
    return {
      complite: [],
      uncomplite: [],
      todo: ''
    }
  },
  name: 'todo-list',
  components: {
    TODO
  },
  methods: {
    fetch: function() {
      axios.post(
        'http://localhost:4000/graphql', {
        query: findTODOs
      }).then(res => {
        this.complite = res.data.data.findTODOS.items.filter((todo: any) => todo.complited)
        this.uncomplite = res.data.data.findTODOS.items.filter((todo: any) => !todo.complited)
      })
    },
    createTODOF: function(e: any) {
      e.preventDefault();
      if (this.todo.length > 3 && this.todo.length <= 28) {
        axios.post(
          'http://localhost:4000/graphql', {
          query: createTODO(this.todo)
        })
        this.fetch()
        this.todo = '';
      }
    }
  }
})
</script>

<style scoped>
  .todo-list {
    border: 1px solid #000;
    padding: 5px 7px;
    border-radius: 6px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
    font-size: 17px;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    font-weight: 500;
  }

  .form {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
  }

  .form input {
    width: 70%;
    background: none;
    border: 1px solid #fff;
    border-radius: 4px;
    color: #fff;
  }

  form::after {
    content: '';
    width: 100%;
    height: 1px;
    background: #000;
    margin-top: 5px;
  }
</style>