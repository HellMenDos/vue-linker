function useLocalStorage() {
  return {
    getItem(key: string) {
      return localStorage.getItem(key)
    },
    setItem(key: string, data: any) {
      return localStorage.setItem(key, data)
    }
  }
}
export default useLocalStorage
