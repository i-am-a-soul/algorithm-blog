import{_ as p,r as t,o,c as e,a as n,b as s,d as c,e as l}from"./app-nQkb7BpC.js";const u={},i=n("h1",{id:"直方图中最大的矩形",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#直方图中最大的矩形","aria-hidden":"true"},"#"),s(" 直方图中最大的矩形")],-1),k={href:"https://www.acwing.com/problem/content/description/133/",target:"_blank",rel:"noopener noreferrer"},r=l(`<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2><p>见《进阶指南》第<code>53</code>页。</p><p>栈内记录的是<strong>元素的下标</strong>。</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stack&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;algorithm&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">long</span> <span class="token keyword">long</span> LL<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">100010</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span> h<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> l<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> r<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
stack<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> s<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">solve</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 左边界</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>s<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> s<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> cur <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>s<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> h<span class="token punctuation">[</span>s<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> h<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">)</span> s<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>s<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            l<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            l<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        s<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 右边界</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>s<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> s<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> n<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">--</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> cur <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>s<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> h<span class="token punctuation">[</span>s<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> h<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">)</span> s<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>s<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            r<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            r<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> n<span class="token punctuation">;</span>
        s<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cin <span class="token operator">&gt;&gt;</span> n <span class="token operator">&amp;&amp;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>h<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">solve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        LL res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span>
            res <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token punctuation">(</span>LL<span class="token punctuation">)</span>h<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">(</span>r<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> l<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cout <span class="token operator">&lt;&lt;</span> res <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function d(v,m){const a=t("ExternalLinkIcon");return o(),e("div",null,[i,n("p",null,[n("a",k,[s("AcWing-131-直方图中最大的矩形"),c(a)])]),r])}const h=p(u,[["render",d],["__file","题解-直方图中最大的矩形-单调栈.html.vue"]]);export{h as default};
