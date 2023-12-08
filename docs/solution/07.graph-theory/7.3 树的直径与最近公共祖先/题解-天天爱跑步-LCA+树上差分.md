# 天天爱跑步

[AcWing-354-天天爱跑步](https://www.acwing.com/problem/content/356/)

## 分析

见《进阶指南》第`382`页。

## 实现

```cpp
#include <iostream>
#include <cstring>
#include <vector>
using namespace std;

const int N = 300010;
struct edge {
    int to, next;
};
edge e[2 * N];
int idx, head[N];
int n, m;
int w[N];
int dep[N], fa[N], Size[N];
int heavy_son[N], top[N];
vector<int> a1[N], b1[N], a2[N], b2[N];
int c1[2 * N], c2[2 * N];
int res[N];

void add_edge (int u, int v) {
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
void dfs1 (int cur, int father) {
    Size[cur] = 1;
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to;
        if (to == father) continue;
        dep[to] = dep[cur] + 1;
        fa[to] = cur;
        dfs1(to, cur);
        Size[cur] += Size[to];
        if (Size[to] > Size[heavy_son[cur]])
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
        if (dep[top[x]] < dep[top[y]]) swap(x, y);
        x = fa[top[x]];
    }
    if (dep[x] > dep[y]) swap(x, y);
    return x;
}
void dfs3 (int cur, int father) {
    int v1 = c1[dep[cur] + w[cur]], v2 = c2[w[cur] - dep[cur] + n];
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to;
        if (to == father) continue;
        dfs3(to, cur);
    }
    for (int i = 0; i < a1[cur].size(); ++ i) ++ c1[a1[cur][i]];
    for (int i = 0; i < b1[cur].size(); ++ i) -- c1[b1[cur][i]];
    for (int i = 0; i < a2[cur].size(); ++ i) ++ c2[a2[cur][i] + n];
    for (int i = 0; i < b2[cur].size(); ++ i) -- c2[b2[cur][i] + n];
    res[cur] = c1[dep[cur] + w[cur]] - v1 + c2[w[cur] - dep[cur] + n] - v2;
}

int main () {
    memset(head, -1, sizeof(head));
    scanf("%d%d", &n, &m);
    for (int i = 1, u, v; i <= n - 1; ++ i) {
        scanf("%d%d", &u, &v);
        add_edge(u, v);
        add_edge(v, u);
    }
    for (int i = 1; i <= n; ++ i) scanf("%d", &w[i]);

    dfs1(1, -1);
    dfs2(1, 1);
    for (int i = 1, x, y; i <= m; ++ i) {
        scanf("%d%d", &x, &y);
        int z = lca(x, y);
        a1[x].push_back(dep[x]);
        b1[fa[z]].push_back(dep[x]);
        a2[y].push_back(dep[x] - 2 * dep[z]);
        b2[z].push_back(dep[x] - 2 * dep[z]);
    }
    dfs3(1, -1);
    for (int i = 1; i <= n; ++ i)
        printf("%d ", res[i]);
    return 0;
}
```

