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
            v-for="item in list"
              :key="item.path"
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
                minHeight: '777px'
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
import { defineComponent, reactive, toRefs, SetupContext, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
interface Item {
  name: string;
  path: string;
  icon: string;
}
interface Data {
  selectedKeys: string[];
  list: Item[];
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const router = useRouter();
    const route = useRoute()
    const data: Data = reactive<Data>({
      selectedKeys: ["/"],
      list: [
         {
          icon: "HomeOutlined",
          name: "组件说明",
          path: "/",
          
        },
        {
          icon: "DeploymentUnitOutlined",
          name: "常用hook",
          path: "/hookart",
          
        },
        {
          icon: "ZoomInOutlined",
          name: "图片预览",
          path: "/picturePreview",
          
        },
        {
          name: "趋势",
          path: "/trend",
          
          icon: "BarChartOutlined"
        },
        {
          name: "底部工具栏",
          path: "/bottomToolbars",
          
          icon: "ToolOutlined"
        },
        {
          name: "通知图标",
          path: "/notificationIcon",
         
          icon: "ToolOutlined"
        },
        {
          name: "内嵌图标",
          path: "/Embedded",
        
          icon: "ToolOutlined"
        },
        {
          name: "验证码按钮",
          path: "/Captcha",
         
          icon:"MessageOutlined",
        },
         {
          name: "进度条拓展",
          path: "/progressBar",
         
          icon:"PaperClipOutlined",
        },
         {
          name: "生成二维码",
          path: "/qrCode",
         
          icon:"QrcodeOutlined",
        },
         {
          name: "复制文本",
          path: "/copyText",
        
          icon:"CopyrightCircleOutlined",
        },
         {
          name: "生成水印",
          path: "/generateWatermark",
          
          icon:"BorderTopOutlined",
        },
         {
          name: "可编辑文本",
          path: "/editableText",
          
          icon:"EditOutlined",
        },
        
      ]
    });
    const choseitem = (item: any) => {
      console.log(item);
      router.push(item.path);
    };
    onMounted( () => {
      data.selectedKeys[0] = route.path
    })
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