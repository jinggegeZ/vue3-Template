<template>
  <div>
    <h2>普通进度条</h2>
    <progressbar :percentage="percentageone"></progressbar>
    <h2>普通进度条,控制高度</h2>
    <progressbar :percentage="percentagetwo" :strokeWidth="strokeWidthone"></progressbar>
    <h2>文字内显</h2>
    <progressbar :percentage="percentagethree" :strokeWidth=" strokeWidthone" :textInside="textInside"></progressbar>
    <h2>文字内显,并且控制高度</h2>
    <progressbar :percentage="percentagefour" :strokeWidth="strokeWidthotwo"  :textInside="textInside"></progressbar>
    <h2>自定义颜色</h2>
    <progressbar :percentage="percentageone" :bgColor="bgColor"></progressbar>
    <h2>不显示进度</h2>
    <progressbar :percentage="percentageone" :bgColor="bgColor"></progressbar>
    <h2>不显示进度</h2>lineData
    <progressbar :percentage="percentageone" :bgColor="bgColor"></progressbar>
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
  percentagefour:number,
  bgColor:string
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
      percentagefour:33.8,
      strokeWidthone:25,
      strokeWidthotwo:30,
      textInside:true,
      bgColor:'#FF0000'
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>

</style>