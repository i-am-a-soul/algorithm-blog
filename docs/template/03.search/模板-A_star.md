# `A*`

## 原理

见《进阶指南》第`124`页。

## 模板题

[AcWing-178-第K短路](https://www.acwing.com/problem/content/description/180/)

```cpp
#include <iostream>
#include <cstring>
#include <queue>
#define inf 0x3f3f3f3f
using namespace std;

const int N = 1010, M = 100010;
struct edge {
    int to, next, w;
};
edge e[M], rec[M];
int idx, head[N];
int f[N];
bool mark[N];
struct node {
    int idx, cost;
    bool operator < (const node& o) const {
        return cost + f[idx] > o.cost + f[o.idx];
    }
};

void add_edge (int u, int v, int w) {
    e[idx].w = w;
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
void spfa (int s) {
    memset(mark, 0, sizeof(mark));
    memset(f, 0x3f, sizeof(f));
    queue<int> q;

    f[s] = 0;
    q.push(s);
    mark[s] = true;
    while (!q.empty()) {
        int cur = q.front();
        q.pop();
        mark[cur] = false;
        for (int i = head[cur]; i != -1; i = e[i].next) {
            int to = e[i].to, w = e[i].w;
            if (f[to] > f[cur] + w) {
                f[to] = f[cur] + w;
                if (mark[to] == false) {
                    q.push(to);
                    mark[to] = true;
                }
            }
        }
    }
}
int A_star (int s, int t, int k) {
    if (s == t) ++ k;
    if (f[s] == inf) return -1;

    int cnt = 0;
    priority_queue<node> pq;
    pq.push({ s, 0 });
    while (!pq.empty()) {
        node cur = pq.top();
        pq.pop();
        if (cur.idx == t) {
            ++ cnt;
            if (cnt == k) return cur.cost;
        }
        for (int i = head[cur.idx]; i != -1; i = e[i].next) {
            int to = e[i].to, w = e[i].w;
            pq.push({ to, cur.cost + w });
        }
    }
    return -1;
}

int main () {
    memset(head, -1, sizeof(head));
    int n, m;
    scanf("%d%d", &n, &m);
    for (int i = 1; i <= m; ++ i)
        scanf("%d%d%d", &rec[i].to, &rec[i].next, &rec[i].w);
    int s, t, k;
    scanf("%d%d%d", &s, &t, &k);

    for (int i = 1; i <= m; ++ i)
        add_edge(rec[i].next, rec[i].to, rec[i].w);
    spfa(t);

    memset(head, -1, sizeof(head));
    idx = 0;
    for (int i = 1; i <= m; ++ i)
        add_edge(rec[i].to, rec[i].next, rec[i].w);
    printf("%d", A_star(s, t, k));
    return 0;
}
```

