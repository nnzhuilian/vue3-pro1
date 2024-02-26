import { toRefs, reactive, computed, watch, ref, watchEffect, defineExpose } from "vue"

export default function(){
    const hat = reactive({
        color: "red",
        type: "circle",
        brand: {
            name: "sb",
            price: 10000
        }
    })

    function changeHatColor() {
        hat.color = "white"
    }
    function changeHatType() {
        hat.type = "square"
    }
    function changeHatBrand() {
        hat.brand = { name: "ab", price: 20 }
    }

    return {hat, changeHatColor, changeHatType, changeHatBrand}
}