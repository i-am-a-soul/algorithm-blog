import{_ as p,r as t,o,c as e,a as n,b as c,d as l,e as s}from"./app-nQkb7BpC.js";const u={},i=s('<h1 id="线段树-单点修改" tabindex="-1"><a class="header-anchor" href="#线段树-单点修改" aria-hidden="true">#</a> 线段树（单点修改）</h1><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>见《进阶指南》第<code>210</code>页。</p><h2 id="模板题" tabindex="-1"><a class="header-anchor" href="#模板题" aria-hidden="true">#</a> 模板题</h2>',4),k={href:"https://www.luogu.com.cn/problem/P3374",target:"_blank",rel:"noopener noreferrer"},r=s(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">ls</span> <span class="token expression">rt <span class="token operator">&lt;&lt;</span> <span class="token number">1</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">rs</span> <span class="token expression">rt <span class="token operator">&lt;&lt;</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">1</span></span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">long</span> <span class="token keyword">long</span> LL<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">500010</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">segmentTreeNode</span> <span class="token punctuation">{</span> <span class="token comment">// [l, r]</span>
    <span class="token keyword">int</span> l<span class="token punctuation">,</span> r<span class="token punctuation">;</span>
    LL data<span class="token punctuation">;</span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">l</span><span class="token expression"><span class="token punctuation">(</span>x<span class="token punctuation">)</span> t<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">.</span>l</span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">r</span><span class="token expression"><span class="token punctuation">(</span>x<span class="token punctuation">)</span> t<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">.</span>r</span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">data</span><span class="token expression"><span class="token punctuation">(</span>x<span class="token punctuation">)</span> t<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">.</span>data</span></span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
LL a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
segmentTreeNode t<span class="token punctuation">[</span>N <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">build</span> <span class="token punctuation">(</span><span class="token keyword">int</span> rt<span class="token punctuation">,</span> <span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">l</span><span class="token punctuation">(</span>rt<span class="token punctuation">)</span> <span class="token operator">=</span> l<span class="token punctuation">,</span> <span class="token function">r</span><span class="token punctuation">(</span>rt<span class="token punctuation">)</span> <span class="token operator">=</span> r<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">==</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span>rt<span class="token punctuation">)</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> mid <span class="token operator">=</span> l <span class="token operator">+</span> r <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token function">build</span><span class="token punctuation">(</span>ls<span class="token punctuation">,</span> l<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">build</span><span class="token punctuation">(</span>rs<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">data</span><span class="token punctuation">(</span>rt<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">data</span><span class="token punctuation">(</span>ls<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">data</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">modify</span> <span class="token punctuation">(</span><span class="token keyword">int</span> rt<span class="token punctuation">,</span> <span class="token keyword">int</span> idx<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// a[idx] += val</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">l</span><span class="token punctuation">(</span>rt<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">r</span><span class="token punctuation">(</span>rt<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span>rt<span class="token punctuation">)</span> <span class="token operator">+=</span> val<span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token function">l</span><span class="token punctuation">(</span>rt<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">r</span><span class="token punctuation">(</span>rt<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token function">modify</span><span class="token punctuation">(</span>idx <span class="token operator">&lt;=</span> mid <span class="token operator">?</span> ls <span class="token operator">:</span> rs<span class="token punctuation">,</span> idx<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">data</span><span class="token punctuation">(</span>rt<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">data</span><span class="token punctuation">(</span>ls<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">data</span><span class="token punctuation">(</span>rs<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
LL <span class="token function">query</span> <span class="token punctuation">(</span><span class="token keyword">int</span> rt<span class="token punctuation">,</span> <span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> <span class="token function">l</span><span class="token punctuation">(</span>rt<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">r</span><span class="token punctuation">(</span>rt<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> r<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">data</span><span class="token punctuation">(</span>rt<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token function">l</span><span class="token punctuation">(</span>rt<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">r</span><span class="token punctuation">(</span>rt<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
    LL res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> mid<span class="token punctuation">)</span> res <span class="token operator">+=</span> <span class="token function">query</span><span class="token punctuation">(</span>ls<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">&gt;=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> res <span class="token operator">+=</span> <span class="token function">query</span><span class="token punctuation">(</span>rs<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    
<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">,</span> m<span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">,</span> <span class="token operator">&amp;</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%lld&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">build</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> opt<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>opt<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>opt <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> idx<span class="token punctuation">,</span> val<span class="token punctuation">;</span>
            <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>idx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">modify</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> idx<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> l<span class="token punctuation">,</span> r<span class="token punctuation">;</span>
            <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>l<span class="token punctuation">,</span> <span class="token operator">&amp;</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%lld\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(v,m){const a=t("ExternalLinkIcon");return o(),e("div",null,[i,n("p",null,[n("a",k,[c("洛谷-P3374-【模板】树状数组 1"),l(a)])]),r])}const f=p(u,[["render",d],["__file","模板-线段树_单点修改_.html.vue"]]);export{f as default};
