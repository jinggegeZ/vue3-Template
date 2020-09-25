<template>
 <div>
    <h2>图片预览</h2>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import {useChecklogin} from "@/hooks/useChecklogin"
import {useRouter} from "vue-router"
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
    const {checklogin} = useChecklogin()
    const {router} = useRouter()
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