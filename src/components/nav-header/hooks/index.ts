import { ref } from 'vue'

export function useIsfoldIcon(emit: any) {
  const isfold = ref(false)
  const clickFold = () => {
    isfold.value = !isfold.value
    emit('changeisfold', isfold.value)
  }
  return { isfold, clickFold }
}
