<template>
  <div>
    <captchas :text="text"> 
       
    </captchas>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import captchas from "@/components/captchas/captchas.vue";
interface Data {
  name: string;
  text:string
}
export default defineComponent({
  name: "Captcha",
  props: {},
  components: {
    captchas
  },
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "jack",
      text:'60秒后华军是狗'
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>