<template>
 <div>
   <embedded :src="src"><embedded>
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
       embedded
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

</style>