<template>
  <div>
    
    <div v-if="sort === true">
      <div class="w-1 d-f a-l h-30">
        <div class="boder"></div>
        <div>正常组件</div>
        <div class="boder"></div>
      </div>
      <div class="d-f a-l h-30">
        <div>营业额</div>
        <div class="upred"></div>
        <div>5%</div>
         <div class="greencolor"></div>
        <div>利润</div>
        <div>5%</div>
      </div>
    </div>
    <div v-else>
      <div class="w-1 d-f a-l h-30">
        <div class="boder"></div>
        <div>颜色翻转</div>
        <div class="boder"></div>
      </div>
      <div class="d-f a-l h-30">
        <div>营业额</div>
        <div class="upred"></div>
        <div>5%</div>
        <div>利润</div>
        <div class="downred"></div>
        <div>5%</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  name: string;
}
export default defineComponent({
  name: "",
  props: ['sort'],
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