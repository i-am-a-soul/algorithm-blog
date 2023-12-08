# 优先队列`BFS`

## 原理

见《进阶指南》第`120`页。

## 模板题

[POJ-3635-Full Tank?](https://vjudge.net/problem/POJ-3635)

```cpp
#include <iostream>
#include <cstring>
#include <queue>
#define inf 0x3f3f3f3f
#define end EnD
using namespace std;

const int N = 1010, M = 10010, C = 110;
int n, m, q;
int p[N];
int c, beg, end;
int dis[N][C];
struct edge {
    int to, next, w;
};
edge e[2 * M];
int idx, head[N];
struct node {
    int city, fuel, cost;
    bool operator < (const node& o) const {
        return cost > o.cost;
    }
};

void add_edge (int u, int v, int w) {
    e[idx].w = w;
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
int pq_bfs () {
    memset(dis, 0x3f, sizeof(dis));
    priority_queue<node> pq;
    pq.push({ beg, 0, 0 });
    while (!pq.empty()) {
        node cur = pq.top();
        pq.pop();  
        if (dis[cur.city][cur.fuel] != inf) continue;
        dis[cur.city][cur.fuel] = cur.cost;
        if (cur.city == end) return cur.cost;
        if (cur.fuel < c)
            pq.push({ cur.city, cur.fuel + 1, cur.cost + p[cur.city] });
        for (int i = head[cur.city]; i != -1; i = e[i].next) {
            int to = e[i].to, w = e[i].w;
            if (w <= cur.fuel)
                pq.push({ to, cur.fuel - w, cur.cost });
        }
    }
    return inf;
}

int main () {
    memset(head, -1, sizeof(head));
    scanf("%d%d", &n, &m);
    for (int i = 0; i < n; ++ i) scanf("%d", &p[i]);
    for (int i = 1, u, v, w; i <= m; ++ i) {
        scanf("%d%d%d", &u, &v, &w);
        add_edge(u, v, w);
        add_edge(v, u, w);
    }
    scanf("%d", &q);

    while (q --) {
        scanf("%d%d%d", &c, &beg, &end);
        int res = pq_bfs();
        res == inf ? printf("impossible\n") : printf("%d\n", res);
    }
    return 0;
}
```

