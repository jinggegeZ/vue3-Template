<template>
 <div>
    <captcha></captcha>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import captcha from "@/components/captcha/captcha.vue"
interface Data {
    name:string
}
 export default defineComponent({
   name: 'Captcha',
   props: {
   },
   components: {
       captcha
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