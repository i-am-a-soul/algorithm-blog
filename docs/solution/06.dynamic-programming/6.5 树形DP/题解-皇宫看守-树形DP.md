# 皇宫看守

[LibreOJ-10157-皇宫看守](https://vjudge.net/problem/LibreOJ-10157)

## 实现

```cpp
#include <iostream>
#include <cstring>
#define inf 0x3f3f3f3f
using namespace std;

const int N = 1510;
struct edge {
    int to, next;
};
edge e[N];
int idx, head[N];
int n;
int w[N];
bool mark[N];
int f[N][3];

void add_edge (int u, int v) {
    e[idx].to = v;
    e[idx].next = head[u];
    head[u] = idx ++;
}
void dfs (int cur) {
    f[cur][2] = w[cur];
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to;
        dfs(to);
        f[cur][0] += min(f[to][1], f[to][2]);
        f[cur][2] += min(min(f[to][0], f[to][1]), f[to][2]);
    }
    f[cur][1] = inf;
    for (int i = head[cur]; i != -1; i = e[i].next) {
        int to = e[i].to;
        f[cur][1] = min(f[cur][1], f[to][2] + f[cur][0] - min(f[to][1], f[to][2]));
    }
}

int main () {
    memset(head, -1, sizeof(head));
    cin >> n;
    for (int i = 1, idx, k, m; i <= n; ++ i) {
        cin >> idx >> k >> m;
        w[idx] = k;
        while (m --) {
            int r;
            cin >> r;
            add_edge(idx, r);
            mark[r] = true;
        }
    }

    int root = 1;
    while (mark[root] == true) ++ root;
    dfs(root);
    cout << min(f[root][1], f[root][2]) << endl;
    return 0;
}
```

