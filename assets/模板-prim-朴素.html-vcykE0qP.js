import{_ as p,r as t,o,c as e,a as n,b as c,d as i,e as s}from"./app-nQkb7BpC.js";const u={},l=s('<h1 id="朴素prim" tabindex="-1"><a class="header-anchor" href="#朴素prim" aria-hidden="true">#</a> 朴素<code>prim</code></h1><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>见《进阶指南》第<code>365</code>页。</p><h2 id="模板题" tabindex="-1"><a class="header-anchor" href="#模板题" aria-hidden="true">#</a> 模板题</h2>',4),k={href:"https://www.luogu.com.cn/problem/P3366",target:"_blank",rel:"noopener noreferrer"},r=s(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstring&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">inf</span> <span class="token expression"><span class="token number">0x3f3f3f3f</span></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">5010</span><span class="token punctuation">,</span> M <span class="token operator">=</span> <span class="token number">200010</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">edge</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> to<span class="token punctuation">,</span> next<span class="token punctuation">,</span> w<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
edge e<span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">*</span> M<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> idx<span class="token punctuation">,</span> head<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span> m<span class="token punctuation">;</span>
<span class="token keyword">int</span> dis<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">bool</span> mark<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">add_edge</span> <span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">,</span> <span class="token keyword">int</span> w<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>w <span class="token operator">=</span> w<span class="token punctuation">;</span>
    e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>to <span class="token operator">=</span> v<span class="token punctuation">;</span>
    e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
    head<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> idx <span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">prim</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">memset</span><span class="token punctuation">(</span>dis<span class="token punctuation">,</span> <span class="token number">0x3f</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>dis<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dis<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> k <span class="token operator">&lt;=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">++</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> cur <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>mark<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>cur <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> dis<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> dis<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                cur <span class="token operator">=</span> i<span class="token punctuation">;</span>
        mark<span class="token punctuation">[</span>cur<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> head<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">;</span> i <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> to <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>to<span class="token punctuation">,</span> w <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>w<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>mark<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
            dis<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>dis<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">,</span> w<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dis<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> inf<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        res <span class="token operator">+=</span> dis<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">memset</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">,</span> <span class="token operator">&amp;</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> u<span class="token punctuation">,</span> v<span class="token punctuation">,</span> w<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">,</span> <span class="token operator">&amp;</span>v<span class="token punctuation">,</span> <span class="token operator">&amp;</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">add_edge</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> v<span class="token punctuation">,</span> w<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">add_edge</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> u<span class="token punctuation">,</span> w<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token function">prim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;orz&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(v,m){const a=t("ExternalLinkIcon");return o(),e("div",null,[l,n("p",null,[n("a",k,[c("洛谷-P3366-【模板】最小生成树"),i(a)])]),r])}const w=p(u,[["render",d],["__file","模板-prim-朴素.html.vue"]]);export{w as default};
