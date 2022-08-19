import { useRouter } from 'vue-router';
import useLocalStorage from './useLocalStorage';

function useAuth() {
  const storage = useLocalStorage()
  const router = useRouter();

  return {
    isAuth() {
      // eslint-disable-next-line
      return storage.getItem('tokens') ? true : false
    },
    login() {
      storage.setItem('tokens', 'data')
      router.push({
        path: '/main'
      })
    },
    logout() {
      storage.removeItem('tokens')
      router.push({
        path: '/'
      })
    }
  }
}

export default useAuth
