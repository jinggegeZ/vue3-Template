<template>
  <div>
    <childicon :counts="counts" :overflowCount="overflowCount"></childicon>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import childicon from "@/components/childicon/childicon.vue";
interface Data {
  counts:number;
  overflowCount:number
  name: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {
    childicon
  },
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "jack",
      counts:5,
      overflowCount:100
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>