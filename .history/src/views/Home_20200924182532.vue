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
    const router = useRouter()
    const data: Data = reactive<Data>({
      name:'jack'
     
    });
    const choseitem = (item: any) => {
      console.log(item);
      router.push(item.path)
    };
    return {
      ...toRefs(data),
      choseitem,
      
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