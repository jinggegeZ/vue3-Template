<template>

   <div class="w-1 d-f a-l h-30">
      <div class="boder"></div>
      <div>正常组件</div>
      <div class="boder"></div>
    </div>
    <div class="d-f a-l h-30">
     <slot name="turnover"></slot>
        <div class="upred" :class="color === 'red' ? 'active' : ''"></div>
        <slot name="turnovernumb"></slot>
    </div>


    <div class="w-1 d-f a-l h-30">
      <div class="boder"></div>
      <div>颜色翻转</div>
      <div class="boder"></div>
    </div>
    <div class="d-f a-l h-30">
      <slot name="turnover"></slot>
        <div class="upred" :class="color === 'green' ? 'activegreen' : ''"></div>
        <slot name="turnovernumb"></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  name: string;
}
export default defineComponent({
  name: "",
  props: {
    color: {
      type: String
    }
  },
  components: {},
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
.active {
  border-bottom-color: red !important;
}
.activegreen {
  border-bottom-color: green !important;
}
</style>