import { useRouter, useRoute } from 'vue-router'
export const userouterPush = (name: string, method: string, params?: any) => {
    const router = useRouter()
    const route = useRoute()
    if (name !== route.name) {
        if (method === 'query') {
            router.push({name,query})
        }
        else if (method === 'params') {
            router.push({name,params})
        }
        else alert('路由传参只能有query或parmas')
    }

}