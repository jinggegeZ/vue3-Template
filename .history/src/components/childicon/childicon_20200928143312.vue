<template>
  <div>
    <a-popover v-model="" content="" title=""></a-popover>>
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
    counts:{
      type:Number
    },
    overflowCount:{
      type:Number,
      default:99
    },
    overconts:{
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