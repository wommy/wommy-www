import { defineConfig } from 'vitepress'

const sidebarAbout = [
  { text: 'Brands', link: '/about/brands/' },
  { text: 'Resume', link: '/about/resume/' },
]

export default defineConfig({
  title: 'wommy',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'About', link: '/about/' },
      { text: 'Clients', link: '/clients/' },
      { text: 'Brag', link: '/brag/' },
    ],
    sidebar: {
      '/about/': sidebarAbout,
    },
  },
})
