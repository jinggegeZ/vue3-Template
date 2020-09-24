<template>
  <div class="continar">
    <a-layout id="components-layout-demo-responsive">
      <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
      >
        <div class="logo d-f j-c a-l logofontsize" >目录</div>
        <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
          <a-menu-item key="1">
            <user-outlined /><span class="nav-text">常用hook</span>
          </a-menu-item>
          <a-menu-item key="2">
            <video-camera-outlined /><span class="nav-text">nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <upload-outlined /><span class="nav-text">nav 3</span>
          </a-menu-item>
          <a-menu-item key="4">
            <user-outlined /> <span class="nav-text">nav 4</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header :style="{ background: '#fff', padding: 0 }" class="d-f j-c a-l" >
          基于antdVue结合hooks开发个人组件库
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px 0' }">
          <div
            :style="{ padding: '24px', background: '#fff', minHeight: '700px' }"
          >
            1549821205
          </div>
        </a-layout-content>
        <a-layout-footer style="textAlign: center">
          Ant Design ©2020 Created by jingggeZ
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
interface item {
  name:string
  path:string
}
interface Data {
  selectedKeys: string[];
  list:item[]
}
export default defineComponent({
  name: "首页",
  props: {},
  components: {},
  setup() {
    const data: Data = reactive<Data>({
      selectedKeys: ['1'],
      list:[
        {
          name:'常用hook',
          path:'hookart'
        }
      ]
    });
    const onCollapse = (collapsed: string, type: any) => {
      console.log(collapsed, type);
    };
    const onBreakpoint = (broken: any) => {
      console.log(broken);
    };
    return {
      ...toRefs(data),
      onCollapse,
      onBreakpoint
    };
  }
});
</script>

<style scoped lang="scss">
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>