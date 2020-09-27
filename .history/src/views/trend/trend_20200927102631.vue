<template>
 <div>
    <trends></trends>

 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import trends from "@/components/trends/trends.vue"
interface Data {
    name:string
}
 export default defineComponent({
   name: 'trend',
   props: {
   },
   components: {
       trends
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