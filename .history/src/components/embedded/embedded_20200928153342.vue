<template>
 <div>
     <div class="topbox">
        <div><a-button type="primary" @click="openinterbox">打开内部网页</a-button></div>
        <div><a-button type="primary">关闭内部网页</a-button></div>
    </div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

let data: Data = reactive<Data>({
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>