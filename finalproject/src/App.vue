<template>
  <List :notes="notes">
    <button @click="isFormVisible = !isFormVisible" class="toggle-button">Add New Note</button>
  </List>
  <Form @addToList="(note) => notes.push(note)" v-if="isFormVisible"></Form>
</template>

<script>
import List from "./components/List.vue";
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: { List, Form },
  data() {
    return {
      
      isFormVisible: true,
      notes: [
        { date: "16.03.2010", category: "Food", value: 333 },
        { date: "26.10.2011", category: "Food", value: 22 },
        { date: "04.04.2014", category: "Transport", value: 1030 },
      ],
    };
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}
.toggle-button {
  width: 200px;
  height: 50px;
  background-color: cadetblue;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 5px 15px;
  cursor: pointer;
  margin: 20px 0 20px 200px;
}
</style>
