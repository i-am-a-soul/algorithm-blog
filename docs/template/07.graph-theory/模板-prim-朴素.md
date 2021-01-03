# 朴素`prim`

## 原理

见《进阶指南》第`365`页。

## 模板题

[洛谷-P3366-【模板】最小生成树](https://www.luogu.com.cn/problem/P3366)

```cpp
#include <iostream>
#include <cstring>
#define inf 0x3f3f3f3f
using namespace std;

const int N = 5010, M = 200010;
struct edge {
    int to, next, w;
};
edge e[2 * M];
int idx, head[N];
int n, m;
int dis[N];
bool mark[N];

void add_edge (int u, int v, int w) {
    e[idx].w = w;
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
int prim () {
    memset(dis, 0x3f, sizeof(dis));
    dis[1] = 0;
    for (int k = 1; k <= n - 1; ++ k) {
        int cur = -1;
        for (int i = 1; i <= n; ++ i)
            if (mark[i] == false && (cur == -1 || dis[i] < dis[cur]))
                cur = i;
        mark[cur] = true;

        for (int i = head[cur]; i != -1; i = e[i].next) {
            int to = e[i].to, w = e[i].w;
            if (mark[to] == true) continue;
            dis[to] = min(dis[to], w);
        }
    }

    int res = 0;
    for (int i = 1; i <= n; ++ i) {
        if (dis[i] == inf) return -1;
        res += dis[i];
    }
    return res;
}

int main () {
    memset(head, -1, sizeof(head));
    scanf("%d%d", &n, &m);
    for (int i = 1, u, v, w; i <= m; ++ i) {
        scanf("%d%d%d", &u, &v, &w);
        add_edge(u, v, w);
        add_edge(v, u, w);
    }

    int res = prim();
    if (res == -1) {
        printf("orz");
    } else {
        printf("%d", res);
    }
    return 0;
}
```
