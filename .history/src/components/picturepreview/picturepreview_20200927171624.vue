<template>
  <div v-if="isMark === true" class="dialogbox" @click="closedialog">
    <div><img src="../../images/logo.png" alt="" /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  flag: boolean;
}
export default defineComponent({
  name: "",
  props: {
      isMark:{
          type:Boolean
      }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      flag: false
    });
    const closedialog = () => {
        props.isMark = false
    }
    return {
      ...toRefs(data)
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