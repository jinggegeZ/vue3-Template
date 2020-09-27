<template>
  <div>
    <h2>通知图标</h2>
    <br>
    <div>普通标签</div>
    <div>
      <a-badge :count="5">
        <a href="#" class="head-example" />
       <div class="iconsize"><BellOutlined /></div>
      </a-badge>
    </div>
    <br>
    <div>消息超过99条</div>
    <div>1555</div>
    <div>555</div>
    <div>1555</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";

interface Data {
  name: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "jack"
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>