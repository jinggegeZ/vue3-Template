<template>
  <div>
    <h2>图片预览</h2>
    <div>单图片预览，点击遮罩层关闭</div>
    <picturepreview :isMark="isMark" :piclist="Piclist"> </picturepreview>
    <div>单图片预览，点击关闭按钮关闭</div>
    <picturepreview :isMark="isMark" :piclist="Piclist" :showclose="showclose">
    </picturepreview>
     <div>多图片预览，点击遮罩层关闭</div>
    <picturepreview :isMark="isMark" :piclist="piclist"> </picturepreview>

  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext, nextTick } from "vue";
import { useChecklogin } from "@/hooks/useChecklogin";
import { useRouter } from "vue-router";
import picturepreview from "@/components/picturepreview/picturepreview.vue";
interface Data {
  name: string;
  isMark: boolean;
  piclist: string[];
  Piclist: string[];
  showclose: boolean;
}
export default defineComponent({
  name: "",
  props: {},
  components: { picturepreview },
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "jack",
      isMark: false,
      showclose: true,
      Piclist: [require("../../images/logo.png")],
      piclist: [
        require("../../images/1.jpg"),
        require("../../images/2.jpg"),
        require("../../images/3.jpg")
      ]
    });
    const checklogin = useChecklogin();
    const router = useRouter();
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>