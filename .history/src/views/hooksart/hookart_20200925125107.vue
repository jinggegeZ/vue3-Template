<template>
 <div>
    <h2>时间</h2>
    <div>{{date}}</div>
    <br>
    <h2>鼠标移动</h2>
    <div>
    当前坐标 ：（x轴：{{x}}--y轴：{{y}}）
    </div>
    <br>
    <h2>本地存储</h2>
    <div class="d-f">
    <div>
    
    </div>
    <div></div>
    <div></div>
    </div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
import {useMouse} from "@/hooks/useMouse"
import {useDate} from "@/hooks/useDate"
import {uselocalStorge} from "@/hooks/uselocalStorage"
interface Data {
    name:string
}
 export default defineComponent({
   name: 'hookart',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
    name:"jack"
})
const {x,y} = useMouse()
const {date} = useDate()
const {getMessage,setMessage,clearMessage} = uselocalStorge()
return {
...toRefs(data),
x,
y,
date,
getMessage,
setMessage,
clearMessage
}
},
 })
</script>

<style scoped lang='scss'>

</style>