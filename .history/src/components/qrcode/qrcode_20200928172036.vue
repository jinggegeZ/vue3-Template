<template>
  <div>{{qrcodeUrl}}</div>
  <div><img  :src="url" alt="" :width="width" :height="height" /></div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext, onMounted } from "vue";
import qrcode from "qrcode"
interface Data {
  qrcodeurl: string;
  url:string;
  width:number | string;
  height:number | string
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
      qrcodeurl:'',
      url:'',
      width:'',
      height:''
    });
   onMounted(() => {
        qrcode.toDataURL(props.qrcodeUrl!)
        .then((res) => {
          console.log(11);
          console.log(res);
          data.url = res;
          data.width = props.width;
          data.height = props.height;
        })
        .catch((err) => {
          console.error(err);
        });
   })
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>