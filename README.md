### nextjs + tailwindcss

使用方式:

```bash
pnpm install
```

部署方式:

直接推送代码,vercel 自动部署

测试地址:
https://next-ssr-opal-eight.vercel.app

icon 地址:https://heroicons.com/
https://unpkg.com/browse/@heroicons/react@2.1.1/24/outline/

使用方式:

```js
import { BeakerIcon } from "@heroicons/react/24/solid"

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="h-6 w-6 text-blue-500" />
      <p>...</p>
    </div>
  )
}
```

UI:antd
