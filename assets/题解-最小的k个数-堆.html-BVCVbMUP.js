import{_ as p,r as t,o,c as e,a as n,b as s,d as c,e as l}from"./app-nQkb7BpC.js";const i={},u=n("h1",{id:"最小的k个数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#最小的k个数","aria-hidden":"true"},"#"),s(" 最小的"),n("code",null,"k"),s("个数")],-1),k={href:"https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/",target:"_blank",rel:"noopener noreferrer"},r=l(`<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2><p><code>Top K</code>问题。</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">getLeastNumbers</span><span class="token punctuation">(</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        priority_queue<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> pq<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> pq<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> k<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> pq<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                pq<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                pq<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> res<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>pq<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>pq<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            pq<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function d(v,m){const a=t("ExternalLinkIcon");return o(),e("div",null,[u,n("p",null,[n("a",k,[s("LeetCode-剑指 Offer 40-最小的k个数"),c(a)])]),r])}const _=p(i,[["render",d],["__file","题解-最小的k个数-堆.html.vue"]]);export{_ as default};
