<template>
  <div>
    <h2>趋势组件：通过传入中间变量（sort）改变趋势默认营业额为红色</h2>
    <trends :color="red">
    <template v-slot:turnover>营业额</template>
    <template v-slot:turnovernumb>5%</template>
    </trends>

    <trends :color="green">
    <template v-slot:turnover>营业额</template>
    <template v-slot:turnovernumb>5%</template>
    </trends>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import trends from "@/components/trends/trends.vue";
interface Data {
  name: string;
  sort: boolean;
  red: string;
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
      name: "jack",
      sort: true
    });
    const changeColor = () => {
      data.sort = !data.sort;
    };
    return {
      ...toRefs(data),
      changeColor
    };
  }
});
</script>

<style scoped lang='scss'>

</style>