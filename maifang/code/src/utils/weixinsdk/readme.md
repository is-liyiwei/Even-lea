```js
// index.html
<script charset="utf-8" src="static/jweixin-1.4.1.js"></script>


// app.vue
import initWeChatSDK from '@/utils/weixinsdk/index.js'

mounted () {
  initWeChatSDK(this.appWxPublicAppid || 'wxa54e791d0a3cfc49')
}

```