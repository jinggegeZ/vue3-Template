<template>
 <div>
    <footbars>
        <template v-slot:msg>这是底部信息</template>
        <template v-slot:button>
            <div class="d-f a-l w-150 j-c-sb">
                <a-button type="">取消</a-button>
                <a-button type="primary">确定</a-button>
            </div>
        </template>
    </footbars>
    
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import footbars from "@/components/footbars/footbars.vue"
interface Data {
    name:string
}
 export default defineComponent({
   name: 'bottomToolbars',
   props: {
   },
   components: {
footbars
   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
    name:'jack'
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>