<template>
  <div>
    <div class="inputbox ">
      <div class="a-inputbox"><a-input placeholder="请输入文字或者网址" /></div>
      <div><a-button type="primary">点击生成二维码</a-button></div>
    </div>
    <qrcode></qrcode>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import qrcode from "@/components/qrcode/qrcode.vue";
interface Data {
  name: string;
}
export default defineComponent({
  name: "qrCode",
  props: {},
  components: {
    qrcode
  },
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
.inputbox {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    
}
.a-inputbox {
    width: 50%;
    margin-right: 20px;
}
</style>