<template>
  <div class="progressbar"></div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  name: string;
}
export default defineComponent({
  name: "jz-progressbar",
  props: {
    percentage: {
      type: Number
    },
    textInside: {
      type: Boolean,
      default: false
    },
    strokeWidth: {
      type: Number || String,
      default: 6
    },
    duration: {
      type: Number,
      default: 2000
    },
    isAnimate: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: "#409eff"
    },
    noData: {
      type: Boolean,
      default: false
    },
    lineData: {
      type: Boolean,
      default: false
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

<style scoped lang="scss">
.progressbar {
  width: 50%;
}
</style>