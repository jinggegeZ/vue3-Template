<template>
  <div>{{qrcodeUrl}}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext, onMounted } from "vue";
import qrcode from "qrcode"
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
   
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>