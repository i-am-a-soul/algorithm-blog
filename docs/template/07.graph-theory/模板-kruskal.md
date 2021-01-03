# `kruskal`

## 原理

见《进阶指南》第`364`页。

## 模板题

[洛谷-P3366-【模板】最小生成树](https://www.luogu.com.cn/problem/P3366)

```cpp
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;

const int N = 5010, M = 200010;
struct edge {
    int u, v, w;
    bool operator < (const edge& o) const {
        return w < o.w;
    }
};
int n, m;
edge e[M];
int f[N];

int find (int x) {
    if (f[x] == x) return x;
    return f[x] = find(f[x]);
}
void merge (int x, int y) {
    f[find(x)] = find(y);
}
bool query (int x, int y) {
    return find(x) == find(y);
}
int kruskal () {
    for (int i = 1; i <= n; ++ i) f[i] = i;
    sort(e + 1, e + m + 1);
    int res = 0, cnt = 0;
    for (int i = 1; i <= m; ++ i) {
        int u = e[i].u, v = e[i].v, w = e[i].w;
        if (query(u, v) == false) {
            merge(u, v);
            ++ cnt;
            res += w;
        }
    }
    return (cnt < n - 1 ? -1 : res);
}

int main () {
    scanf("%d%d", &n, &m);
    for (int i = 1; i <= m; ++ i)
        scanf("%d%d%d", &e[i].u, &e[i].v, &e[i].w);
    
    int res = kruskal();
    if (res == -1) {
        printf("orz");
    } else {
        printf("%d", res);
    }
    return 0;
}
```
