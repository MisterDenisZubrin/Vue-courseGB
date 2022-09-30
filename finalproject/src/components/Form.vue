<template>
  <form action="#" class="form">
    <select
      class="form__select"
      placeholder="Payment category"
      v-model="category"
    >
      <option value="Transport" class="form__option" selected>Transport</option>
      <option value="Food" class="form__option">Food</option>
      <option value="Education" class="form__option">Education</option>
    </select>
    <input class="form__input" type="text" placeholder="Payment value" v-model="value" />
    <input class="form__input" type="text" placeholder="Payment date" v-model="date" />
    <input
      class="form__button"
      type="submit"
      value="Add Note"
      @click.prevent="addToStore"
    />
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
    addToStore() {
      const list = this.$store.getters.getNotesList;
      list.push({
        id: list.length + 1,
        date: this.date,
        value: this.value,
        category: this.category,
      });
      this.$store.commit("setNotesList", list);
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

  &__select {
    width: 100%;
    margin: 0 auto 10px;
    outline: none;
    border: 0.5px solid grey;
    background-color: white;
    padding: 10px 15px;
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
  }


  &__input {
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
