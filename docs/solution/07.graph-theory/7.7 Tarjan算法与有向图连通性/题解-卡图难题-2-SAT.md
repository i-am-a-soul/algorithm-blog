# 卡图难题

[AcWing-370-卡图难题](https://www.acwing.com/problem/content/372/)

## 分析

见《进阶指南》第`420`页。

## 实现

```cpp
#include <iostream>
#include <cstring>
#include <stack>
using namespace std;

const int N = 2 * 1010, M = 4 * 1000010;
struct edge {
    int to, next;
};
edge e[M];
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
    for (int i = 1, a, b, c; i <= m; ++ i) {
        char opt[5];
        scanf("%d%d%d%s", &a, &b, &c, opt);
        if (opt[0] == 'A' && c == 0) {
            add_edge(a + n, b);
            add_edge(b + n, a);
        } else if (opt[0] == 'A' && c == 1) {
            add_edge(a, a + n);
            add_edge(b, b + n);
        } else if (opt[0] == 'O' && c == 0) {
            add_edge(a + n, a);
            add_edge(b + n, b);
        } else if (opt[0] == 'O' && c == 1) {
            add_edge(a, b + n);
            add_edge(b, a + n);
        } else if (c == 0) {
            add_edge(a, b);
            add_edge(b, a);
            add_edge(a + n, b + n);
            add_edge(b + n, a + n);
        } else {
            add_edge(a, b + n);
            add_edge(b, a + n);
            add_edge(a + n, b);
            add_edge(b + n, a);
        }
    }
    printf(Z_SAT() ? "YES" : "NO");
    return 0;
}
```

