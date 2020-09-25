<template>
  <div>
    <h2>常用hooks</h2>
    <div>倒计时</div>
    <div>鼠标移动的位置</div>
    <div>计数器</div>
    <div>本地存储</div>
    <div>复制文本,需要传入文本</div>
    <div>生成水印,需要传入水印内容</div>
    <br>
    <h2>图片预览</h2>
    <div>支持单图片和多图片</div>
    <div>传入参数</div>
    <div>1. imgUrl: 图片路径,支持字符串和数组</div>
    <div>2. isMark: 点击遮罩层是否关闭,布尔类型,默认为true</div>
    <br />
    <div>事件</div>
    <div>1. clickPreviewImg: 点击单个预览图片</div>
    <div>2. clickPreviewImgs: 点击多个预览图片</div>
    <br />
    <div>趋势组件</div>
    <div>表示上升和下降,颜色可反转</div>
    <br />
    <div>传入参数</div>
    <div>1. type:趋势类型,字符串类型,支持up和down,默认为up</div>
    <div>2. isReserve:颜色是否反转,布尔类型,默认为false</div>
    <div>插槽</div>
    <div>1. 默认插槽: 趋势幅度</div>
    <div>2. text: 文字描述</div>
    <br>
    <h2>底部工具栏</h2>
    <div>插槽</div>
    <div>1. left 左边内容</div>
    <div>2. right: 右边内容</div>
    <h2>通知图标</h2>
    <div>传入参数</div>
    <div>1. count: 通知个数</div>
    <div>2. placement: 内容位置,字符串,默认为top</div>
    <br />
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
    <br />
    <div>进度条拓展</div>
    <div>传入参数</div>
    <div>1. percentage: 进度条的值,数字类型</div>
    <div>2. textInside: 是否内联显示数据,布尔类型,默认false</div>
    <div>3. strokeWidth: 进度条高度,字符串或数字类型,默认为6</div>
    <div>4. duration: 动画时长,数字类型,默认2000</div>
    <div>5. isAnimate: 是否有动画,默认false</div>
    <div>6. bgColor: 背景颜色,字符串类型,默认#409eff</div>
    <div>7. noData: 是否不显示数据,默认为false</div>
    <div>8. lineData: 是否自定义显示内容,默认false</div>
    <br>
    <h2>生成二维码</h2>
    <br>
    <div>传入参数</div>
    <div>1. qrcodeUrl: 生成二维码路径</div>
    <div>2. width: 生成图片宽度,字符串或数字类型,默认120</div>
    <div>3. height: 生成图片高度,字符串或数字类型,默认120</div>
    <br>
    <h2>可编辑文字</h2>
    <br>
    <div>传入参数</div>
    <div>1. text: 文本内容</div>
    <br>
    <div>事件</div>
    <div>1. ok: 点击确认</div>
    <div>2.</div>
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