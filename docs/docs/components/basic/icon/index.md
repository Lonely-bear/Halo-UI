<style>
    table {
        width: max-content;
        margin: 1rem auto;
    }
    .h-3 {
        text-decoration: underline;
        text-align:center;
    }
    .badge {
        height: auto;
    }
</style>

# icon
<hr>
<h3 class="h-3">Props</h3>

| NAME      | TYPE    | VALUE      | DEFAULT | TIPS                 |
| --------- | ------- | ---------- | ------- | -------------------- |
| name      | String  | String     | -       | icon名称             |
| color     | String  | String     | inherit | 颜色                 |
| size      | String  | String     | 1em     | 尺寸                 |
| isLoading | Boolean | true/false | false   | 是否加载中动画(旋转) |

<hr>
<h3 class="h-3">演示及示例代码</h3>

<HCollapse title="示例icon" collapse-title="示例代码" style="width: 100%;">
<HIcon name="apple" style="margin-right: 20px" />
<HIcon name="baidu" style="margin-right: 20px"  />
<HIcon name="coffee" style="margin-right: 20px"  />
<template #collapseContent>

```html
<HIcon name="apple" style="margin-right: 20px" />
<HIcon name="baidu" style="margin-right: 20px"  />
<HIcon name="coffee" style="margin-right: 20px"  />
```

</template>
</HCollapse>


<HCollapse title="颜色样式" collapse-title="示例代码" style="width: 100%;">
<HIcon name="apple" style="margin-right: 20px" />
<HIcon name="apple" color="blue" style="margin-right: 20px" />
<HIcon name="apple" color="red" style="margin-right: 20px" />
<template #collapseContent>

```html
<HIcon name="apple" style="margin-right: 20px" />
<HIcon name="apple" color="blue" style="margin-right: 20px" />
<HIcon name="apple" color="red" style="margin-right: 20px" />
```

</template>
</HCollapse>



<HCollapse title="尺寸样式" collapse-title="示例代码" style="width: 100%;">
<HIcon name="apple" style="margin-right: 20px" />
<HIcon name="apple" size="30px" style="margin-right: 20px" />
<HIcon name="apple" size="50px" style="margin-right: 20px" />
<template #collapseContent>

```html
<HIcon name="apple" style="margin-right: 20px" />
<HIcon name="apple" size="30px" style="margin-right: 20px" />
<HIcon name="apple" size="50px" style="margin-right: 20px" />
```

</template>
</HCollapse>


<HCollapse title="旋转样式" collapse-title="示例代码" style="width: 100%;">
<HIcon name="apple" isLoading style="margin-right: 20px" />
<HIcon name="file-pdf" isLoading style="margin-right: 20px" />
<template #collapseContent>

```html
<HIcon name="apple" isLoading style="margin-right: 20px" />
<HIcon name="file-pdf" isLoading style="margin-right: 20px" />
```

</template>
</HCollapse>


<hr>
<h3 class="h-3">Icon 集合（点击复制）</h3>

可按住 Ctrl+F 搜索图标

<div style="display: flex;flex-wrap: wrap;width: 100%;justify-content: center; align-items: center;margin: 20px 0">
<HIconCard v-for="item in [
  'adobe', 'alipay', 'aliwangwang', 'android-o', 'android', 'apple', 'appstore-o', 'appstore', 'area-chart', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'arrows-alt', 'asterisk', 'backward', 'baidu', 'bar-chart', 'barcode', 'bell', 'camera-o', 'caret-down', 'caret-left', 'caret-right', 'caret-up', 'check-square-o', 'check-square', 'check', 'chrome', 'circle-check-o', 'circle-check', 'circle-close-o', 'circle-close', 'circle-o', 'close-square-o', 'close-square', 'close', 'cloud-download-o', 'cloud-download', 'cloud-upload-o', 'cloud-upload', 'coffee', 'component', 'copy', 'copyright', 'css3', 'cut', 'd-arrow-left', 'd-arrow-right', 'd-caret', 'dashboard', 'date', 'delete', 'dingding', 'dislike-o', 'document', 'dot-chart', 'down-circle-o', 'down-circle', 'down-square-o', 'down-square', 'down', 'download', 'edit', 'enter', 'environment-o', 'environment', 'eye-o', 'eye', 'facebook', 'file-add', 'file-excel', 'file-jpg', 'file-pdf', 'file-text', 'file-unknown', 'filter', 'firefox', 'folder-add', 'folder-open', 'folder', 'forward', 'foursquare', 'frown-o', 'frown', 'github-o', 'github', 'global', 'heart-off', 'heart-on', 'home', 'html5', 'ie', 'inbox', 'information-o', 'information', 'laptop', 'left-circle-o', 'left-circle', 'left-square-o', 'left-square', 'left', 'like-o', 'link', 'linkedin', 'linux', 'loading', 'lock', 'login', 'logout', 'mail-o', 'mail', 'man', 'map', 'meh-o', 'meh', 'menu-fold', 'menu-unfold', 'menu', 'message', 'minus-circle-o', 'minus-circle', 'minus-square-o', 'minus-square', 'minus', 'mobile', 'more', 'notification', 'opera', 'paper-clip', 'pause-circle-o', 'pause-circle', 'pause', 'pay-circle-o', 'pay', 'picasa', 'picture', 'pie-chart', 'pinterest', 'play-circle-o', 'play-circle', 'plus-circle-o', 'plus-circle', 'plus-square-o', 'plus-square', 'plus', 'poweroff', 'printer', 'qq', 'qrcode', 'question-circle-o', 'question-circle', 'reddit', 'reload', 'right-circle-o', 'right-circle', 'right-square-o', 'right-square', 'right', 'rollback', 'safari', 'safety', 'save', 'search', 'setting-o', 'setting', 'share', 'shopping-cart', 'shrink', 'smile-o', 'smile', 'square-o', 'star-off', 'star-on', 'stop-o', 'stop', 'swap-left', 'swap-right', 'swap', 'table', 'tag-o', 'tag', 'tags-o', 'tags', 'taobao', 'time-o', 'time', 'twitter', 'uiw', 'unlock', 'up-circle-o', 'up-circle', 'up-square-o', 'up-square', 'up', 'upload', 'user-add', 'user-delete', 'user', 'usergroup-add', 'usergroup-delete', 'verification', 'verticle-left', 'verticle-right', 'video-camera', 'warning-o', 'warning', 'weibo', 'weixin', 'wifi', 'windows', 'woman', 'zoom-in', 'zoom-out']" :key="item" :name="item" size="24px" />
</div>