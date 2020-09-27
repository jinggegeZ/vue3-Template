<template>
  <div v-if="sort === true">
    <div class="w-1 d-f a-l h-30">
      <div class="boder"></div>
      <div>正常组件</div>
      <div class="boder"></div>
    </div>
    <div class="d-f a-l h-30">
      <slot name="turnover"></slot>
      <div class="upred"></div>
      <slot name="turnovernumb" />
      <span class="m-r-20"></span>
        <slot name="profint"></slot>
      <div class="downgreen"></div>
      <slot name="profintnumb" />
    </div>
  </div>
   <div v-if="sort === false">
    <div class="w-1 d-f a-l h-30">
      <div class="boder"></div>
      <div>翻转颜色</div>
      <div class="boder"></div>
    </div>
    <div class="d-f a-l h-30">
      <slot name="turnover"></slot>
      <div class="upgreen"></div>
      <slot name="turnovernumb" />
       <slot name="profint"></slot>
      <div class="downred"></div>
      <slot name="profintnumb" />
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
  props: {
    sort: {
      type: Boolean
    }
  },
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
.downgreen {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid green;
}
.upred {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 10px solid red;
}
.upgreen {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 10px solid green;
}
.downred {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid red;
}
</style>