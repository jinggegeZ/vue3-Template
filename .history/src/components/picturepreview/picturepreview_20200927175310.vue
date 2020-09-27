<template>
  <div v-if="flags === true" class="dialogbox" @click="closedialog">
    <div><img src="../../images/logo.png" alt="" /></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
  watch
} from "vue";
interface Data {
  name: string;
  flags: boolean;
}
export default defineComponent({
  name: "",
  props: {
    isMark: {
      type: Boolean
    }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "jack",
      flags: false
    });
    const closedialog = () => {
      data.flags = !data.flags;
    };
    onMounted(() => {
      data.flags = props.isMark!;
    });
    watch(() => props.isMark,(val) => {
        data.flags = val!
    })
    return {
      ...toRefs(data),
      closedialog
    };
  }
});
</script>

<style scoped lang="scss">
.dialogbox {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
}
</style>