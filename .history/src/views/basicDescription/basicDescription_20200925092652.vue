<template>
 <div>
    <h2>常用hooks</h2>
    <div>倒计时</div>
    <div>鼠标移动的位置</div>
    <div>计数器</div>
    <div>本地存储</div>
    <div>复制文本,需要传入文本</div>
    <div>生成水印,需要传入水印内容</div>

    <h2>图片预览</h2>
    <div>支持单图片和多图片</div>

    <div>传入参数</div>

    <div>1.imgUrl: 图片路径,支持字符串和数组</div>
    <div>2.isMark: 点击遮罩层是否关闭,布尔类型,默认为true</div>

    <div>事件</div>
    
    <div>1.clickPreviewImg: 点击单个预览图片</div>
    <div>2.clickPreviewImgs: 点击多个预览图片</div>
 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
    name:string
}
 export default defineComponent({
   name: 'basicDescription',
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