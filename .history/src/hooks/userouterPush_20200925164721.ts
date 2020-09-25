import {useRouter,useRoute} from 'vue-router'
export const userouterPush =(name:string,method:string,params?:string) => {
    const router = useRouter()
    const route = useRoute()
    if(name !== route.name) {
        if(method === 'query'){
            router.push(name, query:query)
        }
    }

}