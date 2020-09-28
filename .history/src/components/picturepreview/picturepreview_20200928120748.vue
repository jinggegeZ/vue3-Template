<template>
  <div class="d-f">
    <div v-for="(item, index) in piclist" :key="index">
      <img
        @click="opendialog(item,index)"
        :style="{ width: width + 'px', height: height + 'px' }"
        :src="item"
        alt=""
      />
    </div>
  </div>
  <div class="d-f j-c a-l box" v-if="flags === true">
    <div class="dialogbox" @click="closedialog"></div>
    <div class="imgpostztion">
      <div class="d-f a-l w-1 j-c">
        <div v-if="piclist.length > 1" class="leftimg"  @click="goleft">
          <img class="inforimgs" src="../../images/right.png" alt="" />
        </div>
        <div v-for="(item,index) in piclist" :key="index">
          <img
          v-if="indexs === index"
            class="imgs"
            :style="{
              transform: 'scale(' + addscale + ') rotate(' + angle + 'deg)'
            }"
            :src="item"
            alt=""
          />
        </div>
        <div v-if="piclist.length > 1" class="rightimg"   @click="goright">
          <img class="inforimgs" src="../../images/left.png" alt="" />
        </div>
      </div>

      <div class="d-f j-c">
        <div class="inforbox">
        <div>
          <img
            class="inforimg"
            src="../../images/lager.png"
            alt=""
            @click="addScale"
          />
        </div>
        <div>
          <img
            class="inforimg"
            src="../../images/small.png"
            alt=""
            @click="reduceScale"
          />
        </div>
        <div>
          <img
            class="inforimg"
            src="../../images/shun.png"
            alt=""
            @click="addAngle"
          />
        </div>
        <div>
          <img
            class="inforimg"
            src="../../images/ni.png"
            alt=""
            @click="reduceAngle"
          />
        </div>
      </div>
      </div>
    </div>
    <div class="xposztion" @click="closeDiolog" v-if="showclose === true">
      <img class="ximg" src="../../images/close.png" alt="" />
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
  watch
} from "vue";
interface Data {
  name: string;
  flags: boolean;
  addscale: number;
  addvlaue: number;
  angle: number;
  path: string;
  indexs:number
}
export default defineComponent({
  name: "",
  props: {
    isMark: {
      type: Boolean
    },
    piclist: {
      type: Array
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    },
    showclose: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "jack",
      flags: false,
      addscale: 1,
      addvlaue: 0.1,
      angle: 0,
      path: "",
      indexs:0
    });
    const closedialog = () => {
      if (props.showclose === false) {
        data.flags = !data.flags;
      }
    };
    const opendialog = (item: any,index:number) => {
      data.flags = !data.flags;
      console.log(item);
      data.path = item;
      data.indexs = index
    };
    const closeDiolog = () => {
      data.flags = !data.flags;
    };
    const addScale = () => {
      if (data.addscale < 1.8) {
        data.addscale += data.addvlaue;
      }
    };
    const reduceScale = () => {
      if (data.addscale > 1) {
        data.addscale -= data.addvlaue;
      }
    };
    const addAngle = () => {
      if (data.angle === 360) {
        data.angle = 0;
      } else {
        data.angle += 90;
      }
    };
    const reduceAngle = () => {
      if (data.angle === -360) {
        data.angle = 0;
      } else {
        data.angle -= 90;
      }
    };
    const goright = () => {
      if(data.indexs < props.piclist!.length){
        console.log(111);
        data.indexs +=1
      }
      else {
        data.indexs = 0
      }
    }
    const goleft = () =>{
      if(data.indexs = 0){
        data.indexs = props.piclist!.length
      }
      else {
        data.indexs -=1
      }
    }
    onMounted(() => {
      data.flags = props.isMark!;
    });
    watch(
      () => props.isMark,
      val => {
        data.flags = val!;
      }
    );
    return {
      ...toRefs(data),
      opendialog,
      closedialog,
      closeDiolog,
      addScale,
      reduceScale,
      addAngle,
      reduceAngle,
      goright,
      goleft
    };
  }
});
</script>

<style scoped lang="scss">
.dialogbox {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
}

.imgpostztion {
  width: 100%;
  z-index: 9;
  position: relative;
}
.xposztion {
  position: absolute;
  right: 40px;
  top: 40px;
  z-index: 3;
}
.box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.ximg {
  width: 50px;
  height: 50px;
}
.inforbox {
  width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  border-radius: 25px;
  
  background: rgba(0, 0, 0, 0.4);
}
.inforimg {
  width: 30px;
  height: 30px;
}
.imgs {
  width: 300px;
  height: 300px;
  margin-bottom: 50px;
}
.imgbox {
  width: 300px;
  height: 300px;
}
.inforimgs {
  width: 50px;
  height: 50px;
}
.leftimg {
  position: absolute;
  left: 10%;
}
.rightimg {
  position: absolute;
  right: 10%;
}
</style>