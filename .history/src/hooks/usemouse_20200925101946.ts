import {onMounted, ref} from 'vue'
export const useMouse = () => {
 const x = ref<number>(0)
 const y = ref<number>(0)
 onMounted(() => {
     window.addEventListener('mousemove',(e:MouseEvent) => {
         x.value = e.pagex
         y.value = e.pagey
     })
 }) 
}