# `The Unique MST`

[POJ-1679-The Unique MST](https://vjudge.net/problem/POJ-1679)

## 分析

判断[最小生成树的唯一性](https://oi-wiki.org/graph/mst/#_8)。

## 实现

```cpp {48}
#include <iostream>
#include <algorithm>
using namespace std;

const int N = 100010;
struct edge {
    int u, v, w;
    bool operator < (const edge& o) const {
        return w < o.w;
    }
};
int n, m;
edge a[N];
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

int main () {
    int T;
    scanf("%d", &T);
    while (T --) {
        scanf("%d%d", &n, &m);
        for (int i = 1; i <= m; ++ i)
            scanf("%d%d%d", &a[i].u, &a[i].v, &a[i].w);

        sort(a + 1, a + m + 1);
        for (int i = 1; i <= n; ++ i) f[i] = i;
        bool flag = true; // 最小生成树是否是唯一的
        int res = 0, cnt = 0; // kruskal
        int x = 0, y = 0; // 可以、实际
        int ptr = 0; // 右端点
        for (int i = 1; i <= m + 1; ++ i) {
            if (i > ptr) { // 边界或新权值
                // ----- 上一个权值 -----
                if (x != y) {
                    flag = false;
                    break;
                }
                if (i == m + 1) break;
                // ----- 当前的权值 -----
                x = y = 0;
                for (int j = i; j <= m + 1; ++ j) {
                    if (a[j].w != a[i].w) {
                        ptr = j - 1;
                        break;
                    }
                    if (query(a[j].u, a[j].v) == false) ++ x;
                }
            }
            if (query(a[i].u, a[i].v) == false && cnt < n - 1) {
                merge(a[i].u, a[i].v);
                ++ y;
                ++ cnt;
                res += a[i].w;
            }
        }

        if (flag == true) {
            printf("%d\n", res);
        } else {
            printf("Not Unique!\n");
        }
    }
    return 0;
}
```

