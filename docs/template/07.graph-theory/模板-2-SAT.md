# `2-SAT`

## 原理

见《进阶指南》第`419`页。

## 模板题

[洛谷-P4782-【模板】2-SAT 问题](https://www.luogu.com.cn/problem/P4782)

```cpp
#include <iostream>
#include <cstring>
#include <stack>
using namespace std;

const int N = 2000010;
struct edge {
    int to, next;
};
edge e[N];
int idx, head[N];
int n, m;
int cnt, dfn[N], low[N];
stack<int> s;
bool in_stack[N];
int tot, scc[N];

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
        } while (t != cur);
    }
}
bool Z_SAT () {
    for (int i = 1; i <= 2 * n; ++ i)
        if (dfn[i] == 0)
            tarjan(i);
    for (int i = 1; i <= n; ++ i)
        if (scc[i] == scc[i + n])
            return false;
    return true;
}

int main () {
    memset(head, -1, sizeof(head));
    scanf("%d%d", &n, &m);
    for (int k = 1, i, a, j, b; k <= m; ++ k) {
        scanf("%d%d%d%d", &i, &a, &j, &b);
        add_edge(i + (1 - a) * n, j + b * n);
        add_edge(j + (1 - b) * n, i + a * n);
    }

    if (Z_SAT() == true) {
        printf("POSSIBLE\n");
        for (int i = 1; i <= n; ++ i)
            printf("%d ", scc[i] > scc[i + n]);
    } else {
        printf("IMPOSSIBLE");
    }
    return 0;
}
```

