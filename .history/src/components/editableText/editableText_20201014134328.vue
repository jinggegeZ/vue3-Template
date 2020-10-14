<template>
  <div>
    <div class="vla" @click="editables" v-if="editable == false">
      {{ value }}
    </div>
    <div v-else>
      <input type="text" v-model="values" @change="onChange(values)" />
      <slot></slot>
      <button type="button" class="btn confirm" @click="handleconfirm">
        确 认
      </button>
      <button type="button" class="btn" @click="handleclose">取 消</button>
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
} from "vue";
interface Data {
  editable: boolean;
  values: string;
}
export default defineComponent({
  name: "",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    let data: Data = reactive<Data>({
      editable: false,
      values: "",
    });
    onMounted(() => {
      data.values = props.value;
    });
    let editables = () => {
      data.editable = true;
    };
    let onChange = (e: any) => {
      ctx.emit("change", e);
    };
    let handleclose = () => {
      ctx.emit("close", data.values);
      data.editable = false;
    };
    let handleconfirm = () => {
      data.editable = false;
      ctx.emit("confirm", data.values);
      ctx.emit("update:value",data.values)
    };
    return {
      ...toRefs(data),
      editables,
      onChange,
      handleconfirm,
      handleclose,
    };
  },
});
</script>

<style scoped lang='scss'>
.vla {
  width: 300px;
  padding: 5px 10px;
}
input {
  width: 300px;
  padding: 3px 10px;
  border: 1px solid #eeeeee;
  outline: #eeeeee;
}
.btn {
  padding: 3px 15px;
  border-radius: 3px;
  background: #ffffff;
  border: 1px solid #eee;
  outline: none;
}
.confirm {
  background: rgb(64, 169, 255);
  color: white;
  margin: 0 20px;
}
</style>