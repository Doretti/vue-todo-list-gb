<template>
  <div @click="complite" class="task">
    <div class="task-title">
      {{todo.text}}
    </div>
    <div @click="deleteTODOF" class="delete"></div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import Vue from 'vue'
import { switchStatus } from '~/queries/switchStatus'
import { deleteTODO } from '~/queries/deleteTODO'
export default Vue.extend({
  data: function() {
    return {}
  },
  props: ['todo', 'fetch'],
  methods: {
    complite: function () {
      axios.post('http://localhost:4000/graphql', {
        query: switchStatus(this.todo.id, !this.todo.complited)
      })
      this.fetch()
    },
    deleteTODOF: function () {
      axios.post('http://localhost:4000/graphql', {
        query: deleteTODO(this.todo.id)
      })
      this.fetch()
    }
  }
})
</script>

<style scoped>
.task {
  background: #eee;
  padding: 4px 12px;
  border-radius: 6px;
  transition: .2s;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 5px 0;
}

.task-title {
  color: #000;
}

.task:hover {
  background: #dadada;
}

.delete {
position: absolute;
right: 15px;
top: 50%;
width: 20px;
height: 20px;
transform: translateY(-50%);
opacity: 0.3;
}
.delete:before, .delete:after {
position: absolute;
bottom: 50%;
right: 0;
content: '';
height: 2px;
width: 20px;
background-color: #333;
}
.delete:before {
transform: rotate(45deg);
}
.delete:after {
transform: rotate(-45deg);
}
</style>