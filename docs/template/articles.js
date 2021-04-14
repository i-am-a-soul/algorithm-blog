module.exports = {
    getTemplateSidebar: () => [{
        title: '基本算法',
        children: [
            '',
            '/template/01.primary-algorithm/模板-知识点.md',
            '/template/01.primary-algorithm/模板-位运算.md',
            '/template/01.primary-algorithm/模板-枚举.md',
            '/template/01.primary-algorithm/模板-二维前缀和.md',
            '/template/01.primary-algorithm/模板-整数二分.md',
            '/template/01.primary-algorithm/模板-浮点数二分.md',
            '/template/01.primary-algorithm/模板-浮点数三分.md',
            '/template/01.primary-algorithm/模板-计数排序.md',
            '/template/01.primary-algorithm/模板-归并排序.md',
            '/template/01.primary-algorithm/模板-快速排序.md',
            '/template/01.primary-algorithm/模板-离散化.md',
            '/template/01.primary-algorithm/模板-ST表.md',
			'/template/01.primary-algorithm/模板-贪心.md',
			'/template/01.primary-algorithm/模板-双指针.md',
			'/template/01.primary-algorithm/模板-高精度.md',
			'/template/01.primary-algorithm/模板-二维差分.md',
        ],
    }, {
        title: '初级数据结构',
        children: [
            '/template/02.primary-data-structure/模板-单调栈.md',
            '/template/02.primary-data-structure/模板-单调队列.md',
            '/template/02.primary-data-structure/模板-Hash-拉链法.md',
            '/template/02.primary-data-structure/模板-手写堆.md',
        ],
    }, {
        title: '搜索',
        children: [
			'/template/03.search/模板-树的重心.md',
			'/template/03.search/模板-剪枝.md',
			'/template/03.search/模板-迭代加深搜索.md',
			'/template/03.search/模板-双向DFS.md',
            '/template/03.search/模板-01BFS.md',
			'/template/03.search/模板-优先队列BFS.md',
            '/template/03.search/模板-双向BFS.md',
			'/template/03.search/模板-A_star.md',
			'/template/03.search/模板-IDA_star.md',
        ],
    }, {
        title: '数学',
        children: [
			'/template/04.mathematics/模板-数学知识点.md',
			'/template/04.mathematics/模板-快速幂.md',
			'/template/04.mathematics/模板-64位整数乘法.md',
			'/template/04.mathematics/模板-判质数-试除法.md',
			'/template/04.mathematics/模板-欧拉筛.md',
			'/template/04.mathematics/模板-分解质因数-试除法.md',
			'/template/04.mathematics/模板-求约数.md',
            '/template/04.mathematics/模板-求最大公约数-欧几里得算法.md',
            '/template/04.mathematics/模板-求欧拉函数.md',
			'/template/04.mathematics/模板-扩展欧几里得算法.md',
            '/template/04.mathematics/模板-乘法逆元.md',
            '/template/04.mathematics/模板-线性同余方程.md',
			'/template/04.mathematics/模板-中国剩余定理.md',
			'/template/04.mathematics/模板-BSGS.md',
            '/template/04.mathematics/模板-矩阵快速幂.md',
            '/template/04.mathematics/模板-高斯消元.md',
			'/template/04.mathematics/模板-线性基.md',
			'/template/04.mathematics/模板-求组合数.md',
			'/template/04.mathematics/模板-多重集的组合数.md',
            '/template/04.mathematics/模板-容斥原理.md',
            '/template/04.mathematics/模板-01分数规划.md',
			'/template/04.mathematics/模板-敌对搜索.md',
			'/template/04.mathematics/模板-Nim游戏.md',
        ],
    }, {
        title: '高级数据结构',
        children: [
            '/template/05.advanced-data-structure/模板-并查集.md',
            '/template/05.advanced-data-structure/模板-树状数组.md',
			'/template/05.advanced-data-structure/模板-线段树_单点修改_.md',
			'/template/05.advanced-data-structure/模板-线段树_区间修改_.md',
			'/template/05.advanced-data-structure/模板-可持久化线段树.md',
			'/template/05.advanced-data-structure/模板-权值线段树合并.md',
            '/template/05.advanced-data-structure/模板-可持久化权值线段树_主席树_.md',
			'/template/05.advanced-data-structure/模板-分块.md',
			'/template/05.advanced-data-structure/模板-莫队.md',
			'/template/05.advanced-data-structure/模板-点分治.md',
            '/template/05.advanced-data-structure/模板-Splay.md',
			'/template/05.advanced-data-structure/模板-cdq分治.md',
			'/template/05.advanced-data-structure/模板-整体分治.md',
			'/template/05.advanced-data-structure/模板-可持久化Trie.md',
			'/template/05.advanced-data-structure/模板-二维树状数组.md',
        ],
    }, {
        title: '动态规划',
        children: [
            '/template/06.dynamic-programming/模板-闫氏dp分析法.md',
            '/template/06.dynamic-programming/模板-最长上升子序列.md',
            '/template/06.dynamic-programming/模板-最长公共子序列.md',
            '/template/06.dynamic-programming/模板-01背包.md',
			'/template/06.dynamic-programming/模板-二维费用的背包.md',
			'/template/06.dynamic-programming/模板-01背包求方案数.md',
            '/template/06.dynamic-programming/模板-完全背包.md',
            '/template/06.dynamic-programming/模板-多重背包.md',
            '/template/06.dynamic-programming/模板-分组背包.md',
			'/template/06.dynamic-programming/模板-有树形依赖的背包.md',
            '/template/06.dynamic-programming/模板-区间DP.md',
			'/template/06.dynamic-programming/模板-树形DP.md',
        ],
    }, {
        title: '图论',
        children: [
			'/template/07.graph-theory/模板-链式前向星.md',
			'/template/07.graph-theory/模板-dijkstra-堆优化.md',
			'/template/07.graph-theory/模板-分层图最短路.md',
			'/template/07.graph-theory/模板-spfa.md',
            '/template/07.graph-theory/模板-floyd.md',
            '/template/07.graph-theory/模板-传递闭包.md',
            '/template/07.graph-theory/模板-kruskal.md',
            '/template/07.graph-theory/模板-prim-朴素.md',
			'/template/07.graph-theory/模板-树的直径.md',
            '/template/07.graph-theory/模板-最近公共祖先.md',
            '/template/07.graph-theory/模板-树上差分.md',
			'/template/07.graph-theory/模板-负环.md',
			'/template/07.graph-theory/模板-差分约束系统.md',
			'/template/07.graph-theory/模板-割边.md',
			'/template/07.graph-theory/模板-割点.md',
			'/template/07.graph-theory/模板-边双连通分量.md',
			'/template/07.graph-theory/模板-点双连通分量.md',
			'/template/07.graph-theory/模板-欧拉回路.md',
			'/template/07.graph-theory/模板-SCC缩点.md',
			'/template/07.graph-theory/模板-2-SAT.md',
            '/template/07.graph-theory/模板-染色法判定二分图.md',
            '/template/07.graph-theory/模板-匈牙利算法.md',
			'/template/07.graph-theory/模板-最大流.md',
			'/template/07.graph-theory/模板-费用流.md',
			'/template/07.graph-theory/模板-三元环计数.md',
        ],
    }, {
        title: '字符串',
        children: [
            '/template/08.string/模板-字符串Hash.md',
            '/template/08.string/模板-最小表示法.md',
            '/template/08.string/模板-KMP.md',
            '/template/08.string/模板-Trie.md',
			'/template/08.string/模板-manacher.md',
        ],
    }, {
        title: '综合技巧与实践',
        children: [
            '/template/09.tricks/模板-STL.md',
			'/template/09.tricks/模板-火车头.md',
			'/template/09.tricks/模板-snippet.md',
			'/template/09.tricks/模板-卡时.md',
        ],
    }],
}