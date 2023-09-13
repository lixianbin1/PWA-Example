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

### 示例一：安装PWA插件

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

### 配置

#### 注册服务

```js
// vite.config.js / vite.config.ts

import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    VitePWA({
      injectRegister: 'auto', //自动注册服务工作进程
    })
  ]
}
```

手动注册服务工作进程

```js
// main.js

import { registerSW } from 'virtual:pwa-register'

registerSW({
  // 每小时检查一次
  onRegistered: r => r && setInterval(async () => await r.update(), 3600000),
  // 注册失败则报错到 console
  onRegisterError: error => console.error(error)
})
```

#### 调试

```js
//vite.config.js

//PWA配置
const pwaOptions = {
  //......
  devOptions: {
    enabled: true,
    type: 'module',
    navigateFallback: 'index.html',
    suppressWarnings: true,
  },
}
export default defineConfig({
  plugins: [
    VitePWA(pwaOptions),
    //......
  ]
  //.....
})
```

```js
// main.js

import { registerSW } from 'virtual:pwa-register'
registerSW({
  //自动重载:在下次进入的时候重新加载 
  immediate: true,

  //脱机离线
  onOfflineReady:(e)=>{
    console.log(e,'脱机离线')
  },

  //更新服务
  onNeedRefresh:(e)=>{
    console.log(e,'更新服务')
  },

  //注册服务
  onRegistered:(e)=>{
    console.log(e,'注册服务')
  },
})
```

  具体相关配置可以自行查看代码

### 更新日志

#### v1.0.0-test

1:简单的完善PWA的基础功能。目前测试page可以安装PWA，且会缓存文件，可在离线时使用。并在下次更新后可以刷新代码。

