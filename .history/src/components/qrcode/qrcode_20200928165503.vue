<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext, onMounted } from "vue";
interface Data {
  qrcodeurl: string;
}
export default defineComponent({
  name: "",
  props: {
      qrcodeUrl:{
          type:String
      },
      width:{
          type:Number || String,
          default:120
      },
        height:{
          type:Number || String,
          default:120
      }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      qrcodeurl:''
    });
    onMounted(() => {
        data.qrcodeurl = props.qrcodeUrl!
        console.log( data.qrcodeurl);
    })
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>