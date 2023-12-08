import{_ as p,r as t,o,c as e,a as n,b as s,d as c,e as i}from"./app-nQkb7BpC.js";const l={},u=n("h1",{id:"计数排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#计数排序","aria-hidden":"true"},"#"),s(" 计数排序")],-1),k=n("h2",{id:"模板题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#模板题","aria-hidden":"true"},"#"),s(" 模板题")],-1),r={href:"https://www.luogu.com.cn/problem/P1271",target:"_blank",rel:"noopener noreferrer"},d=i(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">2000010</span><span class="token punctuation">,</span> M <span class="token operator">=</span> <span class="token number">1010</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> c<span class="token punctuation">[</span>M<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">,</span> m<span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>m<span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token operator">++</span> c<span class="token punctuation">[</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> c<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> c<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 此时，≤ a[i] 的元素有 c[a[i]] 个</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> n<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">--</span> i<span class="token punctuation">)</span> <span class="token comment">// 倒序，以稳定地排序</span>
        b<span class="token punctuation">[</span>c<span class="token punctuation">[</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(v,b){const a=t("ExternalLinkIcon");return o(),e("div",null,[u,k,n("p",null,[n("a",r,[s("洛谷-P1271-选举学生会"),c(a)])]),d])}const f=p(l,[["render",m],["__file","模板-计数排序.html.vue"]]);export{f as default};
