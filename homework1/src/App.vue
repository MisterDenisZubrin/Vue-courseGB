<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <br />
  <div class="display">
    <input type="text" v-model="num1" class="display__input" />
    {{ operator }}
    <input type="text" v-model="num2" class="display__input" />
    =
    {{ result }}
  </div>
  <div class="keyboard">
    <button @click="operator = '+'" class="keyboard__button">+</button>
    <button @click="operator = '-'" class="keyboard__button">-</button>
    <button @click="operator = '*'" class="keyboard__button">*</button>
    <button @click="operator = '/'" class="keyboard__button">/</button>
    <button @click="operator = '**'" class="keyboard__button">**</button>
    <button @click="operator = '//'" class="keyboard__button">//</button>
    <button @click="getResult" class="keyboard__button">=</button>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      num1: 0,
      num2: 0,
      operator: "+",
      result: 0,
    };
  },
  methods: {
    getResult() {
      switch (this.operator) {
        case "+":
          this.result = +this.num1 + +this.num2;
          break;
        case "-":
          this.result = this.num1 - this.num2;
          break;
        case "*":
          this.result = this.num1 * this.num2;
          break;
        case "/":
          this.result = this.num1 / this.num2;
          break;
        case "**":
          this.result = this.num1 ** this.num2;
          break;
        case "//":
          this.result = Math.floor(this.num1 / this.num2);
          break;
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  width: 100%;
  margin: 60px auto 0;
}

.display {
  &__input {
    outline: none;
    border: 1px solid black;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 7px;
    font-size: 14px;
  }
}

.keyboard {
  border: 1px solid black;
  padding: 5px;
  box-sizing: border-box;
  max-width: 390px;
  width: 100%;
  margin: 30px auto;
  display: flex;
  gap: 15px;

  &__button {
    background-color: #fff;
    border: 1px solid black;
    border-radius: 10px;
    min-width: 50px;
    min-height: 30px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
