# PWA-Example

## 项目介绍

一个应用于 PWA 的 vue 示例代码，用于深入体验 PWA。

 - [vite-plugin-pwa](https://github.com/vite-pwa/vite-plugin-pwa) 针对 Vite 和生态系统的 PWA 集成,零配置和框架无关.适用于 Vite 的 PWA 插件.

## 项目开始

```
yarn create vite pwa-example --template vue
cd pwa-example
yarn
yarn dev
```

### 安装PWA插件

```
yarn add vite-plugin-pwa -D
```

```js
// vite.config.js / vite.config.ts
import { VitePWA } from 'vite-plugin-pwa'

// 说是无配置，但是还是有着最低的配置要求，必须提供以下
export default {
  plugins: [
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
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
      }
    })
  ]
}
```

 - 配置


