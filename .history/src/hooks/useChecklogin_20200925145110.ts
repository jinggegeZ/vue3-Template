export const useChecklogin = (next:any) => {
    const user = localStorage.getItem('user')
    if(user){
        next()
    }



}