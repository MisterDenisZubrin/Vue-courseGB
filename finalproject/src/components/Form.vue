<template>
  <form action="#" class="form">
    <!-- <select
      class="form__input"
      type="text"
      placeholder="Payment category"
      v-model="category"
    >
      <option value="Transport"></option>
      <option value="Food"></option>
      <option value="Education"></option>
    </select> -->
    <input class="form__input" type="text" placeholder="Payment value" v-model="value" />
    <input class="form__input" type="text" placeholder="Payment date" v-model="date" />
    <input class="form__button" type="submit" value="Add Note" @click.prevent="addNote" />
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      date: "",
      value: "",
      category: "",
    };
  },
  methods: {
    addNote() {
      this.$emit("addToList", {
        date: this.date,
        value: this.value,
        category: this.category,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 400px;
  width: 100%;
  max-height: 200px;
  border: 1px solid black;
  padding: 7px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;

  &__input {
    display: block;
    width: 100%;
    margin: 0 auto 10px;
    outline: none;
    border: 0.5px solid grey;
    padding: 10px 15px;
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 16px;
  }

  &__button {
    margin: 0 auto;
    padding: 5px 15px;
    box-sizing: border-box;
    background: orange;
    color: white;
    border: 2px solid orange;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>
