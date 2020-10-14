<template>
 <div>
<div class="inputbox ">
      <div class="a-inputbox"><a-input placeholder="请输入文字或者网址" v-model:value="value" /></div>
      <div><a-button type="primary" @click="sendqrcodeUrl">点击生成二维码</a-button></div>
    </div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
    name:string
}
 export default defineComponent({
   name: 'copyText',
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