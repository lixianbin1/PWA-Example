import path from 'node:path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    VitePWA({ 
      includeAssets: ['favicon.ico', 'favicon.svg'],
      manifest: {
        name: 'PWA-Example',
        short_name: 'Example',
        description: '一个PWA的测试用例',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      injectRegister: 'auto', //注册服务工作进程
      registerType: 'autoUpdate',//自动缓存
      workbox: {                 //静态资源缓存清单
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      devOptions: {
        enabled: process.env.SW_DEV === 'true',
        type: 'module',
        navigateFallback: 'index.html',
        suppressWarnings: true,
      },
    }),
    AutoImport({
      imports: [ // 自动导入模块
        'vue',
        'vue-router',
      ],
      dts: 'src/auto-imports.d.ts', // 自动导入的文件集成
      dirs: [ // 自动导入目录下的模块并导出
        'src/Storage',
      ],
      vueTemplate: true, // 在Vue模板内自动导入
      resolvers: [ // 自定义解析器，兼容第三方组件

      ],
      // ...
    }),
    Components({ // 自动引入各组件
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
      resolvers: [ // 自定义解析器，兼容第三方组件
        VantResolver()
      ],
    }),
    Pages({
      extensions: ['vue'], // 有效的文件后缀
      dirs: 'src/Pages', //指定文件根目录
      extendRoute(route, parent) {
        return route
      },
    }),
    Layouts(),
    vue()
  ],
  base: '/PWA-Example/',
  server: {
    host: '0.0.0.0',
    port: '5173',
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@': `${path.resolve(__dirname, 'src')}/`,
    }
  }
})
