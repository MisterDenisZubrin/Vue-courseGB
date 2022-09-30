<template>
  <List>
    <button @click="isFormVisible = !isFormVisible" class="toggle-button">
      Add New Note
    </button>
  </List>
  <Form></Form>
</template>

<script>
import List from "./components/List.vue";
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: { List, Form },
  data() {
    return {
      isFormVisible: true
    };
  },
  mounted() {
    this.$store.dispatch("fetchData");
  }
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
