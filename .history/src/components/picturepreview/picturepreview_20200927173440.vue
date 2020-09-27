<template>
  <div v-if="flag === true" class="dialogbox" @click="closedialog">
    <div><img src="../../images/logo.png" alt="" /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext, onMounted } from "vue";
interface Data {
    name:string
    flag:boolean
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
     name:'jack',
     flag:false
    });
    const closedialog =() => {
        data.flag = false
        ctx.emit('update:value', false)
       console.log(data.flag);
    }
    onMounted( () => {
        data.flag = props.isMark!
        console.log(`flag`+data.flag);
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