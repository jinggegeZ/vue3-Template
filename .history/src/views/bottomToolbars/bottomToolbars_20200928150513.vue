<template>
 <div>
    <footbars>
        <template v-slot:msg></template>
        <template v-slot:button></template>
    </footbars>
    
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import footbars from "@/components/footbars/footbars.vue"
interface Data {
    name:string
}
 export default defineComponent({
   name: 'bottomToolbars',
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