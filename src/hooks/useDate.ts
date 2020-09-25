import dayjs from "dayjs"
import {onMounted, onUnmounted, ref} from "vue"

export const useDate = () => {
    //定义变量
    const date = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    let timer:any = null
    //监听赋值每隔一秒赋值date
    onMounted(() => {
        timer = setInterval(() => {
            date.value =dayjs().format('YYYY-MM-DD HH:mm:ss')
        },1000)
    })
    //结束监听销毁定时器
    onUnmounted(() => {
        clearInterval(timer)
    })
    return {
        date
    }
}