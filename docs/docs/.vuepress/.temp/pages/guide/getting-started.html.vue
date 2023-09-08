<template><div><h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1>
<h3 id="依赖环境" tabindex="-1"><a class="header-anchor" href="#依赖环境" aria-hidden="true">#</a> 依赖环境</h3>
<ul>
<li><a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue3<ExternalLinkIcon/></a></li>
<li>Node.js</li>
<li>Vite</li>
<li>@uiw/icons</li>
</ul>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<p>通过该教程引导您安装该组件UI库:</p>
<ul>
<li><strong>步骤 1:</strong> 新建目录或进入已有目录</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> project
<span class="token builtin class-name">cd</span> project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤 1:</strong> 初始化vue项目</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">npm</span> init vue@latest
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤 3:</strong> 下载Github链接中的 packages 文件夹</li>
<li><strong>步骤 4:</strong> 将 packages 文件夹放入项目根目录中</li>
<li><strong>步骤 5:</strong> 在项目src目录下main.ts中添加以下内容</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> HaloUI <span class="token keyword">from</span> <span class="token string">'../packages'</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>HaloUI<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤 6:</strong> 启动项目</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>步骤 7:</strong> 根据组件文档，使用对应组件或Hook函数即可</li>
<li><strong>步骤 8:</strong> 如果需要使用Icon图标，则需要额外安装</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @uiw/icons
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


