<template>
  <div class="box">
    <editable
      v-model:value="value"
      @change="onChange"
      @close="handleClose"
      @confirm="handleConfirm"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import editable from "@/components/editableText/editabletext.vue";
interface Data {
  value: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {
    editable,
  },
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      value: "何无能",
    });
    const onChange = (val: string) => {
      console.log(val);
    };
    const handleClose = (val: string) => {
      console.log(val);
    };
    const handleConfirm = (val: string) => {
      console.log(val);
    };
    return {
      ...toRefs(data),
      onChange,
      handleClose,
      handleConfirm
    };
  },
});
</script>

<style scoped lang='scss'>
.box {
  padding: 24px;
  background: white;
  height: 600px;
}
</style>
