<template>
  <div>
    <h2>普通进度条</h2>
    <progressbar ></progressbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import progressbar from "@/components/progressbar/progressbar.vue";
interface Data {
  name: string;
}
export default defineComponent({
  name: "progressBar",
  props: {},
  components: {
    progressbar
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
</style>