# options

```jsx
<div class="wrapper">
  <avatar-edit containerClass="avatar-container" class="aasd" ref="avatar" v-bind:src="imgSrc"></avatar-edit>
</div>

// containerClass

```
###props

#### containerClass
- Type: `String`
- Default ` `
  
css类名, 用于控制裁剪区域的大小, 默认 500px * 500px
```jsx
<avatar-edit containerClass="lg"></avatar-edit>
```
```css
.wrapper .lg {
  width: 800px;
  height: 900px;
}
```

#### finalWidth & finalHeight
- Type: `Number`
- Default `500`
  
控制输出裁剪图的大小

### 获取裁剪后的图片
```js
 this.$refs.avatar
    .confirm()
    .then(res => {
      this.croppedImg = res
    })
    .catch(err => {
      console.log(err)
    })
```
