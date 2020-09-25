export const uselocalStorge = () => {
    const getMessage = (target: any) => {
        if (typeof target === 'object' && !Array.isArray(target)) {
            return JSON.parse(localStorage.getItem(target)!)
        } else {
            return localStorage.getItem(target)
        }
    }
    const setMessage = (key: string, target: any) => {
        if (typeof target === 'object' && !Array.isArray(target)) {
            JSON.stringify(localStorage.setItem(key, target)!)
        } else {
            return localStorage.setItem(key, target)
        }
    }
    const clearMessage = (key: string) => {
        localStorage.removeItem(key)
    }

    return {
        getMessage, setMessage, clearMessage
    }
}