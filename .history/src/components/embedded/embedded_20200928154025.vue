<template>
  <div>
    <div class="topbox">
      <div>
        <a-button type="primary" @click="openinterbox">打开内部网页</a-button>
      </div>
      <div><a-button type="primary" @click="closeinterbox">关闭内部网页</a-button></div>
    </div>
    <div class="navbox">
        <div v-if="flag === true"><iframe :src="src"></iframe></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
    name:string,
    flag:boolean
}
export default defineComponent({
  name: "",
  props: {
    src: {
      type: String
    }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
        name:'jack',
        flag:false
    });
    const openinterbox = () => {
    data.flag = true
}
    const closeinterbox = () => {
        data.flag = false
    }
    return {
      ...toRefs(data),
      openinterbox,
      closeinterbox
    };
  }
});
</script>

<style scoped lang='scss'>
.topbox {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.navbox {
    width: 100%;
    min-height: 600px;
}
</style>