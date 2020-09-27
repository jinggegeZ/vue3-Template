<template>
  <div v-if="sort === true">
 
  <div class="d-f a-l h-30">
    <slot name="turnover"></slot>
      <div class="upred" :class="type === 'up' ? 'upred' : ''"></div>
    <slot name="turnovernumb"></slot>
    <span class="m-r-20"></span>
  </div>
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
.upred {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid red;
}
.upgreen {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid green;
}
.reddown{
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid green;
}
</style>