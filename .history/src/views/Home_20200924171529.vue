<template>
 <div class="d-f">
  <div class="leftbox">132</div>
  <div class="rightbox">
    <div class="showbox">
    123
    </div>
  </div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs} from 'vue'
interface Data {
  name:string
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(){

let data: Data = reactive<Data>({
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