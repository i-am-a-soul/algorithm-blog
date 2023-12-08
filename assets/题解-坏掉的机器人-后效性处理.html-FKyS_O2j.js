import{_ as p,r as t,o,c as e,a as n,b as s,d as c,e as u}from"./app-nQkb7BpC.js";const l={},i=n("h1",{id:"坏掉的机器人",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#坏掉的机器人","aria-hidden":"true"},"#"),s(" 坏掉的机器人")],-1),k={href:"https://www.acwing.com/problem/content/292/",target:"_blank",rel:"noopener noreferrer"},r=u(`<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2><p>见《进阶指南》第<code>298</code>页。</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">1010</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span> m<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
<span class="token keyword">double</span> f<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">Gauss</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">double</span> b <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">/=</span> b<span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">/=</span> b<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">/=</span> b<span class="token punctuation">;</span>

        <span class="token keyword">double</span> c <span class="token operator">=</span> a<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> d<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> i<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> m <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token operator">++</span> j<span class="token punctuation">)</span>
            a<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>d<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">-=</span> c <span class="token operator">*</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>d<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> m<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">--</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        a<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-=</span> a<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-=</span> a<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">,</span> <span class="token operator">&amp;</span>m<span class="token punctuation">,</span> <span class="token operator">&amp;</span>x<span class="token punctuation">,</span> <span class="token operator">&amp;</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%.4lf&quot;</span><span class="token punctuation">,</span> <span class="token number">2.0</span> <span class="token operator">*</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> x<span class="token punctuation">;</span> <span class="token operator">--</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2.0</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1.0</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> f<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">/</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        a<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1.0</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>m<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2.0</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> f<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>m<span class="token punctuation">]</span> <span class="token operator">/</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">++</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1.0</span> <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">;</span>
            a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3.0</span> <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">;</span>
            a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1.0</span> <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">;</span>
            a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> f<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">/</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">Gauss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> <span class="token operator">++</span> j<span class="token punctuation">)</span>
            f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%.4lf&quot;</span><span class="token punctuation">,</span> f<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function d(m,b){const a=t("ExternalLinkIcon");return o(),e("div",null,[i,n("p",null,[n("a",k,[s("AcWing-290-坏掉的机器人"),c(a)])]),r])}const f=p(l,[["render",d],["__file","题解-坏掉的机器人-后效性处理.html.vue"]]);export{f as default};
