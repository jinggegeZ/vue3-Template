import {message} from "ant-design-vue"
export const usecopyText = () => {
    const copy = (value:string) => {
        const txet = value
        const oInput = document.createElement('input') // 创建input节点
        oInput.value = txet //给input 的value赋值
        document.body.appendChild(oInput) // 向页面插入input节点
        oInput.select() // 选中input   选中文本域中的内容
        document.execCommand("Copy") //Copy的意思是拷贝当前选中内容到剪贴板
        oInput.className = "oInput"
        oInput.style.display = "none"
        message.success("复制成功")
    }
    return {
        copy
    }


}