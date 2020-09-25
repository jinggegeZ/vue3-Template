import {Modal} from "ant-design-vue"
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode } from 'vue';
import {useRouter} from 'vue-router'
export const useChecklogin = () => {
    const router = useRouter()
    const user = localStorage.getItem('user')
    if(user){
        Modal.success({
            content:'您已登录了哦',
        })
    }
    else {
        Modal.confirm({
            title:'提示',
            icon: createVNode(ExclamationCircleOutlined),
            content:'您还没有登录，是否立即登录',
            okText: '去登录',
            okType: 'primary',
            cancelText: '返回',

            onOk() {
              console.log('去登录');
              router.push('/')
            },
            onCancel() {
              console.log('返回');
            },
        })
        
    }
}