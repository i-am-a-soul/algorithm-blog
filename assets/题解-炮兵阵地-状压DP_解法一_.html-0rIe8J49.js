import{_ as p,r as t,o,c as e,a as n,b as s,d as c,e as l}from"./app-nQkb7BpC.js";const u={},i=n("h1",{id:"炮兵阵地-解法一",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#炮兵阵地-解法一","aria-hidden":"true"},"#"),s(" 炮兵阵地（解法一）")],-1),k={href:"https://www.acwing.com/problem/content/294/",target:"_blank",rel:"noopener noreferrer"},r=l(`<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2><p>见《进阶指南》第<code>302</code>页。</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">110</span><span class="token punctuation">,</span> M <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span> m<span class="token punctuation">;</span>
<span class="token keyword">int</span> g<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> f<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> M<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> M<span class="token punctuation">]</span><span class="token punctuation">;</span>
vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> S<span class="token punctuation">;</span>
<span class="token keyword">int</span> cnt<span class="token punctuation">[</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> M<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">bool</span> <span class="token function">check</span> <span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token operator">&gt;&gt;</span> i <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token operator">&gt;&gt;</span> i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;&gt;</span> i <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n <span class="token operator">&gt;&gt;</span> m<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> <span class="token operator">++</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span> ch<span class="token punctuation">;</span>
            cin <span class="token operator">&gt;&gt;</span> ch<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">==</span> <span class="token char">&#39;H&#39;</span><span class="token punctuation">)</span> g<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> j<span class="token punctuation">;</span> <span class="token comment">// 山地</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> m<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            S<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            cnt<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">__builtin_popcount</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> S<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span> j<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> S<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span> k<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> l <span class="token operator">&lt;</span> S<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> S<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">,</span> b <span class="token operator">=</span> S<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> c <span class="token operator">=</span> S<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">&amp;</span> b<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;</span> c<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>b <span class="token operator">&amp;</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>g<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&amp;</span> c<span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
        f<span class="token punctuation">[</span>i <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>i <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span> f<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> cnt<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cout <span class="token operator">&lt;&lt;</span> f<span class="token punctuation">[</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function d(m,v){const a=t("ExternalLinkIcon");return o(),e("div",null,[i,n("p",null,[n("a",k,[s("AcWing-292-炮兵阵地"),c(a)])]),r])}const w=p(u,[["render",d],["__file","题解-炮兵阵地-状压DP_解法一_.html.vue"]]);export{w as default};
