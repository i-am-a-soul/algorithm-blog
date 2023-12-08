# 树`Hash`

## 原理

[Hash公式](https://oi-wiki.org/graph/tree-hash/#_4)。

## 模板题

[洛谷-P5043-【模板】树同构](https://www.luogu.com.cn/problem/P5043)

```cpp
#include <iostream>
#include <cstring>
#include <algorithm>
#define size SiZe
using namespace std;

typedef unsigned long long ULL;
const int N = 52;
struct edge {
    int to, next;
};
edge e[2 * N];
int idx, head[N];
int n, m;
ULL h[N][N]; // h[i][j] 记录第 i 棵树以结点 j 为根结点时的哈希值
int size[N];

void add_edge (int u, int v) {
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
ULL dfs (int cur, int fa) {
    ULL res = 0;
    size[cur] = 1;
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to;
        if (to == fa) continue;
        ULL val = dfs(to, cur);
        res ^= 131 * val + size[to];
        size[cur] += size[to];
    }
    if (size[cur] == 1) res = 1; // 叶子结点
    return res;
}
bool check (int x, int y) {
    for (int i = 1; i <= n; ++ i)
        if (h[x][i] != h[y][i])
            return false;
    return true;
}

int main () {
    cin >> m;
    for (int i = 1; i <= m; ++ i) {
        idx = 0;
        memset(head, -1, sizeof(head));

        cin >> n;
        for (int j = 1, fa; j <= n; ++ j) {
            cin >> fa;
            if (fa == 0) continue;
            add_edge(fa, j);
            add_edge(j, fa);
        }

        for (int j = 1; j <= n; ++ j)
            h[i][j] = dfs(j, -1);

        sort(h[i] + 1, h[i] + n + 1);
        for (int j = 1; j <= i; ++ j) {
            if (check(j, i) == true) {
                cout << j << endl;
                break;
            }
        }
    }
    return 0;
}
```

