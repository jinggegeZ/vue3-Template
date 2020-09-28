<template>
  <div>
    <a-popover v-model:visible="visible" :placement="placement">
    <template v-slot:content>
      <slot name="title"></slot>
    </template>
    <a-badge :count="count">
    <BellOutlined :style="{ fontSize: '32px' }" />
    </a-badge>
    </a-popover>
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
    count:{
      type:Number
    },
    placement:{
      type:String,
      default:'top'
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
</style>