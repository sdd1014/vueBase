<template>
<div>
  <h2>标题：{{title}}<MyButton :title="title"></MyButton>
  </h2>                 
</div>
</template>

<script type='text/ecmascript-6'>
import MyButton from './MyButton'
export default {
  props:['title'],
  components:{
    MyButton
  },  
}
</script>

<style scoped>

</style>