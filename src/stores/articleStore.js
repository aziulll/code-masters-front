import { defineStore } from 'pinia'

export const useArticleStore = defineStore('article', {
  state: () => ({
    tagsMustAccess: [
      'IA',
      'Cibersegurança',
      'Web3',
      'Cloud',
      'DevOps',
      'Frontend',
      'Mobile',
      'UX/UI',
    ],
    items: [
      {
        id: 1,
        image:
          'https://get.pxhere.com/photo/code-code-editor-coding-computer-data-developing-development-ethernet-html-programmer-programming-screen-software-technology-work-1366450.jpg',
        author: 'Luiza Barbosa',
        date: '24 Fev, 2025',
        readTime: '5 min de leitura',
        title: 'Como a IA está revolucionando o desenvolvimento de software',
        excerpt:
          'Descubra como os avanços em inteligência artificial estão mudando a forma como desenvolvemos software, desde assistentes de código até testes automatizados.',
        tags: ['IA', 'Desenvolvimento', 'Software'],
        votes: 0,
      },
      {
        id: 2,
        image:
          'https://get.pxhere.com/photo/code-code-editor-coding-computer-data-developing-development-ethernet-html-programmer-programming-screen-software-technology-work-1366450.jpg',
        author: 'Luiza Barbosa',
        date: '20 Fev, 2025',
        readTime: '3 min de leitura',
        title: 'O impacto do ChatGPT na produtividade dos desenvolvedores',
        excerpt:
          'Como ferramentas de IA como o ChatGPT estão ajudando programadores a escrever código mais rápido e com menos erros.',
        tags: ['ChatGPT', 'Produtividade', 'Programação'],
        votes: 0,
      },
    ],
  }),
  getters: {
    getArticleById: (state) => (id) => state.items.find((article) => article.id === id),
  },
  actions: {
    upvote(id) {
      console.log(id)
      const article = this.items.find((a) => a.id === id)
      if (article) article.votes++
    },
    downvote(id) {
      const article = this.items.find((a) => a.id === id)
      if (article) article.votes--
    },
    getByTags(tag) {
      const article = this.items.find((a) => a.tags === tag)
      return article
    },
  },
})
