import{_ as p,r as t,o,c as e,a as n,b as s,d as c,e as l}from"./app-nQkb7BpC.js";const i={},u=n("h1",{id:"防晒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#防晒","aria-hidden":"true"},"#"),s(" 防晒")],-1),r={href:"https://www.acwing.com/problem/content/112/",target:"_blank",rel:"noopener noreferrer"},k=l(`<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2><p>见《进阶指南》第<code>42</code>页。</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;algorithm&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">2510</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">Cow</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> min_spf<span class="token punctuation">,</span> max_spf<span class="token punctuation">;</span>
    <span class="token keyword">bool</span> <span class="token keyword">operator</span> <span class="token operator">&lt;</span> <span class="token punctuation">(</span><span class="token keyword">const</span> Cow<span class="token operator">&amp;</span> o<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>min_spf <span class="token operator">==</span> o<span class="token punctuation">.</span>min_spf<span class="token punctuation">)</span>
            <span class="token keyword">return</span> max_spf <span class="token operator">&gt;</span> o<span class="token punctuation">.</span>max_spf<span class="token punctuation">;</span>
        <span class="token keyword">return</span> min_spf <span class="token operator">&gt;</span> o<span class="token punctuation">.</span>min_spf<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">Cream</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> spf<span class="token punctuation">,</span> total<span class="token punctuation">;</span>
    <span class="token keyword">bool</span> <span class="token keyword">operator</span> <span class="token operator">&lt;</span> <span class="token punctuation">(</span><span class="token keyword">const</span> Cream<span class="token operator">&amp;</span> o<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> spf <span class="token operator">&gt;</span> o<span class="token punctuation">.</span>spf<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> C<span class="token punctuation">,</span> L<span class="token punctuation">;</span>
Cow cow<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
Cream cream<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>C<span class="token punctuation">,</span> <span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> C<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>cow<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>min_spf<span class="token punctuation">,</span> <span class="token operator">&amp;</span>cow<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>max_spf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> L<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>cream<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>spf<span class="token punctuation">,</span> <span class="token operator">&amp;</span>cream<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">sort</span><span class="token punctuation">(</span>cow <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> cow <span class="token operator">+</span> C <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">sort</span><span class="token punctuation">(</span>cream <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> cream <span class="token operator">+</span> L <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> C<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> min_spf <span class="token operator">=</span> cow<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>min_spf<span class="token punctuation">,</span> max_spf <span class="token operator">=</span> cow<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>max_spf<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> L<span class="token punctuation">;</span> <span class="token operator">++</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> spf <span class="token operator">=</span> cream<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>spf<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>min_spf <span class="token operator">&lt;=</span> spf <span class="token operator">&amp;&amp;</span> spf <span class="token operator">&lt;=</span> max_spf
                <span class="token operator">&amp;&amp;</span> cream<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>total <span class="token operator">&gt;</span> <span class="token number">0</span>
            <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token operator">++</span> res<span class="token punctuation">;</span>
                <span class="token operator">--</span> cream<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>total<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function d(m,v){const a=t("ExternalLinkIcon");return o(),e("div",null,[u,n("p",null,[n("a",r,[s("AcWing-110-防晒"),c(a)])]),k])}const f=p(i,[["render",d],["__file","题解-防晒-贪心.html.vue"]]);export{f as default};
