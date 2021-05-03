# 树的中心

[AcWing-1073-树的中心](https://www.acwing.com/solution/content/13025/)

## 实现

```cpp
#include <iostream>
#include <cstring>
#define inf 0x3f3f3f3f
using namespace std;

const int N = 10010;
struct edge {
    int to, next, w;
};
edge e[2 * N];
int idx, head[N];
int n;
int d1[N], d2[N];
int s1[N], s2[N];
int u[N];

void add_edge (int u, int v, int w) {
    e[idx].w = w;
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
int dfs_down (int cur, int fa) {
    d1[cur] = d2[cur] = -inf;
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to, w = e[i].w;
        if (to == fa) continue;
        int d = dfs_down(to, cur) + w;
        if (d > d1[cur]) {
            d2[cur] = d1[cur], d1[cur] = d;
            s2[cur] = s1[cur], s1[cur] = to;
        } else if (d > d2[cur]) {
            d2[cur] = d;
            s2[cur] = to;
        }
    }
    if (d1[cur] == -inf) d1[cur] = d2[cur] = 0; // 叶子结点
    return d1[cur];
}
void dfs_up (int cur, int fa) {
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to, w = e[i].w;
        if (to == fa) continue;
        if (s1[cur] == to) {
            u[to] = max(u[cur], d2[cur]) + w;
        } else {
            u[to] = max(u[cur], d1[cur]) + w;
        }
        dfs_up(to, cur);
    }
}

int main () {
    memset(head, -1, sizeof(head));
    cin >> n;
    for (int i = 1, u, v, w; i <= n - 1; ++ i) {
        cin >> u >> v >> w;
        add_edge(u, v, w);
        add_edge(v, u, w);
    }

    dfs_down(1, -1);
    dfs_up(1, -1);
    int res = inf;
    for (int i = 1; i <= n; ++ i)
        res = min(res, max(d1[i], u[i]));
    cout << res << endl;
    return 0;
}
```

