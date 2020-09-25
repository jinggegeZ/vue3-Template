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

    <div>1. imgUrl: 图片路径,支持字符串和数组</div>
    <div>2. isMark: 点击遮罩层是否关闭,布尔类型,默认为true</div>

    <div>事件</div>

    <div>1. clickPreviewImg: 点击单个预览图片</div>
    <div>2. clickPreviewImgs: 点击多个预览图片</div>

    <div>趋势组件</div>
    <div>表示上升和下降,颜色可反转</div>
    <div>传入参数</div>
    <div>1. type:趋势类型,字符串类型,支持up和down,默认为up</div>
    <div>2. isReserve:颜色是否反转,布尔类型,默认为false</div>
    <div>插槽</div>

    <div>1. 默认插槽: 趋势幅度</div>
    <div>2. text: 文字描述</div>

    <h2>底部工具栏</h2>
    <div>插槽</div>
    <div>1. left 左边内容</div>
    <div>2. right: 右边内容</div>

    <h2>通知图标</h2>
    <div>传入参数</div>
    <div>1. count: 通知个数</div>
    <div>2. placement: 内容位置,字符串,默认为top</div>

    <div>插槽</div>
    <div>1.content: 展开内容</div>

    <h2>内嵌网页</h2>
    <div>传入参数</div>
    <div>1. src: 网页路径, 字符串类型</div>

    <h2>验证码按钮</h2>
    <div>传入参数</div>
    <div>1. time: 倒计时秒数</div>
    <div>2. text: 按钮文字</div>
    <div>3. sendText: 倒计时进行时显示文字,默认后重新发送</div>
    <div>4. endText: 倒计时结束后显示文字,默认重新发送</div>

    <ol>进度条拓展</ol>
    <li></li>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  name: string;
}
export default defineComponent({
  name: "basicDescription",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "jack"
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>