<template>
 <div>
    <h2>通知图标</h2>
    
 </div>
</template>

<script lang="ts">
import childicon from '@/components/childicon/childicon.vue'
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