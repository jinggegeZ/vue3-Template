<template>
  <div>
    <h2>时间</h2>
    <div>{{ date }}</div>
    <br />
    <h2>鼠标移动</h2>
    <div>当前坐标 ：（x轴：{{ x }}--y轴：{{ y }}）</div>
    <br />
    <h2>本地存储</h2>
    <div class="d-f">
        <div v-if="title">{{title}}</div>
      <div class="m-r-10">
        <a-button type="danger" @click="add">
          存储localStorage
        </a-button>
      </div>
      <div class="m-r-10">
        <a-button type="danger">
          清除localStorage
        </a-button>
      </div>
      <div>
        <a-button type="danger">
          sessionStorage同理
        </a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext, onMounted } from "vue";
import { useMouse } from "@/hooks/useMouse";
import { useDate } from "@/hooks/useDate";
import { uselocalStorge } from "@/hooks/uselocalStorage";
interface Data {
  name: string;
  title:any
}
export default defineComponent({
  name: "hookart",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "jack",
      title:''
    });
    const { x, y } = useMouse();
    const { date } = useDate();
    const { getMessage, setMessage, clearMessage } = uselocalStorge();
    const add = () => {
      setMessage("name", data.name);
    };
    onMounted( () => {
        data.title = getMessage(name)
    })
    return {
      ...toRefs(data),
      x,
      y,
      date,
      add,
      getMessage,
      setMessage,
      clearMessage
    };
  }
});
</script>

<style scoped lang='scss'>
</style>