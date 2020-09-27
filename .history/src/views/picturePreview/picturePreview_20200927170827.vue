<template>
  <div>
    <h2>图片预览</h2>
    <div @click="opendialog"><img src="../../images/logo.png" alt=""></div>
    <picturepreview>
     
    </picturepreview>
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
      name: "jack",
      flag:false
    });
    const opendialog = () => {
    data.flag =!data.flag
    console.log(data.flag);
}
    const checklogin = useChecklogin()
    const router = useRouter()
    return {
      ...toRefs(data)
      opendialog
    };
  }
});
</script>

<style scoped lang='scss'>
</style>