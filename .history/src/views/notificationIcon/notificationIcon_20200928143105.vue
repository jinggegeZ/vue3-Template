<template>
  <div>
    <childicon :counts="counts" :overflowCount="overflowCount" :overconts="overconts" :placement="placement">
      <template v-slot:title>
      下方弹出
      </template>
    </childicon>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import childicon from "@/components/childicon/childicon.vue";
interface Data {
  counts:number;
  overflowCount:number
  name: string;
  overconts:number,
  placement:string
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
      //默认显示微标数
      counts:5,
      //默认最大值超过后会显示最大值的+
      overflowCount:99,
      //当前显示值超过99 既显示99+
      overconts:100,
      //显示方向（）可提供参考有
      //topLeft,top,topRight,
      //leftTop,left,leftBottom，
      //rightTop，right，rightBottom，
      //bottomLeft，bottom，bottomRight
      //等12个方向
      placement:"bottom"
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>