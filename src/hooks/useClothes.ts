import {ref} from "vue"

export default function() {
    const cloth = ref({
        name: '衣服',
        size: 1
    })
    
    function addSize() {
        cloth.value.size += 1;
    }
    
    function changeCloths() {
        cloth.value = { name: '大衣', size: 2 }
    }

    return {cloth, addSize, changeCloths}
}

