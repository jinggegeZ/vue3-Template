<template>
  <div>
    <div><a-button type="primary" @click="sendmsg">{{defaultmsg}}</a-button></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext, onMounted } from "vue";
interface Data {
  defaulttime:number
  defaultmsg:string
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
    },
    sendText:{
      type:String,
      default:'后重新发送'
    },
    endText:{
      type:String,
      default:'重新发送'
    }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      defaultmsg:'点击发送验证码',
      defaulttime:0,
    });
    const sendmsg = () => {
      const timer =  setInterval(() => {
          data.defaulttime -- 
          data.defaultmsg = `${data.defaulttime}s${props.sendText}`
          if(data.defaulttime === 0 ){
            clearInterval(timer)
          }
      }, data.defaulttime);
    }
    onMounted( () => {
      data.defaultmsg = props.text
      data.defaulttime = props.time
    })
    return {
      ...toRefs(data),
      sendmsg
    };
  }
});
</script>

<style scoped lang='scss'>
</style>