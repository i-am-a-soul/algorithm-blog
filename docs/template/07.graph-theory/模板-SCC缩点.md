# `SCC`缩点

## 原理

见《进阶指南》第`415`页。

强连通分量编号递减的序列一定满足拓扑序。

## 模板题

[洛谷-P3387-【模板】缩点](https://www.luogu.com.cn/problem/P3387)

```cpp
#include <iostream>
#include <cstring>
#include <queue>
#include <stack>
using namespace std;

const int N = 10010, M = 100010;
struct edge {
    int to, next;
};
edge e[M];
int idx, head[N], in_deg[N];
struct node {
    int u, v;
};
int n, w1[N], m;
node rec[M];
int cnt, dfn[N], low[N];
stack<int> s;
bool in_stack[N];
int tot, scc[N], w2[N];
int f[N];

void add_edge (int u, int v) {
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
void tarjan (int cur) {
    low[cur] = dfn[cur] = ++ cnt;
    s.push(cur);
    in_stack[cur] = true;
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to;
        if (dfn[to] == 0) {
            tarjan(to);
            low[cur] = min(low[cur], low[to]);
        } else if (in_stack[to] == true) {
            low[cur] = min(low[cur], dfn[to]);
        }
    }
    if (dfn[cur] == low[cur]) {
        ++ tot;
        int t;
        do {
            t = s.top();
            s.pop();
            in_stack[t] = false;
            scc[t] = tot;
            w2[tot] += w1[t];
        } while (t != cur);
    }
}
void topo_sort () {
    queue<int> q;
    for (int i = 1; i <= tot; ++ i) {
        if (in_deg[i] == 0) {
            q.push(i);
            f[i] = w2[i];
        }
    }
    while (!q.empty()) {
        int cur = q.front();
        q.pop();
        for (int i = head[cur]; i != -1; i = e[i].next) {
            int to = e[i].to;
            f[to] = max(f[to], f[cur] + w2[to]);
            if (-- in_deg[to] == 0) q.push(to);
        }
    }
}

int main () {
    memset(head, -1, sizeof(head));
    scanf("%d%d", &n, &m);
    for (int i = 1; i <= n; ++ i) scanf("%d", &w1[i]);
    for (int i = 1; i <= m; ++ i) {
        scanf("%d%d", &rec[i].u, &rec[i].v);
        add_edge(rec[i].u, rec[i].v);
    }

    for (int i = 1; i <= n; ++ i)
        if (dfn[i] == 0)
            tarjan(i);
    idx = 0;
    memset(head, -1, sizeof(head));
    for (int i = 1; i <= m; ++ i) {
        int u = rec[i].u, v = rec[i].v;
        if (scc[u] == scc[v]) continue;
        add_edge(scc[u], scc[v]);
        ++ in_deg[scc[v]];
    }
    topo_sort();
    int res = 0;
    for (int i = 1; i <= tot; ++ i)
        res = max(res, f[i]);
    printf("%d", res);
    return 0;
}
```

