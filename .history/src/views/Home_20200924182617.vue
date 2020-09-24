<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import {useRouter} from "vue-router"

interface Data {
 name:string
}
export default defineComponent({
  name: "首页",
  props: {},
  components: {},
  setup() {
   
    const data: Data = reactive<Data>({
      name:'jack'
     
    });
   
    return {
      ...toRefs(data),
     
      
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