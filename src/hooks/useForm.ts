import { reactive } from 'vue'

export default function useForm<T extends object>(initData: T) {
  const state = reactive<any>(initData)

  const input = (value: any, field: string) => {
    state[field] = value
  }

  return {
    input,
    ...state
  }
}
