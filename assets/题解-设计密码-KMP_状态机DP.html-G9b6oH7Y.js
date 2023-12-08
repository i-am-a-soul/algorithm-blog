import{_ as m,r as p,o as v,c as b,a as t,b as a,d as n,w as s,e as o}from"./app-nQkb7BpC.js";const _={},h=t("h1",{id:"设计密码",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#设计密码","aria-hidden":"true"},"#"),a(" 设计密码")],-1),f={href:"https://www.acwing.com/solution/content/46767/",target:"_blank",rel:"noopener noreferrer"},y=o('<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2><p>你现在需要设计一个密码<code>S</code>，<code>S</code>需要满足：</p><ul><li><code>S</code>的长度是<code>N</code>；</li><li><code>S</code>只包含小写英文字母；</li><li><code>S</code>不包含子串<code>T</code>；</li></ul><p>例如：<code>ab</code>和<code>abcde</code>是<code>abcde</code>的子串，<code>abd</code>不是<code>abcde</code>的子串。</p><p>请问共有多少种不同的密码满足要求？</p>',5),w={class:"katex"},x={class:"katex-mathml"},g=o('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.8141079999999999em;"></span><span class="strut bottom" style="height:0.897438em;vertical-align:-0.08333em;"></span><span class="base textstyle uncramped"><span class="mord mathrm">1</span><span class="mord"><span class="mord mathrm">0</span><span class="vlist"><span style="top:-0.363em;margin-right:0.05em;"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span><span class="reset-textstyle scriptstyle uncramped"><span class="mord mathrm">9</span></span></span><span class="baseline-fix"><span class="fontsize-ensurer reset-size5 size5"><span style="font-size:0em;">​</span></span>​</span></span></span><span class="mbin">+</span><span class="mord mathrm">7</span></span></span>',1),j=o(`<h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstring&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">next</span> <span class="token expression">NeXt</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">52</span><span class="token punctuation">,</span> M <span class="token operator">=</span> <span class="token number">1e9</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span> m<span class="token punctuation">;</span>
<span class="token keyword">char</span> str<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> next<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> f<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">get_next_array</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    next<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> str<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> j <span class="token operator">=</span> next<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> str<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">++</span> j<span class="token punctuation">;</span>
        next<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> j<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n <span class="token operator">&gt;&gt;</span> str <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

    m <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>str <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">get_next_array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    f<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> <span class="token operator">++</span> j<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">char</span> k <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span> k <span class="token operator">&lt;=</span> <span class="token char">&#39;z&#39;</span><span class="token punctuation">;</span> <span class="token operator">++</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> ptr <span class="token operator">=</span> j<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>ptr <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> k <span class="token operator">!=</span> str<span class="token punctuation">[</span>ptr <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> ptr <span class="token operator">=</span> next<span class="token punctuation">[</span>ptr<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> str<span class="token punctuation">[</span>ptr <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">++</span> ptr<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ptr <span class="token operator">&lt;</span> m<span class="token punctuation">)</span> f<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>ptr<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>f<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>ptr<span class="token punctuation">]</span> <span class="token operator">+</span> f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">%</span> M<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span>
        res <span class="token operator">=</span> <span class="token punctuation">(</span>res <span class="token operator">+</span> f<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">%</span> M<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> res <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function N(z,S){const c=p("ExternalLinkIcon"),e=p("mn"),l=p("msup"),i=p("mo"),u=p("mrow"),r=p("annotation"),k=p("semantics"),d=p("math");return v(),b("div",null,[h,t("p",null,[t("a",f,[a("AcWing-1052-设计密码"),n(c)])]),y,t("p",null,[a("由于答案会非常大，请输出答案模"),t("span",w,[t("span",x,[n(d,null,{default:s(()=>[n(k,null,{default:s(()=>[n(u,null,{default:s(()=>[n(e,null,{default:s(()=>[a("1")]),_:1}),n(l,null,{default:s(()=>[n(e,null,{default:s(()=>[a("0")]),_:1}),n(e,null,{default:s(()=>[a("9")]),_:1})]),_:1}),n(i,null,{default:s(()=>[a("+")]),_:1}),n(e,null,{default:s(()=>[a("7")]),_:1})]),_:1}),n(r,{encoding:"application/x-tex"},{default:s(()=>[a("10^9+7")]),_:1})]),_:1})]),_:1})]),g]),a("的余数。")]),j])}const P=m(_,[["render",N],["__file","题解-设计密码-KMP_状态机DP.html.vue"]]);export{P as default};
