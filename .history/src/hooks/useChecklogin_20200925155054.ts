import {Modal} from "ant-design-vue"
import { createVNode } from 'vue';
export const useChecklogin = () => {
    const user = localStorage.getItem('user')
    if(user){
       alert('一登录')
    }
    else {
        Modal.confirm({
            title:'提示',
            icon: createVNode(ExclamationCircleOutlined),
            content:'您还没有登录，是否立即登录'
        })
        
    }
}