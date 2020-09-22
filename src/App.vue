<template>
<div>
  <MyBlog v-for="blog in blogs" :key="blog.id" :title="blog.title"></MyBlog>
</div>
</template>

<script type='text/ecmascript-6'>
import MyBlog from './components/MyBlog'
export default {
  components:{
    MyBlog
  },
  data(){
    return {
      blogs:[
        {id:1,title:'blog1'},
        {id:2,title:'blog2'},
        {id:3,title:'blog3'},
        {id:4,title:'blog4'},
        {id:5,title:'blog5'}
      ]
    }
  }
  
}
</script>

<style scoped>

</style>