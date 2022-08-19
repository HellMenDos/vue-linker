import { defineStore } from 'pinia'

interface Links {
  id: number,
  url: string,
  name: string
}

// eslint-disable-next-line
export const useLinkStore = defineStore({
  id: 'links',
  state: () => ({
    links: [
      { id: 1, url: 'url', name: 'name1' },
      { id: 2, url: 'url2', name: 'name2' }
    ] as Links[]
  }),
  getters: {
    all(): Links[] {
      return this.links
    }
  }
})
