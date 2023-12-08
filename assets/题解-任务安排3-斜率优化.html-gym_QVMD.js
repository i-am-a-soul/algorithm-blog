import{_ as p,r as t,o,c as e,a as n,b as s,d as c,e as u}from"./app-nQkb7BpC.js";const l={},i=n("h1",{id:"任务安排3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#任务安排3","aria-hidden":"true"},"#"),s(" 任务安排"),n("code",null,"3")],-1),k={href:"https://www.acwing.com/problem/content/304/",target:"_blank",rel:"noopener noreferrer"},r=u(`<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2><p>见《进阶指南》第<code>326</code>页。</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstring&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">long</span> <span class="token keyword">long</span> LL<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">300010</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span> s<span class="token punctuation">;</span>
<span class="token keyword">int</span> h <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> t<span class="token punctuation">,</span> q<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
LL st<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> sc<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> f<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 数据爆 long long</span>

<span class="token keyword">int</span> <span class="token function">binary_search</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> l <span class="token operator">=</span> h<span class="token punctuation">,</span> r <span class="token operator">=</span> t<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> mid <span class="token operator">=</span> l <span class="token operator">+</span> r <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>f<span class="token punctuation">[</span>q<span class="token punctuation">[</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">-</span> f<span class="token punctuation">[</span>q<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> k <span class="token operator">*</span> <span class="token punctuation">(</span>sc<span class="token punctuation">[</span>q<span class="token punctuation">[</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">-</span> sc<span class="token punctuation">[</span>q<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            l <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            r <span class="token operator">=</span> mid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> q<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">,</span> <span class="token operator">&amp;</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> t<span class="token punctuation">,</span> c<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>t<span class="token punctuation">,</span> <span class="token operator">&amp;</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        st<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> st<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> t<span class="token punctuation">;</span>
        sc<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> sc<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> c<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">memset</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token number">0x3f</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    f<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    q<span class="token punctuation">[</span><span class="token operator">++</span> t<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> ptr <span class="token operator">=</span> <span class="token function">binary_search</span><span class="token punctuation">(</span>s <span class="token operator">+</span> st<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        f<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> f<span class="token punctuation">[</span>ptr<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token punctuation">(</span>s <span class="token operator">+</span> st<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">*</span> sc<span class="token punctuation">[</span>ptr<span class="token punctuation">]</span> <span class="token operator">+</span> st<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> sc<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> s <span class="token operator">*</span> sc<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>h <span class="token operator">&lt;</span> t
            <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>f<span class="token punctuation">[</span>q<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">-</span> f<span class="token punctuation">[</span>q<span class="token punctuation">[</span>t <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>sc<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> sc<span class="token punctuation">[</span>q<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token operator">&gt;=</span> <span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> f<span class="token punctuation">[</span>q<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>sc<span class="token punctuation">[</span>q<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">-</span> sc<span class="token punctuation">[</span>q<span class="token punctuation">[</span>t <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token operator">--</span> t<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        q<span class="token punctuation">[</span><span class="token operator">++</span> t<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%.0lf&quot;</span><span class="token punctuation">,</span> f<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function d(v,m){const a=t("ExternalLinkIcon");return o(),e("div",null,[i,n("p",null,[n("a",k,[s("AcWing-302-任务安排3"),c(a)])]),r])}const f=p(l,[["render",d],["__file","题解-任务安排3-斜率优化.html.vue"]]);export{f as default};
