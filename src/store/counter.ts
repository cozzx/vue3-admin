import { defineStore } from "pinia";
import { computed } from "vue";

export const useCounterStore = defineStore("counter", () => {
  // ref变量 -> state属性
  const count = ref(0);
  // computed 计算属性 -> getter
  const double = computed(() => {
    return count.value * 2;
  });
  // function函数 → actions
  const increment = () => {
    count.value++;
  }

  return { count, double, increment };
})