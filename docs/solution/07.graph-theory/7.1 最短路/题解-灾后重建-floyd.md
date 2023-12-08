# 灾后重建

[洛谷-P1119-灾后重建](https://www.luogu.com.cn/problem/P1119)

## 实现

```cpp
#include <iostream>
#include <cstring>
#define inf 0x3f3f3f3f
using namespace std;

const int N = 210;
int n, m, q;
int t[N], g[N][N];

void update (int ver) { // 中转点 ver
    for (int i = 1; i <= n; ++ i)
        for (int j = 1; j <= n; ++ j)
            g[i][j] = min(g[i][j], g[i][ver] + g[ver][j]);
}

int main () {
    cin >> n >> m;
    for (int i = 1; i <= n; ++ i) cin >> t[i];
    memset(g, 0x3f, sizeof(g));
    for (int i = 1; i <= n; ++ i) g[i][i] = 0;
    for (int i = 1, u, v, w; i <= m; ++ i) {
        cin >> u >> v >> w;
        ++ u, ++ v;
        g[u][v] = g[v][u] = min(g[u][v], w);
    }
    cin >> q;

    int ptr = 1;
    while (q --) {
        int x, y, k;
        cin >> x >> y >> k;
        ++ x, ++ y;

        while (ptr <= n && t[ptr] <= k)
            update(ptr ++);

        if (t[x] > k || t[y] > k || g[x][y] == inf) {
            cout << -1 << endl;
        } else {
            cout << g[x][y] << endl;
        }
    }
    return 0;
}
```