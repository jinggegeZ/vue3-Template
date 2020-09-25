import {onMounted, onUnmounted, ref} from 'vue'
export const useMouse = () => {
//定义变量
 const x = ref<number>(0)
 const y = ref<number>(0)
//定义方法
 const move = (e:MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
 }
 //页面加载监听鼠标移动
 onMounted(() => {
     window.addEventListener('mousemove',move)
 }) 
 //销毁监听
 onUnmounted (() => {
     window.removeEventListener('mousemove',move)
 })
}