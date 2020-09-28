<template>
 <div>
   
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import embedded from "@/components/embedded/embedded.vue"
interface Data {
   
    flag:boolean
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
  
    flag:false
})
const openinterbox = () => {
    data.flag = false
}
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
.topbox {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
}
</style>