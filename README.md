# PWA-Example

## 项目开始

```
# 项目的创建
yarn create vite pwa-example --template vue
cd pwa-example
yarn
yarn dev




```

> # 安装PWA插件
> yarn add vite-plugin-pwa -D

```js
// vite.config.js / vite.config.ts
import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    VitePWA()
  ]
}
```

