<template>
 <div>
    <div class="d-f a-l w-1 ">
        <div><a-input></a-input>></div>
        <div></div>
    </div>
<qrcode></qrcode>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import qrcode from "@/components/qrcode/qrcode.vue"
interface Data {
    name:string
}
 export default defineComponent({
   name: 'qrCode',
   props: {
   },
   components: {
       qrcode
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