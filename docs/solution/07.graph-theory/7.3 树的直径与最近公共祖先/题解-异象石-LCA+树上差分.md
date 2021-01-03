# 异象石

[AcWing-355-异象石](https://www.acwing.com/problem/content/357/)

## 分析

见《进阶指南》第`384`页。

## 实现

```cpp
#include <iostream>
#include <cstring>
#include <set>
#define size SiZe
#define delete DeLeTe
using namespace std;

typedef long long LL;
const int N = 100010;
struct edge {
    int to, next, w;
};
edge e[2 * N];
int idx, head[N];
int n, m;
int depth[N], fa[N], size[N];
int heavy_son[N], top[N];
int cnt, dfn[N];
LL dis[N], res;
struct node {
    int idx, dfn;
    bool operator < (const node& o) const {
        return dfn < o.dfn;
    }
};
set<node> s;

void add_edge (int u, int v, int w) {
    e[idx].w = w;
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
void dfs1 (int cur, int father) {
    dfn[cur] = ++ cnt;
    size[cur] = 1;
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to, w = e[i].w;
        if (to == father) continue;
        depth[to] = depth[cur] + 1;
        dis[to] = dis[cur] + w;
        fa[to] = cur;
        dfs1(to, cur);
        size[cur] += size[to];
        if (size[to] > size[heavy_son[cur]])
            heavy_son[cur] = to;
    }
}
void dfs2 (int cur, int top_node) {
    top[cur] = top_node;
    if (heavy_son[cur]) dfs2(heavy_son[cur], top_node);
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to;
        if (to == fa[cur] || to == heavy_son[cur]) continue;
        dfs2(to, to);
    }
}
int lca (int x, int y) {
    while (top[x] != top[y]) {
        if (depth[top[x]] < depth[top[y]]) swap(x, y);
        x = fa[top[x]];
    }
    if (depth[x] > depth[y]) swap(x, y);
    return x;
}
LL path (int x, int y) {
    return dis[x] + dis[y] - 2 * dis[lca(x, y)];
}
void insert (int x) {
    auto ptr = s.insert({ x, dfn[x] }).first, temp = s.begin();
    auto l = (ptr == s.begin() ? -- s.end() : -- (temp = ptr));
    auto r = (ptr == -- s.end() ? s.begin() : ++ (temp = ptr));
    res -= path((*l).idx, (*r).idx);
    res += path((*l).idx, (*ptr).idx) + path((*ptr).idx, (*r).idx);
}
void delete (int x) {
    auto ptr = s.find({ x, dfn[x] }), temp = s.begin();
    auto l = (ptr == s.begin() ? -- s.end() : -- (temp = ptr));
    auto r = (ptr == -- s.end() ? s.begin() : ++ (temp = ptr));
    res += path((*l).idx, (*r).idx);
    res -= path((*l).idx, (*ptr).idx) + path((*ptr).idx, (*r).idx);
    s.erase(ptr);
}

int main () {
    memset(head, -1, sizeof(head));
    scanf("%d", &n);
    for (int i = 1, u, v, w; i <= n - 1; ++ i) {
        scanf("%d%d%d", &u, &v, &w);
        add_edge(u, v, w);
        add_edge(v, u, w);
    }
    scanf("%d", &m);

    dfs1(1, -1);
    dfs2(1, 1);
    while (m --) {
        char opt[5];
        scanf("%s", opt);
        if (opt[0] == '?') {
            printf("%lld\n", res / 2);
        } else {
            int x;
            scanf("%d", &x);
            opt[0] == '+' ? insert(x) : delete(x);
        }
    }
    return 0;
}
```

