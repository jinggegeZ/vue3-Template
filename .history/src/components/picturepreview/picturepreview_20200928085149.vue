<template>
  <div v-for="(item, index) in Piclist" :key="index">
    <div @click="opendialog"><img :style="{width:width+'px',height:height+'px'}" :src="item" alt="" /></div>
   <div class="d-f j-c a-l" v-if="flags === true">
     <div class="dialogbox" @click="closedialog"></div>
      <div class="imgpostztion"><img :style="{width:width+'px',height:height+'px'}" :src="item" alt="" /></div>
      <div class="xposztion">X</div>
   </div>
    
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
    },
    piclist: {
      type: Array
    },
    width:{
        type:Number,
        default:200
    },
     height:{
        type:Number,
        default:200
    },
    showclose: {
      type:Boolean,
      default:false
    }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "jack",
      flags: false
    });
    const closedialog = () => {
      if(props.showclose === false){
        data.flags = !data.flags;
      }
    };
    const opendialog = () => {
      data.flags = !data.flags;
    };
    onMounted(() => {
      data.flags = props.isMark!;
    });
    watch(
      () => props.isMark,
      val => {
        data.flags = val!;
      }
    );
    return {
      ...toRefs(data),
      opendialog,
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
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  
}

.imgpostztion {
    z-index: 9;
}
.xposztion {
    position: absolute;
    right: 40px;
    top:40px;

}
</style>