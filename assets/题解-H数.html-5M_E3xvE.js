import{_ as p,r as t,o,c as e,a as n,b as s,d as c,e as l}from"./app-nQkb7BpC.js";const u="/algorithm-blog/img/0019.png",i={},r=n("h1",{id:"h数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#h数","aria-hidden":"true"},"#"),s(),n("code",null,"H"),s("数")],-1),k={href:"https://www.luogu.com.cn/problem/P1748",target:"_blank",rel:"noopener noreferrer"},d=l('<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2><p><img src="'+u+`" alt=""></p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">long</span> <span class="token keyword">long</span> LL<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">10010</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">;</span>
LL h<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> d <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    h<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10000</span><span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        h<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token function">min</span><span class="token punctuation">(</span>h<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> h<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">min</span><span class="token punctuation">(</span>h<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">,</span> h<span class="token punctuation">[</span>d<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>h<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> h<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">++</span> a<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>h<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> h<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">++</span> b<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>h<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> h<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">++</span> c<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>h<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> h<span class="token punctuation">[</span>d<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">++</span> d<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">)</span> cout <span class="token operator">&lt;&lt;</span> h<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(b,v){const a=t("ExternalLinkIcon");return o(),e("div",null,[r,n("p",null,[n("a",k,[s("洛谷-P1748-H数"),c(a)])]),d])}const _=p(i,[["render",m],["__file","题解-H数.html.vue"]]);export{_ as default};
