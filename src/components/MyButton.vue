<template>
<div>
  <button @click="count++"> 点击了{{title}} {{count}}次</button>
</div>
</template>

<script type='text/ecmascript-6'>
export default {
  props:['title'],
  data(){
    return {
      count:0
    }
  }
}
</script>

<style scoped>

</style>