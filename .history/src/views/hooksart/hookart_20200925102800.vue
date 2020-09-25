<template>
 <div>
    <h2>时间</h2>
    <div></div>
    <br>
    <h2>鼠标移动</h2>
    <div>
    当前坐标 ：（x轴：{{x}}--y轴：{{y}}）
    </div>
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