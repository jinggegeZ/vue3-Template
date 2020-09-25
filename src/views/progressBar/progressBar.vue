<template>
 <div>
progressBar
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
    name:string
}
 export default defineComponent({
   name: 'progressBar',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

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