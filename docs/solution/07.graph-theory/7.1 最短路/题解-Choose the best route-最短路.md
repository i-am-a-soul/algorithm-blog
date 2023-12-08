# `Choose the best route`

[HDOJ-2680-Choose the best route](https://vjudge.net/problem/HDU-2680)

## 分析

建虚拟源点。

## 实现

```cpp
#include <iostream>
#include <cstring>
#include <queue>
#define inf 0x3f3f3f3f
using namespace std;

const int N = 2010, M = 30010;
struct edge {
    int to, next, w;
};
edge e[M];
int idx, head[N];
int n, m, dst, w;
int dis[N];
bool mark[N];

void add_edge (int u, int v, int w) {
    e[idx].w = w;
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
void spfa () {
    memset(dis, 0x3f, sizeof(dis));

    queue<int> q;
    dis[0] = 0;
    q.push(0);
    mark[0] = true;
    while (!q.empty()) {
        int cur = q.front();
        q.pop();
        mark[cur] = false;
        for (int i = head[cur]; i != -1; i = e[i].next) {
            int to = e[i].to, w = e[i].w;
            if (dis[cur] + w < dis[to]) {
                dis[to] = dis[cur] + w;
                if (mark[to] == false) {
                    q.push(to);
                    mark[to] = true;
                }
            }
        }
    }
}

int main () {
    while (scanf("%d%d%d", &n, &m, &dst) != EOF) {
        idx = 0;
        memset(head, -1, sizeof(head));

        for (int i = 1, u, v, w; i <= m; ++ i) {
            scanf("%d%d%d", &u, &v, &w);
            add_edge(u, v, w);
        }
        scanf("%d", &w);
        for (int i = 1, start; i <= w; ++ i) {
            scanf("%d", &start);
            add_edge(0, start, 0);
        }

        spfa();
        printf("%d\n", dis[dst] == inf ? -1 : dis[dst]);
    }
    return 0;
}
```

