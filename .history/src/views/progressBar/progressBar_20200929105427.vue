<template>
  <div>
    <h2>普通进度条</h2>
    <progressbar :percentage="percentageone"></progressbar>
    <h2>普通进度条,控制高度</h2>
    <progressbar :percentage="percentagetwo" :strokeWidth="strokeWidthone"></progressbar>
    <h2>文字内显</h2>
    <progressbar :percentage="percentagethree" :strokeWidth=" strokeWidthone" :textInside="textInside"></progressbar>
    <h2>文字内显,并且控制高度</h2>
    <progressbar :percentage="percentagethree" :strokeWidth="strokeWidthotwo"  :textInside="textInside"></progressbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import progressbar from "@/components/progressbar/progressbar.vue";
interface Data {
  percentageone:number,
  percentagetwo:number,
  strokeWidthone:number,
  strokeWidthotwo:number,
  percentagethree:number,
  textInside:boolean,
}
export default defineComponent({
  name: "progressBar",
  props: {},
  components: {
    progressbar
  },
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      percentageone:30,
      percentagetwo:60,
      percentagethree:70,
      strokeWidthone:25,
      strokeWidthotwo:30,
      textInside:true
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>