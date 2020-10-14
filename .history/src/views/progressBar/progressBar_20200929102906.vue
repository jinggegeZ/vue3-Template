<template>
  <div>
    <h2>普通进度条</h2>
    <progressbar :percentage="percentageone"></progressbar>
    <h2>普通进度条,控制高度</h2>
    <progressbar :percentage="percentagetwo" :strokeWidth="strokeWidthone"></progressbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import progressbar from "@/components/progressbar/progressbar.vue";
interface Data {
  percentageone:number,
  percentagetwo:number,
  strokeWidthone:number
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
      strokeWidthone:15
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>