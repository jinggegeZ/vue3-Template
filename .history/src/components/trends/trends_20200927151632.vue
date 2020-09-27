<template>
  <div v-if="sort === true">
  <div class="w-1 d-f a-l h-30">
      <div class="boder"></div>
      <div >正常组件</div>
      <div class="boder"></div>
    </div>
    <div class="d-f a-l h-30">
        <slot name="turnover"></slot>
        <div :class="color === 'red' ? 'upred' : ''"></div>
        <slot name="turnovernumb"></slot>
        <span class="m-r-20"></span>
    </div></div>
   <div v-if="sort === false">
     <div class="w-1 d-f a-l h-30">
      <div class="boder"></div>
      <div >翻转颜色</div>
      <div class="boder"></div>
    </div>
    <div class="d-f a-l h-30">
        <slot name="turnover"></slot>
        <div class="" :class="color === 'red' ? 'reddown' : ''"></div>
        <slot name="turnovernumb"></slot>
    </div></div>
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
    },
     sort: {
      type: Boolean
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