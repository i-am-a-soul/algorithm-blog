import{_ as r,r as a,o as d,c as v,a as n,b as s,d as p,w as t,e as o}from"./app-nQkb7BpC.js";const m={},b=n("h1",{id:"数列分块入门-8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#数列分块入门-8","aria-hidden":"true"},"#"),s(" 数列分块入门 "),n("code",null,"8")],-1),y={href:"https://vjudge.net/problem/LibreOJ-6284",target:"_blank",rel:"noopener noreferrer"},w=n("h2",{id:"分析",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分析","aria-hidden":"true"},"#"),s(" 分析")],-1),f={class:"katex"},_={class:"katex-mathml"},h=o('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.43056em;"></span><span class="strut bottom" style="height:0.43056em;vertical-align:0em;"></span><span class="base textstyle uncramped"><span class="mord mathit">c</span></span></span>',1),x=n("li",null,"区间染色",-1),g=o(`<h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cmath&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">100010</span><span class="token punctuation">,</span> T <span class="token operator">=</span> <span class="token number">320</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span> a<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> pos<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> L<span class="token punctuation">[</span>T<span class="token punctuation">]</span><span class="token punctuation">,</span> R<span class="token punctuation">[</span>T<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">bool</span> mark<span class="token punctuation">[</span>T<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> color<span class="token punctuation">[</span>T<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">initialize</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> t <span class="token operator">=</span> <span class="token function">sqrt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> t<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        L<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> R<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        R<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">*</span> t<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>R<span class="token punctuation">[</span>t<span class="token punctuation">]</span> <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">++</span> t<span class="token punctuation">;</span>
        L<span class="token punctuation">[</span>t<span class="token punctuation">]</span> <span class="token operator">=</span> R<span class="token punctuation">[</span>t <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        R<span class="token punctuation">[</span>t<span class="token punctuation">]</span> <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> t<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> L<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> R<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">++</span> j<span class="token punctuation">)</span>
            pos<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">update</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mark<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

    mark<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> L<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> R<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span>
        a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> color<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">modify</span> <span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// a[l ~ r] = val</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> pos<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">,</span> y <span class="token operator">=</span> pos<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">update</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> l<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> r<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> y <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            mark<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            color<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">update</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> l<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> R<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token function">update</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> L<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> r<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">query</span> <span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> pos<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">,</span> y <span class="token operator">=</span> pos<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">update</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> l<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> r<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> val<span class="token punctuation">)</span>
                <span class="token operator">++</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> y <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>mark<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res <span class="token operator">+=</span> <span class="token punctuation">(</span>color<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> val <span class="token operator">?</span> R<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> L<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> L<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> R<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">++</span> j<span class="token punctuation">)</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> val<span class="token punctuation">)</span>
                        <span class="token operator">++</span> res<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">update</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> l<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> R<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> val<span class="token punctuation">)</span>
                <span class="token operator">++</span> res<span class="token punctuation">;</span>
        <span class="token function">update</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> L<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> r<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> val<span class="token punctuation">)</span>
                <span class="token operator">++</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> cin <span class="token operator">&gt;&gt;</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> c<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cin <span class="token operator">&gt;&gt;</span> l <span class="token operator">&gt;&gt;</span> r <span class="token operator">&gt;&gt;</span> c<span class="token punctuation">;</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token function">query</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
        <span class="token function">modify</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function L(R,j){const e=a("ExternalLinkIcon"),c=a("mi"),l=a("mrow"),i=a("annotation"),u=a("semantics"),k=a("math");return d(),v("div",null,[b,n("p",null,[n("a",y,[s("LibreOJ-6284-数列分块入门 8"),p(e)])]),w,n("ul",null,[n("li",null,[s("查询区间内等于某个值"),n("span",f,[n("span",_,[p(k,null,{default:t(()=>[p(u,null,{default:t(()=>[p(l,null,{default:t(()=>[p(c,null,{default:t(()=>[s("c")]),_:1})]),_:1}),p(i,{encoding:"application/x-tex"},{default:t(()=>[s("c")]),_:1})]),_:1})]),_:1})]),h]),s("的元素个数")]),x]),g])}const T=r(m,[["render",L],["__file","题解-数列分块入门 8-分块.html.vue"]]);export{T as default};
