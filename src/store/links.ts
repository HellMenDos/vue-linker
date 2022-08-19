import { defineStore } from 'pinia'

interface User {
  id: number,
  userName: string,
  date: Date
}
interface Link {
  id: number,
  url: string,
  name: string
  users: User[]
}

// eslint-disable-next-line
export const useLinkStore = defineStore({
  id: 'links',
  state: () => ({
    links: [
      { id: 1, url: 'url', name: 'name1', users: [
        { id: 1, userName: 'Name 1', date: new Date() },
        { id: 2, userName: 'Name 2', date: new Date() }
      ]},
      { id: 2, url: 'url2', name: 'name2', users: [] }
    ] as Link[]
  }),
  getters: {
    allData(state): Link[] {
      return state.links
    },
    getData(state) {
      return (id: number) => state.links.find((item) => item.id === id)?.users
    }
  }
})
