<template>
  <div>
    <h2>通知图标</h2>
    <h3>普通标签</h3>
    <br />
    <div>
      <a-badge :count="5">
        <a href="#" class="head-example" />
        <div class="iconsize"><BellOutlined /></div>
      </a-badge>
    </div>
    <br />
    <h3>消息超过99条</h3>
    <br />
    <div>
      <a-badge :count="100">
        <a href="#" class="head-example" />
        <div class="iconsize"><BellOutlined /></div>
      </a-badge>
    </div>
    <br />
    <h3>默认弹出菜单</h3>
    <br />
    <div>
      <a-badge :count="100">
        <a href="#" class="head-example" />
        <a-tooltip>
          <template v-slot:title>
            默认正上方弹出菜单
          </template>
          <div class="iconsize"><BellOutlined /></div>
        </a-tooltip>
      </a-badge>
    </div>
    <br />
    <h3>修改弹出方向</h3>
      <div>
      <a-badge :count="100">
        <a href="#" class="head-example" />
        <a-tooltip placement="bottom">
          <template v-slot:title>
            下方弹出菜单
          </template>
          <div class="iconsize"><BellOutlined /></div>
        </a-tooltip>
      </a-badge>
    </div>
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