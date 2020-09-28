<template>
  <div>
    <h2>通知图标</h2>
    <h3>普通图标</h3>
     <childicon :count="countsone">
    </childicon>
    <br>
    <h3>超出部分显示99</h3>
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
  countsone:number;
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
      //默认显示微标数
      countsone:5,
     
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