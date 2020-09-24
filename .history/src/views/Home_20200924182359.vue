<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import {useRouter} from "vue-router"
interface Item {
  name:string
  path:string
}
interface Data {
  selectedKeys: string[];
  list:Item[]
}
export default defineComponent({
  name: "首页",
  props: {},
  components: {},
  setup() {
    const router = useRouter()
    const data: Data = reactive<Data>({
      selectedKeys: ['1'],
      list:[
        {
          name:'常用hook',
          path:'hookart'
        }
      ]
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