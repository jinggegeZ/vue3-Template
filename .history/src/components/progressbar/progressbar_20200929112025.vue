<template>
  <div v-if="lineData === true" class="d-f j-c-sb w-50">
        <div>{{ percentage }}%</div>
        <div>转化率（日同比{{percentage}}%）</div>
    </div>
  <div class="progressbar">
    <div
      class="inprogressbar"
      :style="{
        height: '' + strokeWidth + 'px',
        width: '' + percentage + '%',
        background: '' + bgColor + '',
        borderRadius: '10px'
        
      }"
    >
      <div v-if="textInside === true" class="inprogresstext" >
        {{ percentage }}%
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
  onMounted
} from "vue";
interface Data {
  percentage: number;
  textInside: boolean;
  strokeWidth: number | string;
  duration: number;
  isAnimate: boolean;
  bgColor: string;
  noData: boolean;
  lineData: boolean;
}
export default defineComponent({
  name: "jz-progressbar",
  props: {
    percentage: {
      type: Number
    },
    textInside: {
      type: Boolean,
      default: false
    },
    strokeWidth: {
      type: Number || String,
      default: 6
    },
    duration: {
      type: Number,
      default: 2000
    },
    isAnimate: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: "#409eff"
    },
    noData: {
      type: Boolean,
      default: false
    },
    lineData: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      percentage: 0,
      textInside: false,
      strokeWidth: 0,
      duration: 0,
      isAnimate: false,
      bgColor: "",
      noData: false,
      lineData: false
    });
    onMounted(() => {
      data.percentage = props.percentage!;
      data.textInside = props.textInside!;
      data.strokeWidth = props.strokeWidth!;
      data.duration = props.duration!;
      data.isAnimate = props.isAnimate;
      data.bgColor = props.bgColor!;
      data.noData = props.noData;
      data.lineData = props.lineData;
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang="scss">
.progressbar {
  width: 500px;
  border-radius: 10px;
  background: #ccc;
}
.inprogressbar {
  display: flex;
  justify-content: flex-end;
  color: white;
  margin-right: 10px;
  align-items: center;
  
}
</style>