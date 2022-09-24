<template>
  <div>
    <slot></slot>
    <div class="table">
      <div class="table__row">
        <span class="table__col table__col-name">#</span>
        <span class="table__col table__col-name">Date</span>
        <span class="table__col table__col-name">Category</span>
        <span class="table__col table__col-name">Value</span>
      </div>
      <div class="table__row" v-for="(note, idx) in paginatedData" :key="idx + pageSize * pageNumber">
        <span class="table__col">{{ idx + pageSize * pageNumber }}</span>
        <span class="table__col">{{ note.date }}</span>
        <span class="table__col">{{ note.category }}</span>
        <span class="table__col">{{ note.value }}</span>
      </div>
      <button class="table__button" @click="prevPage" :disabled="pageNumber === 0">
        prevPage
      </button>
      <button
        class="table__button"
        @click="nextPage"
        :disabled="pageNumber >= pageCount - 1"
      >
        nextPage
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    notes: Array,
  },
  data() {
    return {
      pageNumber: 0,
      pageSize: 5,
    };
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
  },
  computed: {
    pageCount() {
      return Math.ceil(this.notes.length / this.pageSize);
    },
    paginatedData() {
      const start = this.pageNumber * this.pageSize,
        end = start + this.pageSize;
      return this.notes.slice(start, end);
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  max-width: 600px;
  width: 100%;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 7px;

  &__row {
    font-weight: 500;
    font-size: 16px;
    color: grey;
    border-bottom: 1px solid grey;
    display: flex;
    align-items: center;
    height: 100px;
  }

  &__col {
    margin: 0 20px 0 0;
    width: calc(600px / 4);
    text-align: center;
  }

  &__col-name {
    display: block;
    font-weight: bold;
    font-size: 18px;
    color: black;
  }

  &__button {
    background-color: green;
    color: white;
    border: 0.5px solid green;
    border-radius: 10px;
    margin: 10px 10px 0 0;
    width: 100px;
    height: 40px;
  }
}
</style>
