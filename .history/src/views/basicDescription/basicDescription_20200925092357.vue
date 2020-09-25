<template>
 <div>
    <h2>常用hooks</h2>
    <div>倒计时</div>
    <div>鼠标移动的位置</div>
    <div>计数器</div>
    <div>本地存储</div>
    <div>复制文本,需要传入文本</div>
    <div></div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
    name:string
}
 export default defineComponent({
   name: 'basicDescription',
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