<template>
  <div>
    <h2>图片预览</h2>
    <div>注释：通过点击图片打开遮罩预览图片</div>
    <picturepreview></picturepreview>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext, nextTick } from "vue";
import { useChecklogin } from "@/hooks/useChecklogin";
import { useRouter } from "vue-router";
import picturepreview from "@/components/picturepreview/picturepreview.vue"
interface Data {
  name: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {picturepreview},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "jack"
    });
    const checklogin = useChecklogin()
    const router = useRouter()
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>