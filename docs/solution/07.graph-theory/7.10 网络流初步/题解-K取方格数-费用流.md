# `K`取方格数

[AcWing-382-K取方格数](https://www.acwing.com/problem/content/384/)

## 分析

见《进阶指南》第`449`页。

## 实现

```cpp
#include <iostream>
#include <cstring>
#include <queue>
#define inf 0x3f3f3f3f
using namespace std;

const int N = 5052, M = 20010;
struct edge {
    int to, next, c, w; // w：单位费用
};
edge e[M];
int idx, head[N];
int n, k, s, t, max_flow, res;
int dis[N], flow[N], eid[N];
bool mark[N];

void add_edge (int u, int v, int c, int w) {
    e[idx].c = c;
    e[idx].w = w;
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;

    e[idx].c = 0;
    e[idx].w = -w;
    e[idx].to = u;
    e[idx].next = head[v];
    head[v] = idx ++;
}
int index_of (int i, int j, int k) { // 0：入点，1：出点
    return (i - 1) * n + j + k * n * n;
}
bool spfa () {
    memset(mark, 0, sizeof(mark));
    memset(dis, 0xcf, sizeof(dis));
    
    queue<int> q;
    dis[s] = 0;
    flow[s] = inf;
    q.push(s);
    mark[s] = true;
    while (!q.empty()) {
        int cur = q.front();
        q.pop();
        mark[cur] = false;
        for (int i = head[cur]; i != -1; i = e[i].next) {
            int to = e[i].to, c = e[i].c, w = e[i].w;
            if (c == 0) continue;
            if (dis[cur] + w > dis[to]) {
                dis[to] = dis[cur] + w;
                flow[to] = min(flow[cur], c);
                eid[to] = i;
                if (mark[to] == false) {
                    q.push(to);
                    mark[to] = true;
                }
            }
        }
    }
    return dis[t] != 0xcfcfcfcf;
}
void update () {
    int cur = t;
    while (cur != s) {
        int i = eid[cur];
        e[i].c -= flow[t];
        e[i ^ 1].c += flow[t];
        cur = e[i ^ 1].to;
    }
    max_flow += flow[t];
    res += dis[t] * flow[t];
}

int main () {
    memset(head, -1, sizeof(head));
    scanf("%d%d", &n, &k);
    for (int i = 1; i <= n; ++ i) {
        for (int j = 1; j <= n; ++ j) {
            int u = index_of(i, j, 0), v = index_of(i, j, 1), val;
            scanf("%d", &val);
            add_edge(u, v, 1, val);
            add_edge(u, v, k - 1, 0);
            if (i < n) {
                u = index_of(i, j, 1), v = index_of(i + 1, j, 0);
                add_edge(u, v, k, 0);
            }
            if (j < n) {
                u = index_of(i, j, 1), v = index_of(i, j + 1, 0);
                add_edge(u, v, k, 0);
            }
        }
    }

    s = 1, t = 2 * n * n;
    while (spfa() == true) update();
    printf("%d", res);
    return 0;
}
```
