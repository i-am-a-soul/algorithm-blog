import{_ as n,o as s,c as a,e as p}from"./app-nQkb7BpC.js";const e={},t=p(`<h1 id="扩展欧几里得算法" tabindex="-1"><a class="header-anchor" href="#扩展欧几里得算法" aria-hidden="true">#</a> 扩展欧几里得算法</h1><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>见《进阶指南》第<code>150</code>页。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">exgcd</span> <span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&amp;</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&amp;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token function">exgcd</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> a <span class="token operator">%</span> b<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> copy_x <span class="token operator">=</span> x<span class="token punctuation">,</span> copy_y <span class="token operator">=</span> y<span class="token punctuation">;</span>
    x <span class="token operator">=</span> copy_y<span class="token punctuation">,</span> y <span class="token operator">=</span> copy_x <span class="token operator">-</span> copy_y <span class="token operator">*</span> <span class="token punctuation">(</span>a <span class="token operator">/</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[t];function c(i,l){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","模板-扩展欧几里得算法.html.vue"]]);export{u as default};
