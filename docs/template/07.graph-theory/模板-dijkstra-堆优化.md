# 堆优化`dijkstra`

## 原理

见《进阶指南》第`350`页。

## 模板题

[洛谷-P4779-【模板】单源最短路径（标准版）](https://www.luogu.com.cn/problem/P4779)

```cpp
#include <iostream>
#include <cstring>
#include <queue>
using namespace std;

const int N = 100010, M = 200010;
struct edge {
    int to, next, w;
};
edge e[M];
int idx, head[N];
struct node {
    int idx, dis;
    bool operator < (const node& o) const {
        return dis > o.dis;
    }
};
int n, m, s;
int dis[N];
bool mark[N];

void add_edge (int u, int v, int w) {
    e[idx].w = w;
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
void dijkstra () {
    memset(dis, 0x3f, sizeof(dis));
    dis[s] = 0;
    priority_queue<node> pq;
    pq.push({ s, dis[s] });
    while (!pq.empty()) {
        int cur = pq.top().idx;
        pq.pop();
        if (mark[cur] == true) continue;
        mark[cur] = true;
        for (int i = head[cur]; i != -1; i = e[i].next) {
            int to = e[i].to, w = e[i].w;
            if (dis[cur] + w < dis[to]) {
                dis[to] = dis[cur] + w;
                pq.push({ to, dis[to] });
            }
        }
    }
}

int main () {
    memset(head, -1, sizeof(head));
    scanf("%d%d%d", &n, &m, &s);
    for (int i = 1, u, v, w; i <= m; ++ i) {
        scanf("%d%d%d", &u, &v, &w);
        add_edge(u, v, w);
    }
    dijkstra();
    for (int i = 1; i <= n; ++ i)
        printf("%d ", dis[i]);
    return 0;
}
```

