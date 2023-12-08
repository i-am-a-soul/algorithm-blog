import{_ as p,r as t,o,c as e,a as n,b as s,d as c,e as u}from"./app-nQkb7BpC.js";const i={},l=n("h1",{id:"电力",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#电力","aria-hidden":"true"},"#"),s(" 电力")],-1),k={href:"https://vjudge.net/problem/LibreOJ-10103",target:"_blank",rel:"noopener noreferrer"},r=u(`<h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstring&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">10010</span><span class="token punctuation">,</span> M <span class="token operator">=</span> <span class="token number">15010</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">edge</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> to<span class="token punctuation">,</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
edge e<span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">*</span> M<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> idx<span class="token punctuation">,</span> head<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span> m<span class="token punctuation">,</span> root<span class="token punctuation">;</span>
<span class="token keyword">int</span> cnt<span class="token punctuation">,</span> dfn<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> low<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> res<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">add_edge</span> <span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>to <span class="token operator">=</span> v<span class="token punctuation">;</span>
    e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
    head<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> idx <span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">tarjan</span> <span class="token punctuation">(</span><span class="token keyword">int</span> cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    low<span class="token punctuation">[</span>cur<span class="token punctuation">]</span> <span class="token operator">=</span> dfn<span class="token punctuation">[</span>cur<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">++</span> cnt<span class="token punctuation">;</span>
    <span class="token keyword">int</span> tot <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> head<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">;</span> i <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> to <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>to<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dfn<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">tarjan</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
            low<span class="token punctuation">[</span>cur<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>low<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">,</span> low<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>low<span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> dfn<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">++</span> tot<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            low<span class="token punctuation">[</span>cur<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>low<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">,</span> dfn<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> root<span class="token punctuation">)</span> <span class="token operator">++</span> tot<span class="token punctuation">;</span>
    res <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> tot<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">,</span> <span class="token operator">&amp;</span>m<span class="token punctuation">)</span><span class="token punctuation">,</span> n <span class="token operator">||</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        idx <span class="token operator">=</span> cnt <span class="token operator">=</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token function">memset</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">memset</span><span class="token punctuation">(</span>dfn<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>dfn<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> u<span class="token punctuation">,</span> v<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">,</span> <span class="token operator">&amp;</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token operator">++</span> u<span class="token punctuation">,</span> <span class="token operator">++</span> v<span class="token punctuation">;</span>
            <span class="token function">add_edge</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">add_edge</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> u<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">int</span> cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>dfn<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                root <span class="token operator">=</span> i<span class="token punctuation">;</span>
                <span class="token operator">++</span> cnt<span class="token punctuation">;</span>
                <span class="token function">tarjan</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> res <span class="token operator">+</span> cnt <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function d(v,m){const a=t("ExternalLinkIcon");return o(),e("div",null,[l,n("p",null,[n("a",k,[s("LibreOJ-10103-电力"),c(a)])]),r])}const f=p(i,[["render",d],["__file","题解-电力-割点.html.vue"]]);export{f as default};
