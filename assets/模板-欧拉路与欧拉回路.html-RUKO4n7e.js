import{_ as p,r as t,o,c as e,a as n,b as c,d as i,e as s}from"./app-nQkb7BpC.js";const u={},l=s('<h1 id="欧拉路与欧拉回路" tabindex="-1"><a class="header-anchor" href="#欧拉路与欧拉回路" aria-hidden="true">#</a> 欧拉路与欧拉回路</h1><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>见《进阶指南》第<code>409</code>页。</p><h3 id="边连通的无向图" tabindex="-1"><a class="header-anchor" href="#边连通的无向图" aria-hidden="true">#</a> 边连通的无向图</h3><p>存在欧拉路的充要条件：度为奇数的顶点有<code>0</code>个或<code>2</code>个。</p><p>存在欧拉回路的充要条件：度为奇数的顶点有<code>0</code>个。</p><h3 id="边连通的有向图" tabindex="-1"><a class="header-anchor" href="#边连通的有向图" aria-hidden="true">#</a> 边连通的有向图</h3><p>存在欧拉路的充要条件：要么所有顶点的出度等于入度，要么除了起点的出度<code>=</code>入度<code>+ 1</code>，终点的入度<code>=</code>出度<code>+ 1</code>外，其他顶点的出度等于入度。</p><p>存在欧拉回路的充要条件：所有顶点的出度等于入度。</p><h2 id="模板题" tabindex="-1"><a class="header-anchor" href="#模板题" aria-hidden="true">#</a> 模板题</h2>',10),k={href:"https://vjudge.net/problem/LibreOJ-10105",target:"_blank",rel:"noopener noreferrer"},r=s(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstring&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token keyword">int</span> N <span class="token operator">=</span> <span class="token number">100010</span><span class="token punctuation">,</span> M <span class="token operator">=</span> <span class="token number">200010</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">edge</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> to<span class="token punctuation">,</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
edge e<span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">*</span> M<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> idx<span class="token punctuation">,</span> head<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> in_deg<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">,</span> out_deg<span class="token punctuation">[</span>N<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> t<span class="token punctuation">,</span> n<span class="token punctuation">,</span> m<span class="token punctuation">;</span>
<span class="token keyword">bool</span> mark<span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">*</span> M<span class="token punctuation">]</span><span class="token punctuation">;</span>
vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> res<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">add_edge</span> <span class="token punctuation">(</span><span class="token keyword">int</span> u<span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>to <span class="token operator">=</span> v<span class="token punctuation">;</span>
    e<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
    head<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> idx <span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">dfs</span> <span class="token punctuation">(</span><span class="token keyword">int</span> cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token operator">&amp;</span> i <span class="token operator">=</span> head<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>mark<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        mark<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> mark<span class="token punctuation">[</span>i <span class="token operator">^</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> eid<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            eid <span class="token operator">=</span> i <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> eid <span class="token operator">=</span> <span class="token operator">-</span>eid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            eid <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">int</span> to <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>to<span class="token punctuation">;</span>
        i <span class="token operator">=</span> e<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>eid<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">memset</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>t<span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">,</span> <span class="token operator">&amp;</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> u<span class="token punctuation">,</span> v<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">,</span> <span class="token operator">&amp;</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">add_edge</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">add_edge</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> u<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token operator">++</span> in_deg<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">++</span> out_deg<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>in_deg<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> out_deg<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span>
            <span class="token operator">||</span> t <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> in_deg<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> out_deg<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;NO&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;NO&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;YES\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> i <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">rbegin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">!=</span> res<span class="token punctuation">.</span><span class="token function">rend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span> i<span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(v,m){const a=t("ExternalLinkIcon");return o(),e("div",null,[l,n("p",null,[n("a",k,[c("LibreOJ-10105-欧拉回路"),i(a)])]),r])}const f=p(u,[["render",d],["__file","模板-欧拉路与欧拉回路.html.vue"]]);export{f as default};
