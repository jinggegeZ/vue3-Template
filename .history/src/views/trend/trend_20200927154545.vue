<template>
  <div>
    <h2>趋势组件</h2>
    <a-slider></a-slider>
    <trends :sort="sort" :type="up">
    <template v-slot:turnover>营业额</template>
    <template v-slot:turnovernumb>5%</template>
    </trends>
    <trends :type="down">
    <template v-slot:turnover>利润</template>
    <template v-slot:turnovernumb>6%</template>

    </trends>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import trends from "@/components/trends/trends.vue";
interface Data {
  type: string;
  green:string
  sort:boolean
}
export default defineComponent({
  name: "trend",
  props: {},
  components: {
    trends
  },
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      type: "up",
      green:"green",
      sort:true
    });

    return {
      ...toRefs(data),
      
    };
  }
});
</script>

<style scoped lang='scss'>

</style>