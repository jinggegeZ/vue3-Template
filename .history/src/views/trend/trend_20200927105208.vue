<template>
 <div>
    <h2>趋势组件：通过传入中间变量（sort）改变趋势默认营业额为红色</h2>
    <div><a-button type="primary" @click="changeColor">点击颜色翻转</a-button>></div>
    <trends :sort="sort"></trends>

 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import trends from "@/components/trends/trends.vue"
interface Data {
    name:string,
    sort:boolean
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
    name:'jack',
    sort:true
})
 const changeColor = () => {
        
    }
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>