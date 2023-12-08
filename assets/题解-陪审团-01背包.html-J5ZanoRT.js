import{_ as p,r as t,o,c as e,a as n,b as s,d as c,e as u}from"./app-nQkb7BpC.js";const l="/algorithm-blog/img/0011.jpg",i={},k=n("h1",{id:"陪审团",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#陪审团","aria-hidden":"true"},"#"),s(" 陪审团")],-1),r={href:"https://www.acwing.com/problem/content/282/",target:"_blank",rel:"noopener noreferrer"},d=u('<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2><p>见《进阶指南》第<code>278</code>页。</p><p><img src="'+l+`" alt=""></p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstring&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">210</span><span class="token punctuation">,</span> M <span class="token operator">=</span> <span class="token number">810</span><span class="token punctuation">,</span> offset <span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span> m<span class="token punctuation">;</span>
<span class="token keyword">int</span> p<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> d<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> f<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">[</span>M<span class="token punctuation">]</span><span class="token punctuation">,</span> res<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> T <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">,</span> <span class="token operator">&amp;</span>m<span class="token punctuation">)</span><span class="token punctuation">,</span> n <span class="token operator">||</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">memset</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0x3f</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        f<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>offset<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> <span class="token operator">++</span> j<span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> M<span class="token punctuation">;</span> <span class="token operator">++</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> f<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> val <span class="token operator">=</span> k <span class="token operator">-</span> <span class="token punctuation">(</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">&lt;=</span> val <span class="token operator">&amp;&amp;</span> val <span class="token operator">&lt;</span> M <span class="token operator">&amp;&amp;</span> j <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">)</span>
                f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span> f<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>val<span class="token punctuation">]</span> <span class="token operator">+</span> p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">int</span> val <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>f<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>offset <span class="token operator">-</span> val<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> f<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>offset <span class="token operator">+</span> val<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">++</span> val<span class="token punctuation">;</span>
        val <span class="token operator">=</span> f<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>offset <span class="token operator">-</span> val<span class="token punctuation">]</span> <span class="token operator">&gt;</span> f<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>offset <span class="token operator">+</span> val<span class="token punctuation">]</span> <span class="token operator">?</span> offset <span class="token operator">-</span> val <span class="token operator">:</span> offset <span class="token operator">+</span> val<span class="token punctuation">;</span>

        <span class="token keyword">int</span> i <span class="token operator">=</span> n<span class="token punctuation">,</span> j <span class="token operator">=</span> m<span class="token punctuation">,</span> k <span class="token operator">=</span> val<span class="token punctuation">,</span> idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">==</span> f<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token operator">--</span> i<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">[</span><span class="token operator">++</span> idx<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
                k <span class="token operator">-=</span> p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token operator">--</span> i<span class="token punctuation">;</span>
                <span class="token operator">--</span> j<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> sp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> sd <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> idx<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sp <span class="token operator">+=</span> p<span class="token punctuation">[</span>res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            sd <span class="token operator">+=</span> d<span class="token punctuation">[</span>res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Jury #%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">++</span> T<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Best jury has value %d for prosecution and value %d for defence:\\n&quot;</span><span class="token punctuation">,</span> sp<span class="token punctuation">,</span> sd<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> idx<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">--</span> i<span class="token punctuation">)</span> <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot; %d&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function b(v,m){const a=t("ExternalLinkIcon");return o(),e("div",null,[k,n("p",null,[n("a",r,[s("AcWing-280-陪审团"),c(a)])]),d])}const w=p(i,[["render",b],["__file","题解-陪审团-01背包.html.vue"]]);export{w as default};
