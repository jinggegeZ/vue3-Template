<template>
 <div  v-if="flag === false" class="dialogbox">
   
    <div ><img src="../../images/logo.png" alt=""></div>
   
 </div> 
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
    name:string,
    flag:boolean
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){


const opendialog = () => {
    data.flag =!data.flag
    console.log(data.flag);
}
return {
...toRefs(data),
opendialog
}
},
 })
</script>

<style scoped lang="scss">
.dialogbox {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
}
</style>