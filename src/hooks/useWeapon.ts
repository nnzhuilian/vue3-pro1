import { toRefs, reactive, computed, watch, ref, watchEffect, defineExpose } from "vue"

export default function(){
    const weapon = reactive({
        name: '白星',
        level: 1,
        color: 'white'
    })
    
    const { name, level, color } = toRefs(weapon)
    
    const nameLevel = computed({
        get() {
            return level.value + name.value;
        },
        set(val) {
            level.value = Number(val);
        }
    })

    function changeName() {
        name.value = '护膜'
    }
    
    function clearLevel() {
        nameLevel.value = '0'
    }
    
    function addLevel() {
        level.value += 1;
    }

    const stopWatch = watch(level, (newValue, oldValue) => {
        console.log(newValue, oldValue)
        if (newValue > 10) {
            stopWatch()
        }
    })
    return {weapon,name, level,color,nameLevel,changeName, clearLevel, addLevel,stopWatch}
}

