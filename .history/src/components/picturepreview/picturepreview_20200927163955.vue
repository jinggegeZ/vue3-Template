<template>
 <div>
    <div>单击预览图片，点击遮罩层关闭图片</div>
    <div @click="opendialog"><img src="../../images/logo.png" alt=""></div>
    <div v-if="falg === true" class="dialogbox">123</div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
    name:string,
    flag:boolean
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
    name:'jack',
    flag:false
})
const opendialog = () => {
    data.flag =!data.flag
    console.log(data.flag);
}
return {
...toRefs(data),
opendialog
}
},
 })
</script>

<style scoped lang="scss">
.dialogbox {
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.4);
}
</style>