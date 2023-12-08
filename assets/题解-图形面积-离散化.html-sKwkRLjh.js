import{_ as p,r as t,o,c as e,a as n,b as s,d as c,e as l}from"./app-nQkb7BpC.js";const u={},i=n("h1",{id:"图形面积",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#图形面积","aria-hidden":"true"},"#"),s(" 图形面积")],-1),k={href:"https://vijos.org/p/1056",target:"_blank",rel:"noopener noreferrer"},r=l(`<h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;algorithm&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">y1</span> <span class="token expression">Y1</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">long</span> <span class="token keyword">long</span> LL<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">110</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>
LL x1<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> y1<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 左下角</span>
LL x2<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> y2<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 右上角</span>
<span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
LL x<span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">*</span> N<span class="token punctuation">]</span><span class="token punctuation">,</span> y<span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">*</span> N<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">discrete</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> x1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        x<span class="token punctuation">[</span>n <span class="token operator">+</span> i<span class="token punctuation">]</span> <span class="token operator">=</span> x2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">sort</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> x <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    a <span class="token operator">=</span> <span class="token function">unique</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> x <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        y<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> y1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        y<span class="token punctuation">[</span>n <span class="token operator">+</span> i<span class="token punctuation">]</span> <span class="token operator">=</span> y2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">sort</span><span class="token punctuation">(</span>y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    b <span class="token operator">=</span> <span class="token function">unique</span><span class="token punctuation">(</span>y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span>
        cin <span class="token operator">&gt;&gt;</span> x1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;&gt;</span> y1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;&gt;</span> x2<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;&gt;</span> y2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token function">discrete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    LL res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> a<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> b<span class="token punctuation">;</span> <span class="token operator">++</span> j<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> k <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>x1<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> x<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> x<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> x2<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
            <span class="token operator">&amp;&amp;</span> y1<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> y<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> y<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> y2<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> <span class="token punctuation">(</span>x<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> x<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>y<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> y<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    cout <span class="token operator">&lt;&lt;</span> res <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function d(v,m){const a=t("ExternalLinkIcon");return o(),e("div",null,[i,n("p",null,[n("a",k,[s("Vijos-P1056-图形面积"),c(a)])]),r])}const y=p(u,[["render",d],["__file","题解-图形面积-离散化.html.vue"]]);export{y as default};
