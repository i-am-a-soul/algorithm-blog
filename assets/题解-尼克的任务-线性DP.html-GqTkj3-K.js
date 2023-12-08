import{_ as t,r as p,o as e,c as o,a as n,b as s,d as c,e as i}from"./app-nQkb7BpC.js";const l={},u=n("h1",{id:"尼克的任务",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#尼克的任务","aria-hidden":"true"},"#"),s(" 尼克的任务")],-1),r={href:"https://www.luogu.com.cn/problem/P1280",target:"_blank",rel:"noopener noreferrer"},k=i(`<h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">10010</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n<span class="token punctuation">,</span> k<span class="token punctuation">;</span>
<span class="token keyword">int</span> p<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> t<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 开始时间、持续时间</span>
<span class="token keyword">int</span> f<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// f[i] 记录从第 i 分钟到第 n 分钟空暇时间的最大值</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> n <span class="token operator">&gt;&gt;</span> k<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> k<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> cin <span class="token operator">&gt;&gt;</span> p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;&gt;</span> t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> ptr <span class="token operator">=</span> k<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> n<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">--</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 倒序</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">[</span>ptr<span class="token punctuation">]</span> <span class="token operator">!=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            f<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> f<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>p<span class="token punctuation">[</span>ptr<span class="token punctuation">]</span> <span class="token operator">==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                f<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> f<span class="token punctuation">[</span>p<span class="token punctuation">[</span>ptr<span class="token punctuation">]</span> <span class="token operator">+</span> t<span class="token punctuation">[</span>ptr<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token operator">--</span> ptr<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    cout <span class="token operator">&lt;&lt;</span> f<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function d(b,v){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",r,[s("洛谷-P1280-尼克的任务"),c(a)])]),k])}const _=t(l,[["render",d],["__file","题解-尼克的任务-线性DP.html.vue"]]);export{_ as default};
