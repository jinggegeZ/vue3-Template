<template>
  <div>
    <h2>通知图标</h2>
    <h4>普通标签</h4>
    <br>
    <div>
      <a-badge :count="5">
        <a href="#" class="head-example" />
       <div class="iconsize"><BellOutlined /></div>
      </a-badge>
    </div>
    <br>
    <h4>消息超过99条</h4>
    <br>
    <div>
    <a-badge :count="100">
    <a href="#" class="head-example" />
    <div class="iconsize"><BellOutlined /></div>
    </a-badge>
    </div>
    <br>
    <h4>默认弹出菜单</h4>
    <br>
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