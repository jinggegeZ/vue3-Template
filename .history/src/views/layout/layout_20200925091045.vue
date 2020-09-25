<template>
  <div class="continar">
    <div class="continar">
      <a-layout id="components-layout-demo-responsive">
        <a-layout-sider breakpoint="lg" collapsed-width="0">
          <div class="logo d-f j-c a-l logofontsize">目录</div>
          <a-menu
            theme="dark"
            mode="inline"
            v-model:selectedKeys="selectedKeys"  
          >
            <a-menu-item
            v-for="(item, index) in list"
              :key="index"
             @click="choseitem(item)"
            >
            <component :is="item.icon" class="iconcolor"></component> <span class="nav-text">{{ item.name }}</span>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout>
          <a-layout-header
            :style="{ background: '#fff', padding: 0 }"
            class="d-f j-c a-l"
          >
            基于antdVue结合hooks开发个人组件库
          </a-layout-header>
          <a-layout-content :style="{ margin: '24px 16px 0' }">
            <div
              :style="{
                padding: '24px',
                background: '#fff',
                minHeight: '700px'
              }"
            >
              <router-view></router-view>
            </div>
          </a-layout-content>
          <a-layout-footer style="textAlign: center">
            Ant Design ©2020 Created by jingggeZ
          </a-layout-footer>
        </a-layout>
      </a-layout>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import { useRouter } from "vue-router";
interface Item {
  name: string;
  path: string;
  index: number;
  icon: string;
}
interface Data {
  selectedKeys: number;
  list: Item[];
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const router = useRouter();
    const data: Data = reactive<Data>({
      selectedKeys: 0,
      list: [
         {
          icon: "DeploymentUnitOutlined",
          name: "常用hook",
          path: "hookart",
          index: 0
        },
        {
          icon: "DeploymentUnitOutlined",
          name: "常用hook",
          path: "hookart",
          index: 0
        },
        {
          icon: "ZoomInOutlined",
          name: "图片预览",
          path: "picturePreview",
          index: 1
        },
        {
          name: "趋势",
          path: "trend",
          index: 2,
          icon: "BarChartOutlined"
        },
        {
          name: "底部工具栏",
          path: "bottomToolbars",
          index: 3,
          icon: "ToolOutlined"
        },
        {
          name: "通知图标",
          path: "notificationIcon",
          index: 4,
          icon: "ToolOutlined"
        },
        {
          name: "内嵌图标",
          path: "Embedded",
          index: 5,
          icon: "ToolOutlined"
        },
        {
          name: "验证码按钮",
          path: "Captcha",
          index: 6,
          icon:"MessageOutlined",
        },
         {
          name: "进度条拓展",
          path: "progressBar",
          index: 7,
          icon:"PaperClipOutlined",
        },
         {
          name: "生成二维码",
          path: "qrCode",
          index: 8,
          icon:"QrcodeOutlined",
        },
         {
          name: "复制文本",
          path: "copyText",
          index: 9,
          icon:"CopyrightCircleOutlined",
        },
         {
          name: "生成水印",
          path: "generateWatermark",
          index: 10,
          icon:"BorderTopOutlined",
        },
         {
          name: "可编辑文本",
          path: "editableText",
          index: 11,
          icon:"EditOutlined",
        },
        
      ]
    });
    const choseitem = (item: any) => {
      console.log(item);
      router.push(item.path);
    };
    return {
      ...toRefs(data),
      choseitem
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