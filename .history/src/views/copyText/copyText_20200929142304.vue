<template>
  <div>
    <div class="inputbox ">
      <div class="a-inputbox">
        <a-input placeholder="输入的文字会被复制" v-model:value="value" />
      </div>
      <div>
        <a-button type="primary" @click="copytext">点击复制</a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  value:string
}
export default defineComponent({
  name: "copyText",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      value: ''
    });
     const copytext = () => {
      console.log(data.value);
    }
    return {
      ...toRefs(data),
      copytext
    };
  }
});
</script>

<style scoped lang='scss'>
.inputbox {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.a-inputbox {
  width: 50%;
  margin-right: 20px;
}
</style>