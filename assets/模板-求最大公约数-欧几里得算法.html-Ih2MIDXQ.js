import{_ as a,o as n,c as s,e}from"./app-nQkb7BpC.js";const t={},c=e(`<h1 id="求最大公约数-欧几里得算法" tabindex="-1"><a class="header-anchor" href="#求最大公约数-欧几里得算法" aria-hidden="true">#</a> 求最大公约数（欧几里得算法）</h1><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>见《进阶指南》第<code>143</code>页。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">gcd</span> <span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> b <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> a <span class="token operator">:</span> <span class="token function">gcd</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> a <span class="token operator">%</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[c];function p(i,r){return n(),s("div",null,o)}const l=a(t,[["render",p],["__file","模板-求最大公约数-欧几里得算法.html.vue"]]);export{l as default};
