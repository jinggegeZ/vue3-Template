export const usesessionStorage = () => {
    const getMessage = (target: any) => {
        if (typeof target === 'object' && !Array.isArray(target)) {
            return JSON.parse(sessionStorage.getItem(target)!)
        } else {
            return sessionStorage.getItem(target)
        }
    }
    const setMessage = (key: string, target: any) => {
        if (typeof target === 'object' && !Array.isArray(target)) {
            JSON.stringify(sessionStorage.setItem(key, target)!)
        } else {
            return sessionStorage.setItem(key, target)
        }
    }
    const clearMessage = (key: string) => {
        sessionStorage.removeItem(key)
    }

    return {
        getMessage, setMessage, clearMessage
    }
}