# 走廊泼水节

[AcWing-346-走廊泼水节](https://www.acwing.com/problem/content/348/)

## 分析

见《进阶指南》第`366`页。

## 实现

```cpp
#include <iostream>
#include <algorithm>
#define size SiZe
using namespace std;

typedef long long LL;
const int N = 6010;
struct edge {
    int u, v, w;
    bool operator < (const edge& o) const {
        return w < o.w;
    }
};
edge e[N];
int f[N], size[N];

int find (int x) {
    if (f[x] == x) return x;
    return f[x] = find(f[x]);
}
int merge (int x, int y) {
    int fx = find(x), fy = find(y);
    int res = size[fx] * size[fy] - 1;
    size[fy] += size[fx];
    f[fx] = fy;
    return res;
}
bool query (int x, int y) {
    return find(x) == find(y);
}

int main () {
    int T;
    cin >> T;
    while (T --) {
        int n;
        cin >> n;
        for (int i = 1; i <= n - 1; ++ i)
            cin >> e[i].u >> e[i].v >> e[i].w;
        
        for (int i = 1; i <= n; ++ i) {
            f[i] = i;
            size[i] = 1;
        }
        sort(e + 1, e + n - 1 + 1);
        LL res = 0;
        for (int i = 1; i <= n - 1; ++ i) {
            int u = e[i].u, v = e[i].v, w = e[i].w;
            if (query(u, v) == false)
                res += (LL)(w + 1) * merge(u, v);
        }
        cout << res << endl;
    }
    return 0;
}
```

