# 捉迷藏

[AcWing-379-捉迷藏](https://www.acwing.com/problem/content/381/)

## 分析

见《进阶指南》第`436`页。

## 实现

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 210, M = 40010;
struct edge {
    int to, next;
};
edge e[2 * M];
int idx, head[2 * N];
int n, m;
int g[N][N];
int ln, rn;
bool mark[2 * N];
int match[2 * N];

void add_edge (int u, int v) {
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
void floyd () {
    for (int k = 1; k <= n; ++ k)
        for (int i = 1; i <= n; ++ i)
            for (int j = 1; j <= n; ++ j)
                g[i][j] |= g[i][k] & g[k][j];
}
bool dfs (int cur) {
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to;
        if (mark[to] == true) continue;
        mark[to] = true;
        if (match[to] == 0 || dfs(match[to]) == true) {
            match[to] = cur;
            return true;
        }
    }
    return false;
}

int main () {
    memset(head, -1, sizeof(head));
    scanf("%d%d", &n, &m);
    for (int i = 1, u, v; i <= m; ++ i) {
        scanf("%d%d", &u, &v);
        g[u][v] = 1;
    }

    floyd();
    for (int i = 1; i <= n; ++ i) {
        for (int j = 1; j <= n; ++ j) {
            if (g[i][j] == 0) continue;
            add_edge(i, j + n);
            add_edge(j + n, i);
        }
    }
    ln = rn = n;
    int cnt = 0;
    for (int i = 1; i <= ln; ++ i) {
        memset(mark, 0, sizeof(mark));
        if (dfs(i) == true) ++ cnt;
    }
    printf("%d", n - cnt);
    return 0;
}
```

