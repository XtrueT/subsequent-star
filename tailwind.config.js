/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // 或 'media' 或 'class'
  theme: {
    extend: {
      container: (theme) => ({
        center: true, // 如果你想要container居中
        screens: {
          xs: '320px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1024px',
          '2xl': '1024px',
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
        primary:{
          light: '#dde4de',
          DEFAULT: '#ef6c00',// 
          dark: '#161823', //
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

