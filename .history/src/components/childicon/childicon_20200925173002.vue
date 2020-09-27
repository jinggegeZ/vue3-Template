<template>
 <div>
    <childicon></childicon>
 </div>
</template>

<script lang="ts">

import childicon from '@/components/childicon/childicon.vue'
interface Data {
}
 export default defineComponent({
   name: '',
   props: {
       
   },
   components: {
       childicon,
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