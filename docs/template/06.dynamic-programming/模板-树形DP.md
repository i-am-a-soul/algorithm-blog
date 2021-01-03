# 树形`DP`

## 原理

见《进阶指南》第`289`页。

![](/img/0045.bmp)

$f[u][0] = \displaystyle\sum_{i=1}^k max(f[v_i][0],f[v_i][1])$。

![](/img/0046.bmp)

$f[u][1] = \displaystyle\sum_{i=1}^k f[v_i][0]$。

## 模板题

[AcWing-285-没有上司的舞会](https://www.acwing.com/problem/content/287/)

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 6010;
struct edge {
    int to, next;
};
edge e[N];
int idx, head[N];
int n, h[N], f[N][2];
bool mark[N];

void add_edge (int u, int v) {
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
void dfs (int cur) {
    f[cur][1] = h[cur];
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to;
        dfs(to);
        f[cur][0] += max(f[to][0], f[to][1]);
        f[cur][1] += f[to][0];
    }
}

int main () {
    memset(head, -1, sizeof(head));
    scanf("%d", &n);
    for (int i = 1; i <= n; ++ i) scanf("%d", &h[i]);
    for (int i = 1, u, v; i <= n - 1; ++ i) {
        scanf("%d%d", &u, &v);
        add_edge(v, u);
        mark[u] = true; // 有父结点
    }

    int root = 1;
    while (mark[root] == true) ++ root;
    dfs(root);
    printf("%d", max(f[root][0], f[root][1]));
    return 0;
}
```

