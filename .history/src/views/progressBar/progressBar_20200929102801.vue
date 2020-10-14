<template>
  <div>
    <h2>普通进度条</h2>
    <progressbar :percentage="percentageone"></progressbar>
    <h2>普通进度条,控制高度</h2>
    <progressbar :percentage="percentageone"></progressbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import progressbar from "@/components/progressbar/progressbar.vue";
interface Data {
  percentageone:number
}
export default defineComponent({
  name: "progressBar",
  props: {},
  components: {
    progressbar
  },
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      percentageone:30
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>