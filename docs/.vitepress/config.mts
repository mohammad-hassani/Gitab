import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "farsiBooks",
  description: "مجموعه ترجمه‌های فارسی کتاب‌های برنامه‌نویسی",
  lang: 'fa-IR',
  vite: {
    optimizeDeps: {
      exclude: ['custom.css'] // این خط رو اضافه کن
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})