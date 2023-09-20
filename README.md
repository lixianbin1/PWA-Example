# PWA-Example

一个通过 [vite-plugin-pwa](https://github.com/vite-pwa/vite-plugin-pwa) 在 vue 项目中进行 PWA 功能开发的示例项目，用于深入体验 PWA。

## 目录 

 - [项目目录](#mulu)
 - [项目指令](#zhilin)
 - [项目构建](#goujian)
 - [更新日志](#rizhi)
 - [故障排除](#guzan)

<span id="mulu"></span>

## 项目目录

 - `dev-dist/` (自动生成的PWA.js文件)
 - `public/` (公共资源)
 - `src/` (Vue默认的src路径文件)
    - `App.vue` (最初渲染入口)
 - `main.js` ( 入口文件：Electron的入口文件,用来创建Electron应用 )
 - `deploy.sh` (deploy的sh脚本:进行GitHub的page部署)
 - `index.html` （初始html: 最初的index渲染页面）
 - `serve.js` （简易的Node服务器脚本）
 - `vite.config.js` （Vite配置文件）

<span id="zhilin"></span>

## 项目指令

```bash
# 初始化安装
yarn install

# 启动项目
yarn dev

# 打包项目
yarn build

# 预览打包后的dist目录效果
yarn preview

# 部署命令（注意：需要重新配置为自己的部署page）
yarn deploy
```

<span id="goujian"></span>

## 项目构建

以下是项目的构建过程，不需要进行执行，仅用于参考。

```bash
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

<span id="rizhi"/>

## 更新日志

### v1.0.0-test

1:简单的完善PWA的基础功能。目前测试page可以安装PWA，且会缓存文件，可在离线时使用。并在下次更新后可以刷新代码。


<span id="guzan"/>

## 故障排查