<template>
  <div>
    <!-- <div v-if="sort === true">
      <div class="w-1 d-f a-l h-30">
        <div class="boder"></div>
        <div>正常组件</div>
        <div class="boder"></div>
      </div>
      <div class="d-f a-l h-30">
        <slot name="turnover"></slot>
        <div class="upred"></div>
        <slot name="turnovernumb"></slot>
        <slot name="profit"></slot>
        <div class="greendown"></div>
        <slot name="profitnumb"></slot>
      </div>
    </div> -->

    <div class="w-1 d-f a-l h-30">
      <div class="boder"></div>
      <div>正常组件</div>
      <div class="boder"></div>
    </div>
    <slot name="sort">
      <div class="d-f a-l h-30">
        <slot name="turnover"></slot>
        <div class="upred"></div>
        <slot name="turnovernumb"></slot>
        <slot name="profit"></slot>
        <div class="greendown"></div>
        <slot name="profitnumb"></slot>
      </div>
    </slot>

    <div class="w-1 d-f a-l h-30">
      <div class="boder"></div>
      <div>颜色翻转</div>
      <div class="boder"></div>
    </div>
    <div class="d-f a-l h-30">
      <slot name="turnover"></slot>
      <div class="upgreen"></div>
      <slot name="turnovernumb"></slot>

      <slot name="profit"></slot>
      <div class="reddown"></div>
      <slot name="profitnumb"></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  name: string;
}
export default defineComponent({
  name: "",
  props: ["sort"],
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
</style>