<template>
 <div>
    <div class="d-f">
        <div><a-button type="primary" @click="watermark">增加水印</a-button></div>
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

return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>