import{_ as p,r as t,o,c,a as n,b as s,d as e,e as u}from"./app-nQkb7BpC.js";const i={},l=n("h1",{id:"积蓄程度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#积蓄程度","aria-hidden":"true"},"#"),s(" 积蓄程度")],-1),k={href:"https://www.acwing.com/problem/content/289/",target:"_blank",rel:"noopener noreferrer"},r=u(`<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2><p>见《进阶指南》第<code>292</code>页。</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstring&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">200010</span><span class="token punctuation">,</span> M <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> N<span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">edge</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> to<span class="token punctuation">,</span> next<span class="token punctuation">,</span> w<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
edge e<span class="token punctuation">[</span>M<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> idx<span class="token punctuation">,</span> head<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span> deg<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> f<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> g<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">add_edge</span> <span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">,</span> <span class="token keyword">int</span> w<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>w <span class="token operator">=</span> w<span class="token punctuation">;</span>
    e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>to <span class="token operator">=</span> v<span class="token punctuation">;</span>
    e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
    head<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> idx <span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">dfs1</span> <span class="token punctuation">(</span><span class="token keyword">int</span> cur<span class="token punctuation">,</span> <span class="token keyword">int</span> fa<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> head<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">;</span> i <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> to <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>to<span class="token punctuation">,</span> w <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>w<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>to <span class="token operator">==</span> fa<span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token function">dfs1</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>deg<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            f<span class="token punctuation">[</span>cur<span class="token punctuation">]</span> <span class="token operator">+=</span> w<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            f<span class="token punctuation">[</span>cur<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token function">min</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> f<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">dfs2</span> <span class="token punctuation">(</span><span class="token keyword">int</span> cur<span class="token punctuation">,</span> <span class="token keyword">int</span> fa<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> head<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">;</span> i <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> to <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>to<span class="token punctuation">,</span> w <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>w<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>to <span class="token operator">==</span> fa<span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>deg<span class="token punctuation">[</span>cur<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            g<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">=</span> f<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">+</span> w<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            g<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">=</span> f<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token function">min</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> g<span class="token punctuation">[</span>cur<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token function">min</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> f<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">dfs2</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> T<span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>T<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>T <span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ---------- 重置 ----------</span>
        idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token function">memset</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">memset</span><span class="token punctuation">(</span>deg<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>deg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">memset</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> u<span class="token punctuation">,</span> v<span class="token punctuation">,</span> w<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">,</span> <span class="token operator">&amp;</span>v<span class="token punctuation">,</span> <span class="token operator">&amp;</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">add_edge</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> v<span class="token punctuation">,</span> w<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">add_edge</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> u<span class="token punctuation">,</span> w<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token operator">++</span> deg<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token operator">++</span> deg<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">dfs1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        g<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> f<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token function">dfs2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span>
            res <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> g<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function d(v,m){const a=t("ExternalLinkIcon");return o(),c("div",null,[l,n("p",null,[n("a",k,[s("AcWing-287-积蓄程度"),e(a)])]),r])}const f=p(i,[["render",d],["__file","题解-积蓄程度-换根法.html.vue"]]);export{f as default};
