<template>
 <div class="d-f">
  <div class="leftbox">
    123
  </div>
  <div class="rightbox">
    <div class="showbox">
      1234556
    </div>
  </div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'
interface Data {
  name:string
}
 export default defineComponent({
   name: '首页',
   props: {
   },
   components: {

   },
setup(){

const data: Data = reactive<Data>({
  name:'jack'
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>