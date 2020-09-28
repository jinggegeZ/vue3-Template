<template>
  <div>
    <div><a-button type="primary" @click="sendmsg">{{defaultmsg}}</a-button></div>
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
    time:{
      type:Number,
      default:60
    },
    text:{
      type:String,
      default:'点击发送验证码'
    }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "jack"
    });
    const sendmsg = () => {

    }
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>