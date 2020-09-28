<template>
  <div>
    <div class="inputbox ">
      <div class="a-inputbox"><a-input></a-input></div>
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
    justify-content: space-between;
    align-items: center;
    
}
.a-inputbox {
    flex: 8;
}
</style>