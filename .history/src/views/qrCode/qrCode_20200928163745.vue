<template>
 <div>
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