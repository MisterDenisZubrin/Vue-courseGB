<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <br />
  <div class="display">
    <input type="text" v-model="num1" class="display__input" ref="operand1" />
    {{ operator }}
    <input type="text" v-model="num2" class="display__input" ref="operand2" />
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
  <label for="checkbox"
    >Отобразить экранную клавиатуру
    <input type="checkbox" name="checkbox" id="checkbox" v-model="isNumpadActive"
  /></label>
  <div class="numpad" v-if="isNumpadActive">
    <button
      class="numpad__button"
      v-for="num in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"
      :value="num"
      @click="changeNumber(num)"
    >
      {{ num }}
    </button>
    <button @click="clear" class="numpad__button">C</button>
    <div class="operands">
      <label for="oper1"
        >Операнд 1
        <input type="radio" name="operand" id="oper1" checked @change="chooseOperand1"
      /></label>
      <label for="oper2"
        >Операнд 2 <input type="radio" name="operand" id="oper2" @change="chooseOperand2"
      /></label>
    </div>
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
      isNumpadActive: true,
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
    changeNumber(number) {
      if (document.querySelector('#oper1').checked === true) {
        this.num1 += number.toString();
      } else {
        this.num2 += number.toString();
      }
    },
    chooseOperand1() {
      this.$refs.operand1.focus();
    },
    chooseOperand2() {
      this.$refs.operand2.focus();
    },
    clear() {
      this.num1 = 0;
      this.num2 = 0;
      this.result = 0;
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

label {
  display: block;
  margin: 20px 0;
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
.numpad {
  max-width: 302px;
  width: 100%;
  border: 1px solid cadetblue;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  &__button {
    background-color: orange;
    color: white;
    border: 1px solid white;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    cursor: pointer;

    &:active {
      border: 3px solid cadetblue;
    }
  }
}

.operands {
  display: flex;
  justify-content: center;
  background-color: aquamarine;
  width: 100%;
}
</style>
