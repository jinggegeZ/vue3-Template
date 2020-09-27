<template>
  <div>
    <h2>趋势组件</h2>
    <trends :color="red">
    <template v-slot:turnover>营业额</template>
    <template v-slot:turnovernumb>5%</template>
    </trends>
   
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import trends from "@/components/trends/trends.vue";
interface Data {
  red: string;
  green:string
}
export default defineComponent({
  name: "trend",
  props: {},
  components: {
    trends
  },
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      red: "red",
      green:"green"
    });

    return {
      ...toRefs(data),
      
    };
  }
});
</script>

<style scoped lang='scss'>

</style>