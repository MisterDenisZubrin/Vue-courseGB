<template>
  <div>
    Test Message is {{ message }}
  </div>
</template>
<script>
export default {
  name: 'TestComponent',
  props: {
    message: String
  }
};
</script>
<style scoped lang="scss">
  
</style>