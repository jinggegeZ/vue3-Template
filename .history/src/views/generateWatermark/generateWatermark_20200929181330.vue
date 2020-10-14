<template>
 <div>
    <div class="d-f">
        <div><a-button type="primary" @click="add">增加水印</a-button></div>
        <div class="m-l-20"><a-button type="primary">取消水印</a-button></div>
    </div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import{useWatemark} from "@/hooks/usewaterMark"
interface Data {
    name:string
}
 export default defineComponent({
   name: 'jz-generateWatermark',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){
const {watermark} = useWatemark()
const data: Data = reactive<Data>({
    name:'jack'
})
const add =() => {
    watermark.set('我是水印')
}
return {
    watermark
...toRefs(data),
add
}
},
 })
</script>

<style scoped lang='scss'>

</style>