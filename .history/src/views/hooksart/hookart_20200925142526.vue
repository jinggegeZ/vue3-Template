<template>
  <div>
    <h2>时间</h2>
    <div>{{ date }}</div>
    <br />
    <h2>鼠标移动</h2>
    <div>当前坐标 ：（x轴：{{ x }}--y轴：{{ y }}）</div>
    <br />
    <h2>计数器</h2>
    <div class="d-f">
      <div class="m-r-10">
        <a-button type="danger" @click="increase">
          增加
        </a-button>
      </div>
      <div class="m-r-10">
       <a-button type="primary" @click="reduce">
          减少
        </a-button>
      </div>
      <div class="m-r-10">
        <a-button type="danger" @click="setup(50)">
          设置
        </a-button>
      </div>
      <div class="m-r-10">
          <a-button type="danger" @click="setup(50)">
          设置
        </a-button>
      </div>
      <div>{{ count }}</div>
    </div>
    <br />
    <h2>本地存储</h2>
    <div class="d-f">
      <div v-if="title" class="m-r-10">{{ title }}</div>
      <div class="m-r-10">
        <a-button type="danger" @click="add">
          存储localStorage
        </a-button>
      </div>
      <div class="m-r-10">
        <a-button type="danger" @click="clear">
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
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
  watch,
  ref
} from "vue";
import { useMouse } from "@/hooks/useMouse";
import { useDate } from "@/hooks/useDate";
import { uselocalStorge } from "@/hooks/uselocalStorage";
import { useCount } from "@/hooks/useCount";
interface Data {
  name: string;
  title: any;
}
export default defineComponent({
  name: "hookart",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "jack",
      title: ""
    });
    const { x, y } = useMouse();
    const { date } = useDate();
    const { getMessage, setMessage, clearMessage } = uselocalStorge();
    const current = ref<number>(0);
    const {
      count,
      increase,
      reduce,
      setup,
      reset,
      delayPlus,
      delayRed,
      stepInc,
      stepRed
    } = useCount(current.value, { min: 0, max: 200 });
    const add = () => {
      setMessage("name", data.name);
    };
    const clear = () => {
      clearMessage("name");
    };
    onMounted(() => {
      if (getMessage("name")) {
        data.title = getMessage("name");
      }
    });

    return {
      ...toRefs(data),
      //坐标
      x,
      y,
      //时间
      date,
      //储存
      add,
      //清除
      clear,
      getMessage,
      setMessage,
      clearMessage,
      count,
      increase,
      reduce,
      setup,
      reset,
      delayPlus,
      delayRed,
      stepInc,
      stepRed
    };
  }
});
</script>

<style scoped lang='scss'>
</style>