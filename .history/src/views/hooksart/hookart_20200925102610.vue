<template>
 <div>
    基本说明
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import {useMouse} from "@/hooks/useMouse"
interface Data {
    name:string
}
 export default defineComponent({
   name: 'hookart',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
    name:"jack"
})
const {x,y} = useMouse()
return {
...toRefs(data),
x,
y
}
},
 })
</script>

<style scoped lang='scss'>

</style>