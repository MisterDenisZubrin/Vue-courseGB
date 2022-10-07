<template>
  <div class="modal">
    <div class="modal__body">
      <span class="edit">Редактировать</span>
      <span class="remove">Удалить</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContextMenu',
  props: {
    isVisible: {
      type: Boolean
    }
  },
  methods: {
    showContextMenu() {
      this.$emit('show')
    },
    hideContextMenu() {
      this.$emit('hide')
    }
  }
};
</script>
<style lang="scss" scoped></style>
