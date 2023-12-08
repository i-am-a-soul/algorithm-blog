# 可达性统计

[AcWing-164-可达性统计](https://www.acwing.com/problem/content/166/)

## 分析

见《进阶指南》第`99`页。

## 实现

```cpp
#include <iostream>
#include <bitset>
#include <queue>
#include <cstring>
using namespace std;

const int N = 30010, M = 30010;
struct edge {
    int to, next;
};
edge e[M];
int idx, head[N], in_deg[N];
int n, m;
bitset<N> mark[N];

void add_edge (int u, int v) {
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
void topo_sort () {
    queue<int> q;
    for (int i = 1; i <= n; ++ i)
        if (in_deg[i] == 0)
            q.push(i);
    while (!q.empty()) {
        int cur = q.front();
        q.pop();
        for (int i = head[cur]; i != -1; i = e[i].next) {
            int to = e[i].to;
            mark[to] |= mark[cur];
            if (-- in_deg[to] == 0) q.push(to);
        }
    }
}
int main () {
    memset(head, -1, sizeof(head));
    scanf("%d%d", &n, &m);
    for (int i = 1, u, v; i <= m; ++ i) {
        scanf("%d%d", &u, &v);
        add_edge(v, u); // 反图
        ++ in_deg[u];
    }

    for (int i = 1; i <= n; ++ i) mark[i][i] = 1;
    topo_sort();
    for (int i = 1; i <= n; ++ i)
        printf("%d\n", mark[i].count());
    return 0;
}
```

