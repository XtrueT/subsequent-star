/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // 或 'media' 或 'class'
  theme: {
    extend: {
      container: (theme) => ({
        center: true, // 如果你想要container居中
        screens: {
          sm: '640px',
          md: '720px',
          lg: '992px',
          xl: '1024px',
          '2xl': '1280px',
        },
      }),
      typography: {
        DEFAULT: {
          css: {
            // 添加任何需要的排版样式
          },
        },
      },
      colors: {
        primary: {
          light: '#00668c',
          dark: '#71c4ef',
        },
        site: {
          light: '#f5f5f5',
          dark: '#0d1117'
        }
      },
    },
  },
  variants: {
    extend: {}, // 在这里扩展你的变体配置
  },
  plugins: [
    require('@tailwindcss/typography'), // 添加排版插件
  ],
}

