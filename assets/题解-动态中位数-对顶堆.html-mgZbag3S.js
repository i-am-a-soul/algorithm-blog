import{_ as p,r as t,o,c as e,a as n,b as s,d as c,e as i}from"./app-nQkb7BpC.js";const u="/algorithm-blog/img/0030.png",l={},k=n("h1",{id:"动态中位数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#动态中位数","aria-hidden":"true"},"#"),s(" 动态中位数")],-1),d={href:"https://www.acwing.com/problem/content/108/",target:"_blank",rel:"noopener noreferrer"},r=i('<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2><p>见《进阶指南》第<code>36</code>页。</p><p>对顶堆：</p><p><img src="'+u+`" alt=""></p><p>将大顶堆中所有元素组成的集合记为<code>A</code>，小顶堆中所有元素组成的集合记为<code>B</code>。</p><p>大顶堆的堆顶元素是集合<code>A</code>中元素的最大值，记为<code>max</code>；小顶堆的堆顶元素是集合<code>B</code>中元素的最小值，记为<code>min</code>。</p><p>显然有<code>min ≥ max</code>，即集合<code>B</code>中的任意一个元素大于等于集合<code>A</code>中的任意一个元素。</p><p>将集合<code>A</code>与集合<code>B</code>的并集记为<code>U</code>。</p><p>若集合<code>A</code>的大小为<code>n</code>，集合<code>B</code>的大小为<code>m</code>，则集合<code>A</code>的元素为集合<code>U</code>的前<code>n</code>小，集合<code>B</code>的元素为集合<code>U</code>的前<code>m</code>大。</p><p>因为<code>min</code>是前<code>m</code>大中最小的，所以<code>min</code>是第<code>m</code>大；同理<code>max</code>是第<code>n</code>小。</p><p>如果大顶堆的大小比小顶堆大<code>1</code>，那么大顶堆的堆顶元素就是集合<code>U</code>的中位数。</p><p>如果小顶堆的大小比大顶堆大<code>1</code>，那么小顶堆的堆顶元素就是集合<code>U</code>的中位数。</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;queue&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> T<span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>T<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>T <span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        priority_queue<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> max_heap<span class="token punctuation">;</span>
        priority_queue<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> greater<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token operator">&gt;</span> min_heap<span class="token punctuation">;</span>

        <span class="token keyword">int</span> idx<span class="token punctuation">,</span> n<span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>idx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %d\\n&quot;</span><span class="token punctuation">,</span> idx<span class="token punctuation">,</span> n <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> val<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                min_heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>max_heap<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token operator">&amp;&amp;</span> max_heap<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> min_heap<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">int</span> a <span class="token operator">=</span> max_heap<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    max_heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">int</span> b <span class="token operator">=</span> min_heap<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    min_heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                    max_heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    min_heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> min_heap<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">++</span> cnt<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                max_heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cnt <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function m(v,b){const a=t("ExternalLinkIcon");return o(),e("div",null,[k,n("p",null,[n("a",d,[s("AcWing-106-动态中位数"),c(a)])]),r])}const _=p(l,[["render",m],["__file","题解-动态中位数-对顶堆.html.vue"]]);export{_ as default};
