<template><div><h1 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> icon</h1>
<hr>
<h3 class="h-3">Props</h3>
<table>
<thead>
<tr>
<th>NAME</th>
<th>TYPE</th>
<th>VALUE</th>
<th>DEFAULT</th>
<th>TIPS</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>String</td>
<td>String</td>
<td>-</td>
<td>icon名称</td>
</tr>
<tr>
<td>color</td>
<td>String</td>
<td>String</td>
<td>inherit</td>
<td>颜色</td>
</tr>
<tr>
<td>size</td>
<td>String</td>
<td>String</td>
<td>1em</td>
<td>尺寸</td>
</tr>
<tr>
<td>isLoading</td>
<td>Boolean</td>
<td>true/false</td>
<td>false</td>
<td>是否加载中动画(旋转)</td>
</tr>
</tbody>
</table>
<hr>
<h3 class="h-3">演示及示例代码</h3>
<HCollapse title="示例icon" collapse-title="示例代码" style="width: 100%;">
<HIcon name="apple" style="margin-right: 20px" />
<HIcon name="baidu" style="margin-right: 20px"  />
<HIcon name="coffee" style="margin-right: 20px"  />
<template #collapseContent>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HIcon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>apple<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-right</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HIcon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>baidu<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-right</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span>  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HIcon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>coffee<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-right</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span>  <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</HCollapse>
<HCollapse title="颜色样式" collapse-title="示例代码" style="width: 100%;">
<HIcon name="apple" style="margin-right: 20px" />
<HIcon name="apple" color="blue" style="margin-right: 20px" />
<HIcon name="apple" color="red" style="margin-right: 20px" />
<template #collapseContent>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HIcon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>apple<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-right</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HIcon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>apple<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-right</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HIcon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>apple<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-right</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</HCollapse>
<HCollapse title="尺寸样式" collapse-title="示例代码" style="width: 100%;">
<HIcon name="apple" style="margin-right: 20px" />
<HIcon name="apple" size="30px" style="margin-right: 20px" />
<HIcon name="apple" size="50px" style="margin-right: 20px" />
<template #collapseContent>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HIcon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>apple<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-right</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HIcon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>apple<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>30px<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-right</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HIcon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>apple<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50px<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-right</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</HCollapse>
<HCollapse title="旋转样式" collapse-title="示例代码" style="width: 100%;">
<HIcon name="apple" isLoading style="margin-right: 20px" />
<HIcon name="file-pdf" isLoading style="margin-right: 20px" />
<template #collapseContent>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HIcon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>apple<span class="token punctuation">"</span></span> <span class="token attr-name">isLoading</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-right</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HIcon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file-pdf<span class="token punctuation">"</span></span> <span class="token attr-name">isLoading</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-right</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</HCollapse>
<hr>
<h3 class="h-3">Icon 集合（点击复制）</h3>
<p>可按住 Ctrl+F 搜索图标</p>
<div style="display: flex;flex-wrap: wrap;width: 100%;justify-content: center; align-items: center;margin: 20px 0">
<HIconCard v-for="item in [
  'adobe', 'alipay', 'aliwangwang', 'android-o', 'android', 'apple', 'appstore-o', 'appstore', 'area-chart', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'arrows-alt', 'asterisk', 'backward', 'baidu', 'bar-chart', 'barcode', 'bell', 'camera-o', 'caret-down', 'caret-left', 'caret-right', 'caret-up', 'check-square-o', 'check-square', 'check', 'chrome', 'circle-check-o', 'circle-check', 'circle-close-o', 'circle-close', 'circle-o', 'close-square-o', 'close-square', 'close', 'cloud-download-o', 'cloud-download', 'cloud-upload-o', 'cloud-upload', 'coffee', 'component', 'copy', 'copyright', 'css3', 'cut', 'd-arrow-left', 'd-arrow-right', 'd-caret', 'dashboard', 'date', 'delete', 'dingding', 'dislike-o', 'document', 'dot-chart', 'down-circle-o', 'down-circle', 'down-square-o', 'down-square', 'down', 'download', 'edit', 'enter', 'environment-o', 'environment', 'eye-o', 'eye', 'facebook', 'file-add', 'file-excel', 'file-jpg', 'file-pdf', 'file-text', 'file-unknown', 'filter', 'firefox', 'folder-add', 'folder-open', 'folder', 'forward', 'foursquare', 'frown-o', 'frown', 'github-o', 'github', 'global', 'heart-off', 'heart-on', 'home', 'html5', 'ie', 'inbox', 'information-o', 'information', 'laptop', 'left-circle-o', 'left-circle', 'left-square-o', 'left-square', 'left', 'like-o', 'link', 'linkedin', 'linux', 'loading', 'lock', 'login', 'logout', 'mail-o', 'mail', 'man', 'map', 'meh-o', 'meh', 'menu-fold', 'menu-unfold', 'menu', 'message', 'minus-circle-o', 'minus-circle', 'minus-square-o', 'minus-square', 'minus', 'mobile', 'more', 'notification', 'opera', 'paper-clip', 'pause-circle-o', 'pause-circle', 'pause', 'pay-circle-o', 'pay', 'picasa', 'picture', 'pie-chart', 'pinterest', 'play-circle-o', 'play-circle', 'plus-circle-o', 'plus-circle', 'plus-square-o', 'plus-square', 'plus', 'poweroff', 'printer', 'qq', 'qrcode', 'question-circle-o', 'question-circle', 'reddit', 'reload', 'right-circle-o', 'right-circle', 'right-square-o', 'right-square', 'right', 'rollback', 'safari', 'safety', 'save', 'search', 'setting-o', 'setting', 'share', 'shopping-cart', 'shrink', 'smile-o', 'smile', 'square-o', 'star-off', 'star-on', 'stop-o', 'stop', 'swap-left', 'swap-right', 'swap', 'table', 'tag-o', 'tag', 'tags-o', 'tags', 'taobao', 'time-o', 'time', 'twitter', 'uiw', 'unlock', 'up-circle-o', 'up-circle', 'up-square-o', 'up-square', 'up', 'upload', 'user-add', 'user-delete', 'user', 'usergroup-add', 'usergroup-delete', 'verification', 'verticle-left', 'verticle-right', 'video-camera', 'warning-o', 'warning', 'weibo', 'weixin', 'wifi', 'windows', 'woman', 'zoom-in', 'zoom-out']" :key="item" :name="item" size="24px" />
</div></div></template>



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