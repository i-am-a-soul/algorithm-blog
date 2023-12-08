import{_ as p,r as t,o,c as e,a as n,b as c,d as u,e as s}from"./app-nQkb7BpC.js";const i={},l=s('<h1 id="点分治" tabindex="-1"><a class="header-anchor" href="#点分治" aria-hidden="true">#</a> 点分治</h1><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>见《进阶指南》第<code>230</code>页。</p><h2 id="模板题" tabindex="-1"><a class="header-anchor" href="#模板题" aria-hidden="true">#</a> 模板题</h2>',4),k={href:"https://www.acwing.com/problem/content/254/",target:"_blank",rel:"noopener noreferrer"},r=s(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstring&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;algorithm&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">size</span> <span class="token expression">SiZe</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">10010</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">edge</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> to<span class="token punctuation">,</span> next<span class="token punctuation">,</span> w<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
edge e<span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">*</span> N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> idx<span class="token punctuation">,</span> head<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> res<span class="token punctuation">;</span>
<span class="token keyword">int</span> size<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> min_size<span class="token punctuation">,</span> root<span class="token punctuation">;</span>
<span class="token keyword">bool</span> del<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> ptr<span class="token punctuation">,</span> a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> cnt<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> d<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">add_edge</span> <span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">,</span> <span class="token keyword">int</span> w<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>w <span class="token operator">=</span> w<span class="token punctuation">;</span>
    e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>to <span class="token operator">=</span> v<span class="token punctuation">;</span>
    e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
    head<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> idx <span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">find</span> <span class="token punctuation">(</span><span class="token keyword">int</span> cur<span class="token punctuation">,</span> <span class="token keyword">int</span> fa<span class="token punctuation">,</span> <span class="token keyword">int</span> tot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    size<span class="token punctuation">[</span>cur<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> max_size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> head<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">;</span> i <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> to <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>to<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>to <span class="token operator">==</span> fa <span class="token operator">||</span> del<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token function">find</span> <span class="token punctuation">(</span>to<span class="token punctuation">,</span> cur<span class="token punctuation">,</span> tot<span class="token punctuation">)</span><span class="token punctuation">;</span>
        size<span class="token punctuation">[</span>cur<span class="token punctuation">]</span> <span class="token operator">+=</span> size<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">;</span>
        max_size <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>max_size<span class="token punctuation">,</span> size<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    max_size <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>max_size<span class="token punctuation">,</span> tot <span class="token operator">-</span> size<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>max_size <span class="token operator">&lt;</span> min_size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        min_size <span class="token operator">=</span> max_size<span class="token punctuation">;</span>
        root <span class="token operator">=</span> cur<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">dfs</span> <span class="token punctuation">(</span><span class="token keyword">int</span> cur<span class="token punctuation">,</span> <span class="token keyword">int</span> fa<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> head<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">;</span> i <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> to <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>to<span class="token punctuation">,</span> w <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>w<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>to <span class="token operator">==</span> fa <span class="token operator">||</span> del<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span><span class="token operator">++</span> ptr<span class="token punctuation">]</span> <span class="token operator">=</span> to<span class="token punctuation">;</span>
        b<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token operator">++</span> cnt<span class="token punctuation">[</span>b<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        d<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">=</span> d<span class="token punctuation">[</span>cur<span class="token punctuation">]</span> <span class="token operator">+</span> w<span class="token punctuation">;</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">bool</span> <span class="token function">cmp</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">int</span><span class="token operator">&amp;</span> a<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">int</span><span class="token operator">&amp;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> d<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">&lt;</span> d<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">solve</span> <span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">,</span> <span class="token keyword">int</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 树的重心</span>
    min_size <span class="token operator">=</span> s<span class="token punctuation">;</span>
    <span class="token function">find</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>

    ptr <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    a<span class="token punctuation">[</span><span class="token operator">++</span> ptr<span class="token punctuation">]</span> <span class="token operator">=</span> root<span class="token punctuation">;</span>
    b<span class="token punctuation">[</span>root<span class="token punctuation">]</span> <span class="token operator">=</span> root<span class="token punctuation">;</span>
    <span class="token function">memset</span><span class="token punctuation">(</span>cnt<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>cnt<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">++</span> cnt<span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">memset</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> head<span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span> i <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> to <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>to<span class="token punctuation">,</span> w <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>w<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>del<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span><span class="token operator">++</span> ptr<span class="token punctuation">]</span> <span class="token operator">=</span> to<span class="token punctuation">;</span>
        b<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">=</span> to<span class="token punctuation">;</span>
        <span class="token operator">++</span> cnt<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">;</span>
        d<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">=</span> w<span class="token punctuation">;</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">sort</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> a <span class="token operator">+</span> ptr <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> cmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> j <span class="token operator">=</span> ptr<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> ptr<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">--</span> cnt<span class="token punctuation">[</span>b<span class="token punctuation">[</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> i <span class="token operator">&amp;&amp;</span> d<span class="token punctuation">[</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> d<span class="token punctuation">[</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token operator">--</span> cnt<span class="token punctuation">[</span>b<span class="token punctuation">[</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token operator">--</span> j<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 一定有 d[a[i]] + d[a[j]] ≤ k</span>
            res <span class="token operator">+=</span> j <span class="token operator">-</span> i <span class="token operator">-</span> cnt<span class="token punctuation">[</span>b<span class="token punctuation">[</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    del<span class="token punctuation">[</span>root<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 删除</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> head<span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span> i <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> to <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>to<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>del<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token function">solve</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> size<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ---------- 重置 ----------</span>
        idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token function">memset</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">memset</span><span class="token punctuation">(</span>del<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>del<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">,</span> <span class="token operator">&amp;</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> k <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>x<span class="token punctuation">,</span> <span class="token operator">&amp;</span>y<span class="token punctuation">,</span> <span class="token operator">&amp;</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">add_edge</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">add_edge</span><span class="token punctuation">(</span>y<span class="token punctuation">,</span> x<span class="token punctuation">,</span> z<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">solve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(v,m){const a=t("ExternalLinkIcon");return o(),e("div",null,[l,n("p",null,[n("a",k,[c("AcWing-252-树"),u(a)])]),r])}const w=p(i,[["render",d],["__file","模板-点分治.html.vue"]]);export{w as default};
