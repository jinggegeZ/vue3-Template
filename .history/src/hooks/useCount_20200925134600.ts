import {ref} from "vue"
import {message} from "ant-design-vue"

export const useCount =(current = 0,{min,max}:{min?:number,max?:number},delay= 1000) => {
    if(current < min!){
        current = min!
        message.error('默认值小于最小值')
    }
    if(current > max!){
        current = max!
        message.error('默认值大于最大值')
    }
    const count = ref<number>(current)
    const add = () => {
        if(count.value< max!){
            count.value ++
        }
    }















}