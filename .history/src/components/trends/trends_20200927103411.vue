<template>
 <div>
    <div class="w-1 d-f a-l h-30">
        <div class="boder"></div>
        <div>正常组件</div>
        <div class="boder"></div>
    </div>
    <div>123</div>

    <div class="w-1 d-f a-l h-30">
        <div class="boder"></div>
        <div>颜色翻转</div>
        <div class="boder"></div>
    </div>
    <div>456</div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
    name:string
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
    name:"jack"
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>